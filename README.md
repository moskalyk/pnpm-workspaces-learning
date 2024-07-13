# pnpm-workspace-learning

## why?
- used for monorepositories with multiple packages
- sometimes examples are contained in monorepositories, where the workspace need to be built

## how?
- `YAML Configuration`:must have `pnpm-workspace.yaml`
- `Packages Folder`: create a folder called `packages` with package folders contained inside
- `Initialized`: ensure each package is initialized by `cd`'ing into folders and `pnpm init` with a mkdir `src` to include code
- `Install Dependencies`: use `pnpm install <PACKAGE_NAME>`
- `Linking Packages`: 
- `Testing`: add the ability to run tests
    - `Install Testing Packages`: `pnpm add -D tape -w` 
    - `Test Folders`: create test folders in each repository

## example directory structure
```
my-monorepo/
├── packages/
│   ├── package-a/
│   │   ├── package.json
│   │   ├── src/
|   |   └── test/
│   └── package-b/
│       ├── package.json
│       ├── src/
|       └── test/
├── pnpm-workspace.yaml
└── package.json
```

## learnings
- was unable to use chatgpt to combine: pnpm workspaces, typescript, and mocha. we're still not there.