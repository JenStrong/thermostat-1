# Thermostat

This project was built over a five day period during my 5th week at Makers Academy. It was the first JavaScript project, after having worked only in Ruby to this point. I used Jasmine to test drive the code.

The app fulfils the following user stories:

```
As a user
So that I can set the temperature
I want a thermostat that starts at 20 degrees
```

```
As a user
So that I can increase the temperature
I want my thermostat to have an up button
```

```
As a user
So that I can decrease the temperature
I want my thermostat to have a down button
```

```
As a user
So that I don't get too cold
My thermostat should have a minimum temperature of 10 degrees
```

```
As a user
So that I can protect the environment
My thermostat should have a power saving mode (PSM), which is on by default
```

```
As a user
So that I can regulate the temperature and my heating bills
I want PSM to cap the temperature at 25 degrees when switched on
```

```
As a user
So that I can survive the cold winter months
I want PSM to increase the maximum temperature to 32 degrees when switched off
```

```
As a user
So that I can reset the temperature
I want a reset button that sets the temperature to 20 degrees
```

```
As a user
So I can monitor my energy usage
I want the thermostat to tell me whether the current energy usage is low (<18 degrees), medium (18-25 degrees) or high (>25 degrees)
```

Low usage is indicated with a green temperature display and high usage is indicated with a red temperature display, using jQuery.

The app uses an external API from OpenWeatherMap to display the temperature in cities around the world.

Screenshot
[Screenshot](https://github.com/simone-smith/thermostat/blob/master/thermostat.png)

### How to use
- Fork this repo, and clone to your local machine
- Check that the tests are passing by typing `open SpecRunner.html` into the command line
- Open the app by typing `open index.html` into the command line.

### Technologies used
- JavaScript
- Jasmine
- jQuery
- OpenWeatherMap API
- HTML/CSS
