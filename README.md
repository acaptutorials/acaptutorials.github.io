## acaptutorials.github.io / assets

This branch contains **static snapshots** of all media assets (pictures, PDFs, and large files) in this repository, as well as the online, deployed documentation websites.

For more information, see [Issue #102](https://github.com/acaptutorials/acaptutorials.github.io/issues/102)

### Purpose

1. Serve as a **permanent, centralized reference** for all media assets used in this repository.
2. Provide **stable online hosting** using GitHub's raw URLs (see below)
3. Decouple heavy media assets from `dev` and `main` branches to:
   - Avoid repository size bloat.
   - Keep `git clone` operations fast.
   - Achieve better separation of concerns between code and assets.

### Usage Guidelines

#### Branch Role

- This is a **long-lived branch**, maintained solely for storing and serving assets.
- It should **never be merged** into `dev` or `main`.
- Updates are done manually when new assets are added.

#### Referencing Files

Use GitHub raw URLs to link assets in documentation or other branches:

```text
https://raw.githubusercontent.com/acaptutorials/acaptutorials.github.io/assets/<file-path>
```

### Notes

- This branch is for storage only. Application code should remain in `dev` or `main`
- Future heavy assets (>100 MB) may require Git LFS or other large-file storage solutions or hosting providers
- The `/assets` branch is an intentional separation to ensure scalability and cost efficiency
- Media assets were migrated here in response to Firebase Storage changes in October 2025 ([Issue #102](https://github.com/acaptutorials/acaptutorials.github.io/issues/102))

@acaptutorials<br>
20250901
