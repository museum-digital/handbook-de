# Resolver

Der Resolver bietet einen Einstieg in die veröffentlichten Daten einer Instanz von museum-digital auf Basis externer IDs. Dazu werden verschiedene Einstiegstiefen geboten:

`https://brandenburg.museum-digital.de/resolver`

Die Startseite des Resolvers - erreichbar, wenn keine weiteren, spezifizierenden URL-Parameter eingegeben werden - stellt ein Textdokument dar, dass in die Benutzung des Resolvers einführt.

`https://brandenburg.museum-digital.de/resolver/actor`

Das Anfügen eines der gelisteten Ziele des Resolvers (etwa `actor` oder `place`) listet die Quellen der möglichen externen IDs auf. Diese können als nächster URL-Parameter genutzt werden.

`https://brandenburg.museum-digital.de/resolver/actor/gnd`

Mit dem zusätzlichen Anfügen der zu vergleichenden Quelle externer IDs (im Beispiel: `gnd`) wird eine BEACON-Datei generiert, mit der die Konkordanzen zwischen den beiden Repositorien (hier: Personenverzeichnis bei museum-digital und der _Gemeinsamen Normdatei_) nachvollzogen werden können.

`https://brandenburg.museum-digital.de/resolver/actor/gnd/4077491-0`

Durch das zusätzliche Anfügen der ID im externen Repositorium wird man zur entsprechenden Seite in der gegebenen Instanz von museum-digital weitergeleitet (hier: <https://brandenburg.museum-digital.de/people/1>).
