import * as React from 'react';
import Layout from '../components/Layout';
import PageHeader from '../components/PageHeader';
import Seo from "../components/seo"

const DownloadPage = () => {
    return(
        <Layout>
            <Seo></Seo>
            <PageHeader pageTitle='Downloads' pageText='Download and run' emoji='📡'/>
        </Layout>
    )
}

export default DownloadPage