import {Typography, Button, Container,Dialog, DialogActions,DialogContent, DialogContentText, DialogTitle } from '@mui/material'

function DialogWindow({open, onClose}){


  return(
<Dialog open={open} onClose={onClose}  PaperProps={{
        elevation: 6,
        sx: { p: 1, borderRadius: 3 },
      }}>
<DialogTitle sx={{ fontWeight: 700 }} gutterBottom>Look!</DialogTitle>
<DialogContent><DialogContentText>Here shoul be something intersting! May be later...</DialogContentText></DialogContent>
<DialogActions sx={{ px: 2, pb: 2 }}>
  <Button onClick={onClose}>Cancel</Button>
  <Button onClick={onClose} variant="contained">Ok</Button>
</DialogActions>

</Dialog>

  )
}
export default DialogWindow