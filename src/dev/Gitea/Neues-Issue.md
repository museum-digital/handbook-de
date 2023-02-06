# Neue Issues anlegen

Um neue "Issues", also z.B. Bitten um neue Features oder Fehlermeldungen, in Gitea anzulegen, muss im ersten Schritt zum entsprechenden ["Repository"](./#repositories) navigiert werden. Der zuverlässigste Weg hierfür ist der Menüpunkt "Explore".

!["Explore"-Seite in Gitea](../../assets/Dev/Gitea-Explore.avif)

Hier kann man über den Suchschlitz nach dem passenden Repository suchen, falls es nicht sowieso oben in der Liste erscheint (standardmäßig ist diese nach der letzten Bearbeitung der Repositories sortiert). Mit einem Klick auf den Titel des Repositories gelangt man zu selbigem.

```admonish warning
Issues im richtigen Repository anzulegen ist essentiell wichtig, um nachträgliche Aufräumarbeiten zu vermeiden und ein effektives Lösen des Problems zu ermöglichen. Möchte man einen Fehler in [musdb](../../musdb/) melden, macht es keinen Sinn, diesen als Problem in der [Ausgabe](../../Ausgabe/) zu melden. Genauso: Gibt es ein Problem beim Importieren von Inventarisierungsdaten, ist dies höchstwahrscheinlich ein Problem im "Importer", nicht in musdb.

Ist ein Issue im falschen Repository eingetragen, muss es zuerst in das richtige Repository kopiert und im ursprünglichen Repository referenziert werden. Danach wird das Issue im ursprünglichen Repository zwangsläufig als "nicht valide" geschlossen (wie gesagt, selbst wenn die Startseite der Ausgabe nur noch aus dem Text "Hallo Welt" bestünde, ist das kein Problem, das im Rahmen der Entwicklung des Importers gelöst werden könnte). All das macht doppelte Arbeit und hat unerwünschte Nebeneffekte. Einerseits erhält man durch das Neuanlegen und Schließen des Issues irreführende Benachrichtigungen, andererseits hinterlässt es auch langfristig Issues am falschen Platz, sodass Übersichten und Auflistungen - z.B. der Anzahl der geschlossenen Issues in einem Zeitraum - bei vielen am falschen Ort angelegten Issues ihre Aussagekraft verlieren.
```

## Beim Repository: Neue Issues anlegen

Ist man beim gesuchten Repository angelangt, sieht man direkt unterhalb des Titels des Repositories (z.B. "museum-digital/musdb") eine Leiste mit Reitern, in denen der aktuell ausgewählte Reiter farblich hinterlegt ist. Je nach Berechtigungen beginnt man beim Reiter "Code" oder direkt bei den Issues. Um ein neues Issue anzulegen, sollte man nun also auf den Punkt "Issues" in der Leiste klicken, falls man nicht eh schon dort ist.

![](../../assets/Dev/Gitea-Code.avif)

Den Einstieg in den Bereich "Issues" stellt eine Liste der aktuell offenen Issues - also der bisher nicht bearbeiteten oder bisher noch nicht gelösten Wünsche, Anmerkungen oder Fehlermeldungen - dar. Neben den Links zu den einzelnen Issues und vielen Filtermöglichkeiten bietet diese Seite einen Button "New issue" (oben rechts neben dem hauptsächlichen Suchfeld). Gerade beim Vorschlagen neuer Features lohnt sich vor dem Anlegen  ein Blick in die Liste, um zu sehen ob nicht Andere schon dieselbe Idee vorgeschlagen haben.

![](../../assets/Dev/Gitea-Issue-List.avif)

Mit einem Klick auf den Button "New issue" erscheint eine Seite, auf der ein neuer Issue eingetragen werden kann.

```admonish info
Issues sollten, falls es die eigenen Sprachfertigkeiten zulassen, in Englisch betitelt und beschrieben werden. So ist der Issue-Tracker auch für die internationalen Kollegen nutzbar.
```

Im Haupt-Teil der Seite lassen sich ein Titel des Issues und eine Beschreibung eintragen und ggfs. Dateien hochladen. Der Titel des Issues beschreibt idealerweise kurz und bündig das Anliegen, etwa "Missing error message when uploading corrupt images for collections".

In der Beschreibung kann das Anliegen ausführlicher beschrieben werden. Das Ziel sollte hier - besonders bei Fehlermeldungen - eine ausführliche, nachvollziehbare Erklärung des Problems sein, mit der die Lösung des zugrundeliegenden Problems erleichtert wird. Besonders hilfreiche Informationen sind dabei die URL und eventuell erscheinende Fehlermeldungen.

Auch Screenshots können eine große Hilfe bei der Problemlösung sein. Dabei ist aber darauf zu achten, dass der gesamte Fensterinhalt (inkl. der URL) aufgenommen wird, da sonst erfahrungsgemäß immer wieder die wichtigsten Details weggeschnitten werden.

![](../../assets/Dev/Gitea-Issue-Neu-Text.avif)

In der Seitenspalte rechts kann das Issue mit "Labels" kategorisiert werden. Dies vereinfacht die Suche nach Issues, besonders langfristig, sehr. Ein Klick auf die Überschrift "Labels" öffnet dabei eine über einen eigenen Suchschlitz durchsuchbare Liste, aus der die passenden Labels mit einem Linksklick ausgewählt werden können.

![](../../assets/Dev/Gitea-Issue-Neu-Labels.avif)

Sind Titel, Beschreibung und Labels ausgefüllt bzw. eingetragen, kann das Issue mit dem Button "Create issue" unterhalb des Beschreibungsfeldes erstellt werden.
