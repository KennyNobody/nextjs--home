import 'shared/styles/index.scss';
import { ReactNode } from 'react';
import { fontRegular, fontAccent } from '../config/fonts';

interface AppDecoratorProps {
    children: ReactNode;
}

export const AppDecorator = (props: AppDecoratorProps) => {
    const {
        children,
    } = props;

    return (
        <html lang="ru" data-theme="light" suppressHydrationWarning>
            <body className={`${fontRegular.variable} ${fontAccent.variable}`}>
                {children}
            </body>
        </html>
    );
};
