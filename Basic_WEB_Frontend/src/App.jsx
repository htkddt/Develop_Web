// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import Button from '@mui/material/Button'
// import AccessAlarmIcon from '@mui/icons-material/AccessAlarm'
// import ThreeDRotation from '@mui/icons-material/ThreeDRotation'
// import HomeIcon from '@mui/icons-material/Home'
// import { pink } from '@mui/material/colors'
// import Typography from '@mui/material/Typography'
// import { useColorScheme } from '@mui/material/styles'
// import useMediaQuery from '@mui/material/useMediaQuery'

// import InputLabel from '@mui/material/InputLabel'
// import MenuItem from '@mui/material/MenuItem'
// import FormControl from '@mui/material/FormControl'
// import Select from '@mui/material/Select'
// import Box from '@mui/material/Box'
// import LightModeIcon from '@mui/icons-material/LightMode'
// import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
// import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness'
// import Container from '@mui/material/Container'

// function ModeToggle() {
//   const { mode, setMode } = useColorScheme()
//   // const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')
//   // const prefersLightMode = useMediaQuery('(prefers-color-scheme: light)')
//   // console.log('prefersDarkMode: ', prefersDarkMode)
//   // console.log('prefersLightMode: ', prefersLightMode)

//   return (
//     <Button
//       onClick={() => {
//         setMode(mode === 'light' ? 'dark' : 'light')
//       }}
//     >
//       {mode === 'light' ? 'Turn dark' : 'Turn light'}
//     </Button>
//   )
// }

// // ✅ OK
// import { Add as AddIcon } from '@mui/icons-material';
// import { Tabs } from '@mui/material';
// //                         ^^^^^^^^ 1st or top-level

// // ✅ OK
// import AddIcon from '@mui/icons-material/Add';
// import Tabs from '@mui/material/Tabs';
// //                              ^^^^ 2nd level

// // ❌ NOT OK
// import TabIndicator from '@mui/material/Tabs/TabIndicator';
// //                                           ^^^^^^^^^^^^ 3rd level

import Board from '~/pages/Boards/_id'
// Update

function App() {
  //const [count, setCount] = useState(0)

  // const name = "HuynhTuanKiet"
  // console.log(count)

  return (
    <>
      {/* React Router Dom /Boards/Board/(board_id) */}
      {/* Board Details */}
      <Board />
    </>
  // <Container disableGutters maxWidth={false} sx={{ height: '100vh' }}>
  //   <Box sx={{
  //     backgroundColor: 'primary.light',
  //     width: '100%',
  //     height: (theme) => theme.layoutCustom.appBar_height,
  //     display: 'flex',
  //     alignItems: 'center'
  //   }}>
  //     App Bar
  //     <ModeSelect />
  //   </Box>
  //   <Box sx={{
  //     backgroundColor: 'primary.dark',
  //     width: '100%',
  //     height: (theme) => theme.layoutCustom.boardBar_height,
  //     display: 'flex',
  //     alignItems: 'center'
  //   }}>
  //     Board Bar
  //   </Box>
  //   <Box sx={{
  //     backgroundColor: 'primary.main',
  //     width: '100%',
  //     height: (theme) => `calc(100vh - ${theme.layoutCustom.appBar_height} - ${theme.layoutCustom.boardBar_height})`,
  //     display: 'flex',
  //     alignItems: 'center'
  //   }}>
  //     Board Contents
  //   </Box>

  //   {/* <div>
  //     <a href="https://vitejs.dev" rel="noreferrer" target="_blank">
  //       <img src={viteLogo} className="logo" alt="Vite logo" />
  //     </a>
  //     <a href="https://react.dev" rel="noreferrer" target="_blank">
  //       <img src={reactLogo} className="logo react" alt="React logo" />
  //     </a>
  //   </div>
  //   <h1>Vite + React</h1>
  //   <div className="card">
  //     <button onClick={() => setCount((count) => count + 1)}>
  //       count is {count}
  //     </button>
  //     <p>
  //       Edit <code>src/App.jsx</code> and save to test HMR
  //     </p>
  //   </div>
  //   <p className="read-the-docs">
  //     Click on the Vite and React logos to learn more
  //   </p> */}

  //   {/* <hr />
  //   <ModeToggle />
  //   <hr />
  //   <div>huynhtuankietddt</div>

  //   <Typography variant="body2" color="text.secondary">Test Typography</Typography>

  //   <Button variant="text">Text</Button>
  //   <Button variant="contained" color="success">Contained</Button>
  //   <Button variant="outlined">Outlined</Button>
  //   <br />
  //   <AccessAlarmIcon />
  //   <ThreeDRotation />
  //   <br />
  //   <HomeIcon color="primary" />
  //   <HomeIcon color="secondary" />
  //   <HomeIcon color="success" />
  //   <HomeIcon color="action" />
  //   <HomeIcon color="disabled" />
  //   <HomeIcon sx={{ color: pink[500] }} /> */}
  // </Container>
  )
}

export default App
