# Concordance Checker

Beim importieren zu museum-digital kommt es immer zu Abbrüchen wegen bisher nicht zugeordneter Werte in kontrollierten Feldern. Das ist unbedingt gewollt - liegt in den Importdaten ein Zugangstyp "Eingekaauft" (mit Rechtschreibfehler) vor, dann ist der bei museum-digital in dieser Form wahrscheinlich nicht verfügbar. Stattdessen muss der Wert dem bei museum-digital verfügbaren "Ankauf" zugeordnet werden.

Mit dem Concordance Checker können User alle in einem Feld verfügbaren Werte getrennt durch Zeilenumbrüche gegen die bisherigen Konkordanzlisten prüfen. Sind Werte bisher noch nicht gemappt, lassen sich die Konkordanzen mit einer graphischen Oberfläche bilden. Am Ende erhält man so den Code um die in PHP geschriebenen Konkordanzlisten zu erweitern.

Das Tool ist erreichbar unter <https://concordance.museum-digital.org>.

Der Source Code des Tools ist unter <https://gitea.armuli.eu/museum-digital/concordance-checker> MIT-lizensiert verfügbar.
