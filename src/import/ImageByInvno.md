# Der "ImageByInvno"-Parser

In vielen Museen werden die Abbildungen der Objekte getrennt vom Sammlungsmanagementsystem gehalten. So können manche Programme Objektabbildungen nur als Voransichten speichern, andere versuchen die Abbildungen direkt in der Datenbank zu speichern und werden bei zu vielen, gut aufgelösten Objektabbildungen langsam. Dazu kommen die vielen Museen, die bis heute Tabellenkalkulationsprogramme wie Excel zur Verwaltung ihrer Bestände nutzen. Aber auch unabhängig von den eingesetzten Programmen lohnt es sich für einen schnellen Zugriff und für das Behalten von gänzlich unkomprimierten Aufnahmen der Objekte (etwa für die Langzeitarchivierung), die  Aufnahmen noch einmal in einer gesonderten Ablage zu speichern. 

Diese spezifischen Bildablagestrukturen sind häufig so aufgebaut, dass die Ordnerstruktur grob die Struktur der Bestände abbildet und die einzelnen Bilddateien die Inventarnummer des abgebildeten Objektes in ihrem Dateinamen beinhalten.

Durch die oben beschriebenen Schwierigkeiten mit der Speicherung gut aufgelöster Abbildungen macht es häufig Sinn, die Objekt-Abbildungen getrennt von den Metadaten zu den Objekten zu importieren. So lassen sich oft bisher fehlende Abbildungen oder besser aufgelöste Abbildungen, die das vorherige Sammlungsmanagementsystem nicht abbilden konnte, nachtragen. Genau ist das Ziel des ImageByInvno-Parsers.

## Konzept

Alle anderen derzeit verfügbaren Parser des Import-Tools existieren, um verschiedene Metadatenformate auslesbar und auswertbar zu machen, und dann auf dieser Basis die Daten zu importieren. Objektabbildungen lassen sich darüber also nur importieren, wenn die Abbildungen explizit in den Metadaten erwähnt werden.

Der ImageByInvno-Parser geht den umgekehrten Weg. Ohne zusätzliche Metadaten zu nutzen, werden hierbei die Bilder und ihre Dateinamen zum Import genutzt. Über die Benennung der Bilddateien werden die zugehörigen Objektdatensätze ermittelt. Im einfachsten Fall wird hierbei schlicht der gesamte Dateiname abzüglich der Dateiendung genutzt: Bei einer Datei "Hs-1234.jpg" würde in diesem Fall davon ausgegangen, dass diese einem Objekt Hs-1234 zugehört.

In der Realität ist es oft nicht so einfach. Oft gibt es mehrere Abbildungen für ein Objekt. Inventarnummern können Zeichen enthalten, die in Dateinamen nicht zugelassen sind (etwa Schrägstriche). Und nicht selten beinhalten die Dateinamen zusätzliche Informationen - etwa den Namen des Künstlers.

## Einstellungen zur Feststellung des Dateinamens

Um auch solche komplizierteren Zuordnungen zwischen Objekt / Inventarnummer und Bildnamen abzubilden bietet der ImageByInvno-Parser derzeit drei verschiedene Modi.

### Volle Inventarnummer ("full_name")

Dieser Modus entspricht dem oben beschrieben Szenario: Die Inventarnummer bildet den gesamten Dateinamen, und es gibt pro Objekt nur eine Abbildung.

**Beispiel-Dateistruktur**

```
.
├── Hs-1234.jpg
└── Hs-1235.jpg
```

Beispiel-Befehl auf der Kommandozeile[^1]:

```bash
php importer-cli.php --parser=ImageByInvno --institution_id=1 --xmlfolder=XML --datafolder=IMG '--settings=mode:full_name'
```

Beispiel-Konfigurationsdatei für das selbstständige Importieren:

```
- mail: mail@example.org
- parser: ImageByInvno
- setting: mode: full_name
```

Unter diesen Bedingungen würden die Dateien den Objekten `Hs-1234` und `Hs-1235` zugeordnet.

### Zuordnung nach Länge ("length")

Sind alle Inventarnummern im Museum gleich lang kann die Zuordnung zwischen Objekt bzw. Inventarnummer und Abbildung über die Länge der Inventarnummern geschehen, auch wenn es mehrere Abbildungen für einzelne Objekte gibt. Um die Länge der Inventarnummern zu spezifizieren kann die zusätzliche Einstellung `inv_no_length` genutzt werden.

**Beispiel-Dateistruktur**

```
.
├── Hs-1234_01.jpg
├── Hs-1234_02.jpg
├── Hs-1235_01.jpg
└── Hs-1235_02.jpg
```

Beispiel-Befehl auf der Kommandozeile:

```bash
php importer-cli.php --parser=ImageByInvno --institution_id=1 --xmlfolder=XML --datafolder=IMG '--settings=mode:length,,inv_no_length:7'
```

Beispiel-Konfigurationsdatei für das selbstständige Importieren:

```
- mail: mail@example.org
- parser: ImageByInvno
- setting: mode: length
- setting: inv_no_length: 7
```

Unter diesen Bedingungen würden die Dateien den Objekten `Hs-1234` und `Hs-1235` zugeordnet.

### Importieren nach Trennzeichen ("identify_counter_by_separator")

Sind die beiden anderen Optionen nicht nutzbar - etwa weil es mehrere Abbildungen pro Objekt gibt, aber die Inventarnummern keine konsistente Länge aufweisen - kann gegebenenfalls über die Trennzeichen die zwischen Inventarnummer und nachfolgenden Nummern für die Unterscheidung mehrerer Abbildung desselben Objektes stehen importiert werden. Dies kann natürlich nur sinnvoll funktionieren, wenn die Trennzeichen nicht auch Teil der Inventarnummern sind. Welches Trennzeichen verwendet wird kann über die zusätzliche Einstellung `number_separator` eingestellt werden.

