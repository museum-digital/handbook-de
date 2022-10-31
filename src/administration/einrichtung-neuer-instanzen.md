# Einrichtung neuer Instanzen

## Schritte

- Anlegen der MySQL-Datenbank
- Anlegen der Instanz in den zentralen Listen
  - nginx-Konfiguration
  - PHP-FPM-Konfiguration
  - Zentralen Datenspeicher mounten
- Einrichten der Instanz (`git clone`)
  - Konfiguration schreiben
  - Git Submodules initialisieren und synchronisieren
- Neu-Generieren von Stored Procedures
- Generieren des Objekt-Suchindexes in musdb und der Ausgabe
- Zusätzliche Libraries via `composer` installieren

## Zusätzliche Schritte

- Registrieren der Instanz in groupit
- Anpassen der Liste der synchronisierten Instanzen in übergeordneten (also, z.B. das Registrieren der regionalen Instanz in der jeweiligen nationalen Instanz)
- Registrieren der Instanz in nodac
