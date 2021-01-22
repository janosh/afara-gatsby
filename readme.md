> ### ⚠️ This repo was superseded by [the new Afara site](https://github.com/janosh/afara-svelte) written in Svelte.

# [Afara](https://afara.foundation)

[![Netlify Status](https://api.netlify.com/api/v1/badges/9b5e6acd-b9f8-492c-ab2d-b7882c1c82a0/deploy-status)](https://app.netlify.com/sites/afara-gatsby/deploys)
[![License](https://img.shields.io/github/license/sbsev/website?label=License)](/license)
![GitHub repo size](https://img.shields.io/github/repo-size/sbsev/website?label=Repo+Size)
[![GitHub last commit](https://img.shields.io/github/last-commit/sbsev/website?label=Last+Commit)](https://github.com/janosh/afara-gatsby/commits/master)

This repo powers the [Gatsby](https://gatsbyjs.org) site hosted at [afara.foundation](https://afara.foundation). The design and layout rely on [CSS grid](https://css-tricks.com/snippets/css/complete-guide-grid) and [styled-components](https://styled-components.com). It is fully responsive, supports a two-level navbar, [fluid typography](https://css-tricks.com/snippets/css/fluid-typography), [Algolia search](https://algolia.com) and [Contentful](https://contentful.com).

Afara is a German non-profit organization aiming to support educational and youth welfare projects in Africa.

## Installation

To get this site running locally, you need to have installed [`git`](https://git-scm.com), [`gatsby-cli`](https://gatsbyjs.org/docs/gatsby-cli) and [`yarn`](https://yarnpkg.com) (or [`npm`](https://npmjs.com)). Then follow these steps:

1. Clone the repo to your machine and change into its directory.

   ```sh
   git clone https://github.com/janosh/afara-gatsby \
   && cd afara-gatsby
   ```

2. Optionally setup `git` hooks (recommended if you intend to open a PR).

   ```sh
   git config core.hooksPath src/utils/gitHooks \
   && chmod -R u+x src/utils/gitHooks
   ```

3. Install dependencies.

   ```sh
   yarn
   ```

4. Start the dev server. This may take a while on initial compilation since the site uses quite a lot of images which Gatsby creates thumbnails of and then caches.

   ```sh
   gatsby develop
   ```

## Deployment

The easiest way to get this site published is as follows:

1. Create an account with [netlify](https://netlify.com).

2. Install the [`netlify-cli`](https://netlify.com/docs/cli).

3. Login to your account.

   ```sh
   netlify login
   ```

4. Connect your GitHub repo with your netlify account for [continuous deployment](https://docs.netlify.com/cli/get-started/#usage-data-collection).

   ```sh
   netlify init
   ```

5. Finally deploy the site with

   ```sh
   netlify deploy
   ```
