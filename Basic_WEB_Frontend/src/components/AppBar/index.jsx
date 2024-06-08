import { useState } from 'react'
import Box from '@mui/material/Box'
import ModeSelect from '~/components/ModeSelect'
import AppsIcon from '@mui/icons-material/Apps'
import { ReactComponent as LogoIcon } from '~/assets/logo.svg'
import SvgIcon from '@mui/material/SvgIcon'
import Typography from '@mui/material/Typography'
import Workspaces from './Menus/Workspaces'
import Recent from './Menus/Recent'
import Starred from './Menus/Starred'
import Templates from './Menus/Templates'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import SearchIcon from '@mui/icons-material/Search'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import Badge from '@mui/material/Badge'
import Tooltip from '@mui/material/Tooltip'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'
import Profiles from './Menus/Profiles'
import LibraryAddIcon from '@mui/icons-material/LibraryAdd'
import InputAdornment from '@mui/material/InputAdornment'
import CloseIcon from '@mui/icons-material/Close'

function AppBar() {
  const [SearchValue, setSearchValue] = useState('')
  return (
    <Box sx={{
      width: (theme) => theme.layoutCustom.layoutwidth,
      height: (theme) => theme.layoutCustom.appBar_height
    }}>
      <Box sx={{
        // backgroundColor: 'primary.light',
        width: (theme) => theme.layoutCustom.layoutwidth,
        height: (theme) => theme.layoutCustom.appBar_height,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between', // Canh lề cho text App Bar và ModeSelect nằm về 2 phía của thẻ Box
        color: 'white',
        gap: 2,
        paddingX: 2,
        overflowX: 'auto',
        bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#2c3e50' : '#d63031')
      }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <AppsIcon />
          <Box sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 0.1
          }}>
            <SvgIcon component={ LogoIcon } inheritViewBox sx={{ color: 'white' }} />
            <Typography variant="span" sx={{ fontSize: '1.2rem', fontWeight: 'bold' }}>179FC</Typography>
          </Box>

          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
            <Workspaces />
            <Recent />
            <Starred />
            <Templates />

            <Button sx={{ color: 'white',
              border: 'none',
              '&:hover': {
                border: 'none'
              }
            }}
            variant="outlined"
            startIcon={<LibraryAddIcon />}
            >
              Create
            </Button>
          </Box>
        </Box>

        <Box sx={{ display: 'flex',
          alignItems: 'center',
          gap: 2
          // color: 'white',
          // borderColor: 'black',
          // '&:hover': {
          //   borderColor: 'black'
          // }
        }}>
          <TextField
            id="outlined-search"
            label="Search"
            type="text"
            size='small'
            value = {SearchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon sx={{ color: 'white' }} />
                </InputAdornment>
              ),
              endAdornment: (
                <CloseIcon
                  fontSize='small'
                  sx={{ color: SearchValue ? 'white' : 'transparent', cursor: 'pointer' }}
                  onClick={() => setSearchValue('')} />
              )
            }}
            sx={{
              minWidth: '120px',
              maxWidth: '200px',
              '& label': { color: 'white' },
              '& input': { color: 'white' },
              '& label.Mui-focused': { color: 'white' },
              '& .MuiOutlinedInput-root': {
                '& fieldset': { borderColor: 'white' },
                '&:hover fieldset': { borderColor: 'white' },
                '&.Mui-focused fieldset': { borderColor: 'white' }
              }
            }} />
          <ModeSelect />
          <Tooltip title="Notification">
            <Badge color="primary" variant="dot" sx={{ cursor: 'pointer' }}>
              <NotificationsNoneIcon />
            </Badge>
          </Tooltip>

          <Tooltip title="Help">
            <HelpOutlineIcon sx={{ cursor: 'pointer' }} />
          </Tooltip>

          <Profiles />
        </Box>
      </Box>
    </Box>
  )
}

export default AppBar
