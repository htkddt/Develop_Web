import Box from '@mui/material/Box'

function BoardContent() {
  return (
    <Box sx={{
      // backgroundColor: 'primary.main',
      width: (theme) => theme.layoutCustom.layoutwidth,
      height: (theme) => `calc(100vh - ${theme.layoutCustom.appBar_height} - ${theme.layoutCustom.boardBar_height})`,
      display: 'flex',
      alignItems: 'center',
      color: 'black'
    }}>
      Board Contents
    </Box>
  )
}

export default BoardContent
