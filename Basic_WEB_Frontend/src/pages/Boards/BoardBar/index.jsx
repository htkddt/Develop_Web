import Box from '@mui/material/Box'

function BoardBar() {
  return (
    <Box sx={{
      // backgroundColor: 'primary.dark',
      width: (theme) => theme.layoutCustom.layoutwidth,
      height: (theme) => theme.layoutCustom.boardBar_height,
      display: 'flex',
      alignItems: 'center',
      color: 'black'
    }}>
      <Box sx={{
        backgroundColor: 'yellowgreen',
        width: '50%',
        height: (theme) => theme.layoutCustom.boardBar_height,
        display: 'flex',
        alignItems: 'center', // Canh giữa nội dung theo chiều dọc
        justifyContent: 'center', // Canh giữa nội dung theo chiều ngang
        color: 'black',
        fontSize: '35px'
      }}>
        MAIN HEADER
      </Box>
      <Box sx={{
        width: '50%',
        height: (theme) => theme.layoutCustom.boardBar_height
      }}>
        <Box sx={{
          backgroundColor: 'orange',
          width: (theme) => theme.layoutCustom.layoutwidth,
          height: '30px',
          display: 'flex',
          alignItems: 'center', // Canh giữa nội dung theo chiều dọc
          justifyContent: 'center', // Canh giữa nội dung theo chiều ngang
          color: 'black'
        }}>
          Header Title 1
        </Box>
        <Box sx={{
          backgroundColor: 'orange',
          width: (theme) => theme.layoutCustom.layoutwidth,
          height: '30px',
          display: 'flex',
          alignItems: 'center', // Canh giữa nội dung theo chiều dọc
          justifyContent: 'center', // Canh giữa nội dung theo chiều ngang
          color: 'black'
        }}>
          Header Title 2
        </Box>
      </Box>
    </Box>
  )
}

export default BoardBar
