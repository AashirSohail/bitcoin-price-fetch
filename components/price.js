
class Price extends React.Component {
    state = {
        currency: 'USD'
    }
    render() {

        let list = '';
        if (this.state.currency === 'USD') {
            list = <li className="list-group-item">
                Bitcoin Rate for {this.props.bpi.USD.description} : <span className="badge badge-warning">{this.props.bpi.USD.rate}</span>
            </li>
        }
        else if (this.state.currency === 'GBP') {
            list =  <li className="list-group-item">
            Bitcoin Rate for {this.props.bpi.GBP.description} : <span className="badge badge-warning">{this.props.bpi.GBP.rate}</span>
        </li>
        }
        else if (this.state.currency === 'EUR') {
            list = <li className="list-group-item">
            Bitcoin Rate for {this.props.bpi.EUR.description} : <span className="badge badge-warning">{this.props.bpi.EUR.rate}</span>
        </li>
        }


        return (
            <div>
                <h3><strong>Current Prices</strong></h3>
                <div className="form-group" onChange={(e) =>{this.setState({currency: e.target.value})}}>
                    <select className="custom-select">
                        <option selected="">Open this select menu</option>
                        <option value="USD">USD</option>
                        <option value="GBP">GBP</option>
                        <option value="EUR">EUR</option>
                    </select>
                </div>

                <ul className="list-group">
                    {list}
                </ul>
            </div>
        )
    }
}

export default Price