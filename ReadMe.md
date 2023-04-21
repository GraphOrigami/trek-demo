This Graph Origami demo is a rough sketch of a site for an adventure trekking company.

The [site.graph](src/site.graph) file orchestrates the transformations to produce the site:

- Trek descriptions in the `src/descriptions` folder include markdown with YAML front matter. These are converted to HTML, then have a page template applied.
- The same trek descriptions are fed to the index.html template so that the home page can include tiles for each trek.

**This is a work in progress.** The only links in the site that work are from the home page to the treks and vice versa. _Most of the other navigation links don't work._
