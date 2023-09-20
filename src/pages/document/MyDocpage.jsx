import React, { useState } from 'react';
import '../../css/mydocs.css';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
//import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const data = [
  {
    title: "Aadhar Card",
  },
  {
    title: "Pan Card",
  },
  {
    title: "Driving Card",
  },
  {
    title: "Voter Card",
  },
];

const vdata = [
  {
    title: "Virutal aadhar",
  },
  {
    title: "Virtual PanCard",
  },
];

const Card = ({ title, onAddClick }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <Button variant="contained" onClick={onAddClick}>
         ADD 
        </Button>
      </div>
    </div>
  );
};



const Card1 = ({ title, onAddClick }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <Button variant="contained" onClick={onAddClick}>
          View
        </Button>
      </div>
    </div>
  );
};

const MyDocpage = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="background">
      <div className="container">
        <div className="row">
          <h2 className='mydoc-title'>ADD DOCUMENTS</h2>
        </div>
        <div className="row">
          {data.map((item, index) => (
            <div id='cards-id' className="col-md-3" key={index}>
              <Card title={item.title} onAddClick={handleClickOpen} />
            </div>
          ))}
        </div>

        <div className="row">
          <h2 className='mydoc1-title'>MY DOCUMENTS</h2>
        </div>
        <div className="row">
          {vdata.map((item, index) => (
            <div id='cards-id' className="col-md-3" key={index}>
              <Card1 title={item.title} onAddClick={handleClickOpen} />
            </div>
          ))}
        </div>

        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Add Aadhar to virtual documents</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Aadhar number"
              type="number"
              fullWidth
              variant="standard"
            />
          </DialogContent>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label=""
              type="date"
              fullWidth
              variant="standard"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleClose}>Verify</Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  )
}

export default MyDocpage;
