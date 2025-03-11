import { ReactNode } from 'react';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '@/styles/theme';
import InitColorSchemeScript from '@mui/material/InitColorSchemeScript';
import Navbar from '@/components/Navbar';

export default function RootLayout(props: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <InitColorSchemeScript attribute="class" />
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Navbar />
            {props.children}
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
