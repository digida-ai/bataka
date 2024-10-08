import "./architecture.css"
import Card from "../../components/Card.jsx";
import house from "../../assets/Architecture/structs.webp"
import Ffumbe from "../../assets/Architecture/ffumbe.jpg"


function Architecture() {
    return (
        <div className={"architecture-container"}>
            <div className={"architecture-header"}>
                <img src={house} alt="Architecture Image"/>
            </div>

            <div className={""}>

            </div>

            <h1 className="explore-bhc-title">Explore bhc Architecture</h1>
            <div className={"architecture-list"}>
                <Card heading={"Kumaon Region"} description={"The walls are made of stone while flooring is finished with wooden boards or mud to keep them insulated consistently. "} link={"kumaonarchitecture"} img={Ffumbe} imgDescription={"Ffumbe Architecture Image"}/>
                <Card heading={"Garhwal Region"} description={"Living and cooking regions are above the cattle and grain storage, serving warmth through winters. Construction is finished with stone and wood."} link={"garhwalarchitecture"} img={"https://theanamikapandey.com/wp-content/uploads/2021/12/Screenshot-2021-12-09-134020.jpg.webp"} imgDescription={"Mamba Architecture Image"}/>

            </div>
        </div>
    );
}

export default Architecture;

// Source https://theanamikapandey.com/architecture-of-bhc/