# Provenienzforschung in musdb abbilden

museum-digital:musdb bietet eine Reihe von Funktionen, mit denen sich verschiedene Aspekte der Provenienzforschung abbilden lassen. Wichtig zu beachten ist dabei, welche Informationen konkret zu veröffentlichen sind und welche intern bleiben sollten (etwa aufgrund von Persönlichkeitsrechten).

## Strukturierte Erfassung mit Ereignissen

Der Arbeitskreis Provenienzforschung definiert vier grundlegende Datenpunkte für einen Eintrag zur Objektgeschichte. Wer hat das Objekt wann und wo besessen - und woher weiß ich das. Also: Akteur, Ort, Zeit und Quelle. Diese Struktur entspricht exakt einem [Ereignis](../../Objekte/Registerkarten-Standard/Basis.md#verknüpfung-mit-ereignis) bei museum-digital.

```admonish warn
Um Quellverweise für Ereignisse eingeben zu können muss die entsprechende Einstellung im Bereich ["Einstellungen für das Museum"](../../Museum/Einstellungen.md) in musdb aktiviert sein.
```

Möchte man also Provenienzinformationen strukturiert und gut findbar erfassen und veröffentlichen, sind Ereignisse das Mittel der Wahl.

Wichtig zu beachten ist, dass Ereignisse bei einer Veröffentlichung des Objektes immer öffentlich sind.

## Nuancen beschreiben: "Ausführliche Beschreibung" und "Objektgeschichte"

Sollen kurze, schriftliche Provenienzvermerke zu einzelnen Objekten in Sätzen statt als strukturierte Daten erfasst und gegebenenfalls veröffentlicht werden, bieten sich dafür die Felder "Ausführliche Beschreibung" und "Objektgeschichte" auf den Reitern "[Zusatz](../../Objekte/Registerkarten-Standard/Zusatz.md)" bzw. "[Verwaltung](../../Objekte/Registerkarten-Standard/Verwaltung.md)" an. Die Erfassung in Textform erlaubt eine nuanciertere Ausdrucksweise als es die Ereignisform zuliese. Andererseits sind die Felder "Ausführliche Beschreibung" und "Objektgeschichte" reine Textfelder, die sich nur mit Volltextsuchen durchsuchen lassen.

Der zentrale Unterschied zwischen den beiden Feldern liegt in ihrer Veröffentlichbarkeit. Während das Feld "Objektgeschichte" ein rein intern ausgespieltes Feld ist, kann das Feld "Ausführliche Beschreibung" gezielt veröffentlicht werden.

## Lange, interne Forschungsberichte zu einzelnen Objekten: Der Reiter "Provenienzforschung"

Mithilfe des Reiters "Provenienzforschung" lassen sich ganze mehrseitige Berichte oder aktuelle Forschungsfortschritte zu einzelnen Objekten speichern. Die hier erfassten Berichte sind nicht veröffentlichbar.

## Intern: "Erwerb" und "Vorbesitzer"

Vor allem für die Verwaltung ist der direkte Vorbesitzer und sind die direkten Umstände des Erwerbs eines Objektes von Interesse, auch abseits der Provenienzforschung. Besonders das Zusammenfassen mehrerer Objekte in einen Erwerbungsvorgang kann allerdings auch für die Provenienzforschung nützlich sein - etwa bei Konvolutankäufen, bei denen es keinen gesondert ausgeschriebenen Preis für die einzelnen Objekte gab.

Über den Reiter "Verwaltung" lassen sich Objekte mit solchen [Erwerbungsvorgängen](../../Erwerbungen/) verknüpfen. Ebenfalls hier lassen sich auf Objektebene Vorbesitzer, Erwerbungsort, etc. eintragen. Gerade, wenn Erwerbungen im Konvolut im Museum vorgekommen sind, ist die Erfassung als gesonderter Erwerbungsvorgang jedoch unbedingt empfelenswert.

Wie das Feld "Objektgeschichte" lassen sich Erwerbungsvorgänge nicht veröffentlichen.

## Beschreibung vieler Objekte: Artikel

Eine zugegeben bisher wenig genutzte Funktion von musdb und der Ausgabe von museum-digital ist die Artikel-Funktion. Mit dieser können primär wissenschaftliche Artikel über einen WYSIWYG-Editor erfasst und veröffentlicht werden. Objekte lassen sich dabei über Platzhalter in den Text einfügen und mit diesem verknüpfen.

Die Artikelfunktion bietet damit eine Möglichkeit  Provenienzgeschichten - besonders von Konvoluten - detailliert zu beschreiben und zu veröffentlichen. Ihr Einsatz ist allerdings erst bei ausführlicheren Texten oder beim Beschreiben der gemeinsamen Provenienz vieler Objekte sinnvoll.

## Danksagung

Provenienzforschung geschieht oft im Rahmen von extern geförderten Projekten. Eine Nennung der Mittelgeber ist mithilfe der "Danksagung" auf dem Reiter "[Zusatz](../../Objekte/Registerkarten-Standard/Zusatz.md)" erfassbar und veröffentlichbar.
