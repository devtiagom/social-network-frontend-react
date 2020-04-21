import React from 'react';

import './style.css';
import { DynamicSideBarLayout } from '../../layouts';
import PageHeader from '../../compoents/page-header';

export default props => (
    <DynamicSideBarLayout>
        <div className="profile">
            <PageHeader icon="user" title="Seu Perfil" />
        </div>
    </DynamicSideBarLayout>
);