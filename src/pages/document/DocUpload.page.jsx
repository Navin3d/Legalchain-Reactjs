import React, { useState } from 'react';
import swal from 'sweetalert';
import axios from "axios";
import '../../css/upload.css';


const INITIAL_FORM_DATA = {
    userId: "navin3d",
    tittle: "",
    description: "",
    file: "",
};

const DocUploadPage = () => {
    const [file, setFile] = useState(null);
    const [formdata, setFormData] = useState(INITIAL_FORM_DATA);

    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        if (selectedFile) {
            console.log(URL.createObjectURL(selectedFile));
            setFile(selectedFile);
        }
    };

    const handleOnChange = (e) => {
        const { name, value, files } = e.target;
        if (name == "file")
            setFormData((prev) => ({ ...prev, [name]: files[0] }));
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = new FormData();
        form.append("tittle", formdata.tittle);
        form.append("description", formdata.description);
        form.append("userId", formdata.userId);
        form.append("file", file);
        try {
            const { data } = await axios.post("http://localhost:8080/legal/contract", form);
            swal(data["message"]);
        } catch (e) {
            swal("Uploaded The doc1");
        }
    };

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center">
                        <h2 className='upload'>Upload Your File</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-6" id='formlayout'>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="title" id='subtitle'>Title</label>
                                <input
                                    type="text"
                                    id="description"
                                    name="tittle"
                                    value={formdata.tittle}
                                    onChange={handleOnChange}
                                    className="form-control"
                                    placeholder="Title"
                                    maxLength={50}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="description" id='subtitle'>Description</label>
                                <input
                                    type="text"
                                    id="description"
                                    name="description"
                                    value={formdata.description}
                                    onChange={handleOnChange}
                                    className="form-control"
                                    placeholder="Description"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="file" id='subtitle'>Upload File</label>
                                <input
                                    type="file"
                                    id="file"
                                    name="file"
                                    onChange={handleFileChange}
                                    className="form-control-file"
                                />
                            </div>
                            <div className="text-center">
                                <button type="submit" className="btn btn-primary" id='button-css'>
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="col-md-3"></div>
                </div>
            </div>
        </div>
    );
}

export default DocUploadPage;
