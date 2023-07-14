<script setup>
//const canvasElement: Ref<HTMLCanvasElement | null> = ref(null);

const PARTICLES_QTY = 100;
const PARTICLE_MIN_RADIUS = 10;
const PARTICLES_MAX_CONNECT_DISTANCE = 50;
const PARTICLES_BOUNCE = false; // Set to `true` to bounce particles off each other
const SUNRAY_EVERY_NTH_PARTICLE = PARTICLES_QTY + 1;
const MOUSE_RADIUS = 50;

class Particle {
  constructor(effect, index) {
    this.effect = effect;
    this.index = index;
    this.radius = Math.floor(PARTICLE_MIN_RADIUS + Math.random() * 10);
    this.resetPosition();

    // Horizontal and vertical speed:
    this.vx = 4 * Math.random() - 2;
    this.vx += this.vx > 0 ? 0.5 : -0.5;
    this.vy = 4 * Math.random() - 2;
    this.vy += this.vy > 0 ? 0.5 : -0.5;

    // `Push` speed and friction, used while interacting with the mouse:
    this.pushX = 0;
    this.pushY = 0;
    this.friction = 0.85; // Must be less than 1.
  }

  resetPosition() {
    this.x = this.radius + Math.random() * (this.effect.width - this.radius * 2);
    this.y = this.radius + Math.random() * (this.effect.height - this.radius * 2);
  }

  draw(context) {
    // Conntect every Nth particle with the mouse cursor (`sunrays` effect):
    if (this.index % SUNRAY_EVERY_NTH_PARTICLE == 0) {
      context.save();
      context.globalAlpha = 0.4;
      context.beginPath();
      context.moveTo(this.x, this.y);
      context.lineTo(this.effect.mouse.x, this.effect.mouse.y);

      const gradient = context.createLinearGradient(this.x, this.y, this.effect.mouse.x, this.effect.mouse.y);
      gradient.addColorStop(0, "gold");
      gradient.addColorStop(1, "white");

      context.strokeStyle = gradient;
      context.lineWidth = 1;
      context.stroke();
      context.restore();
    }

    // Hue - Saturation - Lightness
    // context.fillStyle = `hsl(${this.x * 0.5}, 100%, 50%)`;
    context.beginPath();
    context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    context.fill();
    context.strokeStyle = "white";
    context.lineWidth = 1;
    context.stroke();
  }

  update() {
    if (this.effect.mouse.pressed) {
      // Interact with the mouse
      const dx = this.x - this.effect.mouse.x;
      const dy = this.y - this.effect.mouse.y;
      const distance = Math.hypot(dx, dy);
      const force = this.effect.mouse.radius / distance;

      if (distance < this.effect.mouse.radius) {
        // `atan2()` gives us the counterclockwise angle in radians, between the positive
        // x-axis and a line projected from point (0,0) towards specific x and y coordinates
        // (target point). It returns a value in the range [-pi...pi] radians.
        const angle = Math.atan2(dy, dx);
        this.pushX += Math.cos(angle) * 2 * force;
        this.pushY += Math.sin(angle) * 2 * force;
      }
    }

    // NB: Friction is less than 1, so it will continuously lower push speed on each update:
    this.x += this.vx + (this.pushX *= this.friction);
    this.y += this.vy + (this.pushY *= this.friction);

    // Bounce particle off canvas borders, preventing pushing out of boundaries:
    if (this.x < this.radius) {
      this.x = this.radius;
      this.vx *= -1;
    } else if (this.x > this.effect.width - this.radius) {
      this.x = this.effect.width - this.radius;
      this.vx *= -1;
    }

    if (this.y < this.radius) {
      this.y = this.radius;
      this.vy *= -1;
    } else if (this.y > this.effect.height - this.radius) {
      this.y = this.effect.height - this.radius;
      this.vy *= -1;
    }
  }

  intersectsWith(otherParticle) {
    const dx = this.x - otherParticle.x;
    const dy = this.y - otherParticle.y;
    const distance = Math.hypot(dx, dy);
    const maxDistance = this.radius + otherParticle.radius;
    return distance <= maxDistance + 1;
  }
}

