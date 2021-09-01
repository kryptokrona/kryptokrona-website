import * as React from 'react';
import Layout from '../components/Layout';
import PageHeader from '../components/PageHeader';
import LandingHugin from '../components/LandingHugin';
import Seo from "../components/seo"

const HuginPage = () => {
    return(
        <Layout>
            <Seo></Seo>
            <PageHeader pageTitle='Hugin Messenger' pageText='This is our messenger' emoji='🔥' />
            <LandingHugin />
        </Layout>
    )
}

export default HuginPage