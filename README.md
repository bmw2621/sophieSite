# Source Code for Sophie Winchester Healthy Living Homepage

This repository host source code for Sophie Winchester Healthy Living website.  Site uses `gatsby-source-drupal` to pull data from Drupal CMS hosted on an AWS EC2 instance with JSON:API extension and uses `gatsby-source-youtubev2` to pull data from clients YouTube channel using clients API key.  Site also uses Auth0 to protect content and manage user accessibility to content.  

### Dependancies

- GatsbyJS

## Installation

```
git clone https://github.com/bmw2621/sophieSite.git
yarn
```

## Run Development Server

- Create .env.development filter
- In .env.development create variable `YOUTUBE_API` with API key
`gatsby develop`
Navigate to `http://localhost:8000`

## Build

- Ensure .env.production has environment variable `YOUTUBE_API` with API key
`gatsby build && gatsby serve`
Navigate to `http://localhost:9000`

## Deployment

Todo: Add instructions for deployment to Netlify

Todo: Configure Build Hooks on Drupal instance to rebuild upon each new article position

Todo: Configure Netlify to rebuild daily to pull in new Youtube posts
