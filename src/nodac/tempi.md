# nodac: Zeiten

Hinweise zum Umgang mit Zeitbegriffen im nodac-Werkzeug.

## "Umrechnungstabelle" ##

nodac baut auf konkrete Zeitbegriffe. "Schwammige" Begriffe, wie "Anfang 19. Jahrhundert" werden möglicherweise von jedem anders gedeutet. Es ist stets besser Zahlen zu verwenden, also "1701-1800" statt "18. Jahrhundert". Die Verwendung von möglichst vielen Zahlen reduziert die Redundanzen, bei textlichen Eingaben kann es leicht passieren, dass der eine Kollege eingibt "19. Jahrhundert", der nächste "19. Jh", die Kollegin dagegen "19. Jh." und der Praktikant: "19Jh". Im Hintergrund können zwar viele von solchen Angaben auf gleiche Zahlenwerte zurückgeführt werden, doch das gelingt nicht immer. Ein weiterer Vorteil von Zahlen zur Zeitbennung ist die automatische Bestimmung von Anfang und Ende, falls diese nicht separat erfasst werden. Hinzu kommt die Möglichkeit der automatischen Übersetzung, in verschiedenen Schriftkulturen werden Zeitangaben durchaus verschieden dargestellt. Fachspezifische Verbalisierungen von Zeiträumen, wie etwa "22. Dynastie (Ägypten)" lassen (wenn Beginn und Ende nicht genannt werden) nicht erkennen, ob für diesen Zeitraum vielleicht auch Objekte aus anderen Weltteilen vorhanden sind. Solche Spezifika stehen einem Erkenntnisgewinn (beispielsweise parallele Entwicklungen in Design oder Farbverwendung) entgegen, der durch die Reduzierung auf Zahlenwerte leicht zu ermöglichen ist.

Für die nodac-Bearbeiter ist, vor allem nach einem Import, oft einige Bereinigungsarbeit nötig, um zu Zeitangaben in Zahlform zu kommen. Dabei finden folgende Regeln Anwendung:

### Jahreszahl ausschreiben ###
Damit automatische Berechnungen möglich werden sind Zeitbegriffe immer auszuschreiben, also nicht "1650-52" oder "1650/52" sondern 1650-1652. Ebenso gilt, keine Punktuation einzuführen, die vielleicht die Lesbarkeit erhöht jedoch erschwert, mit den angegebenen Zahlenwerten zu rechnen, d.h. "40.000-10.000 v. Chr." ==> 40000-10000 v. Chr.

### Leerzeichen vermeiden ###
Auf nicht notwendige Leerzeichen sollte verzichtet werden. Also nicht "31. 03. 1954 - 02. 04. 1955" sondern: "31.03.1954-02.04.1955", insbesondere der Trennstrich zwischen Beginn und Ende sollte nicht von Leerzeichen engeraähmt sein.

### Positive/Negative Werte ###
Bei negativen Werten, also Zeiträumen oder -punkten, die vor dem Jahre Null liegen wird "v. Chr." (mit Leerzeichen) für den entsprechenden Teilbegriff verwendet, liegen beide Teilbegriffe vor dem Jahre Null, so wird nur ans Ende des Eintrags ein "v. Chr." angefügt. Beispiele: "825-805 v. Chr.", "25 v. Chr.-25 n. Chr.", "5 v. Chr.-1005"
Bei positiven Werten, also Zeiträumen oder -punkten, die nach dem Jahre Null liegen, wird ein Teilbegriff, der kleiner als 1000 ist, mit "n. Chr." (mit Leerzeichen) ergänzt. Sind beide Teilbegriffe kleiner als 1000, so wird hinter beide ein "n. Chr." angefügt. Beispiele: "427-475 n. Chr.", "875 n. Chr.-1125" und "1225-1289".
Die Marker für "v. Chr." und "n. Chr." sind von den Zahlenwerten durch Leerzeichen zu trennen (aus Gründen der Lesbarkeit).


