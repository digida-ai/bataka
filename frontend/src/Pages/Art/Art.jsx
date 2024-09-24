import Card from "../../components/Card.jsx";
import "./art.css";
import artBanner from "../../assets/Art/art.webp";
import art from "../../assets/App/art.webp";


function Art() {
    return (
        <div className={"art-container"}>
            <div className={"art-header"}>
                <img src={artBanner} alt="Art Image"/>
            </div>

            <div className={""}></div>

            <h1 className="explore-bhc-title">Explore bhc Art</h1>
            <div className={"art-list"}>

                <Card heading={"Aipan Art"} description={"Originated in the Kumaon region. Aipan art is typically found on floors and walls. Aipan art is known to invoke divine powers that bring good fortune and deter evil. It is also believed to offer protection against evil. "} link={"aipan"} img={art} imgDescription={" Image"}/>

            </div>
        </div>
    );
}

export default Art;