import hero from "../assets/hero.jpg"
import about from "../assets/about.png"
import mlj from "../assets/mlj.jpg"
import election from "../assets/election.png"
import parivahan from "../assets/parivahan.png"
import aadhar from "../assets/aadhar.png"
const HomePage = () => {
    return (<>
        <div className="home">
            {/* <img src={home_img} alt="home_img"/> */}
            <main className="hero_section">
                
                <div className="hero_text">
                    <p className="hero_main">Securely Store,<br/>
                        Easily Access </p>
                    <p className="hero_desc">Your Digital Document E-Vault Solution</p>
                    <button className="hero_btn">Get Started</button>
                </div>
                <div className="hero_img">
                    <img src={hero} alt="hero_image" />
                </div>
            </main>
            <main className="about_us">
                
                    <div className="about_img"><img src={about} alt="about_us" /></div>
                    <div className="about_text">
                        <p className="heading_about">About Us</p>
                        <p className="about_desc">
                        Welcome to the future of digital asset security. Our blockchain-based E-Vault app leverages the unbreakable strength of blockchain technology to safeguard your valuable digital assets. Experience peace of mind like never before.</p>
                        <p className="about_desc">
                            Key Benefits:<br/>
                            - Immovable Security: Your digital assets are protected by the blockchain's unalterable ledger.<br />
                            - Instant Access: Retrieve your assets instantly, from anywhere in the world.<br />
                            - Complete Control: Manage, transfer, and share your assets with ease.<br />
                            - Privacy Assurance: Rest assured knowing your data is encrypted and decentralized.<br />
                            - User-Centric Interface: Experience blockchain's power through an intuitive interface.<br /></p></div>
             

            </main>
            <main className="partners">
                {/* <p className="associations_heading">
                    In association with
                </p> */}
                <div className="associations">
                <div className="association_card">
                    <img src={mlj} alt="" />
                </div>
                <div className="association_card">
                    <img src={aadhar} alt="" />
                </div>
                <div className="association_card">
                    <img src={parivahan} alt="" />
                </div>
                <div className="association_card">
                    <img src={election} alt="" />
                </div>
                </div>
                

            </main>
        </div>
        </>
    );
}

export default HomePage;
