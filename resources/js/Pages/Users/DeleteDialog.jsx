import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { useForm } from '@inertiajs/react';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide({ params }) {
  const [open, setOpen] = React.useState(false);
    const { data, setData, post, put, processing, errors } = useForm({
        id: params.row.id,
    });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = () => {
    post(route('delete'), {
        onSuccess: () => {
            setOpen(false);
        }
    })
  }

  return (
    <React.Fragment>
      <Button variant="contained" color='error' onClick={handleClickOpen}>
        DELETE
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>
            Are you sure want to delete this user?
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            {params.row.first_name+' '+params.row.last_name}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant='contained' color='error' >Close</Button>
          <Button onClick={handleDelete} variant='contained' color='success'>Yes</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
