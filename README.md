# Introduction

A very basic [Cookiecutter](https://github.com/audreyr/cookiecutter) template to start
off a Django projects with MithrilJS for the front-end.


## Installation

Start the scaffholding.

```bash
cookiecutter https://github.com/poudel/cookiecutter-drf-mithril
```

Change to the newly created directory when done and run the following command to
install python dependencies.

```bash
pipenv install
```

Now install the front-end stuff. I recommend NVM for extra protection.

```bash
yarn install
```

Done! Now run `./manage.py runserver` and `yarn start`.

## Comes with

* Only the bare minimum, no hot reloading or anything fancy for the front-end.
* Babel for ES6, `node-sass` powered loader for SASS, basic webpack config for development.
* Uses the newly recommended `Pipfile` for python dependencies.
