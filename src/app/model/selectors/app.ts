import { StateSchema } from 'shared/state/StateSchema';

const getAppModal = (state: StateSchema) => state?.app?.modalOpen;
const getAppSidebarMode = (state: StateSchema) => state?.app?.sidebarOpen;

export {
    getAppModal,
    getAppSidebarMode,
}
