# Wie läuft der Import-Prozess ab?

Um die Stabilität der Server von museum-digital sicherzustellen, werden strenge Beschränkungen auf die maximale Ausführungsdauer von einzelnen Scripten angewendet: Rufen Benutzer über das Netz ein langsames Script auf, wird die Berechnung nach spätestens 10 Sekunden abgebrochen, sodass die "teuren" Berechnungen dieses einen Scripts die verfügbaren Ressourcen für andere Scripte und andere Benutzer nicht weiter schmälern können.

Normalerweise ist das ein wichtiges Sicherheitsfeature. Beim Importieren führt es dazu, dass Importe nur von der Kommandozeile aus durchgeführt werden können[^fn-web-imports]. Das heißt auch, dass Importe auf dem Server letztlich vom Admin-Team von museum-digital durchgeführt werden.

[^fn-web-imports]:Sehr kleine Importe oder Importe ohne verknüpfte Bilddateien könnten theoretisch auch über das Web getätigt werden, aber bisher ist das nicht implementiert.

Damit das Admin-Team nicht vollends überlastet ist, hat sich ein mehrstufiger Prozess etabliert.

Bevor ein Import möglich ist, muss sichergestellt werden, dass das Museum in einer Instanz von museum-digital angelegt ist. [Hierzu benötigt es eine Mail an die jeweiligen Betreuer der lokalen Regional-Instanz von museum-digital und grundlegende Informationen zum Museum: Ein Name, eine Adresse, eine Kurzbeschreibung und ein Bild.](../musdb/Benutzerkonto/Zugang-erhalten.md)

## Lohnt sich ein Import?

Wie es weiter geht hängt stark von der Beschaffenheit und Menge der zu importierenden Daten ab:

- Handelt es sich um 50 mittelmäßig erfasste Objekte, lohnt sich oft ein händisches Eingeben der Objekte mehr als ein Import.
- Geht es um ungefähr 300 bis 500 Objekte, lohnt sich ein Anpassen der Daten an das Standard-Importformat von museum-digital. Das kann über einfache getan werden. Für diese Importtabellen bietet museum-digital ein Validierungs- und Umwandlungstool, [CSVXML](./CSVXML.md).
- Handelt es sich um tausende gut erfasste Objekte, lohnt sich ein händisches Anpassen der Daten definitiv weniger als das Schreiben eines für die Daten angepassten Imports.
- Liegen die Daten in einem Format vor, für das es schon ein eigenes Importscript gibt (z.B. LIDO oder die CSV-Exporte von Google Arts and Culture), ist ein Import mit dem vorhandenen Script meist sinnvoller als das anpassen der Daten an die Import-CSV-Tabelle von museum-digital.
- Liegen die Daten in einem automatisiert quasi nicht auslesbaren Format vor (z.B. Word-Dateien oder PDFs) lohnt sich ein Import nicht.
- Ob ein Objekt-Datensatz neu importiert oder geupdatet wird, erkennt das Import-Tool auf Basis von Inventarnummern. Sind Inventarnummern innerhalb desselben Museums doppelt vergeben, kann nicht importiert werden - sonst würden gegebenenfalls die Daten eines anderen Objektes, das dieselbe Inventarnummer hat wie ein neu zu importierendes, überschrieben.

## Vom Museum zum Regionaladministrator zum Import-Server

Wird ein Import also als lohnend eingeschätzt, werden wieder die lokalen Regional-Administratoren kontaktiert, die die Daten noch einmal genauer überprüfen und dann - wenn sie für einen Import vorbereitet sind - in einen mit den Importierenden geteilten Ordner hochladen.

Für ein einfaches Wiederfinden der Importdateien (etwa, falls es zu einem Problem im Importprozess gekommen ist und der Import wiederholt werden soll) und für ein möglichst schnelles Verständnis durch die Importierenden werden die Daten hier in einem regelmäßigen Format angelegt:

