# Datenabgleich automatisieren

Der über die WebDAV-Schnittstelle durchgeführte [Selbst-Import](./importe-selbst-durchfuehren.md) eignet sich auch dafür, Daten regelmäßig und weitgehend automatisch mit museum-digital abzugleichen.

Der entscheidende Baustein dafür ist serverseitig bereits vorhanden: Der Server prüft selbstständig in regelmäßigen Intervallen, ob im WebDAV-Verzeichnis ein vollständig vorbereiteter Import vorliegt – also Daten in den Ordnern `IMPORT_XML` bzw. `IMPORT_IMG` sowie eine gültige `import_config.txt` – und führt ihn dann ohne weiteres Zutun aus. Nach Abschluss werden die verarbeiteten Daten in die Ordner `IMPORTS_SUCCESS` bzw. `IMPORTS_FAILED` verschoben, sodass ein Import nicht versehentlich wiederholt wird, und es ergeht eine Benachrichtigung per E-Mail.

Für einen wiederkehrenden Abgleich genügt es daher, dem Server fortlaufend neue Daten bereitzustellen: Sobald erneut Dateien zusammen mit einer Konfigurationsdatei im Hauptverzeichnis liegen, wird der nächste Import automatisch angestoßen. Das Hochladen selbst lässt sich mit einem WebDAV-fähigen Client skripten oder zeitgesteuert ausführen, sodass der gesamte Datenabgleich ohne manuelle Schritte ablaufen kann.

Die Details zu Zugang, Verzeichnisstruktur und Konfigurationsdatei sind auf der Seite [Importe selbst durchführen](./importe-selbst-durchfuehren.md) beschrieben.
