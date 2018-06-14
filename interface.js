$(document).ready(function() {
  var thermostat = new Thermostat();
  updateTemperature();

  $('#temperature-up').on('click', function() {
    thermostat.up();
    updateTemperature();
  });

  $('#temperature-down').click(function() {
    thermostat.down();
    updateTemperature();
  });

  $('#temperature-reset').click(function() {
    thermostat.resetTemperature();
    updateTemperature();
  });

  $('#powersaving-on').click(function() {
    thermostat.switchPowerSavingModeOn();
    $('#power-saving-status').text('on')
    updateTemperature();
  });

  $('#powersaving-off').click(function() {
    thermostat.switchPowerSavingModeOff();
    $('#power-saving-status').text('off');
  });

  function updateTemperature() {
    $('#temperature').text(thermostat.temperature);
    $('#temperature').attr('class', thermostat.energyUsage());
  };

  displayWeather('London');

  $('#select-city').submit(function(event) {
    event.preventDefault();
    var city = $('#current-city').val();
    displayWeather(city);
  });

  function displayWeather(city) {
    var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city;
    var token = '&appid=b7cd8c6f124df59293c430ecb42d05ce';
    var units = '&units=metric';
    $.get(url + token + units, function(data) {
      $('#current-temperature').text(data.main.temp);
    });
  }
});
