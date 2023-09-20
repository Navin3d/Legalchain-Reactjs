import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../css/mydocs.css';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
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
  {
    title: "Passport",
  },
  {
    title :"Ration card",
  },
  {
    title: "NPR Card",
  },
  {
    title : "NRI Card",
  },
  {
    title : "Senior citizen card",
  },
  {
    title : "ECHS card",
  },
  {
    title : "Adivasi Identity card",
  },
  {
    title: "disabled person ID",
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

const MyDocpage = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleredirect =() =>{  
    navigate('/auth/otp');
  }
  return (
    <div className="background">
    
      <div className="container">
        <div className="row">
          <h2 className='mydoc-title'>MY DOCUMENTS</h2>
        </div>
        <div className="row">
          {data.map((item, index) => (
            <div id='cards-id' className="col-md-3" key={index}>
              <Card title={item.title} onAddClick={handleClickOpen} />
            </div>
          ))}
        </div>

        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Access your Identity</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Mobile number"
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
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="OTP"
              type="password"
              fullWidth
              variant="standard"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleredirect}>Verify</Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  )
}

export default MyDocpage;
