import Box from '@mui/material/Box'

function BoardBar() {
  return (
    <Box sx={{
      backgroundColor: 'primary.dark',
      width: (theme) => theme.layoutCustom.layoutwidth,
      height: (theme) => theme.layoutCustom.boardBar_height,
      display: 'flex',
      alignItems: 'center',
      color: 'black'
    }}>
      Board Bar
    </Box>
  )
}

export default BoardBar
