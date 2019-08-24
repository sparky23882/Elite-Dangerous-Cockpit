<?php
/*

Elite Dangerous Cockpit for external monitors

This file is used to gather data from Elite Dangerous journal and *.json files.

File: elite_ajax.php
Author: CMDR sparky23882
Date created: 2019-07-07

License: CC BY-NC-SA 4.0 https://creativecommons.org/licenses/by-nc-sa/4.0/

Version History and further info: see elite.html

*/

// configuration of local journal folder
// example: "C:\Users\<yourWindowsUserName>\Saved Games\Frontier Developments\Elite Dangerous"
$journalFolder="C:\Users\YOUR_USERNAME_GOES_HERE\Saved Games\Frontier Developments\Elite Dangerous";

// do not modify code below

// file paths
$statusFilePath=$journalFolder."\\Status.json";
$cargoFilePath=$journalFolder."\\Cargo.json";
$journalFilePath="";
$files=scandir($journalFolder,SCANDIR_SORT_DESCENDING);
for($i=0;$i<count($files);$i++)
{
    if(strpos($files[$i],"Journal.")!==false)
    {
        $journalFilePath=$journalFolder."\\".$files[$i];
        break;
    }
}

if($_GET["data"]=="status")
{
    $statusFile = file_get_contents($statusFilePath);
    header('Content-type: application/json; charset=utf-8');
    echo $statusFile;
}

if($_GET["data"]=="cargo")
{
    $cargoFile = file_get_contents($cargoFilePath);
    header('Content-type: application/json; charset=utf-8');
    echo $cargoFile;
}

if($_GET["data"]=="journal")
{
    $journalFile = file_get_contents($journalFilePath);
    header('Content-type: text/plain; charset=utf-8');
    echo $journalFile;
}
?>