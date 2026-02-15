import { ReactNode } from 'react';
import { ThemeProvider } from 'next-themes';
import { AppLayout } from 'app/components/AppLayout/AppLayout';
import { ProjectMode } from '../../config/types/types';
import { AppDecorator } from '../shared/providers/AppDecorator';
import { StyleDecorator } from '../shared/providers/StyleDecorator/StyleDecorator';

interface RootLayoutProps {
    children: ReactNode;
}

export default function RootLayout(props: RootLayoutProps) {
    const { children } = props;

    return (
        <AppDecorator mode={ProjectMode.FRONTEND}>
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
