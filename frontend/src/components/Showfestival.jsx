import { useState, useEffect, useCallback, useRef } from 'react';
import { Link } from 'react-router-dom';
import './festSlider.css';

const festivals = [
    {
        name: "Singo Cultural Festival",
        description: "Experience the vibrant Singo Cultural Festival, celebrating the rich heritage of the Singo clan. Enjoy traditional music, dance, and culinary delights that highlight the unique cultural practices of the Singo people.",
        date: "Date: 14th November 2024"
    },
    {
        name: "Buddu Cultural Festival",
        description: "Join us for the Buddu Cultural Festival, a magnificent display of the Buddu clan's customs and traditions. This festival features captivating performances, historical reenactments, and local crafts showcasing the Buddu's artistic heritage.",
        date: "Date: 14th January 2025"
    },
    {
        name: "Bulemeezi Cultural Festival",
        description: "The Bulemeezi Cultural Festival is a grand celebration of the Bulemeezi clan's legacy. Engage in a series of cultural events, including storytelling sessions, traditional sports, and vibrant parades that bring the Bulemeezi's history to life.",
        date: "Date: 14th March 2025"
    },
    // Add more festivals here...
];

const FestivalSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const sliderRef = useRef(null);

    const nextSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev + 1) % festivals.length);
    }, []);

    const prevSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev - 1 + festivals.length) % festivals.length);
    }, []);

    useEffect(() => {
        const interval = setInterval(nextSlide, 5000);
        return () => clearInterval(interval);
    }, [nextSlide]);

    const currentFestival = festivals[currentSlide];

    return (
        <div className="festival-slider" ref={sliderRef}>
            <h1>Upcoming Bika Heritage Festivals</h1>
            <p className="festival-slider-info">Click to view more</p>
            <div className="festival-card">
                <Link to={`/festival/${currentFestival.name.replace(/\s/g, '').toLowerCase()}`}>
                    <h3>{currentFestival.name}</h3>
                    <p className="festival-date">{currentFestival.date}</p>
                    <p className="festival-description">{currentFestival.description}</p>
                </Link>
            </div>
            <div className="arrow arrow-left" onClick={prevSlide}>&#10094;</div>
            <div className="arrow arrow-right" onClick={nextSlide}>&#10095;</div>
        </div>
    );
};

export default FestivalSlider;
