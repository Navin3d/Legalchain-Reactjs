import '../../css/upload.css';

const DocUploadPage = () => {
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
                        <form>
                            <div className="form-group">
                                <label htmlFor="title" id='subtitle'>Title</label>
                                <input
                                    type="text"
                                    id="description"
                                    name="title"
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
