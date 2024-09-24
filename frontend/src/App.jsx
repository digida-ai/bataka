import { Routes, Route, useNavigate } from 'react-router-dom';
import { useEffect } from "react";
import Showfestival from "./components/Showfestival.jsx";
import Map from "./Pages/Map";
import Contributors from "./Pages/Contributor.jsx";
import Navbar from "./components/Navbar.jsx";
import ExploreCard from "./components/ExploreCard.jsx";
import ImageSlider from "./components/ImageSlider.jsx";
import Emblem from './assets/App/emblem.webp';
import Contributor from './assets/App/contributor.webp';
import Mutaka from "./assets/App/omutaka.jpg";
import "./App.css";

const App = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const isSafari = () => /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

    if (isSafari()) {
      const contributorCarousel = document.getElementById('contributor-cardlist-ani');
      if (contributorCarousel) {
        contributorCarousel.classList.remove('contributor-cardlist-animation');
      }
    }
  }, []);

  const handleMapClick = () => {
    navigate('/map');
  };

  const handleContributorClick = () => {
    navigate('/contributors');
  };

  return (
    <Routes>
      <Route path="/" element={(
        <div>
            <Navbar />
          <main className="container-fluid p-0" style={{ backgroundColor: '#b6623c' }}>
            <section className="row">
              <article>
                <div className="bhc-map" onClick={handleMapClick}>
                  <div className="bhc-fake-map-container">
                    <img className="map-image" src={Mutaka} alt="Important Map of bhc" decoding="async"/>
                  </div>
                </div>
              </article>
              <article className="col-12">
                <ImageSlider />
                <ExploreCard />
                <Showfestival />
                <div className="contributor-section">
                  <h1 className="bhc-map-heading">Contributor</h1>
                  <div id="contributor-cardlist-ani" className="contributor-cardlist contributor-cardlist-animation">
                    <div className="contributor-profile">
                      <div className="contributor-profile-image-container">
                        <img src={Emblem} alt="emblem Image" loading="lazy" decoding="async"/>
                      </div>
                      <div className="contributor-profile-name">
                        <p className="profile-name">dgidanlpai</p>
                        <p>Developer</p>
                      </div>
                    </div>
                    <div className="contributor-profile">
                      <div className="contributor-profile-image-container">
                        <img src={Contributor} alt="emblem Image" loading="lazy" decoding="async"/>
                      </div>
                      <div className="contributor-profile-name">
                        <p className="profile-name">Waiting </p>
                      </div>
                    </div>
                  </div>
                  <p onClick={handleContributorClick}>Click to view more</p>
                </div>
              </article>
            </section>
          </main>
          </div>
        )}
      />

      <Route path="/map" element={<Map />} />
      <Route path="/contributors" element={<Contributors />} />
      
    </Routes>
  );
};

export default App;
