# wedding-website
Wedding website for personal use: the save-the-date page for Ana Paula & Duncan.

A save-the-date page for our wedding in Cuenca, Ecuador, on August 14, 2027. Guests say whether they're coming, and each reply is saved to a Google Sheet.

## Edit the details

Open `index.html`. The names, date and time, venue and reply link (`rsvpUrl`) are in `const WEDDING = {...}` at the top of the `<script>` near the bottom of the file.

## 1. Turn on GitHub Pages

Repo **Settings > Pages**. Under "Build and deployment", set Source to **Deploy from a branch**, branch **main**, folder **/ (root)**, and click Save. After a minute the site is live at https://anapaulaguillen.github.io/wedding-website/.

## 2. Connect your domain (Squarespace Domains, formerly Google Domains)

1. In GitHub **Settings > Pages > Custom domain**, type your domain (`dawmiller.ca`) and Save. This adds a `CNAME` file to the repo.
2. Go to https://domains.squarespace.com, pick the domain, open **DNS > DNS Settings**. Delete any existing A records or Squarespace defaults on `@` and `www`, then add:

   | Host | Type  | Data |
   |------|-------|------|
   | @    | A     | 185.199.108.153 |
   | @    | A     | 185.199.109.153 |
   | @    | A     | 185.199.110.153 |
   | @    | A     | 185.199.111.153 |
   | www  | CNAME | `anapaulaguillen.github.io` |

3. Wait for DNS to update (usually under an hour, sometimes up to 24). Then back in GitHub Pages tick **Enforce HTTPS**.

## 3. Collect RSVPs in a Google Sheet

1. Create a new Google Sheet (e.g. "Wedding RSVPs").
2. **Extensions > Apps Script**. Delete what's there, paste the contents of `rsvp-apps-script.gs`, and save.
3. **Deploy > New deployment**, type **Web app**. Execute as: **Me**. Who has access: **Anyone**. Click Deploy and allow access.
4. Copy the web app URL (ends in `/exec`) and paste it into `rsvpUrl` in `index.html`. Commit the change.
5. Submit a test RSVP on the site and check that a row appears in the sheet.
