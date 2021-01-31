import React, { Component } from 'react';
import Link from 'next/link'
import '../node_modules/uikit/dist/css/uikit.css'
import 'uikit'

class CustomerItem extends Component {
    constructor(props) {
        super(props);
    }

    render() { 
        return (
            <div class="uk-card uk-card-default uk-margin uk-text-center">
                <div>
                    <div class="uk-card-body">
                        <h3 class="uk-card-title"> {this.props.customerData.name} </h3>
                        <p>
                            DCI Number: {this.props.customerData.dcino}<br></br>
                            E-Mail: {this.props.customerData.email}<br></br>
                            <Link href={this.props.customerData.href}><a class="uk-button uk-button-text">Click Here to Edit This Customer</a></Link>
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default CustomerItem;


