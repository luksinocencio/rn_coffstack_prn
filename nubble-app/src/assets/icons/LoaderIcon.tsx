import React from 'react'

import { Path, Svg } from 'react-native-svg'

import { IconBase } from '@components'

export function LoaderIcon({ size = 48, color = 'black' }: IconBase) {
  return (
    <Svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      <Path
        d="M38 23.9062C38 31.6382 31.732 37.9062 24 37.9062C16.268 37.9062 10 31.6382 10 23.9062C10 18.9409 12.5849 14.5793 16.4824 12.0937"
        stroke={color}
        stroke-width="3"
      />
    </Svg>
  )
}
