# Hodgkins
Hodgkins is an expanding grid portfolio theme built with Bootstrap for Hugo, named after the New Zealand landscape and still-life painter [Frances Hodgkins](https://franceshodgkins.com/). This project is a fork of [Frances by Michael Crawford](https://github.com/mcrwfrd/hugo-frances-theme).

Grid functionality now utilizes Bootstrap exclusively. The following were removed from the theme: jQuery, Modernizr, ImagesLoaded, Codrops grid script, and PopperJS (bootstrap.bundle).

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

## Parameters
All parameters are optional and have logical defaults.

### Bootstrap CDN
Three CDN's have been preconfigured for loading Bootstrap: CDNJS, jsDelivr, and UNPKG. This feature is disabled by default, and Bootstrap will instead be loaded locally via a Hugo module.

**Parameter**
+ Name: `hodgBootstrapCDN`
+ Default: `false`
+ Options: `"cdnjs"` `"jsdelivr"` `"unpkg"`

### Image Sizes
The size of both thumbnails and expanded images can be modified. The grid will automatically adjust to larger or smaller thumbnails. Define image sizes in pixels only, do not include the `px` suffix.

**Parameter**

+ Name: `hodgThumbnailSize`
+ Default: `"250"`
+ Options: `"pixel_value"`

**Parameter**

+ Name: `hodgExpandSize`
+ Default: `"500"`
+ Options: `"pixel_value"`

### Copyright
Toggle copyright text in the footer. By default, this is enabled and will use the Hugo `{{ .Site.Copyright }}` variable.

**Parameter**

+ Name: `hodgCopyright`
+ Default: `true`
+ Options: `true` `false`

**Parameter**

+ Name: `hodgCopyrightLink`
+ Default: `"/"`
+ Options: `"copyright_holder_url"`

### Privacy
Link to the websites privacy policy; can be local or remote, relative or absolute. The configured link will be used as entered.

**Parameter**

+ Name: `hodgPrivacy`
+ Default: `false`
+ Options: `false` `"privacy_url"`

### Connect
Add any set of links you wish, the name and link will be used as entered. If the name matches an icon (case-insensitive) in the [Simple Icons project](https://github.com/simple-icons/simple-icons), it will be used. If no matching icon is a found, a globe icon will be used instead. Refer to https://simpleicons.org/ when entering your links of choice.

If the entry is `Email` or `Phone` (case-insensitive), an envelope or telephone icon will be used instead. Do not include `mailto:` or `tel:` when entering email or phone number, this is done automatically.

**Parameter**

```toml
[[params.hodgConnect]]
	GitLab = "https://gitlab.com/whateverbits/hugo/hodgkins"
	GitHub = "https://github.com/whateverbits/hugo/hodgkins"
	Email = "hello@example.com"
	Phone = "1234567890"
```

### Example

```toml
[params]
	# Hodgkins
	# Bootstrap CDN | false, "cdnjs", "jsdelivr", "unpkg"
	hodgBootstrapCDN = false
  # Thumbnail Image Size (pixels) | "250"
  hodgThumbnailSize = "250"
  # Expanded Image Size (pixels) | "500"
  hodgExpandedSize = "500"
  # Copyright | true, false
  hodgCopyright = true
  # Copyright Link
  hodgCopyrightLink = "/"
	# Privacy Policy Link
	hodgPrivacy = "/privacy/"
  # Connect Links
	[[params.hodgConnect]]
		GitLab = "https://gitlab.com/whateverbits/hugo/hodgkins"
		GitHub = "https://github.com/whateverbits/hugo/hodgkins"
		Email = "hello@example.com"
		Phone = "1234567890"
```

## License
Hodgkins is distributed under the [MIT License](https://gitlab.com/whateverbits/hugo/hodgkins/-/blob/main/LICENSE).
