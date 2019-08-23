# BigBand
A highly-opinionated template for building web applications

## What is this?
BigBand is a project template. Users can copy/clone down this repository, run a few
commands, and have a working, modern, well-tooled web application.

BigBand was built with a strongly opinionated approach to the libraries, frameworks,
and development/deployment techniques that BigBand users will employ. For example,
BigBand includes a pre-configured `.gitlab-ci.yml` file, under the expectation that
CI/CD will take place within GitLab.

BigBand's defaults also occasionally override the defaults of its components.
The Django backend web framework may be configured for one or many different SQL
databases, but defaults to SQLite as a way to speed up development for newcomers.
BigBand overrides this setting, providing a dockerized, pre-configured PostgreSQL
database. In doing so, BigBand pre-supposes several things:
- That BigBand users will need a convenient development environment to work in
- That the application will eventually be deployed to production
- That PostgreSQL is generally preferred as a production database
- That additional configuration may take place with that eventual workflow in mind.

## FAQ
**What if I'd like to use a different tool than the ones used in BigBand?**

You're free to do so. Once you've copied down the code template, you're free to enhance
your version of the project as you see fit.

**Why did you choose X over Y?**

BigBand's use of a project is not necessarily a statement on the quality of that
project's competitors. For example, while BigBand uses VueJS as a frontend framework,
the authors of BigBand also regularly use React/React-Native for other projects. React
is a wonderful project and would have been a fine choice as a frontend framework.

However, the important part is that a choice had to be made. VueJS was chosen because
the learning curve is arguably lower, beacuse the `vuetify` Material Design library cut
down on this project's development time, and because the project's decision to tightly
couple `vuex` and `vue-router` into the project mirror BigBand's philosophy about
providing a default and allowing it to be replaced or go unused.

## Description of current setup
- Backend: `Django` and `djangorestframework`
- Frontend: `vuejs` and `vuetify`
- Databases: `PostgreSQL` and `redis`
- Proxy Server: `Nginx`
- Containerization: `docker` and `docker-compose`

## Usage in Development
- Clone the project down with `git clone https://github.com/RobertTownley/bigband`
- Run `docker-compose up --build` to create and run the application.
- Run initial migrations within the container using `docker-compose run web python manage.py migrate`
- Visit `localhost`. If no other processes are running, you should have a running version of the project

## License
GNU GENERAL PUBLIC LICENSE
