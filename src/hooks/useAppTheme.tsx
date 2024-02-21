import { useTheme as useThemeNextThemes } from 'next-themes'

function useAppTheme() {
  const { theme, setTheme, ...props } = useThemeNextThemes()
  
  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light')

  return {theme, toggleTheme, ...props}
}

export default useAppTheme