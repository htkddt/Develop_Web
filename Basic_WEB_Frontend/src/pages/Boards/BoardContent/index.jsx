import Box from '@mui/material/Box'

function BoardContent() {
  return (
    <Box sx={{
      backgroundColor: '#8395a7',
      width: '80%',
      height: (theme) => `calc(120vh - ${theme.layoutCustom.appBar_height} - ${theme.layoutCustom.boardBar_height})`,
      display: 'flex',
      alignItems: 'center', // Canh giữa nội dung theo chiều dọc
      justifyContent: 'center', // Canh giữa nội dung theo chiều ngang
      color: 'black',
      margin: '0 auto',
      fontSize: '50px'
    }}>
      Board Contents
    </Box>
  )
}

export default BoardContent
