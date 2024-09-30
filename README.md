## acaptutorials.github.io

ACAP Bicol (ACAP 2.0) development documentation.

Built with [Nextra](https://nextra.site/), a modern static site generation framework running on NextJS.

### Requirements

The following dependencies are used for this project. Feel free to experiment using other dependencies and versions.

1. Windows 10 64-bit OS
2. nvm version 1.1.12 (for Windows)
3. NodeJS LTS v20.15.0
   - _(installed using **nvm**)_
   - node v20.15.0
   - npm 10.7.0

### Core Libraries and Frameworks

The app depends these libraries and frameworks.

- NextJS v14.2.5
- Nextra v2.13.4
- nextra-theme-docs v2.13.4
- React v18.3.1
- TailwindCSS v3.4.7

### Table of Contents

- [Requirements](#requirements)
- [Installation](#installation)
- [Usage](#usage)
- [Available Scripts](#available-scripts)
- [Usage with Docker](#usage-with-docker)
- [Usage with GitHub Actions](#usage-with-gitHub-actions)
- [Deployment to Docker Hub](#deployment-to-docker-hub)

## Installation

1. Clone this repository.<br>
`git clone https://github.com/acaptutorials/acaptutorials.github.io.git`

2. Install dependencies.<br>
   ```
   cd docs
   npm install
   ```
3. Set up the environment variables. Create a `.env` file inside the **/docs** directory with reference to the `.env.example` file.

   | Variable Name | Description |
   | --- | --- |
   | RELEASE_VERSION | Latest respository Release (Tag) number |
   | RELEASE_PAGE | Latest GitHub release page |
   | COMMIT_ID | Default branch's commit sha related to the `RELEASE_VERSION` |
   | OPENGRAPH_IMAGE_URL | URL of a 1200x630 image to be used as an OpenGraph thumbnail |
   | BASE_URL | The base URL for the frontend of the documentation website. |
   | WATCHPACK_POLLING | Enables hot reload on NextJS apps running inside Docker containers on a Windows host. Set it to true if running Docker Desktop with WSL2 on a Windows OS. |

## Usage

1. Run the app for local dedvelopment with:<br>
   ```
   cd docs
   npm run dev
   ```
2. (Optional) Run the app for local development using Docker. Navigate to the project's root directory then run:<br>
   ```
   # 2.1. Build the client and server containers for localhost development.
   docker compose -f docker-compose.dev.yml build

   # 2.2. Create and start the development client and server containers
   docker compose -f docker-compose.dev.yml up

   # 2.3. Stop and remove the development containers, networks, images and volumes
   docker compose -f docker-compose.dev.yml down
   ```

3. Add or edit MDX files in the `/pages` directory, or add React components in the `/components` directory.
   - View the [**nextra**](https://nextra.site/docs) (docs-theme) documentation for more information on using nextra to add content.


## Available Scripts

### `npm run dev`

Starts the local NextJS / Nextra app in development mode on localhost.

### `npm run build`

Builds the static site into the `"out"` directory.

### `npm run lint`

Checks lint errors.

### `npm run lint:fix`

Fixes lint errors.

## Usage with Docker

Usage with Docker is an alternate option to using Node directly from the [Usage](#usage) section.

1. Pull the development Docker image from Docker Hub using one of the options.<br>
   - `docker pull acaptutorials/acaptutorials.github.io:dev`
   - `docker compose -f docker-compose.dev.yml pull` (using Docker compose from the root project directory)

2. Navigate to the project directory using the command line. Create a `.env` file inside the **/docs** directory with reference to the `.env.example` file.
   - See [Usage](#usage) - **step # 2** for more information.

3. Run the development Docker image.<br>
`docker compose -f docker-compose.dev.yml up`

4. (Optional) Run the development Docker image (from other directories).<br>
`docker run -it --rm -p 3000:3000 acaptutorials.github.io:dev`

## Usage with GitHub Actions

1. Add the environment variables described in the [Installation - step # 2](#installation) section to GitHub Secrets.
2. Create a Release to deploy the site to the production environment (GitHub Pages).
3. To update the banner content while there are no code or content updates:
   - Update the GitHub Secrets: `RELEASE_VERSION`, `COMMIT_ID` and `RELEASE_PAGE`
   - Re-deploy the latest production environment workflow from the GitHub Actions tab.

### Deployment to Docker Hub

This repository deploys the latest development Docker image `acaptutorials.github.io:dev` to Docker Hub on the creation of new Tags/Releases with GitHub Actions. Supply the following GitHub Secrets and Variable to enable deployment to Docker Hub. It requires a Docker Hub account.

| GitHub Secret | Description |
| --- | --- |
| DOCKERHUB_USERNAME | Docker Hub username |
| DOCKERHUB_TOKEN | Deploy token for the Docker Hub account |

| GitHub Variable | Description |
| --- | --- |
| DOCKERHUB_USERNAME | Docker Hub username |

@acaptutorials<br>
20240806
