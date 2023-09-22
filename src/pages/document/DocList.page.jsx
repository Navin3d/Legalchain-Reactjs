import React, { useEffect, useState } from "react";
import axios from "axios";
import '../../css/upload.css';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { blue } from '@mui/material/colors';
import PersonIcon from '@mui/icons-material/Person';
import PropTypes from 'prop-types'; // Add this import
import swal from "sweetalert";

const emails = ['loga', 'kaushik'];

const INITIAL_SHARE = {
  "recordIds": [],
  "userIds": [],
  "shareUntil": "2023-10-10"
}

function SimpleDialog(props) {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
    console.log("props: ", props);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Share with the people</DialogTitle>
      <List sx={{ pt: 0 }}>
        {emails.map((email) => (
          <ListItem disableGutters key={email}>
            <ListItemButton onClick={() => handleListItemClick(email)}>
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: blue[100], color: blue[600] }}>
                  <PersonIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={email} />
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem disableGutters>
          <ListItemButton
            autoFocus
            onClick={() => handleListItemClick('addAccount')}
          >
            <ListItemText primary="SHARE" />
          </ListItemButton>
        </ListItem>
      </List>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

export default function DocListPage() {
  const INITIAL = [
    { timeStamp: '2023-09-12', tittle: 'Section 372 criminal case' },
    { timeStamp: '2023-09-13', tittle: 'Section 432 Overspeeding case' },
    { timeStamp: '2023-09-12', tittle: 'Section 372 criminal case' },
    { timeStamp: '2023-09-13', tittle: 'Section 432 Overspeeding case' },
  ];

  const [share, setShare] = useState(INITIAL_SHARE);
  const [documents, setDocuments] = useState(INITIAL);
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(emails[1]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const { data } = await axios.get("http://localhost:8080/user/docs/kaushik");
      setDocuments((prev) => []);
      // console.log(data);
      if (data["ownedRecords"].length > 0) {
        setDocuments((prev) => data["ownedRecords"]);
      }
      if (data["sharedRecords"].length > 0) {
        setDocuments((prev) => [...prev, ...data["sharedRecords"]]);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleClickOpen = (e) => {
    setOpen(true);
    const { name } = e.target;
    console.log("name: ", name);
    share.recordIds.push(name);
    setShare(() => share);
  };

  const handleClose = async (value) => {
    setOpen(false);
    setSelectedValue(value);
    console.log("value: ", value);
    share.userIds.push(value);
    setShare(() => share);
    console.log("share; ", share);
    try {
      const { data, status } = await axios.post("http://localhost:8080/share", share);
      if (status == 200)
        swal(data);
    } catch (e) {
      console.log(e);
    }
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
                  <h5 className="card-title">File: {document.tittle}</h5>
                  <p className="card-text">Date: {document.timeStamp}</p>
                  <div className="row">
                    <div className="col-md-5">
                      <a href={document.hash} target="_blank" className="btn btn-primary" id='button-css'>View</a>
                    </div>
                    <div className="col-md-5">
                      <a className="btn btn-primary" id='button-css' onClick={handleClickOpen} name={document.id}>Share</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <SimpleDialog
            selectedValue={selectedValue}
            open={open}
            onClose={handleClose}
          />
        </div>
      </div>
    </div>
  );
}
