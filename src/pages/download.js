import * as React from 'react';
import Layout from '../components/Layout';
import PageHeader from '../components/PageHeader';
import Seo from "../components/seo"
import DownloadInfo from '../components/DownloadInfo';

const DownloadPage = () => {
    return(
        <Layout>
            <Seo></Seo>
            <PageHeader pageTitle='Downloads' pageText='Download and run' emoji='📡'/>
            <DownloadInfo />
        </Layout>
    )
}

export default DownloadPage