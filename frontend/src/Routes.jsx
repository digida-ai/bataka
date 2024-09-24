import { Routes, Route } from 'react-router-dom';
import {
   About, Clan, Food, Utensil, Dress, Dance, Music, Language,
 Community, Jewels, Site, Temple, Art, Architecture, UnderWorkingPage
} from './RouteComponents.jsx';

const AppRoutes = () => {
  return (
    <Routes>
      {/* <Route path="/" element={<Home />} /> */}
      <Route path="/about" element={<About />} />
      {/* <Route path="/contact" element={<Contact />} /> */}
      <Route path="/clan" element={<Clan />} />
      <Route path="/food" element={<Food />} />
      <Route path="/dress" element={<Dress />} />
      <Route path="/dance" element={<Dance />} />
      <Route path="/music" element={<Music />} />
      <Route path="/language" element={<Language />} />
      <Route path="/community" element={<Community />} />
      <Route path="/jewels" element={<Jewels />} />
      <Route path="/site" element={<Site />} />
      <Route path="/temple" element={<Temple />} />
      <Route path="/utensil" element={<Utensil />} />
      <Route path="/art" element={<Art />} />
      <Route path="/architecture" element={<Architecture />} />
      <Route path="*" element={<UnderWorkingPage />} />
    </Routes>
  );
};

export default AppRoutes;
