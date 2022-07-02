#!/bin/sh

SCRIPT_DIR="$( cd "$( dirname "$0" )" && pwd )"
cd "$SCRIPT_DIR/../"
mdbook build

rm -vf "$SCRIPT_DIR/../book/html/robots.txt"
echo 'User-agent: Barkrowler
Disallow: /

Sitemap: https://de.handbook.museum-digital.info/sitemap.xml' > "$SCRIPT_DIR/../book/html/robots.txt"

rm -vf "$SCRIPT_DIR/../book/html/sitemap.xml"
/home/md-admin/managementScripts/scripts/musdig-sitemap-from-path.php "$SCRIPT_DIR/../src" https://de.handbook.museum-digital.info > "$SCRIPT_DIR/../book/html/sitemap.xml"
