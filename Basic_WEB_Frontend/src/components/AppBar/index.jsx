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
import AddIcon from '@mui/icons-material/Add'

function AppBar() {
  return (
    <Box px={2} sx={{
      backgroundColor: 'primary.light',
      width: (theme) => theme.layoutCustom.layoutwidth,
      height: (theme) => theme.layoutCustom.appBar_height,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between', // Canh lề cho text App Bar và ModeSelect nằm về 2 phía của thẻ Box
      color: 'black'
    }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <AppsIcon />
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.1 }}>
          <SvgIcon component={ LogoIcon } inheritViewBox />
          <Typography variant="span" sx={{ fontSize: '1.2rem', fontWeight: 'bold' }}>179FC</Typography>
        </Box>

        <Workspaces />
        <Recent />
        <Starred />
        <Templates />

        <Button sx={{ color: 'black',
          borderColor: 'black',
          '&:hover': {
            borderColor: 'black'
          }
        }}
        variant="outlined"
        endIcon={<AddIcon />}>Create</Button>
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <SearchIcon />
        <TextField id="outlined-search" label="Search ..." type="search" size='small' />
        <ModeSelect />
        <Tooltip title="Notification">
          <Badge color="secondary" variant="dot" sx={{ cursor: 'pointer' }}>
            <NotificationsNoneIcon />
          </Badge>
        </Tooltip>

        <Tooltip title="Help">
          <HelpOutlineIcon sx={{ cursor: 'pointer' }} />
        </Tooltip>

        <Profiles />
      </Box>
    </Box>
  )
}

export default AppBar
