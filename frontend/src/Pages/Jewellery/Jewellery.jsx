import Card from "../../components/Card.jsx";
import "./jewellery.css"
import Jewels1 from "../../assets/Jewellery/jewels.webp";
// import Jewels from "../../assets/Jewellery/jewels.webp"
function Jewellery() {
    return (
        <div className="jewellery-container">
            <div className="jewellery-header">
                <img src={Jewels1}
                     alt="Jewellery Image"/>
            </div>
            <div className="" >

            </div>

            <h1 className="explore-bhc-title">Explore bhc Jewellery</h1>

            <div className="jewellery-list">

                <Card heading="Bikomo"       description=""    link="/jewels" img="" imgDescription="Jewellery Image"/>

                <Card heading="Byamatu"       description=""    link="/jewels" img="" imgDescription="Jewellery Image"/>

                <Card heading="Nkovule"         description="Add Description here" link="/jewels" img="" imgDescription="Jewellery Image"/>

                <Card heading="Nsingo"     description=""            link="/jewels" img="" imgDescription="Jewellery Image"/>

               

            </div>

        </div>
    );
}
export default Jewellery;