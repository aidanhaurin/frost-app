type Props = {

}

const FooterPanel = ({}: Props) => {

    return <div className="footer-container">
        <ul className="footer-sidelist">
            <ul className="footer-sublist">
                <h2>About F.R.O.S.T.</h2>
                <p>
                    The F.R.O.S.T. App is a simple weather forecast-based application to refresh my frontend skills.
                    Built with React and Typescript, powered by the Open-Meteos and Leaflet APIs.
                </p>
            </ul>

            <ul className="footer-sublist">
                <h2>Quick Links</h2>
                <p>
                    <a href="https://aidanhaurin.github.io/frost-app/">Search</a>
                </p>
                <p>
                    <a href="https://aidanhaurin.github.io/frost-app/about">About</a>
                </p>
            </ul>

            <ul className="footer-sublist">
                <h2>External Links</h2>
                <p>
                    <a href="https://github.com/aidanhaurin/frost-app" target='_blank' title='GitHub'><i className="bi bi-github"></i> Github</a>
                </p>
            </ul>
        </ul>
        <p>2025 Made by Aidan Haurin</p>
    </div>
};//const

export default FooterPanel;