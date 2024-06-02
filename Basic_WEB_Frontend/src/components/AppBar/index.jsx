import Box from '@mui/material/Box'
import ModeSelect from '~/components/ModeSelect'

function AppBar() {
  return (
    <Box sx={{
      backgroundColor: 'primary.light',
      width: (theme) => theme.layoutCustom.layoutwidth,
      height: (theme) => theme.layoutCustom.appBar_height,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      color: 'black'
    }}>
      App Bar
      <ModeSelect />
    </Box>
  )
}

export default AppBar
