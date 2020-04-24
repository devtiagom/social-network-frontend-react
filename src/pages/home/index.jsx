import React from 'react';
import { FaHome } from 'react-icons/fa';

import './style.css';
import { DynamicSideBarLayout } from '../../layouts';
import PageHeader from '../../components/page-header';

export default props => (
    <DynamicSideBarLayout>
        <div className="home">
            <PageHeader icon={FaHome} title="Início" />
        </div>
    </DynamicSideBarLayout>
);