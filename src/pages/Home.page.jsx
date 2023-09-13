import home_img from "../assets/VerifiEdge.png"
const HomePage = () => {
    return (<>
        <div className="nav">
            <h1>LegalChain</h1>
            <div className="nav-links">
            <a href="/upload">Upload</a>
            {/* <a href="/document/view">View</a> */}
            <a href="/auth/signup">Signup</a>
            <a href="/document">List</a>
            </div>
        </div>
        
        
        <div className="home">
            <img src={home_img} alt="home_img"/>
        </div>
        </>
    );
}

export default HomePage;
