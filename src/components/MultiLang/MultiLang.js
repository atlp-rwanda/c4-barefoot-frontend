import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

export default function MultipleLanguages() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [lang, setLang] = React.useState('English');

  const handleChange = (event) => {
    setLang(event.target.value || '');
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const lan = ['kin', 'en', 'fr']
  console.log(lang)

  return (
    <div>
      <Button onClick={handleClickOpen} style={{color: 'white'}}>Change language</Button>
      <Dialog disableBackdropClick disableEscapeKeyDown open={open} onClose={handleClose}>
        <DialogTitle>Choose the language</DialogTitle>
        <DialogContent>
          <form className={classes.container}>
            <FormControl className={classes.formControl}>
              <Select
                labelId="demo-dialog-select-label"
                id="demo-dialog-select"
                value={lang}
                onChange={handleChange}
                input={<Input />}
              >
                <MenuItem value='kin'>Kinyarwanda</MenuItem>
                <MenuItem value='en'>English</MenuItem>
                <MenuItem value='fr'>French</MenuItem>
              </Select>
            </FormControl>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}