# Technischer Aufbau des Import-Tools

Technisch besteht das Import-Tool aus zwei zentralen Bereichen: Einem von allen Import-Scripten gemeinsam genutzten "Kern" und einem jeweils für die verschiedenen Importformate spezifischen "Parser". Durch diese Struktur werden sowohl das Abdecken von neuen Importformaten als auch die Sicherstellung der formellen Korrektheit der Daten wesentlich erleichtert.

## Der "Kern" des Import-Tools

Der "Kern" des Import-Tools bildet die Datenbankstruktur von museum-digital in einer von anderen Scripten einfach ansprechbaren Form ab, und ist für die Kommunikation des Imports mit der Datenbank zuständig. Er überprüft die eingehenden Daten ebenfalls auf formelle Korrektheit.

Formelle Korrektheit bedeutet in diesem Fall zum Beispiel die Benutzung der erlaubten Werte aus den bei museum-digital genutzten Listen von Lizenzen, Währungen, Längeneinheiten etc. Heißt die bei museum-digital "CC BY-NC-SA" und in den Import-Daten "CC-BY-NC-SA", dann wird laut den Importdaten eine formell nicht zugelassene Lizenz benutzt. Für gebräuchliche Fälle (wie z.B. das eben genannte Beispiel) verfügt der "Kern" über Korrekturlisten, sodass die Zuordnung doch gelingt. Ist der Begriff aber bisher auch in diesen Listen nicht bekannt, wird der Importvorgang abgebrochen, sodass die Daten entweder angepasst werden oder das Format in die jeweilige Liste mit Korrektur-Zuordnungen eingetragen werden kann.

Formelle Korrektheit bedeutet aber auch die Umsetzung der bei museum-digital geltenden Regeln im Bezug auf die Qualität der zu veröffentlichenden Daten. Bei museum-digital können standardmäßig keine Objekte ohne Abbildung veröffentlicht werden. Steht in den Importdaten, dass das Objekt _veröffentlicht_ werden soll, aber keine Referenz für Abbildungen des Objektes, erkennt der "Kern" dies automatisch und stellt sicher, dass das Objekt nur _nicht öffentlich_ importiert wird.

Der "Kern" erkennt zudem auf Basis der Inventarnummer, ob ein zu importierendes Objekt schon in den Daten des Museums in museum-digital erfasst ist. Ist das der Fall, wird der vorhandene Datensatz mit den Importdaten überschrieben, sonst wird ein neuer angelegt.

Bei all dem fungiert der "Kern" aber als Programmbibliothek: Er bietet keine eigene Oberfläche (ob Web-basiert oder auf der Kommandozeile), sondern muss durch andere Scripte benutzt werden.

## Parser

Der für jedes Import-Format spezifische Teil des Importers sind die "Parser". Diese sind zuständig für das Auslesen der Daten aus einem angegebenen Import-Ordner (also das auslesen einer CSV-, JSON- oder XML-Datei), und benutzen die verschiedenen vom "Kern" bereitgestellten Funktionen, um die im Import bereitgestellten Daten den jeweiligen Datenbankfeldern in museum-digital zuzuordnen. Dadurch, dass der "Kern" die sichere Kommunikation mit der Datenbank und die Überprüfung der eingehenden Daten übernimmt, können Programmierer sich beim Schreiben eines neuen Parsers ganz auf das vorhandene Importformat und die Festlegung der Zuordnungen konzentrieren. Die meisten Parser geraten so zu recht kurzen und schnell geschriebenen Scripten.

