# GroupIt: Synchronisieren von Instanzen

groupit ist ein Bibliothek und ein Kommandozeilen-Tool zur Synchronisierung von öffentlichen Inhalten einer Instanz von museum-digital in eine übergeordnete, aggregierte Instanz.

```admonish info
Aggregierte Instanzen von museum-digital sind solche, die keine eigene Instanz von musdb haben. Die Inhalte einer aggregierten Instanz wird aus anderen Instanzen zusammengeführt.
```

groupit synchronisiert dabei an sich immer auf Basis einer Quelldatenbank, einer Zieldatenbank und eines Selektors. Ein Aufruf könnte also sein: Synchronisiere alle öffentlichen Daten des Landesmuseums Württemberg aus museum-digital:bawue nach museum-digital:global.

groupit arbeitet hierbei als Brücke, sodass kein Datenbankbenutzer eingerichtet werden muss, der Rechte an beiden Datenbanken gleichzeitig hätte. Dies bringt einerseits einen Sicherheitsvorteil: Selbst wenn jemand Unbefugtes Zugriff zur Datenbank von museum-digital:global erhielte, sind interne Daten innerhalb der Quelldatenbank vor einer Einsicht geschützt. Andererseits führt es zu deutlichen Performanceeinbußen im Vergleich zu einem Vorgehen, das näher an der Datenbank ist. So müssen alle synchronisierten Informationen erst aus der Quelldatenbank von groupit eingelesen und dann in die Ziel-Datenbank geschrieben werden. Um dem zu begegnen bietet groupit einen "Fast Mode", mit dem festgelegt werden kann, dass nur solche Datensätze synchronisiert wurden, die seit der letzten Synchronisierung verändert wurden.

## groupit nutzen

Während groupit als Bibliothek, wie oben beschrieben, immer nur die Synchronisierung aus einer Instanz in eine andere auf Basis eines Selektors unterstützt, bietet es ein Kommandozeilen-Script `groupit_cli.php`. In diesem ist die reguläre Synchronisierung aus einer oder mehreren Instanzen in eine Zielinstanz beschrieben. Hierzu werden z.B. bei einer Synchronisierung einer ganzen Instanz in eine andere erst alle Institutionen der Instanz geladen, um dann eine nach der anderen synchronisiert zu werden.

Welche festgeschriebene Synchronisierungsroutine zu nutzen ist wird mit dem ersten Parameter ausgedrückt. `./groupit_cli.php hessen` synchronisiert also beispielsweise die Daten der hessischen Instanz in die Deutschlandweite. Da `groupit_cli.php` im Normalfall den "Fast Mode" benutzt, und eine Vollständige Synchronisierung der Instanzen doch manchmal notwendig ist, kann der reguläre aber langsamere Modus durch das anfügen des zweiten Parameters `slowmode` aktiviert werden. So werden etwa mit dem Aufruf `groupit_cli.php hessen slowmode` alle Inhalte der hessischen Instanz von museum-digital in die Deutschlandweite synchronisiert.
