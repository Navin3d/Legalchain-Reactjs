import '../../css/upload.css';

const DocListPage = () => {
    const documents = [
        { date: '2023-09-12', title: 'Section 372 criminal case' },
        { date: '2023-09-13', title: 'Section 432 Overspeeding case' },
    ];

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
                                    <h5 className="card-title">{document.title}</h5>
                                    <p className="card-text">Date: {document.date}</p>
                                    <a href="#" className="btn btn-primary" id='button-css'>View</a>
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
