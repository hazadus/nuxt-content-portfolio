up_dev:
	docker compose -f docker-compose.dev.yml up
up_prod:
	docker compose -f docker-compose.prod.yml up -d --build