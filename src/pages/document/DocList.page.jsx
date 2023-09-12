import { useEffect, useState } from "react";
import axios from "axios";
import '../../css/upload.css';

const DocListPage = () => {
    const INITIAL = [
        { timeStamp: '2023-09-12', tittle: 'Section 372 criminal case' },
        { timeStamp: '2023-09-13', tittle: 'Section 432 Overspeeding case' },
    ];

    const [documents, setDocuments] = useState(INITIAL);

    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        const { data } = await axios.get("http://localhost:8080/user/docs/navin3d");
        if(data["ownedRecords"]) {
            setDocuments((prev) => (data["ownedRecords"]));
        }
        if(data["sharedRecords"].length > 0) {
            setDocuments((prev) => ([ ...prev, data["sharedRecords"] ]));
        }
    }

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center">
                        <h2 className='upload'>View Your Files</h2>
                    </div>
                </div>
                <div className="row">
                    {documents.map((document, index) => (
                        <div key={index} className="col-md-6 mb-4" id='card-start'>
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">{document.tittle}</h5>
                                    <p className="card-text">Date: {document.timeStamp}</p>
                                    <a href={document.hash} className="btn btn-primary" id='button-css'>View</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default DocListPage;
