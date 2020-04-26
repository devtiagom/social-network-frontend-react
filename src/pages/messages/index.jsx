import React from 'react';
import { FaEnvelope } from 'react-icons/fa';

import './style.css';
import { DynamicSideBarLayout } from '../../layouts';
import PageHeader from '../../components/page-header';

export default props => (
    <DynamicSideBarLayout>
        <div className="messages">
            <PageHeader icon={FaEnvelope} title="Suas Mensagens" />
        </div>
    </DynamicSideBarLayout>
);