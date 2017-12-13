
# My Little CORS Proxy

A tiny workaround for working with remote APIs that don't stamp 
the responses with a relaxed `Access-Control-Allow-Origin`.

## Requirements:

- [Node.js](https://nodejs.org/) (preferably installed via [n](https://github.com/tj/n))

## To set up:

- clone this repo
- `cd my-little-cors-proxy`
- run `npm install`

## To run:

In your terminal, `cd` into the cloned repo, then run `npm start`.

You should see a message that the proxy is starting up.


## To use:

Update your URLs so that they go through the proxy.

For example, if your remote API url is `https://awesome-cat-gifs/api`, change that
to `http://localhost:3000/https://awesome-cat-gifs/api`
