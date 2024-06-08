import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import DashboardIcon from '@mui/icons-material/Dashboard'
import VpnLockIcon from '@mui/icons-material/VpnLock'
import AddToDriveIcon from '@mui/icons-material/AddToDrive'
import BoltIcon from '@mui/icons-material/Bolt'
import FilterListIcon from '@mui/icons-material/FilterList'
import Avatar from '@mui/material/Avatar'
import AvatarGroup from '@mui/material/AvatarGroup'
import { Tooltip } from '@mui/material'
import Button from '@mui/material/Button'
import PersonAddIcon from '@mui/icons-material/PersonAdd'

const MENU_STYLES = {
  color: 'black',
  bgcolor: 'white',
  border: 'none',
  paddingX: '5px',
  borderRadius: '4px',
  fontSize: '13px',
  fontWeight: 'bold',
  '& .MuiSvgIcon-root': {
    color: 'primary.main'
  },
  '&:hover': {
    bgcolor: 'primary.50'
  }
}

function BoardBar() {
  return (
    <Box sx={{
      // backgroundColor: 'primary.dark',
      width: (theme) => theme.layoutCustom.layoutwidth,
      height: (theme) => theme.layoutCustom.boardBar_height,
      display: 'flex',
      alignItems: 'center', // Canh giữa nội dung theo chiều dọc
      justifyContent: 'space-between', // Canh giữa nội dung theo chiều ngang
      color: 'black',
      gap: 2,
      paddingX: 2,
      overflowX: 'auto',
      borderTop: '2px solid #d63031' // Vẽ đường kẻ nằm ngang với độ dày 2 pixel
      // margin: '0 auto',
      // fontSize: '50px'
    }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Chip
          sx={MENU_STYLES}
          icon={<DashboardIcon />}
          label="HuynhTuanKiet Developer"
          // onClick={() => {}}
          clickable />
        <Chip
          sx={MENU_STYLES}
          icon={<VpnLockIcon />}
          label="Public/Private Workspace"
          // onClick={() => {}}
          clickable />
        <Chip
          sx={MENU_STYLES}
          icon={<AddToDriveIcon />}
          label="Add To Google Drive"
          // onClick={() => {}}
          clickable />
        <Chip
          sx={MENU_STYLES}
          icon={<BoltIcon />}
          label="Automation"
          // onClick={() => {}}
          clickable />
        <Chip
          sx={MENU_STYLES}
          icon={<FilterListIcon />}
          label="Filter"
          // onClick={() => {}}
          clickable />
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Button sx={{ bgcolor: 'white',
          color: 'black',
          borderColor: 'black',
          '&:hover': {
            borderColor: 'black'
          }
        }}
        variant="outlined"
        startIcon={<PersonAddIcon />}>Invite</Button>
        <AvatarGroup
          max={7}
          sx={{
            '& .MuiAvatar-root': {
              width: 34,
              height: 34,
              fontSize: 16
            }
          }}>
          <Tooltip title="BuiQuangMinhTruc">
            <Avatar
              alt="Bui Quang Minh Truc"
              src="https://scontent-hkg4-1.xx.fbcdn.net/v/t39.30808-1/327280936_552600566801804_711254853070092889_n.jpg?stp=dst-jpg_p200x200&_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHTPSCmuM9yd4BmzOK32VqcejRDsS1OgT16NEOxLU6BPfhvxiIGfgb8AOwazenScVXko9WXM5_he2eenBspgJj9&_nc_ohc=tzYxRuVlWU8Q7kNvgGXA6fT&_nc_ht=scontent-hkg4-1.xx&oh=00_AYAmSu-gdH6LY6MmkFiEGLyg11wFE3WcyJZKhHNx1WLIZA&oe=6668F101" />
          </Tooltip>
          <Tooltip title="NguyenTuanKiet">
            <Avatar
              alt="Nguyen Tuan Kiet"
              src="https://scontent-hkg4-1.xx.fbcdn.net/v/t39.30808-1/442496973_1104008120676494_5160517892390967289_n.jpg?stp=dst-jpg_p100x100&_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGMsZ1DJeR9NQb_DjCi7blx1RR6K1gqXUrVFHorWCpdSoSKiK1ZdDbQejmCWl9EtuKPBXeNBY5Z4uvNeYs2CJO5&_nc_ohc=yWzmBdgsU_wQ7kNvgGAp7Ex&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent-hkg4-1.xx&oh=00_AYB-MiJlxmq5GNLZncSZnueRlRfmOIJh5dxNRlIwqBV5zg&oe=666826A6" />
          </Tooltip>
          <Tooltip title="HuynhVoNhatBao">
            <Avatar
              alt="Huynh Vo Nhat Bao"
              src="https://scontent-hkg4-1.xx.fbcdn.net/v/t39.30808-1/445227523_1976583119467899_4935243978911453426_n.jpg?stp=dst-jpg_p100x100&_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHTtwSjVfT5vl6JV9u-L9zp0BsCjYpYes3QGwKNilh6zeKBWg_C3Og3OIx3HD_UrsRrCzlTsf02Gmt_jtFSSKRb&_nc_ohc=8avt-A2LTQ8Q7kNvgF94JKn&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent-hkg4-1.xx&oh=00_AYDe2NduSduGMsTVfTmwTkY5FZmy7FpUH5om_d_6_bxdvg&oe=66684E8E" />
          </Tooltip>
          <Tooltip title="VoQuocAnh">
            <Avatar
              alt="Vo Quoc Anh"
              src="https://scontent-hkg4-1.xx.fbcdn.net/v/t39.30808-1/444490542_1955841644862413_7060694491727302166_n.jpg?stp=dst-jpg_p100x100&_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeF1K7BBlFnHq83dhl0lJSRgdIOvRWp1OO90g69FanU478jU_umnq0AE6aNBbIAuiZBMSmyqCSLZn87liFDvbpvh&_nc_ohc=pJfCNjHFuCEQ7kNvgFpIPLL&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent-hkg4-1.xx&oh=00_AYClJTaUMuYIV3qeBxm8rdCldPO-Bj2WVFMAnwkg27woLQ&oe=66683373" />
          </Tooltip>
          <Tooltip title="DoThanhCongToai">
            <Avatar
              alt="Do Thanh Cong Toai"
              src="https://scontent-hkg1-1.xx.fbcdn.net/v/t39.30808-1/402111901_2693435064164461_6755541119334004855_n.jpg?stp=c0.0.100.100a_cp6_dst-jpg_p100x100&_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHSgN_Bnyc-nvOquaJEWnhMqEmYlvytsGuoSZiW_K2wa7pWLRPc-rzHGWvOcN-fshhpd5nUcYpky8hs_8uLTrGb&_nc_ohc=J5MA0rB9w8UQ7kNvgHYQG3B&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent-hkg1-1.xx&oh=00_AYAujVlHu9kOLZN5CEs52xCiS1SQe6w1UJLkWWFb6t-H0A&oe=66684755" />
          </Tooltip>
          <Tooltip title="NguyenNgocThanhLong">
            <Avatar
              alt="Nguyen Ngoc Thanh Long"
              src="https://scontent-hkg1-2.xx.fbcdn.net/v/t39.30808-1/278482824_1680912978921892_3068303179391275924_n.jpg?stp=dst-jpg_p100x100&_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeH2mK0aSBFYCszjA52zgoTxztZuoOGysR7O1m6g4bKxHq_ZLBsxL22ect--bTnqPEHwAiZ3UM14iAmcP6vnWD_o&_nc_ohc=uA5p5GZjNkcQ7kNvgHB-Aa7&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent-hkg1-2.xx&oh=00_AYAfNdX3xWNIFXW2rvu5rlPfUVbf5zPc83qWUp_VT-f0Qg&oe=666856A5" />
          </Tooltip>
        </AvatarGroup>
      </Box>

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
