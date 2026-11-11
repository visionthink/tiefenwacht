# Tiefenwacht

Tower-Defense in der Tiefsee, als HTML-Spiel. Gebaut für Tablets, läuft auch am Handy und am Desktop.

## Spielen und als App installieren

Online: https://visionthink.github.io/tiefenwacht/

GitHub Pages muss unter Settings → Pages mit Branch `main` und Ordner `/ (root)` aktiviert sein.

Android/Chrome: Die Spieladresse direkt in Chrome öffnen, dann im Menü **Zum Startbildschirm hinzufügen → Installieren** wählen (Bezeichnung je nach Chrome-Version).
Tiefenwacht hat eine eigene App-Kennung und ist auf `/tiefenwacht/` begrenzt; Snake kann daneben installiert bleiben.

Nach dem ersten vollständigen Online-Aufruf und der Einrichtung des Offline-Speichers funktioniert das Spiel auch ohne Internet.
Externe Schriftarten benötigen Internet; offline werden Systemschriften verwendet.
Falls Chrome noch eine alte Installationsmeldung zeigt: alle alten Spiel-Tabs schließen, die Spieladresse erneut direkt in Chrome öffnen und neu laden.
Das Spiel kann weiterhin lokal durch Öffnen von `index.html` gespielt werden; die App-Installation und Offline-Speicherung über einen Service Worker benötigen HTTPS oder localhost.

## Inhalt

- Zwei Welten: Korallengraben und Schlotfeld
- Vier Türme mit je drei Ausbaustufen: Harpune, Sonar, Aalspule, Torpedo
- Fünf Gegnertypen, jede zehnte Welle ein Leviathan
- 30 Wellen, danach Endlosmodus; zwei Schwierigkeitsgrade
- Grafik per Canvas, Musik und Effekte per Web Audio, beides im Browser erzeugt
- Bestleistung pro Welt wird lokal im Browser gespeichert

## Bedienung

Turm unten antippen, dann ein freies Feld. Gebaute Türme antippen, um sie aufzurüsten oder zu verkaufen. Oben: Tempo, Pause, Ton, Musik.
