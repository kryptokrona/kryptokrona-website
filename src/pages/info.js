import * as React from 'react';
import PageHeader from '../components/PageHeader';
import Layout from '../components/Layout';
import Seo from "../components/seo"

const InfoPage = () => {
    return(
        <Layout>
            <Seo></Seo>
            <PageHeader pageTitle='Information' pageText='So you want to know more?' emoji='📚' />
        </Layout>
    )
}

export default InfoPage