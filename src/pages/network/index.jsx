import React from 'react';
import { FaUsers } from 'react-icons/fa';

import './style.css';
import { DynamicSideBarLayout } from '../../layouts';
import PageHeader from '../../components/page-header';

export default props => (
    <DynamicSideBarLayout>
        <div className="messages">
            <PageHeader icon={FaUsers} title="Sua Rede" />
        </div>
    </DynamicSideBarLayout>
);