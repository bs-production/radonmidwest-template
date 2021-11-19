# Radon Midwest template

Converting Radon Midwest's website to new design from Adobe XD design spec

## Prerequisites

- Node JS @latest (Preferable)
- NPM or Yarn @latest (Preferable)

## Run Locally

> This project depends on yarn.lock so yarn should be used exclusively

**Clone the project**

```bash
  git clone https://github.com/bs-production/sure-dry-template project-name
```

**Go to the project directory**

```bash
  cd project-name
```

**Install dependencies**

```bash
  yarn
```

**Start the dev server**

```bash
  yarn start
```

**Reset cache**

```bash
  yarn run clean
```

## Getting distributable files

**[NOTE]**

> The borders file needs to build manually

To retrieve the compiled html and minified CSS and Javascript:

```bash
  yarn build
```

## Tech Stack

**Client:** ParcelJS, Tailwind CSS, Sass
