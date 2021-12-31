Orte
====

Ortsangaben werden im zentralen Katalog \"Geographie-Gebäude\"
gespeichert, redaktionell überarbeitet, in eine Hierarchie eingepasst
und mit Verweisen zu international genutzten Normdatenrepositorien (die
als Linked Open Data - LOD zugänglich sind) angereichert. Mehr zu den
Anreicherungen findet sich in der Sektion
\"[Normdaten](?lan=de&q=Normdaten/Anreicherung)\".

Ortsangaben werden bei museum-digital stets mit Koordinaten erfasst,
jeder Ort wird einem Ortstyp zugewiesen. Die kleinste Einheit (oder der
kleinste Typ) von \"Orten\" ist ein Gebäude. Weitere mögliche Typen von
\"Orten\" sind Straßen, Ortschaften, Flüsse, Inseln, Gebirge \... Eine
besonderer Ortstyp heißt \"historisch\" (mit Anführungsstrichen). Hierzu
zählen ausschließlich nicht mehr vorhandene \"Orte\" (die z.B. dem
Braunkohlebergbau anheim gefallen sind). Wenn ein Ort zwar seinen Namen
gewechselt hat, aber als solcher bestehen blieb, dann wird er nicht als
\"historisch\" betrachtet.

Generell gilt bei museum-digital, dass aktuelle Ortsbezeichnungen zu
bevorzugen sind. Doch das Gebot der Flexibilität gilt auch hier: Manche
Museen notieren zu einem Objekt in ihrer Datenbank den Namen des
Herstellungsortes zum Zeitpunkt der Herstellung eines Objektes - andere
Museen notieren die aktuelle Namensform des entsprechenden Ortes.
museum-digital kann mit beidem umgehen, die Ortsnamen werden synonym
gesetzt. Wer nach Objekten, die in \"Karlsbad\" hergestellt wurden
sucht, der findet auch Objekte bei denen als Herstellungsort \"Karlovy
Vary\" eingetragen ist - und umgekehrt.

Es gibt, neben der Erwähnung in der Objektbeschreibung, bei
museum-digital zwei Wege Beziehungen zwischen Orten und Objekten
herzustellen: Der bevorzugte Weg ist es, ein Objekt über ein Ereignis
(z.B. Herstellungsereignis) mit einem Ort (z.B. Karlovy Vary) zu
verknüpfen. Auf diese Weise ist es leicht zu notieren, welche Rolle der
Ort für das Objekt spielte (im Beispiel: Herstellungsort). Der zweite
Weg ist der einer \"allgemeinen Beziehung\".  Ein Beispiel mag zeigen,
was damit gemeint ist: Eine Andenkentasse, die in Taiwan hergestellt
wurde, auf der eine Fantasie-Ansicht von Bad Pyrmont (ohne passendem
Schriftzug) abgebildet ist und die in Hannover verkauft wird \... steht
nur in einer sehr vagen und allgemeinen Beziehung zu Bad Pyrmont.

Die Beziehung zwischen einem Ort und einem Ereignis (\"Ort in einem
Herstellungsereignis zu einem Objekt\") und ebenso die allgemeine
Beziehung zwischen einem Ort und einem Objekt (\"Ort hat etwas nicht
näher bestimmbares mit dem Objekt zu tun\") können beide \"gewiss\" oder
\"ungewiss\" sein. Vielleicht war der Ort nur \"möglicherweise\" der
Herstellungsort? Vielleicht besteht die Beziehung, die als allgemein
gespeichert wurde, doch eher zu einem anderen Ort (im Beispiel: Man
nimmt nur an, die Fantasie-Ansicht zeige Bad Pyrmont)? Für
museum-digital gibt es nur diese zwei Zustände: \"gewiss\" und
\"ungewiss\". Feinheiten der Notation wie \"eventuell\",
\"wahrscheinlich\", \"vielleicht\", \"möglicherweise\", \... werden von
jedem anders gedeutet und sind daher mißverständlich - für
museum-digital gilt hier stets: \"ungewiss\".
