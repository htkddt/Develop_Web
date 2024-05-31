// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import Button from '@mui/material/Button'
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm'
import ThreeDRotation from '@mui/icons-material/ThreeDRotation'
import HomeIcon from '@mui/icons-material/Home'
import { pink } from '@mui/material/colors'
import Typography from '@mui/material/Typography'
import { useColorScheme } from '@mui/material/styles'

function ModeToggle() {
  const { mode, setMode } = useColorScheme()
  return (
    <Button
      onClick={() => {
        setMode(mode === 'light' ? 'dark' : 'light')
      }}
    >
      {mode === 'light' ? 'Turn dark' : 'Turn light'}
    </Button>
  )
}

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


function App() {
  //const [count, setCount] = useState(0)

  // const name = "HuynhTuanKiet"
  // console.log(count)

  return (
    <>
      {/* <div>
        <a href="https://vitejs.dev" rel="noreferrer" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" rel="noreferrer" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
      <ModeToggle />
      <hr />
      <div>huynhtuankietddt</div>

      <Typography variant="body2" color="text.secondary">Test Typography</Typography>

      <Button variant="text">Text</Button>
      <Button variant="contained" color="success">Contained</Button>
      <Button variant="outlined">Outlined</Button>
      <br />
      <AccessAlarmIcon />
      <ThreeDRotation />
      <br />
      <HomeIcon color="primary" />
      <HomeIcon color="secondary" />
      <HomeIcon color="success" />
      <HomeIcon color="action" />
      <HomeIcon color="disabled" />
      <HomeIcon sx={{ color: pink[500] }} />
    </>
  )
}

export default App
