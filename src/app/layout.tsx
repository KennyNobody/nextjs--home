import { ReactNode } from 'react';
import { ThemeProvider } from 'next-themes';
import { AppDecorator } from 'shared/providers/AppDecorator';
import { AppLayout } from 'app/components/AppLayout/AppLayout';
import { StyleDecorator } from 'shared/providers/StyleDecorator/StyleDecorator';

interface RootLayoutProps {
    children: ReactNode;
}

export default function RootLayout(props: RootLayoutProps) {
    const { children } = props;

    return (
        <AppDecorator>
            <ThemeProvider>
                <StyleDecorator>
                    <AppLayout>
                        {children}
                    </AppLayout>
                </StyleDecorator>
            </ThemeProvider>
        </AppDecorator>
    );
}
