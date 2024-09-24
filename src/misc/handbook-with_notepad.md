# Handbuch mit notepad++ bearbeiten

Ist, wie gerade beschrieben, der GitHub-Desktop installiert und eingerichtet, dann existiert auf ihrem Rechner eine lokale Kopie des Handbuches. Meist findet sich diese Kopie in einem Ordner unter Dokumente/GitHub/handbook-de/. Vom GitHub-Desktop aus erreichen sie diesen Ordner, indem Sie zunächst sicherstellen, daß oben links das richtige Repositorium ausgewählt ist (handbook-de) und anschließend die Option "Show in Explorer" anklicken

![Show in Explorer](../assets/writinghandbook/github_show_in_explorer.jpg)

Rufen Sie im handbook-de-Ordner den Unterordner "src" auf, so werden weitere Unterordner sichbar, ebenso eine Datei namens SUMMARY.md. In den einzelnen Unterordnern finden sich Dateien, die auf "md" enden. Eine Ausnahme bildet der Unterordner "assets", in welchem Illustrationen abgelegt werden.

Das Handbuch ist also keine einzelne Datei sondern setzt sich aus vielen kleinen Dateien zusammen. Diese Dateien sind ganz einfache Text-Dateien, d.h. ohne programmspezifische Steuerzeichen und versteckte Kommandos, wie sie Textbearbeitungsprogramme üblicherweise im Text platzieren. Diese kleinen Textdateien enden auf "md", weil sie in der Auszeichnungssprache Markdown verfasst sind. Markdown kennt nur wenige Befehle zur Gestaltung des jeweiligen Textes. Diese Befehle werden direkt in den Text geschrieben. Bei einer Suche nach Markdown CheatSheet lässt sich schnell eine Übersicht finden, z.B. [hier](https://www.heise.de/downloads/18/1/1/6/7/1/0/3/Markdown-CheatSheet-Deutsch.pdf).

Um ein kleines Beispiel zu geben: Jedes Unterkapitel des Handbuches besteht aus einer markdown-Datei. Diese Datei enthält immer eine Überschrift und darauf folgenden Text. Um die Überschrift "auszuzeichnen" wird einfach ein #-Zeichen gefolgt von einem Leerzeichen vor die Überschrift gesetzt. Weil es eine Überschrift erster Ordnung ist, genügt ein einfaches #-Zeichen. Für Zwischenüberschriften können dann zwei #-Zeichen verwendet werden. In der Textdatei steht dann:

    # Kapitelüberschrift
    Einleitung, Absatz 1
    ## Unterkapitelüberschrift
    Unterkapiteltext, Absatz 1

und in der Ausgabe erfolgt die Anzeige als:

# Kapitelüberschrift
Einleitung, Absatz 1
## Unterkapitelüberschrift
Unterkapiteltext, Absatz 1

Ebenso einfach ist es beispielsweise ein Wort kursiv zu gestalten. Es reicht ein Sternchen vor und eines nach dem Wort zu platzieren.

Mit jedem einfachen Text- oder HTML-Editor lassen sich jetzt die lokal gespeicherten Dateien bearbeiten. Beispielsweise mit notepad++ (kostenfrei erhältlich unter: https://notepad-plus-plus.org/downloads/). Der Vorteil, den dieser Editor bietet, besteht darin, daß geänderte Zeilen am linken Rand markiert und dass die eingestreuten Markdown-Befehle farblich hervorgehoben werden, das schafft Übersicht. Zudem kann in notepad++ das Plugin "Markdown Panel" installiert werden. Auf diese Weise ist eine Vorschau auf die Seite möglich. Das sieht dann beispielsweise so aus:

![Beispiel für notepad++ mit Markdown Panel](../assets/writinghandbook/notepad_with_markdown_panel.jpg)