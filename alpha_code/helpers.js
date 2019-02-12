/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports.thing = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('helpers');
 * mod.thing == 'a thing'; // true
 */

module.exports = {
    getTotalHarvesterCount: function() {
       return _(Game.creeps).filter( {memory: {role:'harvester'}} ).size();
    },
    
    getNewCreepID: function(){
      return "creep" + Game.time.toString();
    },
    
    getTotalCreepCount: function(){
      return _(Game.creeps).filter( {} ).size();
    },

    getBodyCost: function(body) {
      return body.reduce(function (cost, part) {
          return cost + BODYPART_COST[part];
      }, 0);
    },
  };