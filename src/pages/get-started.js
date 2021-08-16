import * as React from 'react';
import GetStarted from '../components/GetStarted';
import Layout from '../components/Layout';
import PageHeader from '../components/PageHeader';

const StartedPage = () => {
    return(
        <Layout>
            <PageHeader pageTitle='Get Started' pageText='Heres everything you need to get started' emoji='🚀'/>
            <GetStarted/>
        </Layout>
    )
}

export default StartedPage