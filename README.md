# Deutschsprachiges Handbuch für museum-digital

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
