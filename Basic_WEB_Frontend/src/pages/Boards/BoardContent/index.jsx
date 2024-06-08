import Box from '@mui/material/Box'

function BoardContent() {
  return (
    <Box sx={{
      // backgroundColor: '#8395a7',
      width: (theme) => theme.layoutCustom.layoutwidth,
      height: (theme) => `calc(100vh - ${theme.layoutCustom.appBar_height} - ${theme.layoutCustom.boardBar_height})`,
      display: 'flex',
      alignItems: 'center', // Canh giữa nội dung theo chiều dọc
      justifyContent: 'center', // Canh giữa nội dung theo chiều ngang
      color: 'black',
      borderTop: '2px solid #d63031' // Vẽ đường kẻ nằm ngang với độ dày 2 pixel
      // margin: '0 auto',
      // fontSize: '50px'
    }}>
      Board Contents
    </Box>
  )
}

export default BoardContent
