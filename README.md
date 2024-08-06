## acaptutorials.github.io

ACAP Bicol (ACAP 2.0) Development Documentation

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

## Usage

1. Run the app for local dedvelopment with:<br>
   ```
   cd docs
   npm run dev
   ```
2. Add or edit MDX files in the `/pages` directory, or add React components in the `/components` directory.
   - View the [**nextra**](https://nextra.site/docs) (docs-theme) documentation for more information on using nextra to add content.

@acaptutorials<br>
20240806
