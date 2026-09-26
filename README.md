# UARC website — uarcapp.xyz

The website for the UARC app: homepage, support, privacy policy and terms, in
English and Arabic. It is a [Jekyll](https://jekyllrb.com) site hosted for free
on GitHub Pages from the `main` branch. Every commit to `main` is live about a
minute later.

## Pages

| Address | English file | Arabic file |
|---|---|---|
| `uarcapp.xyz/` (Arabic: `/ar/`) | `index.html` | `ar/index.html` |
| `uarcapp.xyz/support` | `support.md` | `ar/support.md` |
| `uarcapp.xyz/privacy` | `privacy.md` | `ar/privacy.md` |
| `uarcapp.xyz/terms` | `terms.md` | `ar/terms.md` |

The `.html` form of each address works too (`/support.html` is the old support
link, so it keeps working). The old `/privacy-policy.html` and
`/terms-of-service.html` addresses redirect to the new pages.

Visitors whose browser is set to Arabic are sent to the Arabic homepage on their
first visit; the language button on every page switches between the two and
remembers the choice.

## Where to change things

| To change… | Edit |
|---|---|
| App Store / Google Play link, contact email | `_config.yml` |
| Homepage text | the block at the top of `index.html` (English) and `ar/index.html` (Arabic) |
| Support, privacy or terms text | the `.md` files above (plain Markdown) |
| Menu, button and footer labels | `_data/i18n.yml` |
| Colours, fonts, layout | `assets/site.css` |
| Logo / icons | `assets/img/` (`mark.svg`, `apple-touch-icon.png`) and `favicon.ico` |

While `app_store_url` in `_config.yml` is empty, the site says “Coming soon on
the App Store” and offers an “Email me when it’s out” link. Paste the App Store
link there when the app is live and every download button starts pointing at it.

## Connecting the domain

1. **DNS.** In the DNS settings where you bought `uarcapp.xyz`, delete any
   existing parking/forwarding records for `@` and `www`, then add:

   | Type | Name | Value |
   |---|---|---|
   | A | `@` | `185.199.108.153` |
   | A | `@` | `185.199.109.153` |
   | A | `@` | `185.199.110.153` |
   | A | `@` | `185.199.111.153` |
   | AAAA | `@` | `2606:50c0:8000::153` |
   | AAAA | `@` | `2606:50c0:8001::153` |
   | AAAA | `@` | `2606:50c0:8002::153` |
   | AAAA | `@` | `2606:50c0:8003::153` |
   | CNAME | `www` | `ahmedifevn-hub.github.io` |

2. **Protect the domain (recommended).** On GitHub, open your profile
   **Settings → Pages → Add a domain**, enter `uarcapp.xyz` and add the TXT
   record it shows you. This stops anyone else from pointing it at their site.
3. **Publish.** Merge this site into `main`. The `CNAME` file tells GitHub
   Pages to serve it at `uarcapp.xyz`; the old
   `ahmedifevn-hub.github.io/Support/…` links then redirect there.
4. **HTTPS.** In this repository go to **Settings → Pages**. Once it shows
   “DNS check successful” and the certificate is ready (minutes, occasionally up
   to a day), tick **Enforce HTTPS**.
5. **App Store Connect.** Update the app’s URLs:
   - Support URL: `https://uarcapp.xyz/support`
   - Marketing URL: `https://uarcapp.xyz`
   - Privacy Policy URL: `https://uarcapp.xyz/privacy`
     (for the Arabic localisation you can use `/ar/support` and `/ar/privacy`)

## Previewing locally (optional)

With Ruby installed:

```sh
bundle install
bundle exec jekyll serve
```

Then open http://localhost:4000. The `Gemfile` pins the same versions GitHub
Pages uses.

Fonts: [Fraunces](https://github.com/undercasetype/Fraunces) and
[Noto Naskh Arabic](https://github.com/notofonts/arabic), both under the SIL
Open Font License (see `assets/fonts/`). They are served from this site, so
pages make no third-party requests.
