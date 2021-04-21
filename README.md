# Sloper - Design System Foundation

Sloper is a foundation of patterns from which to build your own UI patterns and design system.

## Repository Overview

This repository uses [Lerna](https://lerna.js.org/) with [Yarn workspaces](https://classic.yarnpkg.com/en/docs/workspaces/) for package management.

### Structure

- `tokens`: package to manage low-level values from which to reference in styles, scripts and components
- `styles/*`: workspace for adding CSS represenations of UI patterns
- `components/*`: workspace for adding component implementations of UI patterns
- `tools/*`: workspace for providing pattern-agnostic tools and utilities
- `storybook`: sandbox for building, testing and documenting patterns 

## Getting Started

### Dependencies

#### Node JS

**Node Version Manager** (nvm) is the ideal tool for managing multiple versions and installations of node.js. Installation instructions can be found on the [NVM GitHub README](https://github.com/nvm-sh/nvm#installing-and-updating). Sloper uses the LTS (lts/fermium) version of Node (v14.16.0).

Once installed:
- check for installation `lts/fermium` by running `nvm list`
- if not avilable, install lts version `nvm install --lts`
- switch to the lts version `nvm use --lts`

#### Yarn

To install the Yarn CLI, run `npm i -g yarn`.

### Installation

1. Clone the repo: `git clone git@github.com:d13-design/sloper.git`
2. Install dependencies: `yarn`

### Commands 
- `yarn build`: builds each package in the monorepo
- `yarn lint`: lints formatting of all scripts and styles
- `yarn serve:storybook`: runs storybook from the storybook package
