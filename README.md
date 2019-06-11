# <p align="center">MDEspy</p>
MDEspy is a project application that helps it's users find doctor's in their area. Using the Better-Doctor api, the app will take location and search criteria inputed by a user and return the results.

## Author: Dustin Herboldshimer
## Version 0.0.2 - 6/10/2019

### Installation:
From your terminal:
1. [your local dir]$git clone https://github.com/DuHerb/MDEspy.git
2. [your local dir] MDEspy$npm install
3. Run local Server: [your local dir] MDEspy$npm run start
4. Run Jest: [your local dir] MDEspy$npm run test (no tests written in this project...yet)

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

- Needs Pagination.  Will be handled by Mdespy object, creating a new search for each URL, saved locally
- More search options.  Search form input will be sent to URLbuilder and construct unique URLs based on non-null fields
- Error handling
- Styling

### Support and contact details

Contact Dustin Herboldshimer at dustnpdx@gmail.com

### Technologies Used

1. Webpack
2. Jest
3. Jquery
4. api/betterdoctor.com

### License

Protected under the <a href="https://opensource.org/licenses/MIT">MIT License</a>

Copyright (c) 2019 **Dustin Herboldshimer**
