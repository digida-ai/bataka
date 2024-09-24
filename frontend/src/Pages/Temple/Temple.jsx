import "./temple.css";
import Card from "../../components/Card.jsx";
import NamirembeImage from "../../assets/Temple/namirembe.jpg";
import RubagaImage from "../../assets/Temple/rubaga.jpg";
import BahaiImage from "../../assets/Temple/bahai.webp";
import GaddafiImage from "../../assets/Temple/gaddafi.jpg";

function Temple() {
    return (
        <div className={"temple-container"}>
            <div className={"temple-banner"}>
                <img src={NamirembeImage} alt="Namirembe Cathedral Image"/>
            </div>

            <div className={"temple-description"}>
                <div className={"place-of-worship-list"}>
                    <div>
                        <h3>Major Places of Worship in Uganda</h3>
                        <ul>
                            <li><span>Namirembe Cathedral</span>: Anglican cathedral in Kampala, known for its historical significance.</li>
                            <li><span>Rubaga Cathedral</span>: Roman Catholic cathedral, an important religious landmark in Kampala.</li>
                            <li><span>Bahai Temple</span>: The only Bahai temple in Africa, known for its unique architecture.</li>
                            <li><span>Gaddafi National Mosque</span>: One of the largest mosques in Sub-Saharan Africa.</li>
                        </ul>
                    </div>
                </div>
            </div>

            <h1 className="explore-uganda-title">Explore Uganda&apos;s Places of Worship</h1>

            <p className={"temple-district-title"}>Kampala</p>
            <div className={"temple-card-container"}>
                <Card 
                    heading={"Namirembe Cathedral"} 
                    description={"Anglican cathedral with historical significance, offering panoramic views of Kampala."} 
                    link={"namirembe"} 
                    img={NamirembeImage} 
                    imgDescription={"Namirembe Cathedral Image"}
                />
                <Card 
                    heading={"Rubaga Cathedral"} 
                    description={"Roman Catholic cathedral, an important religious and historical landmark in Kampala."} 
                    link={"rubaga"} 
                    img={RubagaImage} 
                    imgDescription={"Rubaga Cathedral Image"}
                />
                <Card 
                    heading={"Bahai Temple"} 
                    description={"The only Bahai temple in Africa, known for its unique architecture and peaceful gardens."} 
                    link={"bahai"} 
                    img={BahaiImage} 
                    imgDescription={"Bahai Temple Image"}
                />
                <Card 
                    heading={"Gaddafi National Mosque"} 
                    description={"One of the largest mosques in Sub-Saharan Africa, with impressive architecture and views."} 
                    link={"gaddafi"} 
                    img={GaddafiImage} 
                    imgDescription={"Gaddafi National Mosque Image"}
                />
            </div>

            {/* Add more sections for other districts/regions as needed */}

        </div>
    );
}

export default Temple;
