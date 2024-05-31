import { cyan, deepOrange, orange, teal } from '@mui/material/colors'
import { experimental_extendTheme as extendTheme } from '@mui/material/styles'
// import { createTheme } from '@mui/material/styles'
// import { red } from '@mui/material/colors'

// Create a theme instance.
// const theme = createTheme({
//   palette: {
//     mode: 'light', // Default is light
//     primary: {
//       main: '#556cd6'
//     },
//     secondary: {
//       main: '#19857b'
//     },
//     error: {
//       main: red.A400
//     },
//     text: {
//       secondary: red[500]
//     }
//   }
// })

const theme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: teal,
        secondary: deepOrange
      }
    },
    dark:{
      palette: {
        primary: cyan,
        secondary: orange
      }
    }
  }
})

export default theme