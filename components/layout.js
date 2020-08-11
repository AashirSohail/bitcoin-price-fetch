import Head from 'next/head';
import Navbar from './navbar';

const Layout = (props) => (
    <div>
        <Head>
            <title>Bitcoin Price</title>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootswatch/4.5.2/sandstone/bootstrap.min.css" integrity="sha384-zEpdAL7W11eTKeoBJK1g79kgl9qjP7g84KfK3AZsuonx38n8ad+f5ZgXtoSDxPOh" crossorigin="anonymous" />
        </Head>
        <Navbar />
        <div className = "container">
            {props.children}    
        </div>
    </div>
);

export default Layout