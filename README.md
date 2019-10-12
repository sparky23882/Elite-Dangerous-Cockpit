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
## Header
In autoswitch mode, the view is chosen by what is happening in the game. You can manually select a view by clicking its header.
![header](../master/screenshots/header.jpg?raw=true)
## Status
The status view shows problems with FSD availability (landing gear, hardpoints, FSD cooldown etc.) and warnings (low fuel, overheating, speeding near station, ...).
![status](../master/screenshots/status.jpg?raw=true)
## Configuration
Here, you can re-enable autoswitching views if you manually selected a view, choose whether your combat view filters out NPCs and other options.
![configuration](../master/screenshots/config.jpg?raw=true)
## Compact Combat View
The compact view shows more "previous targets" at a time by removing some information and condensing the rest in two lines.
![combatCompactView](../master/screenshots/combatCompactView.JPG?raw=true)
## Long Combat View
The long view is a bit cleaner and also shows shield and hull of the scanned ship at the time of the last scan (blue and yellow bars).
![combatLongView](../master/screenshots/combatLongView.JPG?raw=true)
## Mining View
The mining view takes the largest amount of non-drone cargo and highlights it both in cargo and in the list of materials the prospector limpet found. Widths are to scale, so you can see at a glimpse if what you are searching for is in the last scanned asteroid, and how much of it.Prospector Limpets don't need to be targeted for this.
![miningView](../master/screenshots/miningView.JPG?raw=true)
## Mining Yield Estimation
If activated, the mining view can estimate the yield of a scanned asteroid and show the individual expected tons of all of the asteroid's contents instead of their percentage. This view also calculates a running estimate on how much of your main content the asteroid should at least have for you to mine it. Based on a few assumptions (mining an asteroid takes 6x as long as just prospecting it, you continuously mine in only one spot during a single Elite session). The suggested minimum is different for every hotspot and gets better with each asteroid mined, up to 100 asteroids within your current session are used for that analysis.
![miningViewYield](../master/screenshots/miningViewYield.JPG?raw=true)
## Materials View
The materials view shows what was picked up since the last full materials journal entry, usually when docking or switching ships. Blue are materials picked up within the last minute.
![materialsView](../master/screenshots/materialsView.JPG?raw=true)
