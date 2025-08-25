# F.R.O.S.T. Weather App
by Aidan Haurin

## What is the F.R.O.S.T. App?

The F.R.O.S.T. App is a simple weather forecast-based application to refresh my frontend skills during the summer of 2025. Built with React and Typescript, powered by the Open-Meteos and Leaflet APIs.


## What F.R.O.S.T. means

- Frontend: the website runs entirely client-side, though it does rely on API calls to external servers for data.
- React: the app is made using the React framework (and Vite to make updating the project easier) because it’s the most common one out there and I’ve learned a bit of it before in college.
- Open-Source: all of the libraries/APIs used are free and open-source. Though paid proprietary alternatives may have better performance/resources, I sought to keep the cost of this project as low as possible.
- Typescript: though it brings more overhead than regular old Javascript, its safety and robustness should ultimately make developing and testing easier in the long run. Plus, it’s another skill to pick up.

## Goals of this Project

- Refining my frontend web development skills and learning more outside of what was featured in college courses I took.
- Having a demonstrable project for job applications and interviews with a decent amount of unique features.

## Features

- Get weather forecasts for locations at the moment, up to 6 hours from now, and even for the entire week!
- Search bar with basic autocomplete/suggestions!
- A geolocation button to get weather from your local area!
- An interactive map of the general area, powered by OpenStreetMap!
- Up to five of your past location searches are saved in your browser’s localStorage!

## Known Issues

- Background images are currently a work-in-progress.
- The site is mainly styled for desktop. Mobile devices have not been tested at the moment.

## Credits and Acknowledgements

- Open-Meteos for both their [Weather Forecast](https://open-meteo.com/en/docs#json_return_object) and [Geocoding](https://open-meteo.com/en/docs/geocoding-api) APIs
- [LeafletJS](https://leafletjs.com/), [React Leaflet](https://react-leaflet.js.org/), and [OpenStreetMap](https://www.openstreetmap.org/) data for building the interactive map
- [React Router](https://reactrouter.com/) for page routing
- The [Bootstrap Icons](https://icons.getbootstrap.com/) pack for providing CSS icons
- Bas Milius for his animated [Weather Icons](https://basmilius.github.io/weather-icons/index-fill.html) pack
