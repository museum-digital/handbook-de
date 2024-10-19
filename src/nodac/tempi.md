# nodac: Zeiten

Hinweise zum Umgang mit Zeitbegriffen im nodac-Werkzeug.

## "Umrechnungstabelle" ##

nodac baut auf konkrete Zeitbegriffe. "Schwammige" Begriffe, wie "Anfang 19. Jahrhundert" werden möglicherweise von jedem anders gedeutet. Es ist stets besser Zahlen zu verwenden, also "1701-1800" statt "18. Jahrhundert". Die Verwendung von möglichst vielen Zahlen reduziert die Redundanzen, bei textlichen Eingaben kann es leicht passieren, dass der eine Kollege eingibt "19. Jahrhundert", der nächste "19. Jh", die Kollegin dagegen "19. Jh." und der Praktikant: "19Jh". Im Hintergrund können zwar viele von solchen Angaben auf gleiche Zahlenwerte zurückgeführt werden, doch das gelingt nicht immer. Ein weiterer Vorteil von Zahlen zur Zeitbennung ist die automatische Bestimmung von Anfang und Ende, falls diese nicht separat erfasst werden. Hinzu kommt die Möglichkeit der automatischen Übersetzung, in verschiedenen Schriftkulturen werden Zeitangaben durchaus verschieden dargestellt.

Für die nodac-Bearbeiter ist, vor allem nach einem Import, oft einige Bereinigungsarbeit nötig, um zu Zeitangaben in Zahlform zu kommen. Dabei finden folgende Regeln Anwendung:

### Positive/Negative Werte ###

Bei negativen Werten, also Zeiträumen oder -punkten, die vor dem Jahre Null liegen wird "v. Chr." (mit Leerzeichen) für den entsprechenden Teilbegriff verwendet, liegen beide Teilbegriffe vor dem Jahre Null, so wird nur ans Ende des Eintrags ein "v. Chr." angefügt. Beispiele: "825-805 v. Chr.", "25 v. Chr.-25 n. Chr.", "5 v. Chr.-1005"
Bei positiven Werten, also Zeiträumen oder -punkten, die nach dem Jahre Null liegen, wird ein Teilbegriff, der kleiner als 1000 ist, mit "n. Chr." (mit Leerzeichen) ergänzt. Sind beide Teilbegriffe kleiner als 1000, so wird hinter beide ein "n. Chr." angefügt. Beispiele: "427-475 n. Chr.", "875 n. Chr.-1125" und "1225-1289".


### Jahrhunderte ###

Beginn: Jahrhunderte beginnen mit dem Jahr 01, d.h. 19. Jahrhundert beginnt mit 1801
Ende: Jahrhunderte enden mit dem Jahr 00, d.h. 19. Jahrhundert endet mit 1900
"Anfang", "Ende" und "Mitte" sind mit 20 Jahren umzurechnen, also "Anfang 19. Jahrhundert" ==> 1801-1820, "Mitte 19. Jahrhundert" --> 1840-1860, "Ende 19. Jahrhundert" --> 1880-1900.
"Erste Hälfte" wird umgerechnet bis zur Mitte, d.h. "Erste Hälfte 19. Jahrhundert" ==> 1801-1850
"Zweite Hälfte" wird umgerechnet ab Mitte plus 1, d.h. "Zweite Hälfte 19. Jahrhundert" ==> 1851-1900
"Erstes Drittel" wird umgerechnet bis [xx]33, d.h. "Erstes Drittel 19. Jahrhundert" ==> 1801-1833
"Zweites Drittel" wird umgerechnet bis [xx]67, d.h. "Zweites Drittel 19. Jahrhundert" ==> 1834-1867
"Drittes Drittel" wird umgerechnet ab [xx]68, d.h. "Drittes Drittel 19. Jahrhundert" 00> 1868-1900
Entsprechend gilt für "Viertel": 1. 01-25, 2. 26-50, 3. 51-75, 4. 76-00. "Drittes Viertel 17. Jahrhundert" wird also zu 1651-1675



## YouTube-Video zu Zeiten in nodac

<div class="yt-embed" data-src="https://www.youtube-nocookie.com/embed/AdmcvhwGROc">
<b>Anleitung auf Youtube</b><br />
Mit einem Klick wird das Video geladen. Damit werden andererseits ihre Daten mit Youtube geteilt.
</div>
