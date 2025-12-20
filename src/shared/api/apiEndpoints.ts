enum ApiRoutes {
    MAIN = 'global?pLevel',

    PAGE_ABOUT = '/about',
    PAGE_MEMBER_INFO = '/info-member',

    REGISTRATION_FORM = '/auth/local/register',
    LOGIN_FORM = '/auth/local',
    USER_INFO = '/users/me',
    CASE_LIST = '/cases',
    TEAM_LIST = '/teams',
    USER_LIST = '/users',
    CHANGE_PASSWORD = '/auth/change-password',

    TEAM_APPLICATION = '/team-applications',
    TEAM_SUBMISSION = '/team-submissions',
    EXPERT_LIST = '/experts',
    EXPERT_BULK_CREATE = '/experts/bulk-create',
    EXPERT_BULK_CREATE_SIMPLE = '/experts/bulk-create-simple',
    EXPERT_APPLICATION = '/expert-applications',
}

export {
    ApiRoutes,
};
