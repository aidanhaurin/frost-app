const About = () => {
    return <div className="container">
        <h3>What is the F.R.O.S.T. App?</h3>
        <p>
            The F.R.O.S.T. App is a simple weather forecast-based application to refresh my frontend skills.
            Built with React and Typescript, powered by the Open-Meteos and Leaflet APIs.
        </p>

        <h3>What F.R.O.S.T. means</h3>
        <ul>
            <li>
                <strong>Frontend</strong>: the website runs entirely client-side, though it does rely on API calls to external servers for data.
            </li>
            <li>
                <strong>React</strong>: the app is made using the React framework (and Vite to make updating the project easier) because 
                it’s the most common one out there and I’ve learned a bit of it before in college.
            </li>
            <li>
                <strong>Open-Source</strong>: all of the libraries/API’s used are free and open-source. Though paid proprietary alternatives may have better performance/resources, 
                I sought to keep the cost of this project as low as possible.
            </li>
            <li>
                <strong>Typescript</strong>: though it brings more overhead than regular old Javascript, its safety and robustness 
                should ultimately make developing and testing easier in the long run. Plus, it’s another skill to pick up.
            </li>
        </ul>

        <h3>Goals of this Project</h3>
        <ul>
            <li>
                Refining my frontend web development skills and learning more outside of what was featured in college courses I took
            </li>
            <li>
                Having a demonstrable project for job applications and interviews.
                Weather apps seem to be extremely common projects online but most examples I found are much more bare-bones than this one.
            </li>
        </ul>

        <h3>Features</h3>
        <ul>
            <li>
                Get weather forecasts for locations at the moment, up to 6 hours from now, and even for the entire week!
            </li>
            <li>
                Search bar with basic autocomplete/suggestions!
            </li>
            <li>
                A geolocation button to get weather from your local area!
            </li>
            <li>
                An interactive map of the general area, powered by OpenStreetMap!
            </li>
            <li>
                Up to five of your past location searches are saved in your browser’s localStorage!
            </li>
        </ul>

        <h3>Credits and Acknowledgements</h3>
        <ul>
            <li>
                Open-Meteos for both their <a className="a-hoverable" href="https://open-meteo.com/en/docs#json_return_object" target="_blank">Weather Forecast</a> and 
                <a className="a-hoverable" href="https://open-meteo.com/en/docs/geocoding-api" target="_blank">Geocoding</a> APIs
            </li>
            <li>
                <a className="a-hoverable" href="https://leafletjs.com/" target="_blank">LeafletJS</a>, <a className="a-hoverable" href="https://react-leaflet.js.org/" target="_blank">React Leaflet</a>, 
                and <a className="a-hoverable" href="https://www.openstreetmap.org/" target="_blank">OpenStreetMap</a> for building the interactive map
            </li>
            <li>
                <a className="a-hoverable" href="https://reactrouter.com/" target="_blank">React Router</a> for page routing
            </li>
            <li>
                The <a className="a-hoverable" href="https://icons.getbootstrap.com/" target="_blank">Bootstrap Icons pack</a> for providing css icons
            </li>
            <li>
                Bas Milius for his animated <a className="a-hoverable" href="https://basmilius.github.io/weather-icons/index-fill.html" target="_blank">Weather Icons</a> pack
            </li>
        </ul>
    </div>
}

export default About;