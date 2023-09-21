import { PropsWithChildren } from 'react'

import GlobalStyles from '@/styles/globals'

export function Providers({ children }: { children: PropsWithChildren }) {
  return (
    <>
      <GlobalStyles />
      {children}
    </>
  )
}
