# Changelog

All notable changes to this project will be documented in this file.

## [0.6.28] - 2026-07-29

### 🐛 Bug Fixes

- *(jest)* Use packaged ts-injex in tests - ([1e43ecb](https://git.0xmax42.io/maxp/obsidian-prj/commit/1e43ecb7a7ca01f51df215e71281f3fd3913a58c))
- *(build)* Separate dev and release plugin outputs - ([64094ad](https://git.0xmax42.io/maxp/obsidian-prj/commit/64094ad4b006131430ca81d95c9139a118d6c6e1))
- *(block-render)* Use portable debounce timer types - ([2fd427b](https://git.0xmax42.io/maxp/obsidian-prj/commit/2fd427b14d25aaa4e18e7030f28ea2de21b69b99))
- *(settings)* Prevent adding window classes to input suggester - ([b64536f](https://git.0xmax42.io/maxp/obsidian-prj/commit/b64536f85011c4234f2944bf36b7d327e5fd6460))
- *(build)* Resolve ts-injex source imports during bundling - ([3695a45](https://git.0xmax42.io/maxp/obsidian-prj/commit/3695a45b9705178e47bbc9e64e3243816ea438f5))

### 🎨 Styling

- *(src)* Format TypeScript files with prettier - ([eaf21f3](https://git.0xmax42.io/maxp/obsidian-prj/commit/eaf21f3d09a8c40a233114dd15c2c7f4c1db3053))
- Format project files with prettier - ([3c80f00](https://git.0xmax42.io/maxp/obsidian-prj/commit/3c80f00a68f94ce5b26e53ef47602c309b0368cb))

### ⚙️ Miscellaneous Tasks

- *(ci)* Add automated release workflow - ([0b5a96d](https://git.0xmax42.io/maxp/obsidian-prj/commit/0b5a96def40b68183a5ea5bad96e03ebda3ee51e))
- *(prettier)* Add ignored paths - ([32cfa75](https://git.0xmax42.io/maxp/obsidian-prj/commit/32cfa75a0dafafc96769d02f5e1ef47157518977))
- *(package)* Use scoped npm package for ts-injex - ([4f3a8eb](https://git.0xmax42.io/maxp/obsidian-prj/commit/4f3a8eb39a07125b2f00778b62d542e0664f8ada))
- *(vscode)* Add workspace settings - ([6b5477c](https://git.0xmax42.io/maxp/obsidian-prj/commit/6b5477c36fc13ee52a22afdd861c29ea75ae87b9))
- *(package)* Split prettier check and fix scripts - ([75d8566](https://git.0xmax42.io/maxp/obsidian-prj/commit/75d85662fc600dd1cce7e8abba3cf6e8e2d50d1f))
- *(gitignore)* Ignore local build artifacts - ([64a8ef7](https://git.0xmax42.io/maxp/obsidian-prj/commit/64a8ef70d439584b0666957400c936ae67b38f03))
- *(package)* Update dependency versions and repository URLs - ([4aa9f21](https://git.0xmax42.io/maxp/obsidian-prj/commit/4aa9f21bc19c1f4d963085b0ae2f349a6824aa9a))
- *(devcontainer)* Add Node development container - ([52b7719](https://git.0xmax42.io/maxp/obsidian-prj/commit/52b7719aec695e0ef947db0e5ae3a8ae5ccffdf9))
- *(renovate)* Add dependency update configuration - ([e38f244](https://git.0xmax42.io/maxp/obsidian-prj/commit/e38f244a5c1bb44072a5f8047fbd79c2ef71b0eb))
- *(ci)* Add pull request validation workflow - ([4361d66](https://git.0xmax42.io/maxp/obsidian-prj/commit/4361d668c9b154bf6a711d04eb221bd5d42e0aa3))
- *(github)* Remove dependabot configuration - ([b80a1af](https://git.0xmax42.io/maxp/obsidian-prj/commit/b80a1afd899eeb612559b5522fcc1360fb7283a2))
- Configure ESLint to recognize JSDoc imports as used - ([c45eb02](https://git.0xmax42.io/maxp/obsidian-prj/commit/c45eb02711fd9b05cb806775bb0f4115fa6188ff))
- Enforce import order with ESLint rule - ([43c507b](https://git.0xmax42.io/maxp/obsidian-prj/commit/43c507ba177cc83f98c18b8be3622ba44814fb80))

### 📦 Dependencies

- *(deps)* Update dependency esbuild to v0.28.1 - ([08f26ec](https://git.0xmax42.io/maxp/obsidian-prj/commit/08f26ec7fee2584d7d30b94ee23339f9cf57b72b))

### 💼 Other

- Consolidate Modal directory structure - ([26a8dc2](https://git.0xmax42.io/maxp/obsidian-prj/commit/26a8dc2715993ce863cd08328f4ae41c64566a9c))
- Migrate from Global class to Dependency Injection - ([bb7b929](https://git.0xmax42.io/maxp/obsidian-prj/commit/bb7b92901ee07ea6af50e76401c44bb9c54b3b82))
- Move to DI and update class decorators - ([75e6af8](https://git.0xmax42.io/maxp/obsidian-prj/commit/75e6af87b5e27cbcf56d8cc5d6d799c173011a99))
- Use optional chaining for null safety - ([7a634ad](https://git.0xmax42.io/maxp/obsidian-prj/commit/7a634ade99f08f12f8ebe8ddf740bacf66132859))
- Remove async from non-async functions - ([6e7cb23](https://git.0xmax42.io/maxp/obsidian-prj/commit/6e7cb2341906bd4d1eb9dbc5a2771908b83749c8))
- Ensure Logging class initializes prefix and level - ([c1dcf07](https://git.0xmax42.io/maxp/obsidian-prj/commit/c1dcf07f1c386c427ba6c0463b15a36a57eb97e7))
- Move `InitDelegate` to a separate file - ([c9ee271](https://git.0xmax42.io/maxp/obsidian-prj/commit/c9ee271072c81a0991536aa913980a1c3c7fa51c))
- Move IPrjData interface to models directory - ([5d124c7](https://git.0xmax42.io/maxp/obsidian-prj/commit/5d124c7a61a87c4ee9b1db20d1fa1ae951aa4839))
- Rename PrjSettings to IPrjSettings - ([4dc9c71](https://git.0xmax42.io/maxp/obsidian-prj/commit/4dc9c71400135ea3d96076dbf065d7d465ec599e))
- Update import paths for SingletonBlockProcessor - ([cdacb9a](https://git.0xmax42.io/maxp/obsidian-prj/commit/cdacb9a12115d38128993eab27de60e5fb870ff0))
- Update import paths for SingletonBlockProcessor - ([0b7478c](https://git.0xmax42.io/maxp/obsidian-prj/commit/0b7478c663969ecbfbd4a894677c4ffd16109e9f))
- Deprecate methods, introduce HelperGeneral - ([c8b5e2c](https://git.0xmax42.io/maxp/obsidian-prj/commit/c8b5e2cb0e4bbc5c99b6065d6250ee5a54280e28))


