import * as React from 'react';
import GetStarted from '../components/GetStarted';
import Layout from '../components/Layout';
import PageHeader from '../components/PageHeader';
import Seo from "../components/seo"

const StartedPage = () => {
    return(
        <Layout>
            <Seo></Seo>
            <PageHeader pageTitle='Get Started' pageText='Heres everything you need to get started' emoji='🚀'/>
            <GetStarted/>
        </Layout>
    )
}

export default StartedPage