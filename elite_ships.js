/* Definition of all the ships
 * Info on module slots aken from https://scotty.newlevels.org/shipsheet/ on 2019-08-31
 * shipDefinitions[0] = internalShipName
 * shipDefinitions[1] = number of utility slots
 * shipDefinitions[2] = number of small hardpoint slots
 * shipDefinitions[3] = number of medium hardpoint slots
 * shipDefinitions[4] = number of large hardpoint slots
 * shipDefinitions[5] = number of huge hardpoint slots
 */
var shipDefinitions = [
["adder",                   "Adder",                2,2,1,0,0], // Adder
["anaconda",                "Anaconda",             8,2,2,3,1], // Anaconda
["asp",                     "Asp Explorer",         4,4,2,0,0], // Asp Explorer
["asp_scout",               "Asp Scout",            2,2,2,0,0], // Asp Scout
["belugaliner",             "Beluga Liner",         6,0,5,0,0], // Beluga Liner
["cobramkiii",              "Cobra Mk III",         2,2,2,0,0], // Cobra Mk III
["cobramkiv",               "Cobra Mk IV",          2,3,2,0,0], // Cobra Mk IV
["cutter",                  "Imperial Cutter",      8,0,4,2,1], // Imperial Cutter
["diamondback",             "Diamondback Scout",    4,2,2,0,0], // Diamondback Scout
["diamondbackxl",           "Diamondback Explorer", 4,0,2,1,0], // Diamondback Explorer
["dolphin",                 "Dolphin",              3,1,0,0,0], // Dolphin
["eagle",                   "Eagle",                1,3,0,0,0], // Eagle
["empire_courier",          "Imperial Courier",     4,0,3,0,0], // Imperial Courier
["empire_eagle",            "Imperial Eagle",       1,2,1,0,0], // Imperial Eagle
["empire_fighter",          "Gu-97",                0,0,0,0,0], // Gu-97
["empire_trader",           "Imperial Clipper",     4,0,2,2,0], // Imperial Clipper
["federation_corvette",     "Federal Corvette",     8,2,2,1,2], // Federal Corvette
["federation_dropship",     "Federal Dropship",     4,0,4,1,0], // Federal Dropship
["federation_dropship_mkii","Federal Assault Ship", 4,0,2,2,0], // Federal Assault Ship
["federation_fighter",      "F63 Condor",           0,0,0,0,0], // F63 Condor
["federation_gunship",      "Federal Gunship",      4,2,4,1,0], // Federal Gunship
["ferdelance",              "Fer-de-Lance",         6,0,4,0,1], // Fer-de-Lance
["gdn_hybrid_fighter_v1",   "Trident",              0,0,0,0,0], // Trident
["gdn_hybrid_fighter_v2",   "Javelin",              0,0,0,0,0], // Javelin
["gdn_hybrid_fighter_v3",   "Lance",                0,0,0,0,0], // Lance
["hauler",                  "Hauler",               2,1,0,0,0], // Hauler
["independant_trader",      "Keelback",             3,2,2,0,0], // Keelback
["independent_fighter",     "Taipan",               0,0,0,0,0], // Taipan
["krait_light",             "Krait Phantom",        4,0,2,2,0], // Krait Phantom
["krait_mkii",              "Krait Mk II",          4,0,2,3,0], // Krait Mk II
["mamba",                   "Mamba",                6,1,0,2,1], // Mamba
["orca",                    "Orca",                 4,0,2,1,0], // Orca
["python",                  "Python",               4,0,2,3,0], // Python
["sidewinder",              "Sidewinder",           2,2,0,0,0], // Sidewinder
["type6",                   "Type-6 Transporter",   3,2,0,0,0], // Type-6 Transporter
["type7",                   "Type-7 Transporter",   4,4,0,0,0], // Type-7 Transporter
["type9",                   "Type-9 Heavy",         4,2,3,0,0], // Type-9 Heavy
["type9_military",          "Type-10 Defender",     8,2,3,4,0], // Type-10 Defender
["typex",                   "Alliance Chieftain",   4,3,1,2,0], // Alliance Chieftain
["typex_2",                 "Alliance Crusader",    4,3,2,1,0], // Alliance Crusader
["typex_3",                 "Alliance Challenger",  4,3,3,1,0], // Alliance Challenger
["viper",                   "Viper Mk III",         2,2,2,0,0], // Viper Mk III
["viper_mkiv",              "Viper Mk IV",          2,2,2,0,0], // Viper Mk IV
["vulture",                 "Vulture",              4,0,0,2,0] // Vulture
];

function getShipName(rawName){
    for(var rawShipIterator=0; rawShipIterator<shipDefinitions.length; rawShipIterator++){
        if(rawName == shipDefinitions[rawShipIterator][0]){
            return shipDefinitions[rawShipIterator][1];
        }
    }
    return "Unknown Ship Type";
}

function getShipUtilitySlots(rawName){
    for(var rawShipIterator=0; rawShipIterator<shipDefinitions.length; rawShipIterator++){
        if(rawName == shipDefinitions[rawShipIterator][0]){
            return shipDefinitions[rawShipIterator][2];
        }
    }
    return 0;
}

function getShipSmallHardpoints(rawName){
    for(var rawShipIterator=0; rawShipIterator<shipDefinitions.length; rawShipIterator++){
        if(rawName == shipDefinitions[rawShipIterator][0]){
            return shipDefinitions[rawShipIterator][3];
        }
    }
    return 0;
}

function getShipMediumHardpoints(rawName){
    for(var rawShipIterator=0; rawShipIterator<shipDefinitions.length; rawShipIterator++){
        if(rawName == shipDefinitions[rawShipIterator][0]){
            return shipDefinitions[rawShipIterator][4];
        }
    }
    return 0;
}