### Jahrhunderte ###
Beginn: Jahrhunderte beginnen mit dem Jahr 01, d.h. 19. Jahrhundert beginnt mit 1801
Ende: Jahrhunderte enden mit dem Jahr 00, d.h. 19. Jahrhundert endet mit 1900
"Anfang", "Ende" und "Mitte" sind mit 20 Jahren umzurechnen, also "Anfang 19. Jahrhundert" ==> 1801-1820, "Mitte 19. Jahrhundert" ==> 1840-1860, "Ende 19. Jahrhundert" ==> 1880-1900.
"Frühes" und "Spätes" sind wie "Anfang" und "Ende" zu behandeln, also "Frühes 19. Jahrhundert" ==> 1801-1820, "Spätes 19. Jahrhundert" ==> 1880-1900
"Erste Hälfte" wird umgerechnet bis zur Mitte, d.h. "Erste Hälfte 19. Jahrhundert" ==> 1801-1850
"Zweite Hälfte" wird umgerechnet ab Mitte plus 1, d.h. "Zweite Hälfte 19. Jahrhundert" ==> 1851-1900
"Erstes Drittel" wird umgerechnet bis [xx]33, d.h. "Erstes Drittel 19. Jahrhundert" ==> 1801-1833
"Zweites Drittel" wird umgerechnet bis [xx]67, d.h. "Zweites Drittel 19. Jahrhundert" ==> 1834-1867
"Drittes Drittel" wird umgerechnet ab [xx]68, d.h. "Drittes Drittel 19. Jahrhundert" 00> 1868-1900
Entsprechend gilt für "Viertel": 1. 01-25, 2. 26-50, 3. 51-75, 4. 76-00. "Drittes Viertel 17. Jahrhundert" wird also zu 1651-1675

### Jahrzehnte ###
Beginn: Jahrzehnte beginnen mit dem Jahr 0, d.h. 1990er Jahre beginnen mit 1990
Ende: Jahrzehnte enden mit dem Jahr 9, d.h. 1990er Jahre enden mit 1999
"Anfang", "Ende" sind mit vier bzw. drei Jahren umzurechnen, d.h. "Anfang 1990er Jahre" ==> 1990-1993, "Ende 1990er Jahre" ==> 1997-1999
"Mitte" ist mit drei Jahren umzurechnen, d.h. "Mitte 1990er Jahre" ==> 1994-1996

### Jahreszeiten ###
"Frühling": Die Monate März, April und Mai also: "Frühling 1857" ==> 01.03.1857-31.05.1857
"Sommer": Die Monate Juni, Juli und August, also: "Sommer 1857" ==> 01.06.1857-31.08.1857
"Herbst": Die Monate September, Oktober, November, also "Herbst 1857" ==> 01.09.1857-30.11.1857
"Winter": Die Monate Dezember, Januar und Februar, also "Winter 1857/1858" ==> 01.12.1857-28.02.1858 (Schaltjahre ignorieren)
Lautet die Angabe nur auf "Winter 1857", dann sind daraus zwei Ereignisse zu machen, also "Winter 1857" wird beispielsweise zu "Hergestellt, wann: 01.01.1857-28.02.1857 :: mit Tilde" und (zweites Ereignis) zu "Hergestellt, wann: 01.12.1857-31.12.1857 :: mit Tilde". Akteure und Orte sind gegebenenfalls zu wiederholen.

### Frühjahr ###
Als Frühjahr werden die Monate Januar, Februar und März verwendet, also: "Frühjahr 1877" ==> 01.01.1877-31.03.1877



## YouTube-Video zu Zeiten in nodac

<div class="yt-embed" data-src="https://www.youtube-nocookie.com/embed/AdmcvhwGROc">
<b>Anleitung auf Youtube</b><br />
Mit einem Klick wird das Video geladen. Damit werden andererseits ihre Daten mit Youtube geteilt.
</div>
