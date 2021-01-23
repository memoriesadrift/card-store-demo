import React, { Component } from 'react';
import '../node_modules/uikit/dist/css/uikit.css'
import '../node_modules/uikit/dist/js/uikit'

async function getCardData(_id) {
    let fetchUri = "http://wwwlab.cs.univie.ac.at/~sulovskys00/api/getCard.php?id=" + _id;
    console.log("Fetching card data from: ", fetchUri);
    let data = await fetch(fetchUri).then(response => response.json());
    let apiUrl = "https://api.scryfall.com/cards/named?exact=" + data.NAME.replace(/\s/g, '+').replace('\'', ''); 
    console.log("Fetching card image from: ", apiUrl)
    const imgData = await fetch(apiUrl).then(response => response.json())
    let order = data.ISINORDER === undefined ? "No" : data.ISINORDER;
    return {
        uri: imgData.image_uris.normal,
        card: {
            idno: data.IDNO,
            edition: data.EDITION,
            condition: data.CONDITION,
            name: data.NAME,
            isinorder: order
        }
    };
}

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

    async componentDidMount() {
        const stateData = await getCardData(this.props.cardId);
        this.setState(stateData);
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


