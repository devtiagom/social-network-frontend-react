import React, { useState, useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { FaUser } from 'react-icons/fa';
import axios from 'axios';

import './style.css';
import { DynamicSideBarLayout } from '../../layouts';
import { doNotShowUserDropDownMenu } from '../../template/header/headerActions';
import { SERVICE_URL, SERVICE_PORT, SERVICE_RESOURCES } from '../../globalDefinitions';
import PageHeader from '../../components/page-header';
import UserCard from '../../components/user-card';
import AboutMe from '../../components/about-me-card';
import Post from '../../components/post';

const AUTHENTICATED_USER_ID = 3;    // Provisório

const Profile = props => {
    useEffect(() => {
        props.doNotShowUserDropDownMenu();
        getUserInfo();
        getUserPosts();       
    }, []);

    const [userInfo, setUserInfo] = useState('');

    const [userPosts, setUserPosts] = useState([]);

    const getUserInfo = () => {
        const urlRequest = SERVICE_URL.concat(
            ':', SERVICE_PORT,
            '/', SERVICE_RESOURCES.users,
            '/', AUTHENTICATED_USER_ID
        );
        axios.get(urlRequest).then(response => setUserInfo(response.data));
    }

    const getUserPosts = () => {
        const urlRequest = SERVICE_URL.concat(
            ':', SERVICE_PORT,
            '/', SERVICE_RESOURCES.users,
            '/', AUTHENTICATED_USER_ID,
            '/', SERVICE_RESOURCES.posts
        );
        axios.get(urlRequest).then(response => setUserPosts(response.data.content));
    }

    const renderUserPosts = () => (
        userPosts.map(userPost => (
            <Post
                key={userPost.id}
                date={userPost.date}
                title={userPost.title}
                author={userPost.authorName}
                content={userPost.content}
                likes={userPost.likes}
                dislikes={userPost.dislikes}
            />
        ))
    );

    return (
        <DynamicSideBarLayout>
            <div className="profile">
                <PageHeader icon={FaUser} title="Seu Perfil" />
                <div className="profile-content">
                    <div className="user-info">
                        <UserCard user={userInfo} />
                        <AboutMe />
                    </div>
                    <div className="user-activities">{renderUserPosts()}</div>
                </div>
            </div>
        </DynamicSideBarLayout>
    );
}

const mapDispatchToProps = dispatch => bindActionCreators({ doNotShowUserDropDownMenu }, dispatch);

export default connect(null, mapDispatchToProps)(Profile);
