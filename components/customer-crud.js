import '../node_modules/uikit/dist/css/uikit.css'
import 'uikit'
import React, { Component } from 'react';

async function getCustomerData(_dcino) {
    let fetchUri = "http://wwwlab.cs.univie.ac.at/~sulovskys00/api/getCustomer.php?dci=" + _dcino; 
    //console.log("calling fetch with uri: ", fetchUri);
    let customerData = await fetch(fetchUri).then(response => response.json());
    //console.log(customerData);
    return {
        name: customerData.NAME,
        dcino: customerData.DCINO,
        email: customerData.EMAIL
    }
}

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

class CustomerCrud extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            customerName: "",
            cachedDcino: "",
            dcino: "",
            email: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.deleteCustomer = this.deleteCustomer.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    
    async handleSubmit(event) {
        event.preventDefault();
        if(validateEmail(this.state.email) === false) {
            alert('Invalid Email Address!');
            return false;
        }
        let apiUri = 'http://wwwlab.cs.univie.ac.at/~sulovskys00/api/updateCustomer.php?oldno=' + this.state.cachedDcino + "&newno=" + this.state.dcino + "&name=" + this.state.customerName + "&email=" + this.state.email;
        //console.log("Contacting API at: ", apiUri)
        await fetch(apiUri).then(alert('Updated Customer ' + this.state.dcino + ' !'));
        this.setState((state) => { return {cachedDcino: state.dcino}})
    }

    async deleteCustomer() {
        //console.log("deleteCustomer() called!");
        let apiUri = 'http://wwwlab.cs.univie.ac.at/~sulovskys00/api/deleteCustomer.php?dcino=' + this.state.cachedDcino;
        await fetch(apiUri).then(alert('Deleted Customer ' + this.state.cachedDcino + ' !')).then(window.location.href = "../../customers");
    }

    handleInputChange(event) { 
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        })
    }

    async componentDidMount() {
        let customerData = await getCustomerData(this.props.dcino);
        this.setState({
            customerName: customerData.name,
            dcino: customerData.dcino,
            cachedDcino: customerData.dcino,
            email: customerData.email
        })
    }

    render() { 
        return (
            <div class="uk-card uk-card-default uk-margin uk-text-center">
                <div>
                    <div class="uk-card-body">
                        <h3 class="uk-card-title"> Customer Profile for Customer with DCINO: {this.state.cachedDcino} </h3>
                        <form class="uk-form-stacked" onSubmit={this.handleSubmit}>
                            <div class="uk-margin">
                                <label class="uk-form-label" for="form-stacked-text">Name</label>
                                <div class="uk-form-controls">
                                    <input class="uk-input" id="form-stacked-text" type="text" name="customerName" onChange={this.handleInputChange} placeholder="Loading..." value={this.state.customerName}></input>
                                </div>
                            </div>

                            <div class="uk-margin">
                                <label class="uk-form-label" for="form-stacked-text">DCI No.</label>
                                <div class="uk-form-controls">
                                    <input class="uk-input" id="form-stacked-text" type="number" name="dcino" onChange={this.handleInputChange} placeholder="Loading..." value={this.state.dcino}></input>
                                </div>
                            </div>
                            
                            <div class="uk-margin">
                                <label class="uk-form-label" for="form-stacked-text">E-Mail</label>
                                <div class="uk-form-controls">
                                    <input class="uk-input" id="form-stacked-text" name="email" type="text" onChange={this.handleInputChange} placeholder="Loading..." value={this.state.email}></input>
                                </div>
                            </div>

                            <div class="uk-margin"> 
                                <input class="uk-input uk-width-auto@s uk-text-center" type="submit" value="Update" />
                            </div>
                        </form>

                        <button class="uk-button uk-button-danger uk-button-large" onClick={this.deleteCustomer}>Delete This Customer</button>  

                    </div>
                </div>
            </div>
        );
    }
}
 
export default CustomerCrud;