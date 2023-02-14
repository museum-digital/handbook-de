# Liste der Exportformate

```admonish info
Hier besprochen werden nur die über die Standard-XML-Exportfunktion erreichbaren XML-Exportformate. Zum Export für Excel und andere Tabellenkalkulationsfunktionen, siehe [Listendruck](../Objektsuche/Listendruck.md). Über die [Einstellungen für das Museum](../Museum/Einstellungen.md) lassen sich des weiteren eigene Exportformate formulieren.

Die Daten lassen sich ebenfalls - mühsamer, aber flexibler - über die [API](../API/) exportieren oder direkt verwenden.
```

| Name         | Anwendungszweck                                | Notiz    |  Beispielexport |
|--------------|------------------------------------------------|----------|-----------------|
| md:xml       | Datensicherung                                 | Dieser nicht-standartisierte XML-Export folgt sehr nah der Datenbankstruktur von museum-digital und ist auf ein besonders vollständiges Exportieren hin ausgerichtet. | [Hier](../../assets/samples/Sample-Exports/sample-export-mdxml.xml) |
| LIDO 1.0     | Datenaustausch mit anderen Museen und Portalen | [LIDO](../../misc/Formate/XML/LIDO.md) ist ein weit verbreitetes Austauschformat für Objektdaten. | [Hier](../../assets/samples/Sample-Exports/sample-export-lido-1.0.xml) |
| LIDO 1.1     | Datenaustausch mit anderen Museen und Portalen | [LIDO 1.1](../../misc/Formate/XML/LIDO.md) ist die neue Version des mittlerweile über 10 Jahre alten LIDO-Standards, die 2021 veröffentlicht wurde. Damit ist die neue Version noch von deutlich weniger Austauschpartnern unterstützt, aber das mag sich bald ändern | [Hier](../../assets/samples/Sample-Exports/sample-export-lido-1.1.xml) |
| EODEM 0.08   | Datenaustausch bei Leihverkehren               | [EODEM](../../misc/Formate/XML/EODEM.md) ist ein auf LIDO basierender Standard für den Austausch von Objektinformationen im Rahmen von Leihverkehren. Während LIDO sehr auf veröffentlichbare Objektinformationen ausgerichtet ist, ergänzt EODEM für den Leihverkehr relevante Datenfelder wie z.B. Konservierungsinformationen (Notizen zur Sicherheit, Gefahrenpotential, Max. Lux) | [Hier](../../assets/samples/Sample-Exports/sample-export-eodem.xml) |
