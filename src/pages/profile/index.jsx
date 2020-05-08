import React, { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { FaUser } from 'react-icons/fa';

import './style.css';
import { DynamicSideBarLayout } from '../../layouts';
import { doNotShowUserDropDownMenu } from '../../template/header/headerActions';
import PageHeader from '../../components/page-header';
import UserCard from '../../components/user-card';
import AboutMe from '../../components/about-me-card';
import Post from '../../components/post';

const Profile = props => {
    useEffect(() => {
        props.doNotShowUserDropDownMenu();
    });

    return (
        <DynamicSideBarLayout>
            <div className="profile">
                <PageHeader icon={FaUser} title="Seu Perfil" />
                <div className="profile-content">
                    <div className="user-info">
                        <UserCard />
                        <AboutMe />
                    </div>
                    <div className="user-activities">
                        <Post />
                        <Post />
                        {/* <Post /> */}
                    </div>
                </div>
            </div>
        </DynamicSideBarLayout>
    );
}

const mapDispatchToProps = dispatch => bindActionCreators({ doNotShowUserDropDownMenu }, dispatch);

export default connect(null, mapDispatchToProps)(Profile);
