PATH := $(PATH):$(HOME)/.local/bin:$(HOME)/bin:/bin:/usr/local/bin
SHELL := /usr/bin/env bash

.DEFAULT_GOAL := help

help:
	@printf "\033[36m\033[1m%-10s\033[0m%-55s\033[33m%s\n\n" target description usage
	@grep -E '^[a-zA-Z1-9_-]+:.*?## .*$$' $(MAKEFILE_LIST) \
		| awk 'BEGIN { FS = ": ## " }; { printf "\033[36m\033[1m%-10s\033[0m%-55s\033[33m%s\n", $$1, $$2, $$3 }'

build: ## Build containers for this project
	$(info --> Build containers for this project)
	@bin/app build

run: ## Run containers for this project
	$(info --> Run containers for this project)
	@bin/app run

stop: ## Stop containers for this project
	$(info --> Stop containers for this project)
	@bin/app stop

destroy: ## Remove containers for this project
	$(info --> Destroy containers for this project)
	@bin/app destroy

install: ## Run install dependency inside container
	$(info --> Run install dependency inside container)
	docker-compose exec -T api npm install

bash: ## Run bash inside api container
	$(info --> Run bash inside api container)
	@bin/app bash


tests: ## Run test inside api container
	$(info --> Run test inside api container)
	@bin/app tests

lint: ## Run lint inside api container
	$(info --> Run lint inside api container)
	@bin/app lint
