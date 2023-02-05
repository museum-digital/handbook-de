# WebCal

WebCal ist ein URL-Schema, mit dem abonnierbare Web-Kalender (im [iCalendar-Format](./iCalendar.md)) markiert werden können. Existiert etwa eine Kalender-Datei unter `https://example.com/example.ics`, so kann diese durch das Ersetzen der Auszeichnung des Protokolls (`https://`) durch `webcal://` als abonnierbar markiert werden.

Ist das getan bietet der Browser beim Anklicken eines entsprechenden Links die vorhandenen Möglichkeiten zum Abonnieren des Kalenders in den jeweils vorhandenen Programmen mit Kalenderfunktion an. Üblicherweise sind dies Mail-Clients wie Thunderbird oder Outlook.

Weitere Informationen auf Wikipedia zu [WebCal (Englisch)](https://en.wikipedia.org/wiki/Webcal).

## Verwendung von WebCal bei museum-digital

WebCal wird bei museum-digital vor allem in der [Ausgabe](../../Ausgabe/README.md) verwendet, um abonnierbare Kalender - z.B. für [Ausstellungen](../../Ausgabe/Ausstellungen/Uebersicht.md) - anzubieten.

In [musdb](../../musdb/README.md) werden WebCal-Kalender gebündelt über die [Kalender-Funktion](../../musdb/Weiteres/Kalender.md) bereitgestellt, damit auch nicht öffentliche, datumsbezogene Informationen im üblichen Kalender-Programm angezeigt werden können.
