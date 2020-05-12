const SERVICE_URL = 'http://127.0.0.1';
const SERVICE_PORT = '8080';
const SERVICE_RESOURCES = {
    users: 'users',
    posts: 'posts',
    comments: 'comments'
};

const actionTypes = {
    toggleSideBarMode: 'SIDE_BAR_MODE_TOGGLED',
    toggleUserDropDownMenu: 'USER_DROP_DOWN_MENU_TOGGLED',
    doNotShowUserDropDownMenu: 'USER_DROP_DOWN_MENU_OFF',
};

const sideBarModes = {
    sm: 'SIDE_BAR_SMALL',
    lg: 'SIDE_BAR_LARGE',
};

export { SERVICE_URL, SERVICE_PORT,   SERVICE_RESOURCES, actionTypes, sideBarModes };