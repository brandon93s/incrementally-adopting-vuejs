# Incrementally Adopting Vue.js

<img width="175"  align="left" src="https://www.shareicon.net/download/2017/01/24/875994_media_512x512.png">

<br />

**March 26, 2019** @ *Atlanta Vue.js Meetup*

[Incrementally Adopting Vue.js](https://www.meetup.com/Atlanta-Vue-js-Meetup/events/258558748/)

[Presentation Slides](slides.pdf)

<br />

## Overview

> Adopting a modern JS framework enables your team to move fast, innovate, and use modern language features. If your team is working with an existing legacy application, how can you reap the benefits of Vue.js without a full rewriting or starting from zero? In this talk, we’ll take a look at how you can get the most out of Vue.js without having to rewrite your existing applications. We will leverage SFC, Code Splitting, CDN deployments and the modern @vue/cli toolchain – all while shipping to a legacy frontend application.

## Setup

The following commands should be run in the root of the project to setup, build and serve the demo application components:

```sh
# Install Dev Dependencies
$ npm install

# Install Vue.js App Dependencies
$ npm run vue:install

# Build Vue.js App
$ npm run vue:build

# Launch Legacy Server
$ npm run legacy:serve

# In a separate terminal
# Launch Simulated `CDN`
$ npm run vue:serve

```

