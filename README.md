![GitHub tag](https://img.shields.io/github/tag/karlbaumhauer/BNB.svg) ![GitHub issues](https://img.shields.io/github/issues-raw/karlbaumhauer/BNB.svg) ![GitHub PRs](https://img.shields.io/github/issues-pr-raw/karlbaumhauer/BNB.svg)
![GitHub](https://img.shields.io/github/license/karlbaumhauer/BNB.svg)
![GitHub commit activity the past week, 4 weeks, year](https://img.shields.io/github/commit-activity/y/karlbaumhauer/BNB.svg)

# BNB is a Website for the project "Brand New Bundestag"

## Overall:

-   we want to stick to the idea of [atomic design](https://bradfrost.com/blog/post/atomic-web-design/) as consistent as possible
-   we develop this website with the idea of MOBILE FIRST
-   we work with [BEM!](http://getbem.com/introduction/) and try to stick to the [clean code](https://clean-code-developer.com) achievement as much as possible!

## Framework:

-   BNB is built with the fresh open source biotope framwork. For informations and help, please visit [biotope.sh](www.biotope.sh)

## Branches:

-   `master` should be used for the live system
-   `staging` should be used to implement in the CMS
-   `develop` should be used to hand over components to implementation and is the DEFAULT branch
-   `feature/[feature description]` should be used for new features
-   `bug/[bug description]` should be used for new bugs
-   `refactor/[refactor description]` should be used for refactoring issues

## Commits:

-   if possible use `git-cz` for commit messages [commitizen](https://marketplace.visualstudio.com/items?itemName=KnisterPeter.vscode-commitizen)

## Pull Requests:

-   PRs should only go from feature, bug or refactor-branches to `develop`. NEVER directly to `staging` or `master`
-   should not be reviewed and merge by the contributor of the code changes
-   should only be merged before requested changes are reviewed on the second turn

## Basic-Components:

-   defining a single design element inside the website as buttons, headlines or input fields
-   should work in its own in design and function

## CMS-components:

-   components which Brand New Bundestag will be able to edit and use in the CMS
-   usually containing several Basic-Components

## Naming:

-   `branch` & `component` names should be named with kebab-case
