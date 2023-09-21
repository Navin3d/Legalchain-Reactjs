import React, { useState } from 'react';
import axios from 'axios';
import swal from 'sweetalert';
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
    title: "Ration card",
  },
  {
    title: "NPR Card",
  },
  {
    title: "NRI Card",
  },
  {
    title: "Senior citizen card",
  },
  {
    title: "ECHS card",
  },
  {
    title: "Adivasi Identity card",
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
        <Button variant="contained" onClick={onAddClick} sx={{ background: "#143aa5" }}>
          ADD
        </Button>
      </div>
    </div>
  );
};

const INITIAL_STATE = {
  "username": "",
  "password": "",
  "otp": ""
};
const MyDocpage = () => {
  const [authBody, setAuthBody] = useState(INITIAL_STATE);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setAuthBody((prev) => ({ ...prev, [name]: value }));
  };

  const handleClickOpen = async () => {
    setOpen(true);
    await axios.get("http://localhost:8080/transfer/LICENSE/smnavin65@gmail.com");
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleredirect = async () => {
    try {
      const { headers } = await axios.post("http://localhost:8080/auth/login/2f", authBody);
      if (headers.authorization == "OK")
        navigate('/auth/otp');
    } catch (e) {
      swal("Un-Authorized");
    }
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
              label="User Name"
              type="text"
              fullWidth
              name="username"
              value={authBody.username}
              onChange={handleOnChange}
              variant="standard"
            />
          </DialogContent>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Password"
              type="password"
              fullWidth
              variant="standard"
              name="password"
              value={authBody.password}
              onChange={handleOnChange}
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
              name="otp"
              value={authBody.otp}
              onChange={handleOnChange}
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
