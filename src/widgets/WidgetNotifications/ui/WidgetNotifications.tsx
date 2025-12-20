'use client'

// Типы для уведомлений
import { NotificationsStack } from 'features/NotificationsStack';

export interface Notification {
    id: number;
    message: string;
    type: 'error' | 'warning' | 'success';
}

// Компонент стека уведомлений
export const WidgetNotifications = () => {
    return (
        <div className="fixed bottom-4 left-4 z-50 flex flex-col space-y-2 w-80">
            <NotificationsStack />
        </div>
    );
};
