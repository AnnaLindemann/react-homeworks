import {Typography, Button, Container,Dialog, DialogActions,DialogContent, DialogContentText, DialogTitle } from '@mui/material'

function DialogWindow({open, onClose}){


  return(
<Dialog open={open} onClose={onClose}>
<DialogTitle>Look!</DialogTitle>
<DialogContent><DialogContentText>Here shoul be something intersting! May be later...</DialogContentText></DialogContent>
<DialogActions>
  <Button onClick={onClose}>Cancel</Button>
  <Button onClick={onClose}>Ok</Button>
</DialogActions>

</Dialog>

  )
}
export default DialogWindow