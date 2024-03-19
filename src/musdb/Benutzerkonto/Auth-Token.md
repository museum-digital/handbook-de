# Authentifizierungstoken für API-Verwendung

Für die Benutzung der API von musdb benötigt man einen Authentifizierungstoken. Solche lassen sich (von Benutzern mit der Benutzerrolle "Museumsdirektor") über die Benutzer-Übersicht generieren.

Dazu erscheint in der rechtesten Spalte der Benutzerübersicht hinter jedem Benutzer ein Schriftzug "Auth token".

![Benutzerübersicht](../../assets/musdb/benutzer/Benutzer-Auth-Token-1.avif)

Durch einen Klick darauf öffnet sich ein Dialog mit einer Warnung, dass der Authentifizierungstoken nur einmal generiert werden kann. Nach dem Bestätigen dieser Warnung öffnet sich ein Dialogfenster mit dem Authentifizierungstoken. Dieser kann nun kopiert und verwendet werden.

![Authentifizierungstoken kopieren](../../assets/musdb/benutzer/Benutzer-Auth-Token-2.avif)

```admonish warn
Es ist unbedingt zu empfelen, einen dedizierten Benutzer für die Nutzung der API anzulegen. So lassen sich die Rechte des Benutzers auf das für eine gegebene Anwendung spezifisch nötige beschränken und die Sicherheit erhöhen.
```
