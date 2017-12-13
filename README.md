
# My Little CORS Proxy

A tiny workaround for working with remote APIs that don't stamp 
the responses with `Access-Control-Allow-Origin`.

## Requirements:

- [Node.js](https://nodejs.org/) (preferably installed via [n](https://github.com/tj/n))

## To set up:

- clone this repo
- `cd` into the cloned directory
- run `npm install`

## To run:

`npm start`


## To use:

Update your URLs so that they go through the proxy.

For example, if your remote API url is `https://awesome-cat-gifs/api`, change that
to `http://localhost:3000/https://awesome-cat-gifs/api`
