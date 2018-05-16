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
});
