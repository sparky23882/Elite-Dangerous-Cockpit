# Elite-Dangerous-Cockpit
Cockpit panel for external monitors. Monitors and reads your local journal files of Elite Dangerous and displays the data it finds there.

# Installation
- Install a local webserver that is PHP-ready
- Copy files to somewhere within htdocs
- In elite_ajax.php, configure $journalFolder to where your journal files are

# Usage
Open elite.html in Browser not by double-clicking the file, but through the webserver.
http://LOCALHOST_OR_IP/elite.html for example.

# Screenshots
## Compact Combat View
The compact view shows more "previous targets" at a time by removing some information and condensing the rest in two lines.
![combatCompactView](../master/screenshots/combatCompactView.JPG?raw=true)
## Long Combat View
The long view is a bit cleaner and also shows shield and hull of the scanned ship at the time of the last scan (blue and yellow bars).
![combatLongView](../master/screenshots/combatLongView.JPG?raw=true)
## Mining View
The mining view takes the largest amount of non-drone cargo and highlights it both in cargo and in the list of materials the prospector limpet found. Widths are to scale, so you can see at a glimpse if what you are searching for is in the last scanned asteroid, and how much of it.Prospector Limpets don't need to be targeted for this.
![miningView](../master/screenshots/miningView.JPG?raw=true)
## Materials View
The materials view shows what was picked up since the last full materials journal entry, usually when docking or switching ships. Blue are materials picked up within the last minute.
![materialsView](../master/screenshots/materialsView.JPG?raw=true)
