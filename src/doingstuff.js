$( document ).ready(function() {
  thermostat = new Thermostat();

    $( "#eco" ).click(function( event ) {
        thermostat.togglePowerMode()
        console.log(thermostat.temperature)
    });

});
