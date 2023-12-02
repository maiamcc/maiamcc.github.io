# Maia's Tech Etc. Website

This website lives at [code.maiamccormick.com](https://code.maiamccormick.com/).

It's built with [Jekyll](https://jekyllrb.com/) on top of the [classic-martinb](https://github.com/martinbjeldbak/classic-martinb) theme, and deployed via Github Pages.

To preview the site, run `bundle exec jekyll serve` and navigate to `http://localhost:4000/`.

## Publishing

### Setup:
First-time setup to deploy this site: create a `_site` directory with git origin pointing to [my GitHub Pages repo](https://github.com/maiamcc/maiamcc.github.io):
```
git clone git@github.com:maiamcc/maiamcc.github.io.git _site
```

### Generate and Deploy
To generate and deploy the site, run `deploy.sh`.
