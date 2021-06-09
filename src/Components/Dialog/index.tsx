import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';


interface DialogComponent {
  openUpdateDialog: boolean,
  setOpenUpdateDialog: any,
  chosenTask: any
}

const FormDialog: React.FC<DialogComponent> = ({ openUpdateDialog, setOpenUpdateDialog, chosenTask }) => {

  const handleClose = () => {
    setOpenUpdateDialog(false);
  };

  console.log(chosenTask)

  return (
    <div>
      <Dialog open={openUpdateDialog} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogContent>
          <TextField
            id="task"
            value={chosenTask.content}
            label="Задача"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Отменить
          </Button>
          <Button onClick={handleClose} color="primary">
            Изменить
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default FormDialog