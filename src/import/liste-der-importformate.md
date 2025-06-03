# Liste der importierbaren Formate

In der folgenden Tabelle findet sich eine Liste der bisher vorhandenen "Parser" für die verschiedenen Formate von importierbaren Eingangsdaten.

Nur, weil ein Parser für die Exportdaten eines gegebenen Programms oder für einen gegebenen Austauschstandard besteht, heißt das nicht automatisch, dass die Daten immer korrekt und vollständig importiert werden. Gerade bei Austauschstandards wie LIDO gibt es oft substanzielle Unterschiede in der Interpretation des Standards durch verschiedene Programmierer, sodass die importierten Daten nach dem Importieren dringend noch einmal geprüft werden sollten.

Eine Abhilfe kann hierbei eine eingebaute Vollständigkeitsprüfung liefern, die in einigen Parsern eingebaut ist. Sind am Ende des Imports eines Objektes noch nicht spezifizierte Datenfelder vorhanden, wird in diesem Fall der Import abgebrochen und das Ergänzen des Parsers erzwungen. Ob eine solche Vollständigkeitsprüfung aber realistisch eingebaut werden kann, hängt auch stark vom Format der gegebenen Eingangsdaten ab. Je verschachtelter das Format, desto schwerer ist die Umsetzung der Vollständigkeitsprüfung. Ob ein Parser eine automatische Vollständigkeitsprüfung bietet ist in der Tabellenspalte _Prüfung_ zu sehen.

| Name                       | Datenformat | Prüfung   | Notiz     |
|----------------------------|-------------|-----------|-----------|
| Adlib / Axiell Collections | XML         | Ja        | Für die XML-Exportdaten aus [Axiell Adlib / Axiell Collections](https://www.axiell.com/de/loesungen/produkt/adlib/). Arbeitet am besten mit dem "gruppierten" Export von Adlib / Axiell Collections. |
| Adlib / Axiell Collections | CSV         | JA        | Parser für CSV-Exportdaten aus [Axiell Adlib / Axiell Collections](https://www.axiell.com/de/loesungen/produkt/adlib/).                  |
| Beecollect (2022)          | XML         | Teilweise | Ein Parser für Becollect-Exporte der sächsischen Industriemuseen, die ein sehr anderes Format als die vorherigen haben. Ansonsten: siehe oben. |
| csvxml                     | XML         | Ja        | Der Referenz-Parser für das [Standard-Importformat](./CSVXML.md) von museum-digital. |
| csvxml_json                | JSON        | Ja        | Eine JSON-basierte Variante des CSVXML-Formats. |
| First Rumos                | XML         | Ja        | [First Rumos](https://www.firstrumos.de) hat einen Eingaben Export-Schalter für museum-digital. Dieser Parser importiert die so exportierten Daten. |
| HiDa                       | XML         | Ja        | Parser für den Standard-Export der Daten aus [HiDa](https://www.startext.de/produkte/hida) in der Konfiguration der Sächsischen Landesstelle für das Museumswesen. |
| IKMK                       | JSON        | Ja        | Parser für die `json_ext`-Exportdaten aus den verschiedenen Instanzen des "Interaktiven Katalog des Münzkabinetts". |
| imdas pro (lmw)            | XML         | Nein      | Parser für die Export-Daten des [Landesmuseums Württemberg](https://www.landesmuseum-stuttgart.de/). Ob sich der Parser auch für die Exporte aus anderen Instanzen von Imdas Pro benutzen lässt, ist bisher unbekannt |
| Johann@Hilf                | CSV         | Ja        | Johann@Hilf war der Vorgänger von Primus und arbeitete auf Basis von MS-Access. Der Johann@Hilf-Parser arbeitet mit einem CSV-Export der Access-Datenbank. |
| Primus                     | XML         | Ja        | Parser für die aus [Primus](https://www.landesstelle.de/service/primus/) exportierten Daten. Deckt die Felder eines Gesamt-Exports ab. |
| Robotron Daphne            | CSV         | Ja        | Parser für Daten aus dem Standard-Export von Robotron Daphne. |
| LIDO                       | XML         | Teilweise | Parser für nach dem Austauschstandard [LIDO](../misc/Formate/XML/LIDO.md) geformte Daten. Es werden sowohl LIDO 1.0 als auch LIDO 1.1 unterstützt. Der gerade in Entwicklung befindliche [EODEM-Standard](../misc/Formate/XML/EODEM.md) wird als Erweiterung von LIDO ebenfalls vom LIDO-Parser abgedeckt (derzeit funktional mit EODEM 0.08). |

Dazu gibt es generische Parser, die für jeden Import neu angepasst werden müssen, aber eine gute Grundlage für sehr einfache Importe - wie zum Beispiel einfache, zuvor in Excel gepflegte Standortlisten - bieten:

| Name                       | Datenformat          | Prüfung | Notiz                                                                                                                                 |
|----------------------------|----------------------|---------|-------------------------------------------------------------------------------------------------------------------------------------|
| csv                        | CSV                  | Ja      | Importiert gegebene Daten (welche muss für jeden Import neu definiert werden) nach Inventarnummer.                                                                                                                       |
| Bilder nach Inventarnummer | Keines / Dateisystem | Nein    | Benutzt die Dateinamen, um Bilder stapelweise zu schon erfassten Objektdatensätzen zu importieren. Die Inventarnummern müssen dabei am Anfang des Dateinamens stehen und alle zu importierenden Bilder müssen im selben Ordner (ohne Unterordner) vorliegen. |

Einige Parser sind spezifisch für sehr selten benutzte Import-Formate geschrieben worden und wurden deshalb im Zuge einer größeren architekturellen Anpassung des Importmoduls im Mai 2022 - die etwa eine wesentlich bessere Testbarkeit der Parser ermöglicht und Grundlegend für die Möglichkeit, Importe selbst durchzuführen, war - noch nicht in das aktuell notwendige Format überführt. Da die Importlogik aber gleich bleibt, ließen sie sich bei Bedarf schnell für die aktuell benötigte Code-Struktur anpassen.

| Name                  | Datenformat | Prüfung   | Notiz     |
|-----------------------|-------------|-----------|-----------|
| Beecollect (2019)     | XML         | Nein      | Für die Exportdaten aus Solvatecs [Beecollect](http://www.solvatec.com/index.php?id=21). Beecollect-Parser müssen erfahrungsgemäß für jedes importierende Museum stark angepasst werden. |
| First Rumos (CSV)     | CSV         | Ja        | Ein Parser für die über den CSV-Export von [First Rumos](https://www.firstrumos.de) exportierten Daten. |
| Google Arts & Culture | CSV         | Ja        | Parser für CSV-Daten, wie sie von [Google Arts & Culture](https://artsandculture.google.com/) exportiert werden. |
| GOS                   | XML         | Nein      | Ein Parser für einen XML-Export der Daten des [Deutsch Russischen Museums in Berlin-Karlshorst](https://www.museum-karlshorst.de/). Inwiefern der Parser für andere Importe von GOS-Daten genutzt werden kann ist bisher unbekannt. |
| Museo                 | SQL         | Nein      | Parser für die seinerzeit für die Museen der Lausitz enwickelte Datenbank "Museo". |
| SRU-MODS              | XML         | Ja        | Parser, der die Daten eines Hauses über eine externe SRU-Schnittstelle ausließt und importiert. Unterstützt bisher nur Metadaten. Entwickelt auf Basis von und optimiert für die SRU-Schnittstelle von [Kalliope](https://kalliope-verbund.info/). |
