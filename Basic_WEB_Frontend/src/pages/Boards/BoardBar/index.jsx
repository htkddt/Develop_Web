import Box from '@mui/material/Box'

function BoardBar() {
  return (
    <Box sx={{
      // backgroundColor: 'primary.dark',
      width: (theme) => theme.layoutCustom.layoutwidth,
      height: (theme) => theme.layoutCustom.boardBar_height,
      display: 'flex',
      alignItems: 'center', // Canh giữa nội dung theo chiều dọc
      justifyContent: 'center', // Canh giữa nội dung theo chiều ngang
      color: 'black',
      margin: '0 auto'
    }}>
      Board Bar
      {/* <Box sx={{
        width: '50%',
        height: (theme) => theme.layoutCustom.boardBar_height
      }}>
        <Box sx={{
          backgroundColor: '#ffa801',
          width: '50%',
          height: '50px',
          display: 'flex',
          alignItems: 'center', // Canh giữa nội dung theo chiều dọc
          justifyContent: 'center', // Canh giữa nội dung theo chiều ngang
          color: 'black',
          fontSize: '35px',
          margin: '0 auto'
        }}>
          MAIN HEADER
        </Box>
        <br />
        <Box sx={{
          backgroundColor: '#ffeaa7',
          width: '80%',
          height: '330px',
          display: 'flex',
          alignItems: 'center', // Canh giữa nội dung theo chiều dọc
          justifyContent: 'center', // Canh giữa nội dung theo chiều ngang
          color: 'black',
          fontSize: '35px',
          margin: '0 auto'
        }}>
          MAIN HEADER CONTENT
        </Box>
      </Box>
      <br />
      <Box sx={{
        width: '50%',
        height: (theme) => theme.layoutCustom.boardBar_height
      }}>
        <Box sx={{
          backgroundColor: '#2ed573',
          width: '30%',
          height: '50px',
          display: 'flex',
          alignItems: 'center', // Canh giữa nội dung theo chiều dọc
          justifyContent: 'center', // Canh giữa nội dung theo chiều ngang
          color: 'black',
          fontSize: '25px',
          margin: '0 auto'
        }}>
          Header Title 1
        </Box>
        <br />
        <Box sx={{
          backgroundColor: '#7bed9f',
          width: '80%',
          height: '120px',
          display: 'flex',
          alignItems: 'center', // Canh giữa nội dung theo chiều dọc
          justifyContent: 'center', // Canh giữa nội dung theo chiều ngang
          color: 'black',
          fontSize: '30px',
          margin: '0 auto'
        }}>
          Header Title Content 1
        </Box>
        <hr />
        <Box sx={{
          backgroundColor: '#2ed573',
          width: '30%',
          height: '50px',
          display: 'flex',
          alignItems: 'center', // Canh giữa nội dung theo chiều dọc
          justifyContent: 'center', // Canh giữa nội dung theo chiều ngang
          color: 'black',
          fontSize: '25px',
          margin: '0 auto'
        }}>
          Header Title 2
        </Box>
        <br />
        <Box sx={{
          backgroundColor: '#7bed9f',
          width: '80%',
          height: '120px',
          display: 'flex',
          alignItems: 'center', // Canh giữa nội dung theo chiều dọc
          justifyContent: 'center', // Canh giữa nội dung theo chiều ngang
          color: 'black',
          fontSize: '30px',
          margin: '0 auto'
        }}>
          Header Title Content 2
        </Box>
      </Box> */}
    </Box>
  )
}

export default BoardBar
