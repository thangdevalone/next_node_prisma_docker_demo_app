# Demo Docker with Node, Nextjs 14, Prisma

Ứng dụng demo

## Table of Contents

- [Prerequisites](#prerequisites)
- [Running the Docker Setup](#running-the-docker-setup)
- [Start docker containers](#start-docker-containers)
- [Additional Notes](#additional-notes)

## Prerequisites

Ensure that you have the following installed on your system:

- Docker: [Download Docker](https://www.docker.com/get-started)

## Running the Docker Setup

1. **Clone the Repository**: Clone this repository to your local machine.

2. **Navigate to the Project Directory**: Open a terminal or command prompt and navigate to the root directory of the project.

3. **Build Docker Images**: Run the following command to build the Docker images defined in the `compose.yaml` file:
   ```bash
    docker compose build
   ```

## Start docker containers

```bash
docker compose up
```
- Add the -d flag at the end to run the containers in detached mode (in the background).
```bash
docker compose up -d
```

