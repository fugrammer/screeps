var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');
var roleBuilder = require('role.builder');
var helpers = require('helpers');

var normalState = {
    harvesterCount=3,
    das = 2
}

module.exports.loop = function () {
    console.log(helpers.getTotalHarvesterCount());
    
    if (helpers.getTotalHarvesterCount() < 3) {
        for(const i in Game.spawns) {
            if (Game.spawns[i].energy < 200) {
                continue;
            }
            console.log("Spawning creep " + Game.time.toString());
            var n = Game.spawns[i].createCreep([WORK,CARRY,MOVE],helpers.getNewCreepID(),{role:'harvester'});
            Memory.creep_count ++;
        }
    }
    for(var name in Game.creeps) {
        var creep = Game.creeps[name];
        if(creep.memory.role == 'harvester') {
            roleHarvester.run(creep);
        }
        if(creep.memory.role == 'upgrader') {
            roleUpgrader.run(creep);
        }
        if(creep.memory.role == 'builder') {
            roleBuilder.run(creep);
        }
    }
}