import React from 'react'
import { StyleSheet, TextInput, TextInputProps } from 'react-native'

type InputProps = TextInputProps

const DEFAULT_COLOR = '#550ab1'

const Input: React.FC<InputProps> = ({ ...rest }) => {
  return (
    <TextInput placeholderTextColor='#ddd' style={styles.wrapper} {...rest} />
  )
}

const styles = StyleSheet.create({
  wrapper: {
    height: 44,
    width: '80%',
    borderWidth: 0.5,
    borderColor: DEFAULT_COLOR,
    borderRadius: 22,
    paddingHorizontal: 20,
    fontSize: 16,
    color: DEFAULT_COLOR,
    marginTop: 10,
  },
})

export default Input
