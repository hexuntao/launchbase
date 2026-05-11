# GitHub Automation

LaunchBase is an independent repository owned by `hexuntao`. Its initial codebase comes from `stack-found/vazen`, which is kept as the `vazen` remote so upstream changes can be reviewed and synchronized without making LaunchBase a GitHub fork.

## Relationship to Vazen

LaunchBase tracks Vazen as an upstream source, but it is not a fork repository. This keeps LaunchBase free to evolve into a production-ready monorepo starter while still making it possible to pull improvements from Vazen.

The local remotes should look like this:

```sh
git remote -v
```

`origin` points to `hexuntao/launchbase`, and `vazen` points to `stack-found/vazen`.

## Syncing Vazen Updates

Use the `upstream-sync` branch for upstream integration work:

```sh
git checkout upstream-sync
git fetch vazen
git merge vazen/main
pnpm install --frozen-lockfile
pnpm lint
pnpm typecheck
pnpm build
git push origin upstream-sync
```

Open a pull request from `upstream-sync` into `main`, review the diff, resolve conflicts, and merge only after CI passes.

## Renovate

Renovate monitors dependency updates and opens pull requests according to `renovate.json`. It groups recommended updates, keeps the dependency dashboard enabled, and uses `main` as the base branch for update pull requests.

Patch updates can be candidates for automerge after the configured cooldown, but they must still rely on CI passing before merge.

## Dependabot

Dependabot provides a second layer of dependency automation through `.github/dependabot.yml`. It checks npm/pnpm dependencies and GitHub Actions weekly, limits open pull requests to five per ecosystem, and labels its pull requests with `dependencies`.

## GitHub Actions

The CI workflow runs on pushes to `main` and pull requests targeting `main`. It installs dependencies with pnpm using the lockfile, then runs the scripts that exist in `package.json`: `lint`, `typecheck`, and `build`.

## Automerge Policy

Only patch updates should be considered for automerge because they are expected to be backward-compatible and low risk when CI passes.

Minor and major updates require human review. Minor updates can still introduce behavioral changes, new lint rules, framework defaults, or generated output changes. Major updates are explicitly allowed to break existing contracts and should be reviewed with migration notes and focused testing.
