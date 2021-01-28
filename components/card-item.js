import React, { Component } from 'react';
import '../node_modules/uikit/dist/css/uikit.css'
import '../node_modules/uikit/dist/js/uikit'

class CardItem extends Component {
    state = {
        uri: "",
        card: {
            idno: 0,
            edition: "",
            condition: "",
            name: "",
            isinorder: ""
        }
    }

    async componentDidUpdate() {
        const stateData = this.props.cardData;
        //this.setState(stateData);
        this.setState({uri: this.props.cardData.uri})
    }

    render() { 
        return (
            <div class="uk-card uk-card-default uk-grid-collapse uk-margin" uk-grid="">
                <div class="uk-card-media-right uk-cover-container uk-margin-left uk-margin-right uk-margin-top uk-margin-bottom">
                    <canvas width="244" height="340"></canvas>
                    <img data-src={this.state.uri} alt="" uk-cover="" uk-img=""></img>
                </div>
                <div>
                    <div class="uk-card-body">
                        <h3 class="uk-card-title">{this.state.card.name}</h3>
                        <p>{this.state.card.edition} — {this.state.card.condition} <br></br> Contact us for a price offer!</p>
                        <p class="text-tiny">Internal information: ID: {this.state.card.idno}, In Order: {this.state.card.isinorder}</p>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default CardItem;


