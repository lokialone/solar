// es6重写Sim.js



class Sim {

    constructor() {

    }
    static Publisher () {
        this.messageTypes = {};
    }
}

// Some constants

/* key codes
37: left
38: up
39: right
40: down
*/
Sim.KeyCodes = {};
Sim.KeyCodes.KEY_LEFT  = 37;
Sim.KeyCodes.KEY_UP  = 38;
Sim.KeyCodes.KEY_RIGHT  = 39;
Sim.KeyCodes.KEY_DOWN  = 40;

export default Sim;
