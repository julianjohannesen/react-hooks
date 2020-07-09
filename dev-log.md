On the dev server, I've set the devserver settings in webpack config to handle reloads, non-root URLs, and nonexistent urls that are typed into the address bar (thereby sending a request to the server). Now, a reload simply reloads the page as one would expect. What's really cool though is that all of the URLs work even if you type them directly into the address bar rather than navigating to them. Nonexistent URLs that are typed in are caught by the catchall route that renders the NoMatch component. 

I moved index.html to the root directory from src and edited webpack config, where it looks like all that had to be done was changing the place the HTML Webpack plugin looks for index.html. I was then able to rebuild and restart with no problem.

I did this to hopefully get Netlify's config file to work correctly and redirect any request to the server to index.html, but without triggering NoMatch. 

I later realized that I just needed to create a route for "/index.html" and the placement of index.html in the root directory makes no difference.

I was disappointed that Netlify doesn't let you redirect to just "/". I tried and it didn't work. Redirecting to index.html does work.
 
I had a directory "/notes" that was ignoring bad nested directories like "/notes/blah" and reloading the page to /notes without catching the error and rendering my NoMatch component. The solution was simple. Just add "exact" to the route. 

I had a problem with two other nested directory routes - "/hooks/use-state" and "hooks/use-effect". Those two URLs would reload even if you tacked a nonsense param to the end like  "/hooks/use-state/blah". I used the same fix- change the route to be exact. That at least caused the hook page to load, rather than just ignoring the bad parameter. But I had to remove the intervening path for the hooks page, which used to render if there were no articles on the page. Now the NoMatch route renders.

I was confused by how to handle bad query parameters, but I checked and the New York Times, for example, just ignores bad query parameters if they're tacked on to the end of a valid URL.

Current big question: can I put all of my routing in one place and just nest it for nested routes?