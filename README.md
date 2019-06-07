# <p align="center">MDEspy</p>
MDEspy is a project application that helps it's users find doctor's in their area. Using the Better-Doctor api, the app will take location and search criteria inputed by a user and return the results.

## Author: Dustin Herboldshimer
## Version 0.0.1 = 6/7/2019

### Installation:
From your terminal:
1. [your local dir]$git clone https://github.com/DuHerb/MDEspy.git
2. [your local dir] MDEspy$npm install
3. Run local Server: [your local dir] MDEspy$npm run start
4. Run Jest: [your local dir] MDEspy$npm run test

### Specifications:
| Spec                                              | Input                                             | Expected Output                                                                                                                                          |
|---------------------------------------------------|---------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------|
| App makes api call to Better-Doctor               | https://${better-doctor api url and key}          | JSON Response                                                                                                                                            |
| User can search by medical issue from select list | Search by Condition = (select input) => Back Pain | Doctors treating back pain:<br> Doctor1.name<br> Doctor1.address<br> Doctor1.phone<br>  Doctor1.website<br> Doctor1.availability<br> <br>  Doctor2 ..... |
| User can search by doctor name                    | Search by name = (text input) => Bledsoe          |   Doctors matching "Bledsoe":<br>  <br> Doctor1.name<br> Doctor1.address<br> .....<br>                                                                   |
| Api call results in error                         | https://{invalid api key}                         | Error Message: not authorized                                                                                                                            |
| Response doesn't return a match                   | Search by Condition = (select menu) => Wonky Eye  |  Doctors treating 'Wonky Eye':<br> <br> Sorry. There are no 'Wonky Eye'   doctors available in your area.                                               |
|                                                   |                                                   |                                                                                                                                                          |
|                                                   |                                                   |                                                                                                                                                          |

### Known Issues, Bugs, and ToDos

1. needs more validation options to trigger display messages(maybe an error parser in the solarage object)
2. Planets outside Jupiter (saturn, uranus and neptune) are not included in options yet. They are so far out that your
   solar age on any of those planets would be under one year old, and as of now, solarage logic floors all outputs to the lowest
   whole number, which isn't helpful when you'd need to measure age in decimals. The planets have been included in the solarage object
   for future updates.

### Support and contact details

Contact Dustin Herboldshimer at dustnpdx@gmail.com

### Technologies Used

1. Webpack
2. Jest
3. Jquery

### License

Protected under the <a href="https://opensource.org/licenses/MIT">MIT License</a>

Copyright (c) 2019 **Dustin Herboldshimer**