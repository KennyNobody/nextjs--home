import classNames from 'classnames';
import { ReactNode } from 'react';
import {
    fetchAppMainServer,
    AppMainResponseType,
} from 'entities/AppMain';
import { Footer } from 'widgets/Footer';
import { Header } from 'widgets/Header';
import cls from './AppLayout.module.scss';
import StoreProvider from 'shared/state/StoreProvider';
import { AppLayoutClient } from '../AppLayoutClient/AppLayoutClient';

interface AppLayoutProps {
    children: ReactNode;
}

export const AppLayout = async (props: AppLayoutProps) => {
    const { children } = props;
    const response: AppMainResponseType = await fetchAppMainServer();

    return (
        <div className={classNames(cls.block)}>
            <StoreProvider>
                <AppLayoutClient data={response}>
                    <Header
                        data={response.data}
                        className={classNames(cls.header)}
                    />
                    { children }
                    <Footer
                        data={response.data}
                        className={classNames(cls.footer)}
                    />
                </AppLayoutClient>
            </StoreProvider>
        </div>
    );
};
