# museum-digital:qa

museum-digital:qa bietet einen einen allgemeinen, öffentlichen Zugang zu den Datenqualitätschecks aus [musdb](../../musdb/README.md). Um Daten aus möglichst vielen Quellen auslesen und auswerten zu können wird dabei der zum Auslesen der Daten relevante Code des Import-Tools nachgenutzt. So können Daten sowohl in LIDO als auch in den software-spezifischen Exportformaten von verschiedenen Sammlungsmanagementlösungen geliefert werden. Die Ausgabe geschieht wahrweise über eine Weboberfläche oder eine API.

## Unterstützte Checks

### Aus musdb

- Publikationsqualitätsindex
- Plausibilitätsprüfung
- Plausibilitätsprüfung für Rechteangaben

### Zusätzliche Checks

- Check auf Vollständigkeit der Objektdaten nach den Vorgaben der [AG Minimaldatensatz](http://minimaldatensatz.de/).

Erreichbar ist es unter <https://quality.museum-digital.org/>.
