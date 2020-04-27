import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { FaHome, FaUsers, FaEnvelope, FaUser } from 'react-icons/fa';

import './style.css';
import HeaderMenuList from '../../components/top-bar-menu/header-menu-list';
import HeaderMenuItem from '../../components/top-bar-menu/header-menu-item';
import { toggleSideBarMode } from '../side-bar/sideBarActions';
import { sideBarModes } from '../../globalDefinitions';

const Header = props => (
	<header className={`header ${props.sideBarMode === sideBarModes.lg ? 'header-sm' : 'header-lg'}`}>
		<HeaderMenuList sideBarMode={props.sideBarMode} toggleSideBarMode={props.toggleSideBarMode}>
			<HeaderMenuItem type="icon-link"	icon={FaHome}     path="/"         	/>
			<HeaderMenuItem type="icon-link"  icon={FaUsers}    path="/network"  	/>
			<HeaderMenuItem type="icon-link"  icon={FaEnvelope}	path="/messages"	/>
			<HeaderMenuItem type="icon-link"  icon={FaUser}     path="/profile"  	/>
		</HeaderMenuList>
	</header>
);

const mapStateToProps = state => ({ sideBarMode: state.sideBar.sideBarMode });
const mapDispatchToProps = dispatch => bindActionCreators({ toggleSideBarMode }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Header);