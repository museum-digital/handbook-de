# FAQ

## Objektbearbeitung

### Kann ein neues Feature implementiert werden, um ganze Datensätze auf einen Schlag zu kopieren? Damit könnte die Erfassung ähnlicher Bestände deutlich schneller erfolgen!

Ein solches Feature war ungefähr 2012 tatsächlich einmal in musdb implementiert. Die Folge waren viele falsche Eingaben, weil zusätzliche Angaben die zum kopierten Datensatz passten, aber nicht zum durch das kopieren Entstandenen, einfach mit kopiert und dann nicht gelöscht wurden. Ein zentrales Ziel bei der Entwicklung von musdb ist es Museen das hochqualitätive Erfassen ihrer Bestände einfach zu ermöglichen. Ein vollständiges Kopieren von Datensätzen hat sich dafür unserer Erfahrung nach als kontraproduktiv herausgestellt.

Das Kopieren gerade getätigter Eingaben auf Feldebene hat sich im Gegensatz dazu als deutliche Erleichterung erwiesen, die im Bezug auf aus Versehen getätigte Falscheingaben relativ ungefährlich ist. Entsprechend stehen beim Bearbeiten von Objekten für fast alle Felder Buttons zur Verfügung, um den zuletzt in einem gegebenen Feld eingetragenen Wert auch für das aktuelle Objekt einzutragen. Siehe dazu: "[Eingabe beschleunigen: Angaben wiederholen](https://de.handbook.museum-digital.info/musdb/Objekte/Angaben-wiederholen.html)".

## Benutzerkonten

### Warum kann ich kein Konto für Benutzer mit @t-online.de-Adresse anlegen?

Beim Anlegen eines neuen Benutzerkontos wird die [Domain des Mailkontos überprüft](./Benutzerkonto/Neues-Kontro-hinzufuegen.md). Als Teil der Überprüfung wird gecheckt, ob die Mailadresse bei einem blockierten Mailanbieter gehostet wird. t-online.de ist einer dieser geblockten Mailanbieter (bzw. bisher der einzige). Blockiert werden Anbieter, die wiederum die Mails von unserem Mailserver blockieren, sodass die nötigen Einladungsmails mit einem Konto bei einem solchen Anbieter schon von Seiten des Mailhosters aus nicht empfangen werden könnten.

Kurz zum Hintergrund: Vor langer Zeit hat eines der Mitglieder des Administratorenteams von museum-digital alle seine an die @museum-digital.de-Adresse geschickten Mails automatisch an seine t-online-Adresse weiterleiten lassen. Darunter waren naturgemäß auch viele Spam-Mails. Selbst wenn die Mails von einem t-online-Benutzer gezielt weitergeleitet worden waren, ist es technisch korrekt, dass unser Mailserver damit viele Spam-Mails an eine @t-online.de-Adresse geschickt hat. Seitdem blockiert @t-online.de unsere Mails. Ein Versuch, unseren Mailserver von der Blockliste nehmen zu lassen, war bisher nicht von Erfolg gekrönt.

## Vokabulare

### Ich habe einen Personeneintrag bearbeitet, aber der alte Name / Beschreibungstext erscheint weiterhin. Wurde die Überarbeitung nicht akzeptiert?

Beim Anreichern der kontrollierten Vokabulare durch die "Normdatenredaktion" werden unter anderem Übersetzungen zum gegebenen Begriff eingetragen. Existiert eine Übersetzung, wird diese immer dem "Basiseintrag", der in musdb bearbeitet werden kann, vorgezogen. Dieser Basiseintrag wird ohne Auszeichnung der verwendeten Sprache gespeichert und fungiert beim Vorhandensein von Übersetzungen nur noch als Rückfallebene.

Wird also ein schon in [nodac](../nodac) angereicherter Eintrag bearbeitet, bei dem eine Übersetzung in der gerade genutzten Sprache vorliegt, wird in der Anzeige weiterhin die nicht überarbeitete Übersetzung angezeigt. Damit auch die angezeigte Übersetzung mit den aktualisierten Informationen ausgestattet wird, braucht es einen Eingriff der Normdatenredaktion. Hierzu wird der Prüfungsstatus eines jeden in musdb bearbeiteten Vokabulareintrags mit der Bearbeitung auf "fraglich" gestellt.

Dasselbe gilt für das Überarbeiten der Namen und Beschreibungen von Schlagworten, Orten und Zeiten in musdb.
