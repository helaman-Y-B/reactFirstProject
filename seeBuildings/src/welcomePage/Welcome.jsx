import "../public/css/welcomeCSS/welcomePage.css";
import bannerImg from "../public/img/welcomeBanner.png";

function WelcomePage() {
    return (
        <>
            <div>
                <div id="welcomeBunner">
                    <h2>Welcome</h2>
                    <p>Welcome to the webpage</p>
                </div>
                <div id='imgBanner'>
                    <img src={bannerImg} alt="londrina city buildings" />
                </div>
                <div id='infos'>
                    <h3>Infos about the page</h3>
                    <p>some infos here</p>
                </div>
            </div>
        </>
    )
}

export default WelcomePage;