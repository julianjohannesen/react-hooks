I just move index.html to the root directory from src and edited webpack config, where it looks like all that had to be done was changing the place the HTML Webpack plugin looks for index.html. I was then able to rebuild and restart with no problem.

I did this to hopefully get Netlify's config file to work correctly and redirect any request to the server to index.html, but without triggering NoMatch. I now realize that I probably just need to create a route for "/index.html" and the placement of index.html in the root directory probably makes no difference.

I was bummed that Netlify doesn't let you redirect to just "/". I tried and it didn't work. Redirecting index.html does work.

### Problem - The 404 behavior is weird. 
On the dev server, I've set the devserver settings in webpack config to handle 404s from reloads and nonexistent urls that are typed into the address bar (thereby sending a request to the server). A reload simply reloads the page as one would expect. Nonexistent URLs that are typed in are caught by the catchall route that renders the NoMatch component.

I had a directory "/notes" that was ignoring bad nested directories like "/notes/blah" and reloading the page to /notes without catching the error and rendering my NoMatch component. The solution was simple. Just add "exact" to the route. I also had to make this change for two other nested directory routes - "/hooks/use-state" and "hooks/use-effect". Those to URLs were doing the same thing and ignoring URLs like "/hooks/use-state/blah".

I was confused by how to handle query parameters, but I checked and the New York Times, for example, just ignores bad query parameters if they're tacked on to the end of a valid URL.

 