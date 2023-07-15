# MMM-Mensamuc [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/wiesty/MMM-Mensamuc/raw/master/LICENSE)
MagicMirror² Module to display daily menu information from the canteens of the Studierendenwerk München Oberbayern as well as some other canteens. 

**Data by [eat-api by TUM-DEV](https://github.com/TUM-Dev/eat-api/)**

The meat dish is represented by a 🍖 emoji, the vegetarian dish by a 🥕 emoji, and the vegan dish by a 🥦 emoji.


![image](https://i.imgur.com/JDnOhOu.png)


## Dependencies
* instance of [MagicMirror²](https://github.com/MichMich/MagicMirror)
* Node Fetch (linux: npm install node-fetch) (if not already installed)

## Installation
1. Clone this repository in your MagicMirror installation into the folder modules.
```git clone https://github.com/wiesty/MMM-Mensamuc.git```
2. Install dependencies in main MagicMirror folder
3. Search your canteen and modify the config template below
4. Add configuration to your config.js

## Example Config


```
{
  module: "MMM-Mensamuc",
  position: "bottom_right",
  config: {
    canteen: "mensa-lothstr", // replace your canteen
    dishTypeFilter: ["Tagesgericht", "Aktionsessen"] //  dishTypeFilter: ["ALL"] to disable the fitler
},
```



Supported canteens (by [eat-api by TUM-DEV](https://github.com/TUM-Dev/eat-api/) )

| Name                           | API-key                        | Address                                                                                                                     |
| :----------------------------- | :----------------------------- |:----------------------------------------------------------------------------------------------------------------------------|
| Mensa Arcisstraße              | mensa-arcisstr                 | [Arcisstraße 17, München](https://www.google.com/maps?q=Arcisstraße+17,+München)                                            |
| Mensa Garching                 | mensa-garching                 | [Boltzmannstraße 19, Garching](https://www.google.com/maps?q=Boltzmannstraße+19,+Garching)                                  |
| Mensa Leopoldstraße            | mensa-leopoldstr               | [Leopoldstraße 13a, München](https://www.google.com/maps?q=Leopoldstraße+13a,+München)                                      |
| Mensa Lothstraße               | mensa-lothstr                  | [Lothstraße 13d, München](https://www.google.com/maps?q=Lothstraße+13d,+München)                                            |
| Mensa Martinsried              | mensa-martinsried              | [Großhaderner Straße 6, Planegg-Martinsried](https://www.google.com/maps?q=Großhaderner%20Straße+6,+Planegg-Martinsried)    |
| Mensa Pasing                   | mensa-pasing                   | [Am Stadtpark 20, München](https://www.google.com/maps?q=Am%20Stadtpark+20,+München)                                        |
| Mensa Weihenstephan            | mensa-weihenstephan            | [Maximus-von-Imhof-Forum 5, Freising](https://www.google.com/maps?q=Maximus-von-Imhof-Forum+5,+Freising)                    |
| StuBistro Arcisstraße          | stubistro-arcisstr             | [Arcisstraße 12, München](https://www.google.com/maps?q=Arcisstraße+12,+München)                                            |
| StuBistro Goethestraße         | stubistro-goethestr            | [Goethestraße 70, München](https://www.google.com/maps?q=Goethestraße+70,+München)                                          |
| StuBistro Großhadern           | stubistro-großhadern           | [Butenandtstraße 13, Gebäude F, München](https://www.google.com/maps?q=Butenandtstraße+13,+Gebäude+F,+München)              |
| StuBistro Rosenheim            | stubistro-rosenheim            | [Hochschulstraße 1, Rosenheim](https://www.google.com/maps?q=Hochschulstraße+1,+Rosenheim)                                  |
| StuBistro Schellingstraße      | stubistro-schellingstr         | [Schellingstraße 3, München](https://www.google.com/maps?q=Schellingstraße+3,+München)                                      |
| StuBistro Martinsried          | stubistro-martinsried          | [Großhadernerstr. 9a, 82152 Planegg-Martinsried](https://www.google.com/maps/place/Gro%C3%9Fhaderner+Str.+9,+82152+Planegg) |
| StuCafé Adalbertstraße         | stucafe-adalbertstr            | [Adalbertstraße 5, München](https://www.google.com/maps?q=Adalbertstraße+5,+München)                                        |
| StuCafé Akademie Weihenstephan | stucafe-akademie-weihenstephan | [Alte Akademie 1, Freising](https://www.google.com/maps?q=Alte%20Akademie+1,+Freising)                                      |
| StuCafé Weihenstephan-Maximus  | stucafe-weihenstephan-maximus  | [Maximus-von-Imhof-Forum 5, 85354 Freising](https://www.google.com/maps/place/Maximus-von-Imhof-Forum+5,+85354+Freising)    |
| StuCafé Boltzmannstraße        | stucafe-boltzmannstr           | [Boltzmannstraße 15, Garching](https://www.google.com/maps?q=Boltzmannstraße+15,+Garching)                                  |
| StuCafé in der Mensa Garching  | stucafe-garching               | [Boltzmannstraße 19, Garching](https://www.google.com/maps?q=Boltzmannstraße+19,+Garching)                                  |
| StuCafé Karlstraße             | stucafe-karlstr                | [Karlstraße 6, München](https://www.google.com/maps?q=Karlstraße+6,+München)                                                |
| StuCafé Pasing                 | stucafe-pasing                 | [Am Stadtpark 20, München](https://www.google.com/maps?q=Am%20Stadtpark+20,+München)                                        |
| FMI Bistro Garching            | fmi-bistro                     | [Boltzmannstraße 3, Garching](https://www.google.com/maps?q=Boltzmannstraße+3,+Garching)                                    |
| IPP Bistro Garching            | ipp-bistro                     | [Boltzmannstraße 2, Garching](https://goo.gl/maps/vYdsQhgxFvH2)                                                             |

