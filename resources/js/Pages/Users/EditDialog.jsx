import * as React from 'react';
import { useState } from 'react';
import { useForm } from "@inertiajs/react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Box, Grid, patch } from '@mui/material';
import { MenuItem } from '@mui/material';

export default function FormDialog({ params }) {

    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState('');
    const { data, setData, post, put, processing, errors } = useForm({
        id: params.row.id,
        first_name: params.row.first_name,
        last_name: params.row.last_name,
        email: params.row.email,
        phone_number: params.row.phone_number,
        dt_birthday: params.row.dt_birthday,
        national_id: params.row.national_id,
    });

    const items = [
        { text: "Voters ID", value: 1 },
        { text: "National ID", value: 2 },
        { text: "Drivers License", value: 3 },
        { text: "National Healty Insurance", value: 4 },
    ]

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleUpdate = () => {
    put(route('update'), {
        onSuccess: () => {
            handleClose();
        }
    })
  }

  return (


    <React.Fragment>
      <Button variant="contained" color='primary' onClick={handleClickOpen}>
       Edit
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        slotProps={{
          paper: {
            component: 'form',
            onSubmit: (event) => {
              event.preventDefault();
              const formData = new FormData(event.currentTarget);
              const formJson = Object.fromEntries(formData.entries());
              const email = formJson.email;
              console.log(email);
              handleClose();
            },
          },
        }}
      >
        <DialogTitle>{params.row.first_name +' '+params.row.last_name}</DialogTitle>
        <DialogContent>
        <Box sx={{display:'flex', color:'green', mb:2.5 }}>{message}</Box>
          <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <TextField
                            name="first_name"
                            value={data.first_name}
                            type="text"
                            id="First-Name"
                            label="First name"
                            variant="outlined"
                            fullWidth
                            onChange={(e) =>
                                setData("first_name", e.target.value)
                            }
                            error={!!errors.first_name}
                            helperText={errors.first_name}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            name="last_name"
                            value={data.last_name}
                            type="text"
                            id="Last-Name"
                            label="Last name"
                            variant="outlined"
                            fullWidth
                            onChange={(e) =>
                                setData("last_name", e.target.value)
                            }
                            error={!!errors.last_name}
                            helperText={errors.last_name}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            name="email"
                            value={data.email}
                            type="email"
                            id="Email"
                            label="Email"
                            variant="outlined"
                            fullWidth
                            onChange={(e) => setData("email", e.target.value)}
                            error={!!errors.email}
                            helperText={errors.email}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            name="phone_number"
                            value={data.phone_number}
                            type="text"
                            id="Phone-Number"
                            label="Phone Number"
                            variant="outlined"
                            fullWidth
                            onChange={(e) =>
                                setData("phone_number", e.target.value)
                            }
                            error={!!errors.phone_number}
                            helperText={errors.phone_number}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            name="dt_birthday"
                            value={data.dt_birthday}
                            type="date"
                            id="dt_birthday"
                            label="Date of Birthday"
                            variant="outlined"
                            fullWidth
                            onChange={(e) =>
                                setData("dt_birthday", e.target.value)
                            }
                            error={!!errors.dt_birthday}
                            helperText={errors.dt_birthday}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            name="national_id"
                            value={data?.national_id ?? ""}
                            id="NationId"
                            label="National ID"
                            variant="outlined"
                            fullWidth
                            select
                            onChange={(e) =>
                                setData("national_id", e.target.value)
                            }
                            error={!! errors.national_id}
                            helperText={errors.national_id}
                        >
                            {items?.map((item, i) => {
                                return (
                                    <MenuItem key={i} value={item.value}>
                                        {item?.text}
                                    </MenuItem>
                                );
                            })}
                        </TextField>
                    </Grid>
                </Grid>
        </DialogContent>
        <DialogActions>
          <Button variant='contained' color='error' onClick={handleClose}>Cancel</Button>
          <Button variant='contained' color='info' onClick={handleUpdate}>Subscribe</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
