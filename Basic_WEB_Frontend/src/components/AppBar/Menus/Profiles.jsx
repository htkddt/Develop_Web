import React from 'react'
import Box from '@mui/material/Box'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Divider from '@mui/material/Divider'
import ListItemIcon from '@mui/material/ListItemIcon'
import Avatar from '@mui/material/Avatar'
import Tooltip from '@mui/material/Tooltip'
import IconButton from '@mui/material/IconButton'
import PersonAdd from '@mui/icons-material/PersonAdd'
import Settings from '@mui/icons-material/Settings'
import Logout from '@mui/icons-material/Logout'

function Profiles() {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <Box>
      <Tooltip title="Account settings">
        <IconButton
          onClick={handleClick}
          size="small"
          sx={{ padding: 0 }}
          aria-controls={open ? 'basic-button-profiles' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
        >
          <Avatar sx={{ width: 30, height: 30 }}
            alt="HuynhTuanKiet"
            src="https://scontent-hkg1-2.xx.fbcdn.net/v/t39.30808-6/412946768_678616841131827_
            5178683579607036912_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeG7TY5fbY2cCnV5f096h2Wg-
            kEhBr-4OCv6QSEGv7g4K-g7d_IYFyilMPmOYVvqbfetpddHZoxhJM1lk5DzPL5G&_nc_ohc=4sILwsWBIzUQ7kNvgFR8Xu2&_nc_ht=scontent-
            hkg1-2.xx&oh=00_AYBgm4GiK2_NZ_bvc0tr3VBv_NqTFlpEeHlpRGp1PZnPQw&oe=6661BFA5"
          />
        </IconButton>
      </Tooltip>
      <Menu
        id="basic-menu-profiles"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button-profiles'
        }}
      >
        <MenuItem>
          <Avatar sx={{ width: 28, height: 28, mr: 2 }} /> Profile
        </MenuItem>
        <MenuItem>
          <Avatar sx={{ width: 28, height: 28, mr: 2 }} /> My account
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Add another account
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </Box>
  )
}

export default Profiles
