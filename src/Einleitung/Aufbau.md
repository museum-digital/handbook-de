Aufbau
======

Das was 2009 in Bitterfeld auf Initiative von Museen in Sachsen-Anhalt
entstand und zunächst zu \"museum-digital:sachsen-anhalt\" führte, steht
mittlerweile selbst indonesischen und brasilianischen Museen zur
Verfügung.

Versionen
---------

Nach und nach entstehen neue Versionen von museum-digital, die durchaus
unterschiedlich sein können, aber stets auf der gleichen Software
basieren. Die meisten dieser Versionen sind regionaler Art, also ein
museum-digital für die Museen in Sachsen-Anhalt, eines für die Museen in
Rheinland-Pfalz, \... andere sind thematischer Art, etwa
museum-digital:agrargeschichte. Dazu kommen die internationalen
Versionen von museum-digital, wobei vor allem museum-digital:ungarn zu
nennen ist. Es gibt sogar eine \"versteckte\" Version von
museum-digital: Die Evangelische Landeskirche Anhalt inventarisiert
darin ihre Kirchenschätze.

Jede der genannten Versionen von museum-digital ist so aufgebaut, dass
sie im Prinzip von allen anderen separiert werden kann. Allerdings
nutzen die deutschsprachigen Versionen (regional und thematisch) das
gleiche Normdatenreservoir während die anderssprachigen Versionen ihre
jeweils eigenen Normdaten verwalten. Aus allen deutschsprachigen
Versionen entsteht halb-automatisch die deutschlandweite Version,
Eingaben- und Bearbeitungen können hier nicht direkt vorgenommen werden
- dafür steht ja jeweils eine regionale oder thematische Version zur
Verfügung. Jedes Museum, das sich an museum-digital beteiligt, muss
seine Basis-Version wählen, um darin Bearbeitungen der
Objektinformationen vornehmen zu können. Die Informationen werden
maschinell in die deutschlandweite Version übertragen.

#### Regionale oder thematische Version

-   hat Eingabe- und Bearbeitungswerkzeug
-   nutzt zentrale Normdatenverwaltung

####  Deutschlandweite Version

-   hat kein Eingabe- und Bearbeitungswerkzeug (entsteht
    halb-automatisch)
-   nutzt zentrale Normdatenverwaltung

####  Internationale Version

-   hat Eingabe- und Bearbeitungswerkzeug
-   hat eigene Normdatenverwaltung

Zusammengenommen gibt es akutell (Mitte 2017) 23 Versionen von
museum-digital.

Modul: \"Groupit\"
------------------

Neben diesen Versionen verfügt museum-digital über zentrale Zusatzmodule
zur Administration. Zum Erstellen der deutschlandweiten Version wird das
Modul \"Groupit\" eingesetzt. Halb-automatisch werden hiermit täglich
die in den Basis-Versionen aktualisierten Informationen in die
deutschlandweite Version übertragen. Reizvoll ist dieses Modul aber vor
allem, weil sich mit ihm auch jede beliebige Gruppierung von Museen
(halb-) automatisch erstellen lässt. Eine eigene Plattform für alle
Museen der Stadt Halle an der Saale oder eine Plattform für alle
Feuerwehrmuseen wäre leicht umsetzbar. Die Möglichkeit wurde indes noch
nicht genutzt.

Modul: \"nodac\"
----------------

Eine Vorbedingung für qualitätvolle Information ist die Verwendung
kontextualisierter und angereicherter Normdaten. Für die Verwaltung,
Anreicherung und Hierarchisierung dieser Normdaten steht das zentrale
Modul ["nodac"](../nodac/README.md) zur Verfügung. Weil alle beteiligten Museen den gleichen
Normdatenpool verwenden und es, dürften alle alles überschreiben,
schnell zu widersprüchlichen Angaben käme, ist die Benutzung des Moduls
für museum-digital der zentralen Normdatenredaktion vorbehalten (die
internationalen Version haben stets eine eigene Redaktion). Das Modul
\"nodac\" kann auch unabhängig von museum-digital benutzt werden, um
z.B. Thesauri in koopertativer Umgebung zu erstellen.

Modul: \"md:term\"
------------------

Das Modul \"md:term\" ist die öffentliche Seite des Moduls \"nodac\" -
und ein wenig mehr. Über \"md:term\" werden die in \"nodac\"
verwalteten, kontrollierten und angereicherten Begriffe
(Personen-/Körperschaften, Orte, Zeiten, Schlagworte) zugänglich
gemacht. Die begriffsbezogenen Informationen sind im SKOS-Format
abrufbar und stehen zur maschinellen Verarbeitung über eine API jedem
zur Verfügung. Die verschiedenen Versionen von museum-digital nutzen
diese Zugriffsmöglichkeit. Zusätzlich werden über \"md:term\" auch
externe Thesauri und Vokabulare zugänglich gemacht, etwa die
\"[Hessische
Systematik](https://term.museum-digital.de/hesys/tag/tag.php?nodac_version=hesys&tagnum=2771)\",
der \"[Thesaurus des Technikmuseums in
Wien](https://term.museum-digital.de/technikthesaurus/tag/tag.php?nodac_version=technikthesaurus&tagnum=7002)\"
oder die
\"[Hornbostel-Sachs-Systematik](https://term.museum-digital.de/hornbostel/tag/tag.php?nodac_version=hornbostel&tagnum=84)\".
Mehr über \"md:term\" findet sich [hier](../md-term/README.md).

Modul: \"importer\"
-------------------

Für den Import von Objektinformationen aus beliebigen XML- oder
CSV-Dateien steht ein eigenes Importmodul zur Verfügung. Im Augenblick
können Museen (noch) nicht direkt importieren. Das Import-Modul gibt
ihnen aber die Möglichkeit die zu importierenden Daten vorzubereiten um
den eigentliche Import zu erleichtern. Mehr zu den Möglichkeiten des
Datenimports findet sich
[hier](../import/README.md).

Modul: \"themator\"
-------------------

Der [Themator](../Themator/README.md) ist ein Modul zum Erstellen von Themenportalen (oder digitaler Ausstellungen). Das Modul ist eigenständig, kann also auch
unabhängig von museum-digital verwendet werden - am effektivsten ist es
jedoch wenn die programmierten Querbezüge zu museum-digital genutzt
werden.
