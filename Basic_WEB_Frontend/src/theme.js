import { blue, red } from '@mui/material/colors'
import { experimental_extendTheme as extendTheme } from '@mui/material/styles'
// import { createTheme } from '@mui/material/styles'

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
  layoutCustom: {
    layoutwidth: '30%',
    appBar_height: '48px',
    boardBar_height: '58px'
  },
  colorSchemes: {
    light: {
      palette: {
        primary: red
        // secondary: deepOrange
        // text: {
        //   primary: 'black',
        //   secondary: 'black'
        // }
      // spacing: (factor) => `${0.25 * factor}rem`
      }
    },

    dark:{
      palette: {
        primary: blue
        // secondary: deepPurple
        // text: {
        //   primary: 'black',
        //   secondary: 'black'
        // }
      // spacing: (factor) => `${0.25 * factor}rem`
      }
    }
  }
})

export default theme