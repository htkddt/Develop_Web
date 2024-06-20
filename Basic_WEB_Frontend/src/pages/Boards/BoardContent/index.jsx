import Box from '@mui/material/Box'

function BoardContent() {
  return (
    <Box sx={{
      width: (theme) => theme.layoutCustom.layoutwidth,
      height: (theme) => `calc(90vh - ${theme.layoutCustom.appBar_height} - ${theme.layoutCustom.boardBar_height})`,
      display: 'flex',
      alignItems: 'center', // Canh giữa nội dung theo chiều dọc
      justifyContent: 'center', // Canh giữa nội dung theo chiều ngang
      color: 'black'
      // bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#34495e' : '#ff7675')
      // borderTop: '2px solid #d63031' // Vẽ đường kẻ nằm ngang với độ dày 2 pixel
      // margin: '0 auto',
      // fontSize: '50px'
    }}>
      <Box sx={{
        width: '25%',
        height: '500px',
        alignItems: 'center', // Canh giữa nội dung theo chiều dọc
        justifyContent: 'center' // Canh giữa nội dung theo chiều ngang
      }}>
        <Box sx={{
          width: '80%',
          height: '500px',
          bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#34495e' : '#ff7675'),
          fontSize: '30px',
          margin: '0 auto',
          textAlign: 'center'
        }}>
          Content 1
        </Box>
      </Box>
      <Box sx={{
        width: '25%',
        height: '500px',
        alignItems: 'center', // Canh giữa nội dung theo chiều dọc
        justifyContent: 'center' // Canh giữa nội dung theo chiều ngang
      }}>
        <Box sx={{
          width: '80%',
          height: '500px',
          bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#34495e' : '#ff7675'),
          fontSize: '30px',
          margin: '0 auto',
          textAlign: 'center'
        }}>
          Content 2
        </Box>
      </Box>
      <Box sx={{
        width: '25%',
        height: '500px',
        alignItems: 'center', // Canh giữa nội dung theo chiều dọc
        justifyContent: 'center' // Canh giữa nội dung theo chiều ngang
      }}>
        <Box sx={{
          width: '80%',
          height: '500px',
          bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#34495e' : '#ff7675'),
          fontSize: '30px',
          margin: '0 auto',
          textAlign: 'center'
        }}>
          Content 3
        </Box>
      </Box>
      <Box sx={{
        width: '25%',
        height: '500px',
        alignItems: 'center', // Canh giữa nội dung theo chiều dọc
        justifyContent: 'center' // Canh giữa nội dung theo chiều ngang
      }}>
        <Box sx={{
          width: '80%',
          height: '500px',
          bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#34495e' : '#ff7675'),
          fontSize: '30px',
          margin: '0 auto',
          textAlign: 'center'
        }}>
          Content 4
        </Box>
      </Box>
    </Box>
  )
}

export default BoardContent
