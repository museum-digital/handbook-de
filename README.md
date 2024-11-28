# Deutschsprachiges Handbuch für museum-digital

Dieses Handbuch ist unter [https://de.handbook.museum-digital.info/](https://de.handbook.museum-digital.info/) zu finden.

## Rendering

### Umgebung aufsetzen

Um das Handbuch zu rendern wird die Rust-Toolchain gebraucht. Mehr dazu findet sich auf der Rust-Downloadseite: https://www.rust-lang.org/tools/install.

Sind Rust und sein Paketmanager cargo installiert, können die benötigten Pakete rund um mdbook, auf dem das Handbuch basiert, installiert werden:

```
cargo install mdbook
cargo install mdbook-rss
cargo install mdbook-linkcheck
```

### Ausgabe generieren

Das Handbuch kann im folgenden mit dem Befehl `mdbook build` generiert werden.

### Lizenz

Alle Beiträge im Handbuch sind unter [CC BY (4.0)](https://creativecommons.org/licenses/by/4.0/) lizensiert.

Zum Rendern des Handbuches in Form einer Webseite kommt `mdbook`  zum Einsatz. [`mdbook`](https://github.com/rust-lang/mdBook) steht unter der [Mozilla Public License 2.0](https://github.com/rust-lang/mdBook/blob/master/LICENSE).

Zur Darstellung der mit OpenAPI beschriebenen Schnittstellen kommt [Swagger UI](https://github.com/swagger-api/swagger-ui) zum Einsatz. Swagger UI ist unter der [Apache License 2.0](https://github.com/swagger-api/swagger-ui/blob/master/LICENSE) lizensiert.


Testzeile
