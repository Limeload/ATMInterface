import React, {Component} from "react";
import SingleUsers from './SingleUsers';
import ATMRegister from "./ATMRegister";
export default class BankUsers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bankUsers: [],
        }
    }

    componentDidMount() {
        fetch("http://localhost:8080/api/bankUsers")
            .then(response => response.json())
            .then(data => this.setState({bankUsers: data}))
    }

    render(){
        return (
            <div>
                <div className="row">
                    {/*<AddUsers />*/}
                </div>
                <div className="row">
                    {this.state.bankUsers.map((item) => (
                        <SingleUsers key={item.id} item={item} />
                    ))}
                </div>
            </div>
        )
    }
}