function getShipLargeHardpoints(rawName){
    for(var rawShipIterator=0; rawShipIterator<shipDefinitions.length; rawShipIterator++){
        if(rawName == shipDefinitions[rawShipIterator][0]){
            return shipDefinitions[rawShipIterator][5];
        }
    }
    return 0;
}

function getShipHugeHardpoints(rawName){
    for(var rawShipIterator=0; rawShipIterator<shipDefinitions.length; rawShipIterator++){
        if(rawName == shipDefinitions[rawShipIterator][0]){
            return shipDefinitions[rawShipIterator][6];
        }
    }
    return 0;
}

function parseModuleName(moduleName){
    // returns a human-readable module name
    moduleNameContents=moduleName.split("_");
    // hardpoints
    if(moduleName.search("hpt_")!=-1){
        if(moduleName.search("huge")!=-1 || moduleName.search("large")!=-1 || moduleName.search("medium")!=-1 || moduleName.search("small")!=-1){
            return moduleNameContents[1]+" ("+moduleNameContents[2].charAt(0)+")";
            //return moduleNameContents[1]+" ("+moduleNameContents[2]+", "+moduleNameContents[3].charAt(0)+")";
        }else if(moduleName.search("tiny")!=-1 || moduleName.search("size0")!=-1){
            return moduleNameContents[1];
        }
    }
    // internal modules
    if(moduleName.search("int_")!=-1){
        var addition="";
        // special treatment for drones
        if(moduleName.search("dronecontrol")!=-1){
            return moduleNameContents[1]+" ("+moduleNameContents[2]+", S"+moduleNameContents[3].charAt(4)+")";
        }
        if(moduleName.search("shieldgenerator")!=-1 && moduleName.search("fast")!=-1){
            addition="bi-weave, ";
        }
        if(moduleName.search("shieldgenerator")!=-1 && moduleName.search("strong")!=-1){
            addition="prismatic, ";
        }
        return moduleNameContents[1]+" ("+addition+"S"+moduleNameContents[2].charAt(4)+")";
    }
    return moduleName;
}

function getHugeHardpoints(modules){
    var moduleList=[];
    for(var moduleIterator=0;moduleIterator<modules.length;moduleIterator++){
        if(modules[moduleIterator].search("hpt_")!=-1 && modules[moduleIterator].search("huge")!=-1){
            moduleList.push(parseModuleName(modules[moduleIterator]));
        }
    }
    return moduleList;
}
function getLargeHardpoints(modules){
    var moduleList=[];
    for(var moduleIterator=0;moduleIterator<modules.length;moduleIterator++){
        if(modules[moduleIterator].search("hpt_")!=-1 && modules[moduleIterator].search("large")!=-1){
            moduleList.push(parseModuleName(modules[moduleIterator]));
        }
    }
    return moduleList;
}
function getMediumHardpoints(modules){
    var moduleList=[];
    for(var moduleIterator=0;moduleIterator<modules.length;moduleIterator++){
        if(modules[moduleIterator].search("hpt_")!=-1 && modules[moduleIterator].search("medium")!=-1){
            moduleList.push(parseModuleName(modules[moduleIterator]));
        }
    }
    return moduleList;
}
function getSmallHardpoints(modules){
    var moduleList=[];
    for(var moduleIterator=0;moduleIterator<modules.length;moduleIterator++){
        if(modules[moduleIterator].search("hpt_")!=-1 && modules[moduleIterator].search("small")!=-1){
            moduleList.push(parseModuleName(modules[moduleIterator]));
        }
    }
    return moduleList;
}
function getShieldModules(modules){
    // shield generator, boosters, guardian reinforcements, shield cell banks
    var moduleList=[];
    for(var moduleIterator=0;moduleIterator<modules.length;moduleIterator++){
        if(modules[moduleIterator].search("shieldgenerator")!=-1
        || modules[moduleIterator].search("shieldcellbank")!=-1
        || modules[moduleIterator].search("guardianshieldreinforcement")!=-1
        || modules[moduleIterator].search("shieldbooster")!=-1
           ){
            moduleList.push(parseModuleName(modules[moduleIterator]));
        }
    }
    return moduleList;
}
function getOtherCombatModules(modules){
    // FSD interdictor, kill warrant scanner, chaff, fighter bay
    var moduleList=[];
    for(var moduleIterator=0;moduleIterator<modules.length;moduleIterator++){
        if(modules[moduleIterator].search("chafflauncher")!=-1
        || modules[moduleIterator].search("crimescanner")!=-1
        || modules[moduleIterator].search("electroniccountermeasure")!=-1
        || modules[moduleIterator].search("cloudscanner")!=-1
        || modules[moduleIterator].search("heatsinklauncher")!=-1
        || modules[moduleIterator].search("fighterbay")!=-1
        || modules[moduleIterator].search("fsdinterdictor")!=-1
           ){
            moduleList.push(parseModuleName(modules[moduleIterator]));
        }
    }
    return moduleList;
}
function getMiscModules(modules){
    // refinery, limpet controller
    var moduleList=[];
    for(var moduleIterator=0;moduleIterator<modules.length;moduleIterator++){
        if(modules[moduleIterator].search("supercruiseassist")!=-1
        || modules[moduleIterator].search("dockingcomputer")!=-1
        || modules[moduleIterator].search("detailedsurfacescanner")!=-1
        || modules[moduleIterator].search("mininglaser")!=-1
        || modules[moduleIterator].search("dronecontrol")!=-1
           ){
            moduleList.push(parseModuleName(modules[moduleIterator]));
        }
    }
    return moduleList;
}


