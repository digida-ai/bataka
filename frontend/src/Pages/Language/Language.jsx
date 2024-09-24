import { Link } from "react-router-dom";
import "./language.css";
import LanguageList from '../../assets/Language/langmap.jpg';
import languageMap from '../../assets/Language/languagemap.jpg';
import luganda from '../../assets/Language/Luganda.webp';
import swahili from '../../assets/Language/swahili.jpg';
import arabic from '../../assets/Language/arabic.jpg';

function Language() {
    return (
        <section>
            <div className={"language-header-image"}>
                <img src={LanguageList} alt="Local Language Image" loading="lazy" decoding="async" />
            </div>

            <div className="language-about-container">
                <h1 className="explore-uganda">About Language</h1>
                <p>Uganda is a linguistically diverse country with over 40 languages spoken.
                     English and Swahili are the official languages, but Luganda is widely spoken in 
                     the central region, including the capital city Kampala. 
                     The linguistic landscape of Uganda is rich and varied, reflecting the country&apos;s
                      cultural diversity. Each language has its own unique features and cultural 
                      significance, contributing to Uganda&apos;s vibrant linguistic tapestry.</p>

                <div className={"language-map"}>
                    <h1 className="explore-uganda">Languages of Uganda</h1>
                    <img src={languageMap} alt="Language Map of Uganda" loading="lazy" decoding="async" />
                    <p>Zoom to view Map</p>
                </div>
            </div>

            <h1 className="explore-uganda">Explore Local Languages</h1>

            <p className={"local-language-p"}>Only Luganda is live</p>

            <div className="explore-card-list">
                <div className="explore-card">
                    <Link to="luganda" className="explore-card-link">
                        <div className="explore-card-image-container">
                            <img src={luganda} alt="Luganda Word Image"
                                 className="explore-card-image" loading="lazy" decoding="async"/>
                        </div>
                        <div className="explore-card-text-container">
                            <p className="explore-card-text">Luganda</p>
                        </div>
                    </Link>
                </div>

                <div className="explore-card">
                    <Link to="swahili" className="explore-card-link">
                        <div className="explore-card-image-container">
                            <img src={swahili} alt="Swahili Word Image"
                                 className="explore-card-image" loading="lazy" decoding="async"/>
                        </div>
                        <div className="explore-card-text-container">
                            <p className="explore-card-text">Swahili</p>
                        </div>
                    </Link>
                </div>

                <div className="explore-card">
                    <Link to="arabic" className="explore-card-link">
                        <div className="explore-card-image-container">
                            <img src={arabic} alt="Arabic Word Image"
                                 className="explore-card-image" loading="lazy" decoding="async"/>
                        </div>
                        <div className="explore-card-text-container">
                            <p className="explore-card-text">Arabic</p>
                        </div>
                    </Link>
                </div>              
            </div>
        </section>
    );
}

export default Language;
