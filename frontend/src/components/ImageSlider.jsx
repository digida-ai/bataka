import {useState, useEffect, useCallback, useRef } from 'react';
import './imageSlider.css';
import mutaka from "../assets/App/mutaka.webp";
import mutaka1 from "../assets/App/mutaka1.webp";
import mutaka2 from "../assets/App/mutaka2.webp";
import mutaka3 from "../assets/App/mutaka3.webp";
import mutaka4 from "../assets/App/mutaka4.webp";
import mutaka5 from "../assets/App/mutaka5.webp";
import mutaka6 from "../assets/App/mutaka6.webp";
import mutaka7 from "../assets/App/mutaka7.webp";
import mutaka8 from "../assets/App/mutaka8.webp";
import mutaka9 from "../assets/App/mutaka9.webp";
import mutaka10 from "../assets/App/mutaka10.webp";
import mutaka11 from "../assets/App/mutaka11.webp";
import mutaka12 from "../assets/App/mutaka12.webp";
import mutaka13 from "../assets/App/mutaka13.webp";
import mutaka14 from "../assets/App/mutaka14.webp";
import mutaka15 from "../assets/App/mutaka15.webp";
import mutaka16 from "../assets/App/mutaka16.webp";
import mutaka17 from "../assets/App/mutaka17.webp";
import mutaka18 from "../assets/App/mutaka18.webp";
import mutaka19 from "../assets/App/mutaka19.webp";
import mutaka20 from "../assets/App/mutaka20.webp";
import mutaka21 from "../assets/App/mutaka21.webp";
import mutaka22 from "../assets/App/mutaka22.webp";
import mutaka23 from "../assets/App/mutaka23.webp";
import mutaka24 from "../assets/App/mutaka24.webp";
import mutaka25 from "../assets/App/mutaka25.webp";
import mutaka26 from "../assets/App/mutaka26.webp";
import mutaka27 from "../assets/App/mutaka27.webp";
import mutaka28 from "../assets/App/mutaka28.webp";
import mutaka29 from "../assets/App/mutaka29.webp";


const ImageSlider = () => {
    const [images] = useState(Array(56).fill(null).map((_, index) => {
        const imageArray = [mutaka, mutaka1, mutaka2, mutaka3, mutaka4, mutaka5,
            mutaka6, mutaka7, mutaka8, mutaka9, mutaka10, mutaka11,
            mutaka12, mutaka13, mutaka14, mutaka15, mutaka16, mutaka17,
            mutaka18, mutaka19, mutaka20, mutaka21, mutaka22, mutaka23,
            mutaka24, mutaka25, mutaka26, mutaka27, mutaka28, mutaka29
        ];
        return {
            src: imageArray[index % imageArray.length],
            alt: `Mutaka Image ${index + 1}`
        };
    }));
    const [currentSlide, setCurrentSlide] = useState(0);
    const [hexSize, setHexSize] = useState(100);
    const sliderRef = useRef(null);

    const calculateHexSize = useCallback(() => {
        if (sliderRef.current) {
            const containerWidth = sliderRef.current.offsetWidth;
            const containerHeight = sliderRef.current.offsetHeight;
            const size = Math.min(containerWidth / 4, containerHeight / 1) * 0.7; // 8 columns, 6 rows
            setHexSize(size);
        }
    }, []);

    const nextSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev === 0 ? 1 : 0));
    }, []);

    const prevSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev === 0 ? 1 : 0));
    }, []);

    useEffect(() => {
        calculateHexSize();
        window.addEventListener('resize', calculateHexSize);
        const interval = setInterval(nextSlide, 30000);
        return () => {
            clearInterval(interval);
            window.removeEventListener('resize', calculateHexSize);
        };
    }, [nextSlide, calculateHexSize]);

    const renderHexagons = (startIndex) => {
        return Array(12).fill(null).map((_, index) => {
            const imageIndex = startIndex + index;
            return (
                <div 
                    key={index} 
                    className="hexagon-wrapper"
                    style={{ 
                        width: hexSize, 
                        height: hexSize * 1.15,
                        marginTop: index % 2 === 0 ? 0 : `${hexSize * 0.1}px`,
                        marginLeft: index % 12 === 0 ? 0 : `-${hexSize * 0.25}px`
                    }}
                >
                    <div className="hexagon">
                        <img src={images[imageIndex].src} alt={images[imageIndex].alt} />
                    </div>
                </div>
            );
        });
    };

    return (
        <div className="image-slider" ref={sliderRef}>
            <div 
                className="slider-container" 
                style={{ transform: `translateX(-${currentSlide * 80}%)` }}
            >
                <div className="slide">
                    <div className="hexagon-container">
                        {renderHexagons(0)}
                    </div>
                </div>
                <div className="slide">
                    <div className="hexagon-container">
                        {renderHexagons(13)}
                    </div>
                </div>
                <div className="slide">
                    <div className="hexagon-container">
                        {renderHexagons(25)}
                    </div>
                </div>
                <div className="slide">
                    <div className="hexagon-container">
                        {renderHexagons(37)}
                    </div>
                </div>
            </div>
            <div className="arrow arrow-left" onClick={prevSlide}>&#10094;</div>
            <div className="arrow arrow-right" onClick={nextSlide}>&#10095;</div>
        </div>
    );
};

export default ImageSlider;