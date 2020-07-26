const Character = require('./Character');
const Potion = require('../lib/Potion');

class Player extends Character {
    constructor(name = '') {
        // call parent constructor here:
        super(name);

        this.inventory = [new Potion('health'), new Potion()];
    }

        // // inherit prototype methods from Character here:
        // Player.prototype = Object.create(Character.prototype);
        
        // returns an object with various player properties
        getStats() {
            return {
              potions: this.inventory.length,
              health: this.health,
              strength: this.strength,
              agility: this.agility
            };
        };

        // returns the inventory array or false if empty
        getInventory() {
            if (this.inventory.length) {
              return this.inventory;
            }
            return false;
        };

        // // returns health value of player
        // Player.prototype.getHealth = function() {
        //     return `${this.name}'s health is now ${this.health}!`;
        // };

        // // returns truthy or falsy depending on player's health
        // Player.prototype.isAlive = function() {
        //     if (this.health === 0) {
        //       return false;
        //     }
        //     return true;
        // };

        // // health reduction
        // Player.prototype.reduceHealth = function(health) {
        //     this.health -= health;
          
        //     // conditional to ensure health never goes negative
        //     if (this.health < 0) {
        //       this.health = 0;
        //     }
        // };

        // // get Player's randomised attack value
        // Player.prototype.getAttackValue = function() {
        //     const min = this.strength - 5;
        //     const max = this.strength + 5;
          
        //     return Math.floor(Math.random() * (max - min) + min);
        // };

        // pushes new potion to inventory array
        addPotion(potion) {
            this.inventory.push(potion);
        };

        // reduce potion from inventory array
        usePotion(index) {
            const potion = this.getInventory().splice(index, 1)[0];
          
            switch (potion.name) {
              case 'agility':
                this.agility += potion.value;
                break;
              case 'health':
                this.health += potion.value;
                break;
              case 'strength':
                this.strength += potion.value;
                break;
            }
          };
  
}

module.exports = Player;