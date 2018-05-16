$( document ).ready(function() {
  thermostat = new Thermostat();

    $( "#eco" ).click(function( event ) {
        thermostat.togglePowerMode()
        console.log(thermostat.temperature)
    });

    $( "#temp").text(thermostat.temperature)

    $( "#up" ).click(function(){
      thermostat.up(1);
      $("#temp").text(thermostat.temperature)
    })

    $( "#down" ).click(function(){
      thermostat.down(1);
      $("#temp").text(thermostat.temperature)
    })

    $( "#reset" ).click(function(){
      thermostat.reset();
      $("#temp").text(thermostat.temperature)
    })

});
