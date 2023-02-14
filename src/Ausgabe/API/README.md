# API

## Generelles

APIs und alternative Ausgabeformate sind über ein hinzufügen von &output=format an eine gegebene URL erreichbar. Unten finden Sie eine Liste der verfügbaren APIs und Exportoptionen, abgesehen von RSS-Feeds.

Alle APIs sind auch über das Kontextmenü (<kbd>CTRL+Right Click</kbd>) und die Tastensteuerung (<kbd>CTRL+e</kbd>) auf der korrespondierenden HTML-Seite verfügbar.

Wir würden uns freuen, wenn Sie uns über Benachrichtigen könnten, falls Sie die API benutzen, damit wir bei Änderungen schnell Bescheid sagen können.

## JSON API

Museum-Digital bietet JSON APIs für alle zentralen Seiten:

- Alle Museen
- Alle Sammlungen
- Objekt-Suchergebnisse (Beispiel)
- Verfügbare Daten zu einem Objekt (Beispiel)
- Verfügbare Daten zu einer Institution (Beispiel)
- Verfügbare Daten zu einer Sammlung (Beispiel)
- Verfügbare Daten zu einer Objektgruppe (Beispiel)
- Texte auf der Startseite
- Kontakt

## Weitere Export-Optionen

Einige Seiten bieten erweiterte Exportoptionen.

| Seite                | Zweck                                                    | Beispiel                                              | Format / mime-type          |
|----------------------|----------------------------------------------------------|-------------------------------------------------------|-----------------------------|
| Einzelinstitution    | vCard (digitale Visitenkarte) einer Institution          | Beispiel: Kontakt der Institution mit ID 1            | .vcf / text/vcard           |
| Einzelinstitution    | Kalender für alle Ausstellungen einer Institution        | Beispiel: Ausstellungen der Institution mit ID 1      | .ics / text/calendar        |
| Einzelne Ausstellung | Kalendereintrag für eine Ausstellung                     | Beispiel: Ausstellung mit ID 1                        | .ics / text/calendar        |
| Einzelnes Objekt     | BibTeX-Export für Referenzieren einer Objektseite        | Beispiel: Objekt mit ID 1                             | .bib / application/x-bibtex |
| Einzelnes Objekt     | BibTeX-Export für alle Literatureinträge eines Objektes  | Beispiel: Verknüpfte Literatur des Objektes mit ID 1  | .bib / application/x-bibtex |

## Bisherige API-basierte Entwicklungen

Eine Liste der bisher auf Basis der API entwickelten Anwendungen und Integrationen mit anderen Tools findet sich [am Ende dieses Handbuchs](../../misc/API-basierte-Anwendungen.md).
