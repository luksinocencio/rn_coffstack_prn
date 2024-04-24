import React from 'react'

import { Controller, FieldValues, UseControllerProps } from 'react-hook-form'

import { PasswordInput, PasswordInputProps } from '@components'

export function FormPasswordInput<FormType extends FieldValues>({
  control,
  name,
  rules,
  ...textInputProps
}: PasswordInputProps & UseControllerProps<FormType>) {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field, fieldState }) => (
        <PasswordInput
          value={field.value}
          errorMessage={fieldState.error?.message}
          onChangeText={field.onChange}
          {...textInputProps}
        />
      )}
    />
  )
}
