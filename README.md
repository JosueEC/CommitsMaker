# SideProject: CommitMaker

## Cuerpo del Commit
<tipo>[ambito opcional]:<emoji opcional> <descripcion>

[cuerpo opcional]

[nota(s) al pie opcional(es)]

---

## Objetivos:
- Dar una especificacion que permite dar significado semantico a los commits realizados en un repositorio
- Dar ideas y una mejor forma de crear commits
- Estandarizar los mensajes de commits en nuestro repositorio
- Hacer mas legible el historial de nuestro repositorio
- Aprovechar la automatizacion de los versionados gracias a conventional commits
- Entender mejor el Semantic Version (major. mino. patch)

---

# Notas
- Añadir links a la web de Conventional Commits
- Añadir textos que ya tiene Conventional Commits en su Web
- Añadir los ejemplos de commits que hay en la web de Conventional Commits

---

## Mockup de Conventional Commits
### Tipo
- feat(Features) A new Feature
- fix(Bug Fixes) A bug fix
- docs(Documentation) Documentation only changes.
- style(Styles) Changes that do not affect the meaning of the code (white-space, formatting, missing, semi-colons...)
- refactor(Code Refactoring) A code change that neither fixes a bug nor adds a feature
- perf(Performance Improvements) A code change that improves performance
- test(Tests) Adding missing tests or correcting existing tests
- build(Builds) Changes that affect the build system or external dependencies (example scopes: gulp, broccoli...)
- ci(Continuous Integrations) Changes to our CI configuration files and scripts (example scopes: Travis, Circle, - BrowserStack...)
- chore(Chores) Other changes that don't modify src or test files
- revert(Reverts) Reverts a previous commit

---
### ambito opcional
- None: No scope
- New scope: Add a new Workspace scope. (You can manage scopes in workspace 'settings.json')
- New scope (only use once): Use a new scope. (The scope will not be added in workspace 'settings.json')
- Mis scopes: (services/redux): From workspace configuration

---
### emoji opcional
None: Not gitmoji
- :art -> Improve structure / format of the code
- :zap -> Improve performance
- :fire -> Remove code or files
- :bug -> Fix a bug
- :ambulance -> Critical hotfix
- :sparkles -> Introduce new features
- :memo -> Add or update documentation
- :rocket -> Deploy stuff
- :lipstick -> Add or update the UI and style files
- :tada -> Begin a project
- :white_check_mark -> Add, update or pass tests
- :lock -> Fix security issues
- :closed_lock_with_key -> Add or update secrets
- :bookmark -> Release / Version tags.
- :rotating_light -> Fix compiler / linter warnings
- :construction -> Work in progress.
- :green_heart -> Fix CI build
- :arrow_down -> Downgrade dependencies.
- :arrow_up -> Upgrade dependencies
- :pushpin -> Pin dependencies to specific versions
- :construction_worker -> Add or update CI build system
- :chart_with_upwards_trend -> Add or update analitycs or track code
- :recycle -> Refactor code
- :heavy_plus_sign -> Add a dependency
- :heavy_minus_sign -> Remove a dependency
- :wrench -> Add or update configuration files
- :hammer -> Add or update development scripts.
- :globe_with_meridians -> Internationalization and localization
- :pencil2 -> Fix typos
- :poop -> Write bad code that needs to be improved
- :rewind -> Revert changes
- :twisted_rigthwards_arrows -> Merge branches
- :package -> Add or update compiled files or packages
- :alien -> Update code due to external API changes
- :truck -> Move or rename resources (examples: files, paths, routes)
- :page_facing_up -> Add or update license
- :boom -> Introduce breaking changes
- :bento -> Add or update assets
- :wheelchair -> Improve accessibility
- :bulb -> Add or update comments in source code
- :beers -> Write code drunkenly
- :speech_ballon -> Add or update text and literals
- :card_file_box -> Perform database related changes
- :loud_sound -> Add or update logs
- :mute -> Remove logs
- :busts_in_silhouette -> Add or update contributor(s)
- :children_crossing -> Improve user experience / usability
- :building_construction -> Make architectural changes
- :iphone -> Work on responsive design
- :clown_face -> Mock things
- :egg -> Add or update a .gitignore file
- :camera_flash -> Add or update snapshots
- :alembic -> Perform experiments
- :mag -> Improve SEO
- :label -> Add or update types
- :seeding -> Add or update seed files
- :triangular_flag_on_post -> Add, update or remove feature flags
- :goal_net -> Catch errors
- :dizzy -> Add or update animations and transitions
- :wastebasket -> Deprecated code that needs to be cleaned up
- :passport_control -> Work on code related to authorization, roles, and permissions
- :adhesive_bandage -> Simple fix for an non-critical issue
- :monocle_face -> Data exploration / inspection
- :coffin -> Remove dead code
- :test_tube -> Add a failing test
- :necktie -> Add or update business logic
- :stethoscope -> Add or update healthcheck
- :bricks -> Infrastructure related changes
- :technologist -> Improve developer experience
- :money_with_wings -> Add sponsorships or money related infrastructure
- :thread -> Add or update code related to multithreading or concurrency
- :safety_vest -> Add or update code related to validation

---
### descripcion
- Breve enunciado de descripcion del commit

---
### cuerpo opcional
- Descripcion mas detallad del commit

---
### notas al pie opcionales
- BREAKING CHANGE

---
<br>

## BASE DE DATOS (Opcional, por ahora no se va a almacenar nada)
### Entidades
1. tipo (feat, fix, style, refactor, etc...)
2. ambito (controllers, services, components, etc...)
3. emoji (:art, :zap, :fire, etc...)

## Consideraciones
1. Al escojer un tipo, se deben filtrar que emojis se podrian usar, por ejemplo:

Si se selecciona fix, se deberia filtrar recomendaciones que muestren los emojis de :bu, :fire, :ambulance, etc... 

---
### Flujo de la Aplicacion

1. Seleccionar el <tipo> de cambio que se va a commitear (feat, fix, docs, etc...)
2. Seleccion el <scope> del cambio (none, controllers, components, services, etc...)
3. Seleccion del <emoji>, puede ir sin emoji, pero la descripcion de cada emoji ayuda a dar una idea de que commit hacer.
4. <description> Escribe un enunciado corto que describe el cambio
5. <body> Escribe una descripcion mas detallada del cambio (opcional)
6. <notas> Agregar un BREAKING CHANGE (opcional)
