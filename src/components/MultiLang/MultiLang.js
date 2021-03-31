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
import { useTranslation } from 'react-i18next';

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
  const { t, i18n } = useTranslation();
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [lang, setLang] = React.useState('');

  const handleChange = (event) => {
    setLang(event.target.value || '');
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleSubmit = () => {
    localStorage.setItem('lang', lang);
    setOpen(false);
    window.location.reload()
  }

  const userProfile = JSON.parse(localStorage.getItem('userProfile'));

  console.log('language', userProfile.language)
    
  React.useEffect(()=>{
    if(userProfile.language === "English"){
      localStorage.setItem('lang', "en")
    }else if(userProfile.language === "French"){
      localStorage.setItem('lang', "fr")
    }else if(userProfile.language === "Kinyarwanda"){
      localStorage.setItem('lang', "kin")
    }else {
      localStorage.removeItem('lang')
    }
  }, [])


  return (
    <div>
      <Button onClick={handleClickOpen} style={{color: 'white'}}>{t("Change language")}</Button>
      <Dialog disableBackdropClick disableEscapeKeyDown open={open} onClose={handleClose}>
        <DialogTitle>{t("Choose the language")}</DialogTitle>
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
                <MenuItem value='kin'>{t("Kinyarwanda")}</MenuItem>
                <MenuItem value='en'>{t("English")}</MenuItem>
                <MenuItem value='fr'>{t("French")}</MenuItem>
              </Select>
            </FormControl>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            {t("Cancel")}
          </Button>
          <Button onClick={handleSubmit} color="primary">
            {t("Continue")}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}