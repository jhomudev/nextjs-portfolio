'use client'
import { ThemeProvider  as NextThemesProvider} from 'next-themes'

type Props = {
  children: React.ReactNode
}

function ThemeProvider({children}: Props) {
  return (
    <NextThemesProvider
      defaultTheme="light" enableSystem={false}
      themes={['light', 'dark']}
      attribute='class'
      storageKey='___jhomudev_portfolio_theme___'
    >
      {children}
    </NextThemesProvider>
  )
}

export default ThemeProvider