var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');
var roleBuilder = require('role.builder');
var helpers = require('helpers');

var normalState = {
    harvesterCount:3,
    upgraderCount:2,
    
}

const HARVESTER_BODY = [WORK, CARRY, MOVE];

module.exports.loop = function () {
    console.log(helpers.getTotalHarvesterCount());
    
    if (helpers.getTotalHarvesterCount() < 3) {
        for(const i in Game.spawns) {
            if (Game.spawns[i].energy < helpers.getBodyCost(HARVESTER_BODY)) {
                continue;
            }
            console.log("Spawning creep " + Game.time.toString());
            Game.spawns[i].createCreep(HARVESTER_BODY,helpers.getNewCreepID(),{role:'harvester'});
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