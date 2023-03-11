# BEACON

BEACON-Dateien sind einfache Text-Dateien, mit denen Konkordanzen zwischen zwei Repositorien abgebildet werden können. Sie werden üblicherweise im Kontext von kontrollierten Vokabularen und Normdaten eingesetzt.

Eine BEACON-Datei besteht aus einem Kopfteil, der die Datei selbst beschreibt - etwa einen Namen, eine Kontaktadresse, etc. für die gebildete Konkoranzliste beinhaltet, und einem Hauptteil, in dem die IDs der jeweiligen Repositorien mit einem bzw. zwei geraden Strichen (|`|`) getrennt voneinander gegenübergestellt werden.

Eine kurze BEACON-Datei zur Abbildung einer Konkordanz zwischen Gemeinsamer Normdatei (GND) und dem Schlagwortkatalog von museum-digital könnte also wie folgt aussehen:

```
#FORMAT: BEACON
#NAME: Controlled Vocabularies of museum-digital (md-de / tag) mapped to gnd
#TIMESTAMP: 2023-03-07T01:41:27Z
#PREFIX: https://term.museum-digital.de/md-de/tag/
#TARGET: http://d-nb.info/gnd/

1||4056366-2
```

Zuerst werden hier Format, Name der Datei, und die Zeit der Generierung der Liste spezifiziert. Es folgen die Angaben zum "Präfix" (`PREFIX`) und zum Ziel (`TARGET`), welche jeweils URL-Abschnitte sind, die den im Hauptteil genannten Werten vorangestellt werden.

Im Hauptteil steht die ID 1 der ID 4056366-2 gegenübergestellt. Das heißt, dass der Eintrag 1 im Schlagwortkatalog von museum-digital dem Eintrag mit der ID 4056366-2 in der GND entspricht. Allgemeingültig und eindeutig identifizierbar sind diese über ihre URLs, die jeweils durch das Anfügen des _Präfixes_ bzw. des _Ziels_ gebildet werden können. `https://term.museum-digital.de/md-de/tag/1` (_Präfix_ + 1) entspricht also `http://d-nb.info/gnd/4056366-2` (_Ziel_ + 4056366-2).

Bei museum-digital sind BEACON-Dateien einerseits über die Download-Sektion in [md:term](../../md-term/Downloads.md) und andererseits über die [Resolver in der Ausgabe](../../Ausgabe/misc/Resolver.md) erreichbar.

Mehr zu BEACON-Dateien findet sich auf der entsprechenden [Wikipedia-Seite](https://de.wikipedia.org/wiki/Wikipedia:BEACON).
