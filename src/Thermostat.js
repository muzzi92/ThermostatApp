function Thermostat(){
  this.temperature = 20;
  this.isPowerMode = true;
};

Thermostat.prototype.up = function(number) {
  this.temperature += number;
};

Thermostat.prototype.down = function(number) {
  this.temperature -= number;
  if (this.temperature < 10 ) {
    this.temperature = 10;
    throw "its too cold bro put on a jumper";
  };
};

Thermostat.prototype.togglePowerMode = function() {
  this.isPowerMode = !this.isPowerMode;
};
