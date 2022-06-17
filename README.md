# Hodgkins
Hodgkins is an expanding grid portfolio theme built with Bootstrap for Hugo, named after the New Zealander landscape and still-life painter [Frances Hodgkins](https://franceshodgkins.com/). This project is a fork of [Frances by Michael Crawford](https://github.com/mcrwfrd/hugo-frances-theme); based on [Thumbnail Grid Expanding Preview](https://github.com/codrops/ThumbnailGridExpandingPreview) from [Codrops](https://github.com/codrops).

![Hodgkins screenshot](images/tn.png)

![Hodgkins screenshot expanded](images/tn-expanded.png)

## Installation
Inside your Hugo site, run the following to clone the Hodgkins theme into `themes/hodgkins`:

```bash
cd /your/project/root/themes
git clone https://gitlab.com/whateverbits/hugo/hodgkins.git hodgkins
```

## Configuration
Inside `themes/hodgkins`, you'll find a file called `config.toml`. Copy this file to the root of your Hugo site, and customize it as you see fit. Mostly you'll want to change the name and email address here to match your own.

Additionally, in order to use this theme with your Hugo site, you need to add the following line to your own `config.toml` file:

```toml
theme = "hodgkins"
```

See Hugo's [quick start guide](https://gohugo.io/getting-started/quick-start/) for more help with adding this and many other themes to your Hugo site.

Finally, test the new theme in your site to make sure it works:

```bash
cd /your/project/root/
hugo server
```
