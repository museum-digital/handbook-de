# Bereinigung und Angleichung der Importdaten

Beim Importieren sind zwangsläufig immer wieder bisher unbekannte Werte in den Daten zu finden.

Bei Feldern wie Längeneinheiten oder Lizenzangaben kann das über einfache Korrekturlisten gelöst werden. "cn" ist bei Längeneinheiten ein Rechtschreibfehler, und sollte eigentlich "cm" sein. "CC-BY-NC-SA" heißt bei museum-digital "CC BY-NC-SA". Dasselbe gilt für [Ereignistypen](../Grundkonzepte/Ereignistypen.md), die in vielen anderen Programmen für die Inventarisierungsdaten über Rollenangaben für Personen abgebildet werden: Ist der Akteur bei der Herstellung als Maler gekennzeichnet, heißt das, dass es sich um ein "wurde Gemalt"-Ereignis handelt. Alle diese Beispiele haben in museum-digital vorgegebene Listen von erlaubten Werten, bei denen anderslautende Angaben als Fehler gewertet werden. Andererseits ist die Menge der von den bei museum-digital erlaubten Werten abweichenden Angaben überschaubar.

Ganz anders verhält es sich mit importierten Akteuren, Orten, Zeiten und Schlagworten. Hier wird museum-digital mit Sicherheit niemals Vollständig sein, und viele bisher unbekannte Einträge sind korrekt und sinnvoll.

Und doch sind es eben auch viele nicht - oder sie sind tatsächlich eigentlich schon bekannt. Um doch die richtigen Zuordnungen zu finden und die Einträge gleich so korrekt wie möglich zu importieren, werden verschiedene Methoden zur (halb-)automatischen Bereinigung eingetzt, von denen viele mittlerweile auch Einzug in musdb gehalten haben.

## Importieren nach Linked-Open-Data-IDs

Im Idealfall werden in den Importdaten schon Bezüge zu anderen Normdatenrepositorien wie Wikidata, den Library of Congress Subject Headings oder der Gemeinsamen Normdatei (GND) angegeben.

In diesem Fall werden die angegeben Bezüge mit den bei museum-digital schon erfassten Bezügen abgeglichen. Ist im den Importdaten dieselbe Referenz zur GND zu finden wie im Personenvokabular von museum-digital, handelt es sich um dieselbe Person.

Sind - wie bei den meisten Importen - keine Bezüge zu externen Normdatenrepositorien vorhanden, muss der angegebene Name (bei Personen: Name und Lebensdaten) als Basis für das Auffinden schon erfasster Begriffe genutzt werden.

## Vollständig automatische Korrekturen und Angleichungen

In einigen Fällen lassen sich Einträge durch automatische Korrekturen zuordnen oder gleich vollständig anreichern.

Ein erster Schritt in diese Richtung ist das allgemeine Entfernen von Leerzeichen am Anfang und Ende aller Eingaben.

Danach werden die Eingaben darauf geprüft, ob sie in den Listen der gesperrten Begriffe verzeichnet sind. Die Angabe von "_Unbekannt_" oder "_Sonstige_" ist etwa in allen vier Vokabularen verboten. Ist die Eingabe in den jeweiligen Sperrlisten verzeichnet, wird sie beim Import ignoriert.

Ist sie es nicht, folgt die Überprüfung auf Marker für Unsicherheit. Ist die Ortsangabe in den Importdaten etwa "`Berlin?`", wird das Fragezeichen am Ende des Namens automatisch als Zeichen für die Unsicherheit der Angabe erkannt. Die Ortsangabe wird in den Ortsnamen "`Berlin`" geändert, und kann so dem schon bekannten Ort Berlin zugeordnet werden. Die Ortsbeziehung wird dann als "unsicher" markiert.

Einen Sonderfall stellen Zeitbegriffe dar, die allgemein fast standardisiert gebraucht werden. Für diese gibt es eine wesentlich weitergehende Autokorrektur, die bekannte Varianten von Datumsangaben automatisch angleicht. "`1. Februar 1922`" kann so etwa automatisch zum in museum-digital gebräuchlichen Format "`01.02.1922`" umgewandelt werden.

## Korrekturen der Normdatenredaktion nachhaltig machen

In vielen Fällen helfen aber auch die vollautomatischen Bereinigungen nicht, um schon bekannte Einträge zu identifizieren. Ein klassisches Beispiel hierfür sind Titel bei Akteursangaben (bei museum-digital werden Personen ohne Titel erfasst): Fedor Jagor ist bei museum-digital erfasst. Steht in den Importdaten "Professor Fedor Jagor", wird das als neue Person ins Personenvokabular importiert.

Die Normdatenredaktion vereinigt beim Bereinigen der Daten den neuen Datensatz mit dem Alten. Bei diesem Vereinigen kann über das Drücken eines Buttons eingetragen werden, dass diese Vereinigung auch für alle neuen Eingaben gelten soll. Sollte jemand wieder versuchen, "Professor Fedor Jagor" einzugeben oder zu importieren, wird ab jetzt immer der Eintrag von Fedor Jagor gefunden und zugeordnet.

Aber selbst wenn dieser Button nicht gedrückt wurde, werden Verschmelzungen von Einträgen für Importe eines Hauses geloggt und festgeschrieben. Das ist hilfreich bei Eingaben wie "Frankfurt". Es könnte Frankfurt am Main sein, aber vielleicht auch Frankfurt an der Oder. Welches Frankfurt wirklich gemeint ist, wird sich von Benutzer zu Benutzer unterscheiden - aber es ist eine gerechtfertigte Annahme, dass die Benutzung innerhalb eines Museums konsistent erfolgt. Ein Museum in Frankfurt am Main wird mit "Frankfurt" sicher immer "Frankfurt am Main" meinen.

 Wird das unzulässig verkürzte "Frankfurt" also mit "Frankfurt am Main" verschmolzen, um alle mit "Frankfurt" verknüpften Daten mit "Frankfurt am Main" zu verknüpfen, wird gespeichert, dass im importierenden Museum "Frankfurt" gleichbedeutend zu "Frankfurt am Main" ist. Bei zukünftigen Importen desselben Museums wird "Frankfurt" automatisch durch "Frankfurt am Main" ersetzt.
