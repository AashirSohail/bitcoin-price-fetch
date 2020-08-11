import Layout from '../components/layout';

const About = () => (
    <Layout>
        <ol className="mt-2 breadcrumb">
            <li className="breadcrumb-item active">About</li>
        </ol>

        <div className="jumbotron">
            <h1 className="display-3">Hello, Folks!</h1>
            <p className="lead">This is a simple Next.js application. It feches the Coinbase API and display results for the Bitcoin current price.</p>
            <hr className="my-4"/>
                <p>For Styling i used Bootswatch using a CDN in the Head tag so that is a cool feture that comes real handy.</p>
                <p className="lead">
                    <a className="btn btn-primary btn-lg" role="button">Learn more</a>
                </p>
        </div>
    </Layout>
)

export default About