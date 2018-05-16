$( document ).ready(function() {
  thermostat = new Thermostat();

    $( "#eco" ).click(function( event ) {
        thermostat.togglePowerMode()
        console.log(thermostat.temperature)
    });

    $( "#temp").text(thermostat.temperature)

    $( "#up" ).click(function(){
      var number = $('#number').val();
      thermostat.up(parseInt(number));
      $("#temp").text(thermostat.temperature)
    })

    $( "#down" ).click(function(){
      var number = $('#number').val();
      thermostat.down(parseInt(number));
      $("#temp").text(thermostat.temperature)
    })

    $( "#reset" ).click(function(){
      thermostat.reset();
      $("#temp").text(thermostat.temperature)
    })

});
