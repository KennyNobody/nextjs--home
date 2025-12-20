import 'reset-css';
import 'shared/styles/index.scss';
import { ReactNode } from 'react';
import StoreProvider from 'shared/state/StoreProvider';
import { robotoFont } from 'shared/next-fonts/robotoFont';
import { PageWrapper } from 'shared/ui/PageWrapper/PageWrapper';
import { Header } from 'widgets/Header';
import { Footer } from 'widgets/Footer';

interface RootLayoutProps {
    children: ReactNode;
}

export default function RootLayout(props: RootLayoutProps) {
    const { children } = props;

    return (
        <html lang="ru">
            <body className={`${robotoFont.variable}`}>
                <StoreProvider>
                    <PageWrapper>
                        <Header />
                        {children}
                        <Footer />
                    </PageWrapper>
                </StoreProvider>
            </body>
        </html>
    );
}
