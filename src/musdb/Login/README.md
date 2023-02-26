# Login

Zur Benutzung von musdb muss man sich zwangsläufig zuerst einmal authentifizieren. Üblicherweise geschieht dies über die übliche Kombination von Benutzernamen und Passwort.

![Login-Bildschirm von musdb: Links können die Logindaten eingetragen werden](../../assets/musdb/login/musdb-Login.jpg)

Optional kann der Login-Prozess über die ["Persönlichen Einstellungen" weiter abgesichert](../Benutzerkonto/Sicherheit.md) werden. Einerseits stehen die folgenden Methoden zur Zwei-Faktor-Authentifizierung zur Verfügung:

- *Email*: Hier wird nach dem Abschicken der korrekten Kombination von Benutzername und Passwort eine E-Mail an die in den Persönlichen Einstellungen eingestellte Mailadresse geschickt. Die Mail beinhaltet eine sechsstellige Zufallszahl die zur Bestätigung des Logins benutzt werden kann.
- *TOTP*: Diese Methode zur Zwei-Faktor-Authentifizierung arbeitet mit einem Geheimnis, das beim Einstellen der Zwei-Faktor-Authentifizierung generiert und in einer passenden Anwendung (z.B. dem Google Authenticator, Authy oder dem Aegis Authenticator) gespeichert wird. Auf Basis dieses einmal gespeicherten Geheimnisses werden laufend wechselnde Zahlenkombinationen generiert, die nur dem Server und der jeweiligen Anwendung bekannt sind und zur Bestätigung des Logins benutzt werden.
- *Hardware Security Token*: Diese Methode arbeitet üblicherweise mit speziellen USB-Sticks (z.B. Yubikeys oder Nitrokeys), auf denen ein anwendungsspezifisches Geheimnis gespeichert wird und über den WebAuthn-Standard mit dem Server ausgetauscht wird. Aufgrund ihrer deutlich überlegenen Sicherheit kann diese Login-Methode auch für ein passwortloses Login benutzt werden.

Zusätzlich kann das Login über eine in der Institution bestehende Single-Sign-On-Lösung geschehen. Dies verlangt allerdings eine serverseitige Konfiguration, um den benutzten Single-Sign-On-Dienst für die Benutzer der Institution freizuschalten.

## "Remember Me"

Unterhalb des Login-Buttons gibt es einen Schalter zum Merken des Logins. Dieser ist standardmäßig aktiviert.

Beim Login mit aktivierter "Login merken"-Einstellung, wird im Browser ein Cookie gesetzt, mit dem der Browser auch nach einem möglichen Timeout der Sitzung weiter als eingeloggt werden kann. So muss man sich nur noch nach einer Abwesenheit von mehr als 30 Tagen neu einloggen. Diese Funktion arbeitet mit der Zwei-Faktor-Authentifizierung zusammen, sodass man sich auch bei einer aktivierten Zwei-Faktor-Authentifizierung auf einem gegebenen Gerät nur noch selten einloggen muss (also den zusätzlichen Aufwand durch die Zwei-Faktor-Authentifizierung reduziert), aber die Vorteile der Zwei-Faktor-Authentifizierung weiter nutzen kann.

## Sicherheit und Logins

### Password Hashing

Die Passworte werden mit `bcrypt` gehasht in der Datenbank gespeichert. Zur Absicherung des Passworts wird es dabei gesaltet (also vor dem Hashen mit einer pro Passwort generierten, zufälligen Zeichenkette versehen) und gepeppert (also um eine für die ganze Instanz festgesetzte und _nicht_ in der Datenbank gespeicherten Zeichenkette versehen).

So sind die Passworte auch für die Administratoren bei museum-digital nicht einsehbar und liegen auf dem Server nur für einen Moment beim Login im Klartext vor.

### Schutz gegen schwache Passworte

