import React, { Component } from 'react';
import '../node_modules/uikit/dist/css/uikit.css'
import '../node_modules/uikit/dist/js/uikit'

class CardItem extends Component {
    constructor(props) {
        super(props);
    }

    render() { 
        return (
            <div class="uk-card uk-card-default uk-grid-collapse uk-margin" uk-grid="">
                <div class="uk-card-media-right uk-cover-container uk-margin-left uk-margin-right uk-margin-top uk-margin-bottom">
                    <canvas width="244" height="340"></canvas>
                    <img data-src={this.props.uri} alt="" uk-cover="" uk-img=""></img>
                </div>
                <div>
                    <div class="uk-card-body">
                        <h3 class="uk-card-title">{this.props.cardData.name}</h3>
                        <p>{this.props.cardData.edition} — {this.props.cardData.condition} <br></br> {this.props.cardData.foil}, Curling: {this.props.cardData.curling} <br></br>Contact us for a price offer!</p>
                        <p class="text-tiny">Internal information: ID: {this.props.cardData.idno}, In Order: {this.props.cardData.isinorder}</p>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default CardItem;


