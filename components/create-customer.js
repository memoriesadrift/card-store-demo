import '../node_modules/uikit/dist/css/uikit.css'
import 'uikit'
import React, { Component } from 'react';

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

class CreateCustomer extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            customerName: "",
            email: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    
    async handleSubmit(event) {
        event.preventDefault();
        if(validateEmail(this.state.email) === false) {
            alert('Invalid Email Address!');
            return false;
        }
        let apiUri = "http://wwwlab.cs.univie.ac.at/~sulovskys00/api/createCustomer.php?name=" + this.state.customerName + "&email=" + this.state.email;
        console.log("Contacting API at: ", apiUri)
        await fetch(apiUri).then(res => console.log(res)).then(alert('Created Customer! You can find it at the end of the customers page.')).then(window.location.href = "/customers");
    }

    handleInputChange(event) { 
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        })
    }

    render() { 
        return (
            <div class="uk-card uk-card-default uk-margin uk-text-center">
                <div>
                    <div class="uk-card-body">
                        <h3 class="uk-card-title"> New Customer</h3>
                        <p>A DCI No will be automatically assigned by us. </p>
                        <form class="uk-form-stacked" onSubmit={this.handleSubmit}>
                            <div class="uk-margin">
                                <label class="uk-form-label" for="form-stacked-text">Name</label>
                                <div class="uk-form-controls">
                                    <input class="uk-input" id="form-stacked-text" type="text" name="customerName" onChange={this.handleInputChange} placeholder="Loading..." value={this.state.customerName}></input>
                                </div>
                            </div>
                            
                            <div class="uk-margin">
                                <label class="uk-form-label" for="form-stacked-text">E-Mail</label>
                                <div class="uk-form-controls">
                                    <input class="uk-input" id="form-stacked-text" name="email" type="text" onChange={this.handleInputChange} placeholder="Loading..." value={this.state.email}></input>
                                </div>
                            </div>

                            <div class="uk-margin"> 
                                <input class="uk-input uk-width-auto@s uk-text-center" type="submit" value="Create" />
                            </div>
                        </form>


                    </div>
                </div>
            </div>
        );
    }
}
 
export default CreateCustomer;