- Jeder Import hat einen ihm zugewiesenen Unterordner, der das Datum des Erhalts der Daten und ein bezeichnendes Merkmal wie z.B. den Namen des Museum im Ordnernamen trägt (also z.B. `[2022-01-01]Testmuseum`)
- Innerhalb dieses Unterordners befindet sich eine Datei, die den Import in einer regelmäßigen Form beschreibt, und mindestens eigene Unterordner für die zu importierenden Metadaten und die zu importierenden Bilddateien. Diese Ordner sollten ebenso wie der übergeordnete, allgemeine Importordner das Datum und das Museum im Namen tragen, aber für ein einfaches Kopieren in die Kommandozeile idealerweise keine Leerzeichen (gute Benennungen wären also `20220101_Testmuseum_XML` bzw. `20220101_Testmuseum_IMG`).

Die den Import beschreibende Datei wird als Datei `README.md` in den Ordner gelegt und nach der folgenden Vorlage ausgefüllt:

```
{{#include ../assets/imports/README.template.de.md}}
```

Mit den so gegebenen Daten kann der Import-Prozess - gegeben, dass es keine Probleme mit den Daten gibt - schnell von statten gehen.

Die Daten werden vom jeweiligen Importierenden aus dem geteilten Ordner auf den Server geladen und an die richtigen Stellen bewegt. Das Import-Tool importiert die Daten auf Basis einer vorgegeben Ordnerstruktur: Es gibt in jeder Instanz von [musdb](../musdb) einen zentralen Ordner, in dem Importdaten liegen. Innerhalb dieses Ordners gibt es einen Ordner `xml` für Metadaten und einen Ordner `files` für Digitalisate. Innerhalb dieser Ordner repräsentiert je ein Unterordner einen Import.

```
.
├── files
│  └── 20220101_Testmuseum_IMG
└── xml
   └── 20220101_Testmuseum_XML
```

## Auf dem Server: Den Import durchführen

Ist der Import gut vorbereitet, und gibt es keine verbleibenden Probleme mit den Daten (TODO: Link zu Einschränkungen), muss jetzt nur noch ein Script auf der Kommandozeile ausgeführt werden. Beim Aufruf des Scripts sind eben die oben in der Readme-Datei angegebenen Informationen von Nöten:

- Der zu benutzende "Parser", also die zu benutzende Importroutine
- Die ID des Museums
- Der Name des Ordners, in dem sich die Importdaten befinden (Objektmetadaten)
- Der Name des Ordners, in dem sich die Digitalisate befinden (optional)
- Ob die Objekte direkt veröffentlicht werden sollen (optional, standardmäßig wird nicht öffentlich importiert)
- Die ID einer Sammlung, der die importierten Objekte zugeordnet werden sollen (optional, diese Angabe überschreibt die in den Importdaten angegebenen Sammlungszuordnungen)

Das Import-Tool importiert nun die Daten.

Dabei werden qualitativ unzureichende Objektinformationen in einer CSV-Tabelle geloggt, z.B. Objektbeschreibungen mit weniger als 25 Buchstaben. Ist eine Objektinformation grundsätzlich falsch (das betrifft vor allem korrupte oder zu kleine Bilddateien), bricht der Importer ab und es werden manuelle Verbesserungen nötig. Genauso haben viele "Parser" eine eingebaute Vollständigkeitsprüfung: Sind noch nicht importierte Daten zum Objekt in der Datei vorhanden, wenn die Objektinformationen soweit spezifiziert importiert wurden, bricht das Programm ab und erzwingt einen expliziten Umgang mit der gegebenen Information.

Ist der Parser vollständig, und sind alle Objektinformationen korrekt importierbar, vollbringt das Import-Tool sein Werk. Nach dem anschließenden Durchlaufen der  üblichen Scripte für das Befüllen von Zwischenspeichern und die Analyse der Daten sind die Objekte ab diesem Zeitpunkt in musdb zum Weiterarbeiten verfügbar. Parallel dazu kann die Normdatenredaktion beginnen, neu importierte und zuvor noch unbekannte Orte, Personen, Zeiten, und Schlagworte anzureichern. Der Importierende gibt dem Museum und / oder dem Betreuer der regionalen Instanz per Mail Bescheid, dass der Import getan ist.
