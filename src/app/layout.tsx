import 'shared/styles/index.scss';
import { ReactNode } from 'react';
import { fontInter } from 'shared/next-fonts/fontInter';
import { AppLayout } from 'app/components/AppLayout/AppLayout';
import { ThemeProvider } from 'next-themes';

interface RootLayoutProps {
    children: ReactNode;
}

export default function RootLayout(props: RootLayoutProps) {
    const { children } = props;

    return (
        <html lang="ru" data-theme="light" suppressHydrationWarning>
            <body className={`${fontInter.variable}`}>
                <ThemeProvider>
                    <AppLayout>
                        {children}
                    </AppLayout>
                </ThemeProvider>
            </body>
        </html>
    );
}
