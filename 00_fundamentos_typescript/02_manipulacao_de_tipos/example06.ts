const lightMode = {
  primary: '#074c4e',
  secondary: '#f86f2d',
  success: '#4abc86',
  error: '#ea3838',
  background: '#fff',
}

type Colors = typeof lightMode

const darkMode: Colors = {
  primary: '#074c4e',
  secondary: '#f86f2d',
  success: '#4abc86',
  error: '#ea3838',
  background: '#333',
}

function getTextComponent(text: string, color: keyof typeof lightMode) {
  // TODO
}

getTextComponent('teste', 'secondary')
