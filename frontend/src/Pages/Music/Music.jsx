import Card from "../../components/Card.jsx";
import "./music.css"
import music from "../../assets/Music/music.webp"

function Music() {
    return (
        <div className={"music-container"}>
            <div className={"music-header"}>
                <img src={music}
                     alt=" Image"/>
            </div>

            <div className={""}></div>

            <h1 className="explore-bhc-title">Explore Musical Instruments</h1>
            <div className={"music-list"}>
                <Card heading={"Dhol & Damoun"} description={""} link={"dd"} img={""} imgDescription={" Image"}/>
            </div>
        </div>
    );
}

export default Music;