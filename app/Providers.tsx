'use client'
import { ThemeProvider } from "./themeProvider"

function Providers({ children }: { children: React.ReactNode }) {
    return (
        <>
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
                {children}
            </ThemeProvider>
        </>
    )
}

export default Providers