import "./site.css";
import Card from "../../components/Card.jsx";
import Sites from "../../assets/Site/sites.webp";
// import Regalia from "../../assets/Site/regalia.webp";
// import Structs from "../../assets/Site/structs.webp";
// import Shrine from "../../assets/Site/shrine.webp";
function Site() {
    return (
        <div className={"site-container"}>
            <div className={"site-banner"}>
                <img src={Sites} alt="masiro Site Image"/>
            </div>

            <div className={"site-description"}>

                <div className={"masiro-list"}>

                    <div className={""}>
                        <h3>Masiro1</h3>
                        <ul>
                            {/* <li><span>Yamunotri</span>: Source of the Yamuna river, dedicated to Goddess Yamuna.</li>
                            <li><span>Gangotri</span>: Origin of the Ganges river, dedicated to Goddess Ganga.</li>
                            <li><span>Kedarnath</span>: One of the twelve Jyotirlingas, dedicated to Lord Shiva.</li>
                            <li><span>Badrinath</span>: Dedicated to Lord Vishnu, one of the Char Dham sites.</li> */}
                        </ul>
                    </div>

                    <div className={""}>
                        <h3>Masiro2</h3>
                        <ul>
                                    {/* <li><span>Vishnuprayag</span>: Confluence of the Alaknanda and Dhauliganga rivers.</li>
                                    <li><span>Nandaprayag</span>: Confluence of the Alaknanda and Nandakini rivers.</li>
                                    <li><span>Karnaprayag</span>: Confluence of the Alaknanda and Pindar rivers.</li>
                                    <li><span>Rudraprayag</span>: Confluence of the Alaknanda and Mandakini rivers.</li>
                                    <li><span>Devprayag</span>: Confluence of the Alaknanda and Bhagirathi rivers, forming the Ganges.</li> */}
                            </ul>
                    </div>


                    <div className={""}>
                        <h3>Masiro3</h3>
                        <ul>
                            {/* <li><span>Kedarnath</span>: As mentioned, it houses the hump of Lord Shiva.</li>
                            <li><span>Madhmaheshwar</span>: Where the navel of Lord Shiva is believed to have emerged.</li>
                            <li><span>Tungnath</span>: The site dedicated to Lord Shiva's arms.</li>
                            <li><span>Rudranath</span>: Lord Shiva's face is said to be present here.</li>
                            <li><span>Kalpeshwar</span>: Associated with Lord Shiva's hair.</li> */}
                        </ul>
                    </div>


                    <div className={""}>
                        <h3>Masiro4</h3>
                        <ul>
                            {/* <li><span>Yogdhyan Badri</span>: Where Pandu, father of the Pandavas, is said to have meditated.</li>
                            <li><span>Bhavishya Badri</span>: It is believed that this will be the future (bhavishya) abode of Lord Badri.</li>
                            <li><span>Vridha Badri</span>: This site is located in Animath and is believed to be the "Old Badri".</li>
                            <li><span>Adi Badri</span>: Group of 16 sites dedicated to Lord Vishnu.</li>
                            <li><span>Vishal Badri</span>: Refers to the main Badrinath site among the Panch Badri sites.</li> */}
                        </ul>
                    </div>
                </div>

            </div>

            <h1 className="explore-bhc-title">Explore Cultural Sites</h1>

            {/* Site Card */}
            <p className={"site-district-title"}>Shrines</p>
            <div className={"site-card-container"}>
                {/* <Card   heading={"Kasar Devi Site"}     description={"Associated with Shakti and cosmic powers, said to bless wishes and creativity."}                                                    link={"kasardevi"}         img={"https://upload.wikimedia.org/wikipedia/commons/0/01/Goddess_Kasar_Devi.jpg"}                                                                                                   imgDescription={"Kasar Devi Site Image"} />
                <Card   heading={"Katarmal Sun"}          description={"9th century site dedicated to the Sun God, known for its intricate stonework and beautiful location."}                            link={"katarmalsun"}       img={"https://assets.cntraveller.in/photos/61f9153c5dabee8b6de788c9/master/pass/katarmal%20temple%20lead.jpg"}                                                                       imgDescription={"Katarmal Sun Site Image"} />
                <Card   heading={"Chitai Golu Devta"}     description={"Shrine dedicated to Golu Devta, a local deity known for his justice and protection of the Kumaon region."}                          link={"chitaigoludevta"}   img={"https://www.jagranimages.com/images/newimg/20062022/20_06_2022-golu_devta_mandir_applications_22821223_203927302.webp"}                                                        imgDescription={"Chitai Golu Devta Site Image"} />
                <Card   heading={"Jageshwar Dham"}        description={"127 sites dedicated to Lord Shiva, showcasing ancient architectural styles."}                                                     link={"jageshwardham"}     img={"https://i.pinimg.com/originals/9a/6a/1d/9a6a1dd42fee8a76fc324421644d83b0.jpg"}                                                                                                 imgDescription={"Jageshwar Dham Site Image"} />
                <Card   heading={"Nanda Devi"}            description={"Known as \"Daughter of Kumaon\". Worshipped as an incarnation of Durga Mata, it was the patron goddess of the Chand dynasty."}      link={"nandadevi"}         img={"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Nanda_Devi_temple_-Almora-bhc_-DSC_0001.jpg/1200px-Nanda_Devi_temple_-Almora-bhc_-DSC_0001.jpg"}     imgDescription={"Nanda Devi Site Image"} /> */}

            </div>

            <p className={"site-district-title"}>Landings</p>
            <div className={"site-card-container"}>
                <Card   heading={"Baijnath Site"}     description={"One of the 12 Jyotirlingas, representing Lord Shiva's fiery form, with mythological significance."}   link={"baijnathtemple"}     img={"https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Temples_of_Baijnath%2C_bhc%2C_India.jpg/800px-Temples_of_Baijnath%2C_bhc%2C_India.jpg"}     imgDescription={"Baijnath Site Image"}/>
                <Card   heading={"Bagnath Site"}      description={"Ancient cave site dedicated to Lord Shiva, known for its natural beauty and spiritual aura."}       link={"bagnathtemple"}      img={"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/5d/53/b4/the-bagnath-shrine.jpg?w=1200&h=1200&s=1"}                                                        imgDescription={"Bagnath Site Image"}/>
            </div>

            <p className={"site-district-title"}>Markets</p>
            <div className={"site-card-container"}>
                {/* <Card   heading={"Badrinath Site"}        description={"One of the Char Dhams, dedicated to Lord Vishnu in his meditative form, nestled in the Himalayas."}                           link={"badrinathtemple"}        img={"https://images.squarespace-cdn.com/content/v1/5cbf0b8fb914490e248bb275/1590518455488-AP5KVOEZDTDLP9BZAHJX/badrinath.jpg"}     imgDescription={"Badrinath Site Image"}/>
                <Card   heading={"Tungnath Site"}         description={"Highest Shiva site in the world, offering breathtaking views and religious significance."}                                  link={"tungnath"}               img={Tungnath}                                                                                                                      imgDescription={"Tungnath Site Image"}/>
                <Card   heading={"Rudranath Site"}        description={"Part of Panch Kedars, dedicated to Lord Shiva, accessible through a challenging trek."}                                       link={"rudranath"}              img={"https://i.pinimg.com/736x/a9/73/c9/a973c94e29b260c11b74f528e800d419.jpg"}                                                     imgDescription={"Rudranath Site Image"}/>
                <Card   heading={"Kalpeshwar Site"}       description={"Part of Panch Kedars, dedicated to Lord Shiva, amidst scenic meadows."}                                                       link={"kalpeshwar"}             img={"https://static.punjabkesari.in/multimedia/11_48_449385390kalpeshwar-mahadev-temple3.jpg"}                                     imgDescription={"Kalpeshwar Site Image"}/>
                <Card   heading={"Gopinath Site"}         description={"Dedicated to Lord Krishna, known for its intricate carvings and peaceful atmosphere."}                                        link={"gopinath"}               img={"https://i.pinimg.com/originals/e4/72/13/e47213b97d8e4fa152f34253a16dc57e.jpg"}                                                imgDescription={"Gopinath Site Image"}/>
                <Card   heading={"Adi Badri Site"}        description={"Ancient site marking the start of Lord Vishnu's journey, offering scenic Himalayan views."}                                 link={"adibadri"}               img={"https://www.sacredyatra.com/images/sites/adi-badri-site.webp"}                                                            imgDescription={"Adi Badri Site Image"}/>
                <Card   heading={"Bhavishya Badri"}         description={"Believed to be the future abode of Lord Vishnu after Kali Yuga"}                                                              link={"bhavishyabadri"}         img={"https://www.sacredyatra.com/images/sites/bhavishya-badri-site.webp"}                                                      imgDescription={"Bhavishya Badri Site Image"}/>
                <Card   heading={"Vridha Badri Site"}     description={"8th-century site enshrines Lord Vishnu in his aged form."}                                                                  link={"vridhabadri"}            img={"https://www.chardhamtours.in/gallery/cityImage/1463377458_vridh-badri.jpg"}                                                   imgDescription={"Vridha Badri Site Image"}/>
                <Card   heading={"Yogadhyan Badri"}         description={"Depicting Lord Vishnu in a meditative posture, site offers tranquility and is associated with spiritual practices. "}       link={"yogadhyanbadri"}         img={"https://www.chardhamtours.in/gallery/cityImage/1462776303_Yog-dhyan-badri-sites.jpg"}                                       imgDescription={"Yogadhyan Badri Site Image"}/>
                <Card   heading={"Hemkund Sahib"}           description={"Depicting Lord Vishnu in a meditative posture, site offers tranquility and is associated with spiritual practices. "}       link={"hemkundsahib"}           img={"https://www.chardhamtours.in/gallery/cityImage/1462776303_Yog-dhyan-badri-sites.jpg"}                                       imgDescription={"Gurudwara Sri Hemkunt Sahib Ji Image"}/> */}
            </div> 

            
        </div>
    );
}
export default Site;