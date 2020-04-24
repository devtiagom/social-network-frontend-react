import React from 'react';
import { FaUser } from 'react-icons/fa';

import './style.css';
import { DynamicSideBarLayout } from '../../layouts';
import PageHeader from '../../components/page-header';

export default props => (
    <DynamicSideBarLayout>
        <div className="profile">
            <PageHeader icon={FaUser} title="Seu Perfil" />
        </div>
    </DynamicSideBarLayout>
);