**Beispiel-Dateistruktur**

```
.
├── Hs-1234_01.jpg
├── Hs-1234_02.jpg
├── Hs-12351_01.jpg
└── Hs-12351_02.jpg
```

Beispiel-Befehl auf der Kommandozeile:

```bash
php importer-cli.php --parser=ImageByInvno --institution_id=1 --xmlfolder=XML --datafolder=IMG '--settings=mode:identify_counter_by_separator,,number_separator:_'
```

Beispiel-Konfigurationsdatei für das selbstständige Importieren:

```
- mail: mail@example.org
- parser: ImageByInvno
- setting: mode: identify_counter_by_separator
- setting: number_separator: _
```

Unter diesen Bedingungen würden die Dateien den Objekten `Hs-1234` und `Hs-12351` zugeordnet.

## Einstellung für das Ersetzen und Entfernen von Zeichen

Werden in den Inventarnummern des Museums Zeichen eingesetzt, die in den Dateinamen nicht auftauchen sollen und stattdessen ersetzt werden - weil sie nicht im Dateinamen verzeichnet werden können, wie Schrägstriche, oder, weil sie mittelfristig zu Problemen führen könnten wie Leerzeichen oder Umlaute - verhindert das eine Zuordnung unter der einfachen Verwendung der oben aufgeführten Modi. Dasselbe Problem besteht, wenn im Dateinamen zusätzliche Informationen neben der Inventarnummer vertreten sind. Die hier aufgeführten Optionen können in vielen solchen Fällen eine Abhilfe schaffen.

### Vorrangehende Zeichen ignorieren ("strip_first_chars")

Beginnen die Dateinamen eines Uploads mit zusätzlichen Informationen, die nicht für die Ermittlung der Inventarnummer genutzt werden können, aber immer mit der gleichen Anzahl von Zeichen ausgedrückt werden, können diese vor der Ermittlung der zugehörigen Inventarnummern / Objekte weggeschnitten werden. Hierzu wird die Einstellung `strip_first_chars` genutzt (Beispielweise: `strip_first_chars: 7`).

**Beispiel-Dateistruktur**

```
.
├── Kiste1,Hs-1234_01.jpg
├── Kiste1,Hs-1234_02.jpg
├── Kiste1,Hs-12351_01.jpg
└── Kiste1,Hs-12351_02.jpg
```

Beispiel-Befehl auf der Kommandozeile:

```bash
php importer-cli.php --parser=ImageByInvno --institution_id=1 --xmlfolder=XML --datafolder=IMG '--settings=mode:identify_counter_by_separator,,number_separator:_,,strip_first_chars:7'
```

Beispiel-Konfigurationsdatei für das selbstständige Importieren:

```
- mail: mail@example.org
- parser: ImageByInvno
- setting: mode: identify_counter_by_separator
- setting: number_separator: _
- setting: strip_first_chars: 7
```

Unter diesen Bedingungen würden die Dateien den Objekten `Hs-1234` und `Hs-12351` zugeordnet.

```admonish warning
Da diese Option auf Basis der Länge der abgeschnittenen Zeichen operiert, kann sie nicht sinnvoll eingesetzt werden, wenn die vorangehenden, überflüssigen Informationen verschieden lang sind. Sind etwa zwei Dateien `Kiste1,Hs-12351_01.jpg` und `Kiste12,Hs-12352_01.jpg` im Import-Ordner, wird auch mit dieser Option mindestens eine der beiden falsch zugeordnet werden.
```

### Zeichen ersetzen

Gibt es bei der Erstellen der Dateinamen regelmäßige Ersetzungen im Vergleich zu den Inventarnummern, können diese mithilfe der Einstellungen `replace_chars_from` und `replace_chars_to` berücksichtigt werden.

**Beispiel-Dateistruktur**

```
.
├── Hs-1234_01.jpg
├── Hs-1234_02.jpg
├── Hs-12351_01.jpg
└── Hs-12351_02.jpg
```

Beispiel-Befehl auf der Kommandozeile:

```bash
php importer-cli.php --parser=ImageByInvno --institution_id=1 --xmlfolder=XML --datafolder=IMG '--settings=mode:identify_counter_by_separator,,number_separator:_,,replace_chars_from:-,replace_chars_to:/'
```

Beispiel-Konfigurationsdatei für das selbstständige Importieren:

```
- mail: mail@example.org
- parser: ImageByInvno
- setting: mode: identify_counter_by_separator
- setting: number_separator: _
- setting: replace_chars_from: -
- setting: replace_chars_to: /
```

Unter diesen Bedingungen würden die Dateien den Objekten `Hs/1234` und `Hs/12351` zugeordnet.

## Weitere Einstellungen

Weitere Einstellungen, etwa zur Aktivierung der automatischen Transkription bei Drucken, stehen neben den oben beschriebenen Einstellungen zur Verfügung. Eine jeweils vollständige Liste kann über das WebDAV-Interface aufgerufen werden (siehe [Importe selbst durchführen](https://de.handbook.museum-digital.info/))

## Fußnoten

[^1]: Wichtig zu beachten ist, dass bei der Benutzung der Kommandozeile für das Importieren zwingend ein existierender Ordner für die Metadaten angegeben werden muss, auch wenn dieser beim ImageByInvno-Parser vollständig ignoriert wird. Existiert bisher kein Ordner, muss also einer angelegt werden, bevor die Kommandozeile zum Importieren mithilfe des Parsers genutzt werden kann.
