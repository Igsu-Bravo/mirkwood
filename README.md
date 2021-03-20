# Mirkwood

## Setup

Install dependencies

```shell
yarn install
```

## Fire it up

```shell
yarn rw dev
```

Your browser should open automatically to `http://localhost:8910` to see the web app. Lambda functions run on `http://localhost:8911` and are also proxied to `http://localhost:8910/.redwood/functions/*`.

## Yarn commands

### Syntax example
`$ yarn redwood generate page <name> [path] --option`

- `redwood generate page` is the command.
- `<name>` and `[path]` are positional arguments where `<>` is required and `[]` optional.
- `--option` is an option, duh.

Build command example:
`$ yarn redwood build [side..]`

- The spread operator denotes an array of options, in this case we can build only the `/web` side, the `/api`, or both (default) like so:
`$ yarn redwood build [web, api]`

### Redwood general commands
```shell
# Upgrade Redwood core (interactive)
$ yarn rw upgrade

# Generate Prisma client and build both sides, files output to each side's /dist directory
$ yarn rw build

# Get structural analysis for rw project
$ yarn rw check

# Start development server
$ yarn rw dev [side..]

# Lint files
$ yarn rw lint

# Open project in browser
$ yarn rw open

# Start console (db only)
$ yarn rw console

# Start Prisma console
$ yarn rw prisma

# Start local Storybook. Available options: --open, --build, --port
$ yarn rw storybook

# Run Jest test for api and web. Available options: --watch, --watchAll, --collectCoverage, --clearCache
$ yarn rw test [side..]

# Print system info
$ yarn rw info
```

### Deploy commands

```shell
# Deploy to AWS using selected provider
$ yarn rw deploy aws [provider] --side

# Deploy to Netlify
$ yarn rw deploy netlify

# Deploy to Vercel
$ yarn rw deploy vercel
```

### Generate commands
```shell
# Base command
$ yarn rw generate <type>

# Destroy generated code
$ yarn rw destroy <type>
```

 Command | Description
------------ | -------------
 `cell <name>` | Generate a cell component
 `component <name>` | Generate a component component
 `dataMigration <name>` |	Generate a data migration component
 `deploy <provider>` |	Generate a deployment configuration
 `function <name>` |	Generate a Function
 `layout <name>` |	Generate a layout component
 `page <name> [path]` |	Generate a page component
 `scaffold <model>` |	Generate Pages, SDL, and Services files based on a given DB schema Model. Also accepts <path/model>
 `sdl <model>` |	Generate a GraphQL schema and service object
 `service <name>` |	Generate a service component
 `util <util>` |	Quality of life utilities

### Database commands

See also [Prisma CLI Reference](https://www.prisma.io/docs/reference/api-reference/command-reference)

```shell
# Generate Prisma client
$ yarn rw db up

# Push state from schema.prisma to db. No need to migrate
$ yarn rw prisma db push

# Apply seed from seed.js
$ yarn rw prisma db seed

# Update db schema with migrations
$ yarn rw prisma migrate

# Create migration file without executing it
$ yarn rw prisma migrate --create-only

# Create a migration from changes in Prisma schema, apply it to the database, trigger generators (e.g. Prisma Client).
$ yarn rw prisma migrate dev

# Apply pending change to production/staging
$ yarn rw prisma migrate deploy
```

Data migration tools
```shell
# Appends DataMigration model to schema.prisma, creates api/db/dataMigrations directory
$ yarn rw dataMigrate install

# Executes outstanding data migrations
$ yarn rw dataMigrate up
```

### Setup configs and install packages

```shell
# Setup auth configuration, use -f option to overwrite existing files
$ yarn rw setup auth <provider>

# Setup an index.js file in web/src so you can customize how your Redwood App mounts to the DOM, use -f to overwrite.
$ yarn rw setup custom-web-index

# Setup deployment configuration
$ yarn rw setup deploy <provider>
```


## Abbreviations
 Whole word | Abbreviation
------------ | -------------
 `redwood` | `rw`
 `generate` | `g`
  `destroy` | `d`
 `console` | `c`
