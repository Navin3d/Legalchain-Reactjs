    // import { useEffect, useState } from "react";
    // import axios from "axios";
    // import '../../css/upload.css';

    // const DocListPage = () => {
    //     const INITIAL = [
        
    //         { timeStamp: '2023-09-12', tittle: 'Section 372 criminal case' },
    //         { timeStamp: '2023-09-13', tittle: 'Section 432 Overspeeding case' },
    //         { timeStamp: '2023-09-12', tittle: 'Section 372 criminal case' },
    //         { timeStamp: '2023-09-13', tittle: 'Section 432 Overspeeding case' },
    
    //     ];

    //     const [documents, setDocuments] = useState(INITIAL);

    //     useEffect(() => {
    //         getData();
    //     }, []);

    //     const getData = async () => {
    //         const { data } = await axios.get("http://localhost:8080/user/docs/logamis");
    //         setDocuments((prev) => []);
    //         console.log(data);
    //         if(data["ownedRecords"].length > 0) {
    //             setDocuments((prev) => (data["ownedRecords"]));
    //         }
    //         if(data["sharedRecords"].length > 0) {
    //             setDocuments((prev) => ([ ...prev, ...data["sharedRecords"] ]));
    //         }
    //     }

    //     return (
    //         <div className="background">
    //             <div className="container">
    //                 <div className="row">
    //                     <div className="col-12 text-center">
    //                         <h2 className='upload'>Case Files</h2>
    //                     </div>
    //                 </div>
    //                 <div className="row">
    //                     {documents.map((document, index) => (
    //                         <div key={index} className="col-md-6 mb-4" id='card-start'>
    //                             <div className="card">
    //                                 <div className="card-body">
    //                                     <h5 className="card-title">Case: {document.tittle}</h5>
    //                                     <p className="card-text">Date: {document.timeStamp}</p>
    //                                     <div className="row">
    //                                     <div className="col-md-5">
    //                                     <a href={document.hash} target="_blank" className="btn btn-primary" id='button-css'>View</a>
    //                                     </div>
    //                                     <div className="col-md-5">
    //                                     <a href={document.hash} target="_blank" className="btn btn-primary" id='button-css'>share</a>
    //                                     </div>
    //                                     </div>                               
    //                                 </div>
    //                             </div>
    //                         </div>
    //                     ))}
    //                 </div>  
    //             </div>
    //         </div>
    //     );
    // }

    // export default DocListPage;



import React, { useEffect, useState } from "react";
import axios from "axios";
import '../../css/upload.css';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';

const DocListPage = () => {
    const INITIAL = [
        { timeStamp: '2023-09-12', tittle: 'Section 372 criminal case' },
{ timeStamp: '2023-09-13', tittle: 'Section 432 Overspeeding case' },
{ timeStamp: '2023-09-12', tittle: 'Section 372 criminal case' },
{ timeStamp: '2023-09-13', tittle: 'Section 432 Overspeeding case' },
    ];

    const [documents, setDocuments] = useState(INITIAL);
    const [openDialog, setOpenDialog] = useState(false); // State to control the dialog

    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
                    const { data } = await axios.get("http://localhost:8080/user/docs/logamis");
setDocuments((prev) => []);
console.log(data);
if(data["ownedRecords"].length > 0) {
    setDocuments((prev) => (data["ownedRecords"]));
}
if(data["sharedRecords"].length > 0) {
    setDocuments((prev) => ([ ...prev, ...data["sharedRecords"] ]));
}
    }

    const handleShareButtonClick = () => {
        // Open the dialog
        setOpenDialog(true);
    };

    const handleCloseDialog = () => {
        // Close the dialog
        setOpenDialog(false);
    };

    return (
        <div className="background">
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center">
                        <h2 className='upload'>Case Files</h2>
                    </div>
                </div>
                <div className="row">
                    {documents.map((document, index) => (
                        <div key={index} className="col-md-6 mb-4" id='card-start'>
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Case: {document.tittle}</h5>
                                    <p className="card-text">Date: {document.timeStamp}</p>
                                    <div className="row">
                                        <div className="col-md-5">
                                            <a href={document.hash} target="_blank" className="btn btn-primary" id='button-css'>View</a>
                                        </div>
                                        <div className="col-md-5">
                                        <a href={document.hash} target="_blank" className="btn btn-primary" id='button-css' onClick={handleShareButtonClick}>share</a>
                                         {/* <button className="btn btn-primary" >Share</button> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Dialog  open={openDialog} onClose={handleCloseDialog} >
                <DialogTitle className="dialogue-box-title" >Share with:</DialogTitle>
                <DialogContent>
                    <p>Kaushik</p>
                    <p>Navin Durai sm</p>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseDialog} color="primary">Close</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default DocListPage;

