import 'shared/styles/index.scss';
import { ReactNode } from 'react';
import { fontInter } from '../next-fonts/fontInter';

interface AppDecoratorProps {
    children: ReactNode;
}

export const AppDecorator = (props: AppDecoratorProps) => {
    const {
        children,
    } = props;

    return (
        <html lang="ru" data-theme="light" suppressHydrationWarning>
            <body className={fontInter.variable}>
                {children}
            </body>
        </html>
    );
};
