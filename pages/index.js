import Fetch from 'isomorphic-unfetch';

import Layout from '../components/layout';
import Price from '../components/price';


const Index = (props) => (
    <Layout>
        <ol class="mt-2 breadcrumb">
            <li class="breadcrumb-item active">Home</li>
        </ol>
        <div className = "text-center pt-3">
            <h3>Bitcoin Prices</h3>
        </div>
        <h4>{props.time}</h4>
        <Price bpi = {props.bpi}/>
    </Layout>
)

Index.getInitialProps = async () => {
    const res = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
    const data = await res.json();

    return {
        time: data.time.updated,
        bpi: data.bpi
    }
}

export default Index