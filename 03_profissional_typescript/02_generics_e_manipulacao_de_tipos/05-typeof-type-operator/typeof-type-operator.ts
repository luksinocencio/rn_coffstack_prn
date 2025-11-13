// No contexto de uma expressão (Javascript)
// "typeof" Type Operator - No contexto de um type, para referenciar o tipo de uma varaíavel ou propriedade

const lightMode = {
  success: '#28a745',
  danger: '#dc3535',
  warning: '#ffc107',
  info: '#17a2b8',
  primary: '#8158f9',
}

// assim é possível manter os mesmo objetos
type Colors = typeof lightMode

const darkMode: Colors = {
  success: '#28a745',
  danger: '#dc3535',
  warning: '#ffc107',
  info: '#17a2b8',
  primary: '#333',
}
