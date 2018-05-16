describe('Thermostat', function(){
  var thermostat;
  beforeEach(function(){
    thermostat = new Thermostat();
  });

  describe('temperature', function(){
    it('starts with a temperature of 20', function(){
      expect(thermostat.temperature).toEqual(20);
    });
  });

  describe('up',function(){
    it('increases the temperature by the arg', function(){
      thermostat.up(5);
      expect(thermostat.temperature).toEqual(25);
    });
  });
  describe('down', function(){
    it('decreases the temperature by the arg', function(){
      thermostat.down(10);
      expect(thermostat.temperature).toEqual(10);
    });

    it('raises an error if temp goes below 10', function() {
      expect(function() { thermostat.down(11) }).toThrow("its too cold bro put on a jumper");
    });

    it('should default to ten if it goes below that', function() {
      expect(function() { thermostat.down(20) }).toThrow("its too cold bro put on a jumper");
      expect(thermostat.temperature).toEqual(10)
    });
  });

  describe('power ranger mode', function(){
    it('starts as true', function(){
      expect(thermostat.isPowerMode).toEqual(true);
    });
    it('toggle function switches power mode from true to false', function(){
      thermostat.togglePowerMode();
      expect(thermostat.isPowerMode).toEqual(false);
    });
    it('toggle function switches power mode from false to true', function(){
      thermostat.togglePowerMode();
      thermostat.togglePowerMode();
      expect(thermostat.isPowerMode).toEqual(true);
    });
    it('when power ranger mode is on max temp is 25', function(){
      expect(function() { thermostat.up(20) }).toThrow("Nelly - 'it\'s getting hot in here'");
      expect(thermostat.temperature).toEqual(25);
    })
    it('changes the maxTemp when toggle is off',function(){
      thermostat.togglePowerMode();
      expect(thermostat.maxTemp).toEqual(32);
    })
  });

  describe('reset temperature', function(){
    it('resets temperature to 20', function(){
      thermostat.up(2);
      thermostat.reset();
      expect(thermostat.temperature).toEqual(20);
    })
  });

  describe('current usage', function(){
    it('shows the user if its low usage', function(){
      thermostat.down(9);
      expect(thermostat.usage()).toEqual("low usage");
    });
    it('shows the user if its medium usage', function(){
      expect(thermostat.usage()).toEqual("medium usage");
    });
    it('shows the user if its high usage', function(){
      thermostat.togglePowerMode();
      thermostat.up(6)
      expect(thermostat.usage()).toEqual("high usage");
    });
  })
});
