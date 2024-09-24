import "./explorecard.css"
import {Link} from "react-router-dom";
import Art from '../assets/App/art.webp';
import Languages from '../assets/App/lang.webp';
import Food from '../assets/App/food.webp';
import Dance from '../assets/App/dance.webp';
import Jewels from '../assets/App/jewels.webp';
import Souvens from '../assets/App/souvens.webp';
import Dress from '../assets/App/dress.webp';
import Instruments from '../assets/App/instru.webp';
import Architecture from '../assets/App/structs.webp';
import Regalia from '../assets/App/regalia.webp';
import Music from '../assets/App/music.webp';
import Books from '../assets/App/books.webp';
import Sites from '../assets/App/sites.webp';
import Utensils from '../assets/App/utensils.webp';
import Health from '../assets/App/herbal.webp';
import Belief from '../assets/App/shrine.webp';
import Falklore from '../assets/App/hearthstone.webp';
import Clans from '../assets/App/clan.webp';



import {useEffect} from "react";

function ExploreCard() {
    
    useEffect(() => {
        function isSafari() {
            return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
        }

        if (isSafari()) {
            const carouselWrapper = document.getElementById('explore-card');
            if (carouselWrapper) {
                carouselWrapper.classList.remove('explore-card-animation');
            }
        }
    }, []);

    return (
        <section className="explore-section">
            <h1 className="explore-bhc">Explore the Heritage</h1>
            <p className={"explore-bhc-info"}>Click card to explore</p>

            <div className="explore-card-list">

            <div id="explore-card" className="explore-card explore-card-animation">
                    <Link to={'/clan'} className="explore-card-link">
                        <div className="explore-card-image-container">
                            <img src={`${Clans}`} alt="Clans Image"
                                 className="explore-card-image" loading="lazy" decoding="async"/>
                        </div>
                        <div className="explore-card-text-container">
                            <p className="explore-card-text">Clans</p>
                        </div>
                    </Link>
                </div>

                <div id="explore-card" className="explore-card explore-card-animation">
                    <Link to={'/clan'} className="explore-card-link">
                        <div className="explore-card-image-container">
                            <img src={`${Languages}`} alt="Language Surveys Image"
                                 className="explore-card-image" loading="lazy" decoding="async"/>
                        </div>
                        <div className="explore-card-text-container">
                            <p className="explore-card-text">Languages</p>
                        </div>
                    </Link>
                </div>

                <div id="explore-card" className="explore-card explore-card-animation">
                    <Link to={"/food"} className="explore-card-link">
                        <div className="explore-card-image-container">
                            <img src={`${Food}`} alt="Food Image"
                                 className="explore-card-image" loading="lazy" decoding="async"/>
                        </div>
                        <div className="explore-card-text-container">
                            <p className="explore-card-text">Food</p>
                        </div>
                    </Link>
                </div>

                <div id="explore-card" className="explore-card explore-card-animation">
                    <Link to={"/site"} className="explore-card-link">
                        <div className="explore-card-image-container">
                            <img src={`${Sites}`} alt="Sites Image"
                                 className="explore-card-image" loading="lazy" decoding="async"/>
                        </div>
                        <div className="explore-card-text-container">
                            <p className="explore-card-text">Sites</p>
                        </div>
                    </Link>
                </div>

                <div id="explore-card" className="explore-card explore-card-animation">
                    <Link to={"/jewellery"} className="explore-card-link">
                        <div className="explore-card-image-container">
                            <img
                                src={`${Jewels}`}
                                alt="Jewellery Image"
                                className="explore-card-image jewellery" loading="lazy" decoding="async"/>
                        </div>
                        <div className="explore-card-text-container">
                            <p className="explore-card-text">Jewellery</p>
                        </div>
                    </Link>
                </div>

                <div id="explore-card" className="explore-card explore-card-animation">
                    <Link to={"/souvenirs"} className="explore-card-link">
                        <div className="explore-card-image-container">
                            <img
                                src={`${Souvens}`}
                                alt="Souvenirs Image"
                                className="explore-card-image souvenirs" loading="lazy" decoding="async"/>
                        </div>
                        <div className="explore-card-text-container">
                            <p className="explore-card-text">Souvenirs</p>
                        </div>
                    </Link>
                </div>

                <div id="explore-card" className="explore-card explore-card-animation">
                    <Link to={"/dance"} className="explore-card-link">
                        <div className="explore-card-image-container">
                            <img src={`${Dance}`} alt="Dance Image"
                                 className="explore-card-image" loading="lazy" decoding="async"/>
                        </div>
                        <div className="explore-card-text-container">
                            <p className="explore-card-text">Dance</p>
                        </div>
                    </Link>
                </div>

                <div id="explore-card" className="explore-card explore-card-animation ">
                   <Link to={"/dress"} className="explore-card-link">
                       <div className="explore-card-image-container">
                            <img src={`${Dress}`} alt="Dress Image"
                                 className="explore-card-image" loading="lazy" decoding="async"/>
                       </div>
                      <div className="explore-card-text-container">
                            <p className="explore-card-text">Traditional Dresses</p>
                        </div>
                    </Link>
                </div>

                <div id="explore-card" className="explore-card explore-card-animation">
                    <Link to={"/art"} className="explore-card-link">
                        <div className="explore-card-image-container">
                            <img src={`${Art}`} alt="Art Image"
                                 className="explore-card-image" loading="lazy" decoding="async"/>
                        </div>
                        <div className="explore-card-text-container">
                            <p className="explore-card-text">Art</p>
                        </div>
                    </Link>
                </div>

                <div id="explore-card" className="explore-card explore-card-animation">
                    <Link to={"/instruments"} className="explore-card-link">
                        <div className="explore-card-image-container">
                            <img src={`${Instruments}`} alt="Instruments Image"
                                 className="explore-card-image" loading="lazy" decoding="async"/>
                        </div>
                        <div className="explore-card-text-container">
                            <p className="explore-card-text">Instruments</p>
                        </div>
                    </Link>
                </div>

                <div id="explore-card" className="explore-card explore-card-animation">
                    <Link to={"/music"} className="explore-card-link">
                        <div className="explore-card-image-container">
                            <img src={`${Music}`} alt="Music Image"
                                 className="explore-card-image" loading="lazy" decoding="async"/>
                        </div>
                        <div className="explore-card-text-container">
                            <p className="explore-card-text">Music</p>
                        </div>
                    </Link>
                </div>

                <div id="explore-card" className="explore-card explore-card-animation">
                    <Link to={"/architecture"} className="explore-card-link">
                        <div className="explore-card-image-container">
                            <img src={`${Architecture}`} alt="architecture Image"
                                 className="explore-card-image" loading="lazy" decoding="async"/>
                        </div>
                        <div className="explore-card-text-container">
                            <p className="explore-card-text">Architecture</p>
                        </div>
                    </Link>
                </div>

                <div id="explore-card" className="explore-card explore-card-animation">
                    <Link to={"/utensils"} className="explore-card-link">
                        <div className="explore-card-image-container">
                            <img
                                src={`${Utensils}`}
                                alt="Utensils Image"
                                className="explore-card-image" loading="lazy" decoding="async"/>
                        </div>
                        <div className="explore-card-text-container">
                            <p className="explore-card-text">Tools-Utensils</p>
                        </div>
                    </Link>
                </div>

                <div id="explore-card" className="explore-card explore-card-animation">
                    <Link to={"/regalia"} className="explore-card-link">
                        <div className="explore-card-image-container">
                            <img
                                src={`${Regalia}`}
                                alt="Regalia Image"
                                className="explore-card-image" loading="lazy" decoding="async"/>
                        </div>
                        <div className="explore-card-text-container">
                            <p className="explore-card-text">Regalia</p>
                        </div>
                    </Link>
                </div>

                <div id="explore-card" className="explore-card explore-card-animation">
                    <Link to={"/health"} className="explore-card-link">
                        <div className="explore-card-image-container">
                            <img
                                src={`${Health}`}
                                alt="Health Image"
                                className="explore-card-image" loading="lazy" decoding="async"/>
                        </div>
                        <div className="explore-card-text-container">
                            <p className="explore-card-text">Health</p>
                        </div>
                    </Link>
                </div>

                <div id="explore-card" className="explore-card explore-card-animation">
                    <Link to={"/beliefs"} className="explore-card-link">
                        <div className="explore-card-image-container">
                            <img
                                src={`${Belief}`}
                                alt="Beliefs Image"
                                className="explore-card-image" loading="lazy" decoding="async"/>
                        </div>
                        <div className="explore-card-text-container">
                            <p className="explore-card-text">Beliefs</p>
                        </div>
                    </Link>
                </div>

                <div id="explore-card" className="explore-card explore-card-animation">
                    <Link to={"/books"} className="explore-card-link">
                        <div className="explore-card-image-container">
                            <img
                                src={`${Books}`}
                                alt="Books Image"
                                className="explore-card-image" loading="lazy" decoding="async"/>
                        </div>
                        <div className="explore-card-text-container">
                            <p className="explore-card-text">Books</p>
                        </div>
                    </Link>
                </div>
                <div id="explore-card" className="explore-card explore-card-animation">
                    <Link to={"/falklore"} className="explore-card-link">
                        <div className="explore-card-image-container">
                            <img
                                src={`${Falklore}`}
                                alt="Falklore Image"
                                className="explore-card-image" loading="lazy" decoding="async"/>
                        </div>
                        <div className="explore-card-text-container">
                            <p className="explore-card-text">Falklore</p>
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default ExploreCard;