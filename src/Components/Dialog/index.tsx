import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';



interface DialogComponent {
  openUpdateDialog: boolean,
  setOpenUpdateDialog: any,
  chosenTask: any,
  setAddTodo: any,
  addTodo: any,
  updateItem: any
}

const FormDialog: React.FC<DialogComponent> = ({ openUpdateDialog, setOpenUpdateDialog, chosenTask, updateItem }) => {

  const [task, setTask] = useState('')
  const handleClose = () => {
    setOpenUpdateDialog(false);
  };

  const handleUpdate = () => {
    updateItem(chosenTask.id, task)
    setOpenUpdateDialog(false)
  }

  useEffect(() => {
    setTask(chosenTask.content)
  }, [chosenTask])

  console.log(chosenTask)

  return (
    <div>
      <Dialog open={openUpdateDialog} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogContent>
          <TextField
            id="task"
            value={task}
            label="Задача"
            fullWidth
            onChange={(e) => setTask(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleClose}
            color="primary">
            Отменить
          </Button>
          <Button onClick={handleUpdate} color="primary">
            Изменить
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default FormDialog