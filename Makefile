BACK_DIR = ./back
FRONT_DIR = ./front

back-up:
	cd $(BACK_DIR) && sudo docker compose up --build

back-migrate:
	cd $(BACK_DIR) && sudo npm run migration:run

back-seed:
	cd $(BACK_DIR) && sudo npm run seed

front-install:
	cd $(FRONT_DIR) && npm install

front-dev:
	cd $(FRONT_DIR) && npm run dev