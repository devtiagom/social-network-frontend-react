import React from 'react';

import './style.css';
import { DynamicSideBarLayout } from '../../layouts';
import PageHeader from '../../compoents/page-header';

export default props => (
    <DynamicSideBarLayout>
        <div className="home">
            <PageHeader icon="home" title="Início" />
        </div>
    </DynamicSideBarLayout>
);