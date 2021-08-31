import * as React from 'react';
import Layout from '../components/Layout';
import PageHeader from '../components/PageHeader';
import HuginIntro from '../components/hugin/Introduction';
import HuginDownload from '../components/hugin/Download';
import HuginTutorial from '../components/hugin/Tutorial';
import HuginGetAddress from '../components/hugin/GetAddress';

const HuginPage = () => {
    return(
        <Layout>
            <PageHeader pageTitle='Hugin Messenger' pageText='This is our messenger' emoji='🔥' />
            <div className='hugin-structure'>                    
            <HuginIntro></HuginIntro>
            <HuginDownload></HuginDownload>
            </div>
            <div className='hugin-structure'>
            <HuginTutorial></HuginTutorial>
            <HuginGetAddress></HuginGetAddress>
            </div>
        </Layout>
    )
}

export default HuginPage