This Origami demo is a rough sketch of a site for an adventure trekking company.

[View demo](https://origami-trek-demo.netlify.app/)

The [site.ori](src/site.ori) file orchestrates the transformations to produce the site:

- Trek descriptions in the `src/descriptions` folder include markdown with YAML front matter. These are converted to HTML, then have a page template applied.
- The same trek descriptions are fed to the index.html template so that the home page can include tiles for each trek.

The site's visual style is based on the [Dolomia WordPress Theme](https://themeforest.net/item/dolomia-hiking-outdoor-mountain-guide-wordpress-theme/20086652) but completely rewritten to use more contemporary CSS.
