function Thermostat(temperature = 20, powersave = true){
  this.temperature = temperature;
  this.isPowerMode = powersave;
  this.maxTemp = 25
};

Thermostat.prototype.up = function(number) {
  this.temperature += number;
  if (this.temperature > this.maxTemp ) {
    this.temperature = this.maxTemp;
  };
};

Thermostat.prototype.down = function(number) {

  this.temperature -= number;
  if (this.temperature < 10 ) {
    this.temperature = 10;
  };
};

Thermostat.prototype.togglePowerMode = function() {
  this.isPowerMode = !this.isPowerMode;
  if (this.isPowerMode == true) {
    this.maxTemp = 25
  } else {
    this.maxTemp = 32
  }
};

Thermostat.prototype.reset = function() {
  this.temperature =20;
};

Thermostat.prototype.usage = function() {
  if (this.temperature < 18) {
    return "low usage"
  } else if (this.temperature < 25) {
    return "medium usage"
  } else {
    return "high usage"
  }
};
