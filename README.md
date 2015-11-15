# react-blog

My attempt at a React powered blog.  

Current state: `functional prototype`

## Screenshot (v0.1.0)

![Screen Shot 2015-11-15 at 22.17.25](https://i.imgur.com/t5asB8t.png)

## Idea

The idea is that you should only have to write code once, whether that's for server-side or client-side consumption. When developing an application, you *should* keep in mind that you're writing for both server & client, but you shouldn't have to write two different sets of code for each.

If you have one pure root component, all you need to do is pass it a state object and it will come to life. Whether that is server-side or client-side, the same state should give the same output. As you only have one root component, the client-side script will not need to be modified for each page, so long as the page can be constructed by the one root component.

There are four main directories in the project: `config` used for default configuration, `server` used for server-side code, `shared` for shared code consumed by both server and client, and `static`, which you got it, is static files (scss, css, img, static js).

The project uses `webkit` to package all the required React components + the client-side script into a bundle. The bundle picks up `shared/views/index.js` plus the components from `shared/components` and dumps the bundle into `static/js/bundle.js`. The project also uses `gulp` and `babel` to convert the React components from `jsx` => `js` for the server to consume (as the full server isn't transpiled). These are picked up by gulp in `shared/components`, transpiled, and dumped into `server/components`.

The server code (entry point `server/start.js`) dynamically loads all files first in `server/init` and then `server/controllers`, which have access to the main Koa app object. Requests are logged, scss is compiled, static assets served etc and then finally, any routed methods are hit. These controllers are able to handle specific requests, and instantiate the root React component with the desired state. The project uses handlebars as a simple view engine, and renders `html` and a JSON object, `state`, into a simple template; `shared/views/index.hbs`. The `html` is basically the rendered React component, and the `state` is put into `window.__STATE__` for the client-side React script (`shared/views/index.js` -- transpiled to `static/js/bundle.js`) to pick up.

So what happens is, you request `http://yourfavouriteponies.club/` and the request goes through to a controller which instantiates `shared/components/App` with the state `{ page: 'index' }`. The `App` component knows how to handle this page, and returns a component which the controller (stored in `server/controllers` don't forget) renders to html. It then passes the `html` and `state` (`{ page: 'index' }`) to handlebars which outputs the html and stores the state in `window.__STATE__`. The browser then loads `static/js/bundle.js` which tells it to render the `App` component using, you got it, `window.__STATE__`.

I hope that all made sense.

## Components

A rough list of the components I'll need:

    App
    - Layout
      - Header
      - ArticleContainer
        - ArticleList
          - Article
        - Pagination
      - Footer

## Observations

I have yet to implement anything like Redux. I feel as though there is something wrong about assigning `this.props.X` to `this.X` in component `constructor`s. There is a lot of repetition and I feel as though I may be doing something wrong. I must look into this.

## A note about ES6 Modules & CommonJS

As CommonJS isn't 100% compatible with ES6 modules, we have to fallback to using module.exports in the JSX files (ES6 modules), otherwise the consumer (which use CommonJS) would need to write `require('./App').default`, and that's no good. Let me know if you have a better way around this.

## Versions

For what it's worth, the version of my Node.js was `4.2.1` and npm `3.3.12`.
