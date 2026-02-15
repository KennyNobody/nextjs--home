import 'shared/styles/index.scss';
import { ReactNode } from 'react';
import { fontInter } from '../next-fonts/fontInter';
import { ProjectMode } from '../../../config/types/types';

interface AppDecoratorProps {
    mode: ProjectMode;
    children: ReactNode;
}

export const AppDecorator = (props: AppDecoratorProps) => {
    const {
        mode,
        children,
    } = props;

    if (mode === ProjectMode.STORYBOOK) {
        return (
            <div className={fontInter.className}>
                {children}
            </div>
        );
    }

    return (
        <html lang="ru" data-theme="light" suppressHydrationWarning>
            <body className={fontInter.variable}>
                {children}
            </body>
        </html>
    );
};
