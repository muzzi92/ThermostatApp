$( document ).ready(function() {
  thermostat = new Thermostat();
  $( "#temp").text(thermostat.temperature)
  $( "#eco-power" ).text('On')
  $("#usage").text(thermostat.usage());
  $.get("http://api.openweathermap.org/data/2.5/weather?q=london&APPID=e4ab63da211ff20a94fb624731843c8f", function(data){
    $("#city").text(data.name);
    $("#city-temp").text(Math.ceil(data.main.temp - 273.15));
  });

    function UsageColour() {
      if (thermostat.usage() === 'low usage') {
        $('#usage').css("color", "green");
      } else if (thermostat.usage() === 'high usage') {
        $('#usage').css("color", "red");
      } else {
        $('#usage').css("color", "white")
      }
    };

    $( "#eco" ).click(function( event ) {
        thermostat.togglePowerMode();
        $( "#eco-power").text(function(){
          if (thermostat.isPowerMode === true) {
            return 'On';
          } else {
            return 'Off';
          };
        });
    });

    $( "#up" ).click(function(){
      var number = $('#number').val();
      if (number.length === 0) {
        number = 1;
      };
      thermostat.up(parseInt(number));
      $("#temp").text(thermostat.temperature);
      $("#usage").text(thermostat.usage());
      UsageColour();
      if (thermostat.temperature == thermostat.maxTemp) {
        alert("Nelly says: It's getting hot in here!");
      }});

    $( "#down" ).click(function(){
      var number = $('#number').val();
      if (number.length === 0) {
        number = 1;
      };
      thermostat.down(parseInt(number));
      $("#temp").text(thermostat.temperature);
      $("#usage").text(thermostat.usage());
      UsageColour();
      if (thermostat.temperature == 10) {
        alert("What's cooler than being cool? ICE COOOOLD");
      };
    });

    $( "#reset" ).click(function(){
      thermostat.reset();
      $("#temp").text(thermostat.temperature);
      $("#usage").text(thermostat.usage());
      UsageColour();
    })

    $("#choose-city").change(function(){
      var city = $('#choose-city').val();
      console.log(city);
      $.get("http://api.openweathermap.org/data/2.5/weather?q=" + city + "&APPID=e4ab63da211ff20a94fb624731843c8f", function(data){
        var currentCity = data;
        $("#city-temp").text(Math.ceil(currentCity.main.temp - 273.15));
        $('#city').text(currentCity.name);
      });
    });

});
