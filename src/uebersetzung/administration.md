# Übersetzungen administrieren

- Administratoren sehen zusätzliche Symbole in der Navigation oben
- Durch einen Klick auf das "+"-Symbol gelangt man zu einer Seite, um neue Übersetzungstexte einzutragen (hier sollte _immer_ die Englische Übersetzung als Wert eingetragen werden)

![Suchfunktion im Übersetzungstool von museum-digital](../assets/Uebersetzungstool/Administration/Neue-Uebersetzung.avif)

## Übersetzungen freischalten

Durch einen Klick auf das "Check"-Symbol in der Navigation am oberen Fensterrand erreicht man eine Seite zum Freischalten der Übersetzungen. Auch die Freischaltung von Übersetzungen geschieht getrennt nach übersetztem Tool.

Die obere Hälfte der Freischaltungs-Seite ist gefüllt durch verschiedene Buttons, mit denen die Freischaltung tatsächlich durchgeführt werden kann. Darunter findet man eine Auflistung der Änderungen seit der letzten Freischaltung.

Klickt man auf den Button zum Freischalten der Übersetzungen in einem "Repository", werden die Bearbeitungen lokal als neueste, abgenommene Version festgestellt und in eine auslieferbare Form übertragen.

![Suchfunktion im Übersetzungstool von museum-digital](../assets/Uebersetzungstool/Administration/Approve.avif)

## Übersetzungen verteilen

Um die so festgestellten Übersetzungen nun tatsächlich in die Programme zu bringen braucht es die Kommandozeile. Im Ordner des Übersetzungstools finden sich als einzelne Unterordner die Übersetzungen für die verschienenen Werkzeuge. Jeder dieser Ordner ist ein einzelnes Git Repository, das im nächsten Schritt zur zentralen Versionierung synchronisiert werden muss (`git push`). In den jeweiligen Tools sind die Übersetzungen dann wiederum als `git submodules` eingebunden und müssen entsprechend aktualisiert werden.`
