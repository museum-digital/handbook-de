# Konsistenzprüfungen

- Weisen auf unsaubere Daten hin
- Erreichbar über das Werkzeuge-Menü in der Navigation (Puzzle-Symbol in der Navigation)
- Sollten vor dem Aktivieren der "Strict Modes", die die Eingabe unsauberer Daten in diesen Fällen unmöglich machen, unbedingt angeschaut und durchgearbeitet werden

## Doppelte Inventarnummern

In manchen Häusern werden Inventarnummern auf Sammlungsebene vergeben, sodass es in diesen Fällen tatsächlich gewünscht doppelte Inventarnummern im selben Haus geben kann. Deshalb warnt musdb bei der Eingabe eines Objektes mit einer schon bekannten Inventarnummer, aber lässt zu, dass diese Warnung ignoriert wird.

Bei den allermeisten Museen sind doppelte Inventarnummern aber unerwünscht. Durch das Aktivieren des entsprechenden Strict Modes in den Einstellungen für das Museum kann die Warnung durch einen vollständigen Abbruch bei Eingabe eines doppelten Objektes ersetzt werden. Aber vielleicht existieren ja schon doppelte Inventarnummern in den Bestandsdaten.

![Screenshot](../../assets/musdb/weiteres/Konsistenzcheck-doppelte-Invno.avif)

## Nicht numerische Zahlenangaben; nicht auslesbare Datumsangaben

![Screenshot](../../assets/musdb/weiteres/Konsistenzcheck-nicht-valide-Datumsangaben.avif)
