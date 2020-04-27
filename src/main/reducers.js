import { combineReducers } from 'redux';

import sideBarReducer from '../template/side-bar/sideBarReducer';

const rootReducer = combineReducers({
    sideBar: sideBarReducer,
});

export default rootReducer;