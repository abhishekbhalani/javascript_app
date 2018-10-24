# javascript Based Application

Purely Javascript based app that render server side call using API


This is an example of an Mithril-Javascript based application. 

# Usage

1. Clone the repo
2. `cd` into it
3. run `npm install`
4. run `npm start`

It will auto compile with node and minified bin/app.js file as output

# Components

## frontend

It's a pretty standard mithril application. 
we have used Webpack for bundling, but you can also use it running tasks as well/ 

We added two routes for demonstration.

* List
* Edit ( User can update data in Edit form  )

### async data for rendering

To render async you have to return a promise in the `oninit`. If this is 
resolved for all `oninit`s, the response will be sent to the client.
 

You can also use route resolver for this. We will add a third route that
demonstrates this any time soon.

## Backend

### REST-API

The app contains a basic REST-API by Heroku.
 

# Conclusion

This project should give you a basic idea how to build a javascript based app with mithril. 
We try to extract as much as possible to modules but stopped
at this point, since more abstraction would result in more complicated code. This
project is there to be adapted to your special use case. The code-base is pretty
small and hopefully understandable To approve skillset on Java & Node.

Fell free to drop message if you have any questions.