class Effect {
  constructor(canvas) {
    this.canvas = canvas;
    this.width = canvas.width;
    this.height = canvas.height;
    this.particles = [];
    this.numberOfParticles = PARTICLES_QTY;
    this.createParticles();

    this.mouse = {
      x: Math.floor(this.width / 2),
      y: Math.floor(this.height / 2),
      pressed: false,
      radius: MOUSE_RADIUS,
    };

    window.addEventListener("resize", (event) => {
      this.resize();
    });

    this.canvas.addEventListener("mousemove", (event) => {
      if (this.mouse.pressed) {
        let rect = event.target.getBoundingClientRect();
        this.mouse.x = event.x - rect.left;
        this.mouse.y = event.y - rect.top;
      }
    });
    this.canvas.addEventListener("mousedown", (event) => {
      this.mouse.pressed = true;
      let rect = event.target.getBoundingClientRect();
      this.mouse.x = event.x - rect.left;
      this.mouse.y = event.y - rect.top;
    });
    this.canvas.addEventListener("mouseup", (event) => {
      this.mouse.pressed = false;
    });
  }

  configureContext() {
    const ctx = this.canvas.getContext("2d");
    const gradient = ctx.createLinearGradient(0, 0, this.canvas.width, this.canvas.height);
    gradient.addColorStop(0, "blue");
    gradient.addColorStop(0.5, "magenta");
    gradient.addColorStop(1, "purple");
    ctx.fillStyle = gradient;
    ctx.strokeStyle = "white";
  }

  resize() {
    this.canvas.width = this.canvas.clientWidth;
    this.canvas.height = this.canvas.clientHeight;
    this.width = this.canvas.clientWidth;
    this.height = this.canvas.clientHeight;
    // Context is reset to defaults when resized, so we need to re-configure
    // it each time we change the size:
    this.configureContext();
    // Redistribute particles to fit new area:
    this.particles.forEach((particle) => particle.resetPosition());
  }

  createParticles() {
    if (PARTICLES_BOUNCE) {
      // Create non-intersecting particles
      while (this.particles.length <= PARTICLES_QTY) {
        let particle = new Particle(this, this.particles.length + 1);

        // Check intersections
        let intersectionsCount = 0;
        for (let i = 0; i < this.particles.length; i++) {
          if (particle.intersectsWith(this.particles[i])) {
            intersectionsCount++;
            break;
          }
        }

        if (!intersectionsCount) {
          this.particles.push(particle);
          console.log(this.particles);
        }
      }
    } else {
      // Do not care about particle intersections:
      for (let i = 0; i < this.numberOfParticles; i++) {
        this.particles.push(new Particle(this, i));
      }
    }
  }

  handleParticles(context) {
    this.connectAndBounceParticles(context);
    this.particles.forEach((particle) => {
      particle.draw(context);
      particle.update();
    });
  }

  handleFPS(context, timestamp) {
    // Calculate and print FPS
    this._fps = Math.round(1000 / (timestamp - this._prevTimestamp));
    this._prevTimestamp = timestamp;

    context.font = "normal 12pt Courier";
    context.fillText(this._fps + " fps", 8, 16);
  }

  connectAndBounceParticles(context) {
    for (let i = 0; i < this.particles.length; i++) {
      for (let j = i; j < this.particles.length; j++) {
        const dx = this.particles[i].x - this.particles[j].x;
        const dy = this.particles[i].y - this.particles[j].y;
        const distance = Math.hypot(dx, dy);

        if (distance < PARTICLES_MAX_CONNECT_DISTANCE) {
          context.save();
          const opacity = 1 - distance / PARTICLES_MAX_CONNECT_DISTANCE;
          context.globalAlpha = opacity;
          context.beginPath();
          context.moveTo(this.particles[i].x, this.particles[i].y);
          context.lineTo(this.particles[j].x, this.particles[j].y);
          context.strokeStyle = "white";
          context.lineWidth = 1;
          context.stroke();
          context.restore();
        }

        if (PARTICLES_BOUNCE) {
          if (this.particles[i].intersectsWith(this.particles[j])) {
            this.particles[i].vx *= -1;
            this.particles[i].vy *= -1;
            this.particles[j].vx *= -1;
            this.particles[j].vy *= -1;
          }
        }
      }
    }
  }
}

onMounted(() => {
  // Configure
  const canvas = document.getElementById("canvas1");
  canvas.width = canvas.clientWidth;
  canvas.height = canvas.clientHeight;
  const effect = new Effect(canvas);
  effect.configureContext();

  // Entry point
  function animate(timestamp) {
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    effect.handleParticles(ctx);
    effect.handleFPS(ctx, timestamp);
    window.requestAnimationFrame(animate);
  }

  window.requestAnimationFrame(animate);
});
</script>

<template>
  <canvas id="canvas1" ref="canvasElement"></canvas>
</template>

<style scoped>
#canvas1 {
  background: white;
  width: 100%;
  height: 200px;
}
</style>