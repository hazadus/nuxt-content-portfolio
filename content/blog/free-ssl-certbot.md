# Create and use free SSL certificate using Let's Encrypt with Nginx on Linux

:::callout
Quick tutorial on how to create and install free SSL certificate from Let's Encrypt with Nginx, Python and certbot on Linux
:::

First, check **Nginx** config file.

```
sudo vim /etc/nginx/conf.d/virtual.conf
```

Hit `i` to enter Insert mode, then `:wq` to save and exit (vim commands [cheatsheet here](https://www.keycdn.com/blog/vim-commands)). More about config – [Nginx Configuration File’s Structure](https://nginx.org/en/docs/beginners_guide.html#conf_structure). It should look like _(note that hazadus.ru and www.hazadus.ru mentioned separately)_:

```
server {
    listen       80;
    server_name  hazadus.ru www.hazadus.ru;

    location / {
        proxy_pass http://127.0.0.1:8000;
    }
}
```

We'll use [Let's Encrypt](https://letsencrypt.org/) service to create free SSL certificate and install it. If you want to know more about how it works, just read [this page](https://letsencrypt.org/how-it-works/). But for now, all you need to do is to run following command:

```bash
sudo apt install certbot python3-certbot-nginx
```

Then run **certbot** with **Nginx** plugin:

```bash
sudo certbot --nginx -d hazadus.ru -d www.hazadus.ru
```

You will be prompted to enter your email address and agree to user's license. Answer 'yes' when prompted.

```
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
Congratulations! You have successfully enabled https://hazadus.ru and
https://www.hazadus.ru

You should test your configuration at:
https://www.ssllabs.com/ssltest/analyze.html?d=hazadus.ru
https://www.ssllabs.com/ssltest/analyze.html?d=www.hazadus.ru
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

IMPORTANT NOTES:
 - Congratulations! Your certificate and chain have been saved at:
   /etc/letsencrypt/live/hazadus.ru/fullchain.pem
   Your key file has been saved at:
   /etc/letsencrypt/live/hazadus.ru/privkey.pem
   Your cert will expire on 2022-12-18. To obtain a new or tweaked
   version of this certificate in the future, simply run certbot again
   with the "certonly" option. To non-interactively renew *all* of
   your certificates, run "certbot renew"
```

Restart **Nginx**:

```bash
sudo nginx -t
sudo service nginx restart
```

Check results by pointing your browser to https://www.hazadus.ru, https://hazadus.ru.

If something goes wrong during certificate installlation, re-run certbot command and follow instructions.

This was tested on Ubuntu v.20.04.4, nginx/1.18.0 (Ubuntu), and works well on this site, as you can see.

If you need more detailed instructions, refer to [Using Free Let’s Encrypt SSL/TLS Certificates with NGINX](https://www.nginx.com/blog/using-free-ssltls-certificates-from-lets-encrypt-with-nginx/).

More about adding SSL certificates to **nginx** config: [See Step 4 - (Optional) Running WebSSH Behind an Nginx Reverse Proxy](https://www.digitalocean.com/community/tutorials/how-to-connect-to-a-terminal-from-your-browser-using-python-webssh).

19 Sep 2022 | Tagged under: #nginx #linux #ubuntu #ssl #python