# FAQ

## Benutzerkonten

### Warum kann ich kein Konto für Benutzer mit @t-online.de-Adresse anlegen?

Beim Anlegen eines neuen Benutzerkontos wird die [Domain des Mailkontos überprüft](./Benutzerkonto/Neues-Kontro-hinzufuegen.md). Als Teil der Überprüfung wird gecheckt, ob die Mailadresse bei einem blockierten Mailanbieter gehostet wird. t-online.de ist einer dieser geblockten Mailanbieter (bzw. bisher der einzige). Blockiert werden Anbieter, die wiederum die Mails von unserem Mailserver blockieren, sodass die nötigen Einladungsmails mit einem Konto bei einem solchen Anbieter schon von Seiten des Mailhosters aus nicht empfangen werden könnten.

Kurz zum Hintergrund: Vor langer Zeit hat eines der Mitglieder des Administratorenteams von museum-digital alle seine an die @museum-digital.de-Adresse geschickten Mails automatisch an seine t-online-Adresse weiterleiten lassen. Darunter waren naturgemäß auch viele Spam-Mails. Selbst wenn die Mails von einem t-online-Benutzer gezielt weitergeleitet worden waren, ist es technisch korrekt, dass unser Mailserver damit viele Spam-Mails an eine @t-online.de-Adresse geschickt hat. Seitdem blockiert @t-online.de unsere Mails. Ein Versuch, unseren Mailserver von der Blockliste nehmen zu lassen, war bisher nicht von Erfolg gekrönt.

## Vokabulare

### Ich habe einen Personeneintrag bearbeitet, aber der alte Name / Beschreibungstext erscheint weiterhin. Wurde die Überarbeitung nicht akzeptiert?

Beim Anreichern der kontrollierten Vokabulare durch die "Normdatenredaktion" werden unter anderem Übersetzungen zum gegebenen Begriff eingetragen. Existiert eine Übersetzung, wird diese immer dem "Basiseintrag", der in musdb bearbeitet werden kann, vorgezogen. Dieser Basiseintrag wird ohne Auszeichnung der verwendeten Sprache gespeichert und fungiert beim Vorhandensein von Übersetzungen nur noch als Rückfallebene.

Wird also ein schon in [nodac](../nodac) angereicherter Eintrag bearbeitet, bei dem eine Übersetzung in der gerade genutzten Sprache vorliegt, wird in der Anzeige weiterhin die nicht überarbeitete Übersetzung angezeigt. Damit auch die angezeigte Übersetzung mit den aktualisierten Informationen ausgestattet wird, braucht es einen Eingriff der Normdatenredaktion. Hierzu wird der Prüfungsstatus eines jeden in musdb bearbeiteten Vokabulareintrags mit der Bearbeitung auf "fraglich" gestellt.

Dasselbe gilt für das Überarbeiten der Namen und Beschreibungen von Schlagworten, Orten und Zeiten in musdb.
