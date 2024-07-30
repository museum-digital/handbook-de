# Importe selbst durchführen

Benutzer von musdb können Importe, die genau den vorhandenen Parsern entsprechen, selbst durchführen. Hierfür werden die Daten über eine [WebDAV-Schnittstelle](https://de.wikipedia.org/wiki/WebDAV) (grob Analog zu FTP) auf den Server geladen und eine Konfigurationsdatei mit den nötigen Einstellungen ausgefüllt. In regelmäßigen Intervallen prüft der Server, ob so die Vorbedingungen für einen Import geschaffen wurden, und importiert, wenn das der Fall ist. Ein Bericht über den Abschluss des Importes oder etwaige Fehler wird dann an eine in der Konfigurationsdatei vermerkte Mailadresse gesendet.

## Vorbedingungen schaffen: Zugang über WebDAV

Um Daten zu importieren, müssen diese zuerst einmal auf den Server gelangen. Dies geschieht mithilfe einer WebDAV-Schnittstelle, zu der Benutzer der [Benutzerrolle](../musdb/Benutzerkonto/Berechtigungen.md) "Museumsdirektor" und Administratoren über die [Kontoeinstellungen für das eigene Benutzerkonto](../musdb/Benutzerkonto/Kontoeinstellungen.md) (Reiter: "WebDAV") Zugang erlangen können.

Auf dem Reiter WebDAV findet sich nach einer kurzen Erklärung ein Button zum Generieren der zur Benutzung der Schnittstelle nötigen Zugangsdaten. Für den Zugang zur WebDAV-Schnittstelle wird dabei ein eigenes Password automatisch generiert, das an einem sicheren Ort gespeichert werden sollte (geht es verloren, kann jedoch ein neues generiert werden).

Sind die Logindaten generiert, kann man sich im zweiten Schritt mit einem WebDAV-Client mit dem Server verbinden (z.B. [WinSCP](https://winscp.net/eng/docs/lang:de) unter Windows, unter Linux kann etwa der Standard-Dateimanager der Desktop-Oberfläche Gnome direkt mit WebDAV umgehen).

Im Hauptverzeichnis finden sich schon beim ersten Einloggen zwei Dateien und zwei Ordner. In der Datei `README.md` wird das Importprozedere noch einmal genauer erläutert, während die Datei `import_config.sample.txt`  als Grundlage für das Schreiben einer eigenen Importkonfiguration genutzt werden kann. In die Ordner `IMPORT_IMG` und `IMPORT_XML` können die zu importierenden Daten hochgeladen werden.

## Importdateien hochladen und Import konfigurieren

Als nächstes sollten die zu importierenden Daten in die jeweiligen Ordner hochgeladen werden (Metadaten, unabhängig vom Format, in den Ordner `IMPORT_XML`; Mediendateien in den Ordner `IMPORT_IMG`). Die Dateien dürfen sich dabei *nicht* in weiteren Unterordnern befinden.

Sind die zu importierenden Daten hochgeladen, kann der Import konfiguriert werden. Dafür ist es am einfachsten die Datei `import_config.sample.txt` als Grundlage zu nehmen, und die entsprechenden Zeilen zu vervollständigen. Zwingend für den Import benötigt werden dabei die Angabe einer Mailadresse (es werden nur Mailadressen, die einem Benutzeraccount der Benutzerrolle "Museumdirektor" oder "Regionaladministrator" zugeordnet sind, akzeptiert) und des Parsers. Optionale weitere Optionen finden sich wie auch eine Liste der aktuell verfügbaren Parser in der Sample-Datei beschrieben. Die angepasste Konfigurationsdatei kann nun als `import_config.txt` in das Hauptverzeichnis geladen werden.

Ein Import hätte also beispielsweise die folgende Ordnerstruktur:

```
.
├── import_config.sample.txt
├── import_config.txt
├── IMPORT_IMG
│  ├── 1127_DickeWange.jpg
│  ├── 1128_UnterBissSchleife.jpg
│  ├── 1128_UnterBissSchleife_RS.jpg
│  └── 1128_UnterBissSchleife_RS_600.jpg
├── IMPORT_XML
│  ├── 2.xml
│  └── 3.xml
└── README.md
```

Eine sehr einfache Konfigurationsdatei könnte etwa wie folgt formuliert sein:

```
mail: mail@example.com
parser: Csvxml
```

## Der Import

Der Server prüft selbstständig in regelmäßigen Intervallen, ob ein neuer Import vorbereitet und hochgeladen wurde. Ist das der Fall, werden die Daten importiert. Sollte es dabei zu Fehlern kommen, wird eine Fehlermeldung an die zuvor in der Konfigurationsdatei angegebene Mailadresse und das Entwicklerteam versendet. Ist der Import erfolgreich, wird man ebenso per Mail darüber benachrichtigt.
Das Intervall beträgt aktuell 4 h. Kann aber nach Bedarf herab- oder heraufgesetzt werden.

Damit der Import nicht immer wieder durchgeführt wird, werden die Importdaten im Anschluss in einen neuen Ordner `IMPORTS_FAILED` bzw. `IMPORTS_SUCCESS` verschoben und dort mittelfristig gelöscht.