Alle Absicherungen des Logins, die auf Seite der Anwendung vorgenommen werden, bringen nichts, wenn das Passwort selbst schwach ist. Deshalb wird das Passwort beim Ändern des Passwortes überprüft, und nicht als neues Passwort akzeptiert, wenn es zu schwach ist. Ebenso wird das eingegebene Passwort bei jedem Login-Vorgang (wenn es kurz im Klartext vorliegt) auf seine Stärke überprüft, und die Änderung des Passwortes hin zu einem stärkeren erzwungen, wenn es zu schwach ist.

Die derzeitigen Regeln für Passworte sind:

- Das Passwort darf nicht dem Benutzernamen oder dem Namen der Instanz von musdb entsprechen
- Das Passwort muss mindestens acht Zeichen lang sein
- Das Passwort muss mindestens aus einem Buchstaben, mindestens einer Zahl, und mindestens einem Sonderzeichen bestehen
- Das eingegebene Passwort wird mit einer Liste der 100000 geleakten Passworte verglichen (Per lokaler Kopie der entsprechenden Liste von [Have I Been Pwned?](https://haveibeenpwned.com/))

### Zufällige Verzögerung gegen Timing-Attacken

Ein üblicher Angriff auf Passworte sind Timing Attacken. Hierbei wird davon ausgegangen, dass das Validieren eines Passwortes länger dauert, wenn mehr Aspekte des Logins mit den korrekten Logindaten übereinstimmen. Ein Beispiel: Würde etwa zuerst der Benutzername gegen eine Liste der bekannten Benutzernamen abgeglichen, und ein Fehler ausgegeben, wenn der eingegebene Benutzername nicht bekannt ist, wäre dies wahrscheinlich schneller, als wenn ein bekannter / korrekter Benutzername eingegeben wird, aber ein falsches Passwort (Dauer für das Validieren des Namens vs. Dauer für das Validieren des Namens + Dauer des Validierens des Passworts).

Um solche zeit-basierten Angriffe allgemein verhindern zu können ist beim Validieren des Logins eine kurze Verzögerung von zufälliger Länge eingebaut. So kann auch ein Login mit gänzlich falschen Login-Daten beträchtlich länger dauern als eines mit einem korrekten Benutzernamen. Die Dauer des Validierens des Logins gibt so keine Auskunft über die Korrektheit der Angaben.

### Nicht-Anzeige des falschen Aspekts beim Login

Früher war es üblich, dass bei einem fehlgeschlagenen Login eine Nachricht erschien, die darüber Auskunft gab, ob das Login wegen eines unbekannten Benutzernamens oder wegen eines unbekannten Passworts abgeleht wurde. Dies ist mit der Zeit - und mit der steigenden Zahl von Angriffen auf Login-Formulare - immer unüblicher geworden, weil eine solche Meldung auch Angreifenden die Information gibt, ob der erratene, eingegebene Benutzername korrekt ist.

Auch musdb gibt dementsprechend _keine_ solche Meldung. Stattdessen wird nur darauf hingewiesen, dass die eingegebenen Logindaten falsch waren.

### Brute-Force-Schutz

Möchten sich Angreifende Zugang zu einem Computersystem verschaffen und die entsprechenden Ressourcen, können sie so genannte "Brute-Force"-Attacken durchführen. Hierbei werden im einfachsten Fall einfach alle möglichen Zeichenkombinationen für die vorhandenen Eingabefelder beim Login ausprobiert (in der Realität wird oft mit deutlich ausgereifteren Methoden vorgegangen, sodass z.B. zuerst einmal alle Wörter aus dem jeweiligen Sprachraum, und dann Wortkombinationen, etc. ausprobiert werden, bevor wirklich auf das Ausprobieren zufälliger Zeichenkombinationen zurückgefallen wird).

Eine übliche Methode, um Brute-Force Angriffe zu erschweren, ist das graduelle verzögern und schlussendliche Sperren des Login-Bildschirms auf Basis der IP-Adresse, mit dem ein Login versucht wird. Je öfter man versucht, sich über eine IP einzuloggen, desto länger dauert das Validieren der eingegebenen Daten. Versucht man es zu oft, wird der Zugang für die IP-Adresse gesperrt.

Über das TOR-Netzwerk oder VPNs können Angreifende aber auch ihre IP wechseln. Deshalb gibt es zusätzlich einen Zähler, mit dem das Login auf Basis des Benutzernamens, mit dem man versucht, sich einzuloggen, verzögert wird. Versuchen Angreifende also, mit wechselnden IP-Adressen das Passwort eines Benutzerkontos auszuprobieren, bis sie das korrekte Passwort gefunden haben, wird das Konto nach zu vielen Login-Versuchen gesperrt.

Schlussendlich können Angreifende eine Liste von validen Benutzernamen vorliegen haben (z.B., wenn entsprechende Benutzer-Listen der städtischen IT geleakt sind) oder ebenfalls ausprobieren, und so mit wechselnden IP-Adressen und wechselnden Benutzernamen die Passworte ausprobieren. Deshalb gibt es auch auf Ebene der gesamten Instanz einen Zähler, mit dem das Login verzögert und schlussendlich gesperrt wird. Wurden also zu viele Versuche unternommen, das Login-Formular zu benutzen (es zählen sowohl erfolgreiche aus auch fehlgeschlagene Login-Versuche), wird das Login für die ganze Instanz gesperrt.

Die Formel für die Berechnung der Verzögerung lautet derzeit wie folgt:

```
2 Millisekunden * (1.04 * <Anzahl der Loginversuche in der ganzen Instanz von musdb>) * (1.6 * <Anzahl der Loginversuche mit derselben IP) * (2 * <Anzahl der Loginversuche mit demselben Benutzernamen)
```

Ist so eine Verzögerung von mehr als acht (8) Sekunden erreicht, wird erst verzögert, und dann abgebrochen, ohne dass das Passwort validiert würde.

Ist eine vollständige Sperrung aktiv, muss man einfach nur warten. Die Sperre hebt sich nach einiger Zeit ohne Login-Versuche automatisch auf.

## Weitere Funktionen der Login-Seite

Ist der Bildschirm groß genug, werden auf der Login-Seite zusätzliche Funktionen bereitgestellt. Aufgrund des fehlenden Bildschirm-Platzes und des oft beschränkten verfügbaren Datenvolumens sind diese auf Mobilgeräten nicht verfügbar.

### Neuigkeiten

Hier werden neue Inhalte aus den Sektionen zur jeweiligen Instanz und zur technischen Entwicklung bei museum-digital in einer Kachel verlinkt, um Auskunft über neue Features und anderweitige relevante Informationen für Benutzer zu geben. Dafür werden die entsprechenden RSS-Feeds des Blogs in der Sprache des Benutzers ausgelesen. Klickt man auf einen Eintrag, wird dieser Eintrag im Browser als gelesen markiert und bis zum nächsten Löschen des Browser-Caches nicht mehr auf der Login-Seite verlinkt.

### Statistik

Unten rechts auf der Login-Seite findet sich eine Kachel, die Auskunft über die bisher Anzahl der in der jeweiligen Instanz von museum-digital veröffentlichten Inhalte gibt.

### Hintergrundbild

Ist der Bildschirm groß genug, wird ein Hintergrundbild auf der Login-Seite angezeigt. Dieses Hintergrundbild wird automatisch aus den veröffentlichten Bildern ausgewählt. Hierzu werden in regelmäßigen Abständen die größten veröffentlichten Objekt-Abbildungen, die mit einer CC-Lizenz lizensiert sind oder als Gemeinfrei ausgezeichnet sind, in eine Liste zwischengespeichert. Das angezeigte Hintergrundbild ist ein zufällig ausgewähltes aus dieser Liste.
