$( document ).ready(function() {
  thermostat = new Thermostat();

    function UsageColour() {
      if (thermostat.usage() === 'low usage') {
        $('#usage').css("color", "green");
      } else if (thermostat.usage() === 'high usage') {
        $('#usage').css("color", "red");
      } else {
        $('#usage').css("color", "black")
      }
    };

    $( "#eco" ).click(function( event ) {
        thermostat.togglePowerMode();
        $( "#eco-power").text(function(){
          if (thermostat.isPowerMode === true) {
            return 'On';
          } else {
            return 'Off';
          }
        })
    });

    $( "#temp").text(thermostat.temperature)
    $( "#eco-power" ).text('On')
    $("#usage").text(thermostat.usage());

    $( "#up" ).click(function(){
      var number = $('#number').val();
      if (number.length === 0) {
        number = 1;
      }
      thermostat.up(parseInt(number));
      $("#temp").text(thermostat.temperature);
      $("#usage").text(thermostat.usage());
      UsageColour();
      if (thermostat.temperature == thermostat.maxTemp) {
        alert("Nelly says: It's getting hot in here!")
      }
    })

    $( "#down" ).click(function(){
      var number = $('#number').val();
      if (number.length === 0) {
        number = 1;
      }
      thermostat.down(parseInt(number));
      $("#temp").text(thermostat.temperature);
      $("#usage").text(thermostat.usage());
      UsageColour();
      if (thermostat.temperature == 10) {
        alert("What's cooler than being cool? ICE COOOOLD")
      }
    })

    $( "#reset" ).click(function(){
      thermostat.reset();
      $("#temp").text(thermostat.temperature);
      $("#usage").text(thermostat.usage());
      UsageColour();
    })

    $.get("http://api.openweathermap.org/data/2.5/weather?id=2643743&APPID=e4ab63da211ff20a94fb624731843c8f", function(data){
      var currentTemp = Math.ceil(data.main.temp - 273.15);
      $("#city-temp").text(currentTemp);
      $('#city').text(data.name);
    });


});
