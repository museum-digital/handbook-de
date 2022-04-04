# FAQ

## Objekte veröffentlichen

### Ich habe ein Objekt veröffentlicht, aber es erscheint nicht in der Ausgabeseite!

Das kann mehrere Dinge bedeuten:

- _Das Objekt erscheint nicht in der bundesweiten / globalen Instanz_:
  Objekte werden in einer regionalen Instanz von museum-digital bearbeitet und veröffentlicht (also z.B. Sachsen-Anhalt). Dort sollten Sie sofort findbar sein. Die Synchronisierung in die bundesweite und globale Instanz geschieht entweder, wenn die Resourcenauslastung auf dem Server gerade sehr gering ist, oder am Abend. Wenn die Objekte also nicht sofort mit dem Veröffentlichen auch in der "übergeordneten" Instanz erscheinen, dann ist das aufgrund des Synchronisierungskonzeptes ganz normal.
  Wann die letzte Synchronisierung stattgefunden hat kann man in einer Instanz immer durch Anfügen von `/background_log` an die URL, also z.B. [https://nat.museum-digital.de/background_log](https://nat.museum-digital.de/background_log) für die Deutschlandweite Instanz herausfinden (Nicht wundern: Das Log wird sehr kurz und bündig und auf Englisch geschrieben).
- _Das Objekt erscheint nicht auf der ersten Trefferseite unter "Objekte anzeigen":_
  Die primäre Übersichtsseite für Objekte wird in regionalen Instanzen für 30 Minuten zwischengespeichert (in aggregierten Instanzen - also z.B. der Globalen - vier Stunden. In diesem Fall hilft ein bisschen Warten.
  Ist das Objekt schon länger in [musdb erfasst](../musdb/Objekte/), dann erscheint es wahrscheinlich deshalb nicht auf der ersten Seite. Solange keine textbasierte Suche vorgenommen wurde (die Objekte also, nicht nach Titel, Art, oder mit einer Volltextsuche gesucht werden), ist die Trefferliste standardmäßig nach der ID der Objekte - und damit nach dem Datum der initialen Erfassung in musdb - sortiert.

Das Objekt sollte sich auf jeden Fall mit einer gezielten Suche nach dem Objekt finden lassen.
