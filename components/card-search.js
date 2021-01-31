
import React, { Component } from 'react';
import '../node_modules/uikit/dist/css/uikit.css'
import CardItem from './card-item';

async function getCardData(_name) {
    let cards = [];
    let fetchUri = "http://wwwlab.cs.univie.ac.at/~sulovskys00/api/getCard.php?name=" + _name + "%";
    //console.log("Fetching card data from: ", fetchUri);
    let data = await fetch(fetchUri).then(response => response.json());

    let dataArray = Object.values(data);
    dataArray = dataArray[0]; 
    for (const element of dataArray) {
        //console.log(element)
        let apiUrl = "https://api.scryfall.com/cards/named?exact=" + element.NAME.replace(/\s/g, '+').replace('\'', ''); 
        //console.log("Fetching card image from: ", apiUrl)
        let imgData = await fetch(apiUrl).then(response => response.json())
        let order = element.ISINORDER === undefined ? "No" : element.ISINORDER;
        let imgUri = imgData.image_uris === undefined ? imgData.card_faces[0].image_uris.normal : imgData.image_uris.normal;
        fetchUri = "http://wwwlab.cs.univie.ac.at/~sulovskys00/api/getFoilCard.php?id=" + element.IDNO;
        let foilData = await fetch(fetchUri).then(response => response.json());
        let foiling = "";
        let curling = "";
        if(foilData === false) {
            foiling = "Not Foil";
            curling = "N/A";
        } else {
            foiling = "Foil";
            curling = foilData.CURLING;
        }
        cards.push( {
            uri: imgUri,
            card: {
                idno: element.IDNO,
                edition: element.EDITION,
                condition: element.CONDITION,
                name: element.NAME,
                isinorder: order,
                foil: foiling,
                curling: curling
            }})
    };

    return cards;
}

class CardSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchText: "",
            cardData: []
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async handleSubmit(event) {
        event.preventDefault();
        await this.updateCardData(this.state.searchText);
        event.preventDefault();
    }

    handleChange(event) { this.setState({searchText: event.target.value});}
    
    async updateCardData(_query) {
        let cardDataNew = await getCardData(_query);
        this.setState( {cardData : cardDataNew} );
    }
    
    render() { 
        return(
            <div>
                <form class="uk-text-center uk-form-stacked" onSubmit={this.handleSubmit} onChange={this.handleChange}>
                    <div class="uk-margin uk-text-center">
                        <label class="uk-form-label" for="form-stacked-text">Search for cards in our inventory</label>
                        <input class="uk-input uk-form-width-large" type="text" placeholder="Enter card name"></input>
                    </div>
                <input type="submit" value="Submit" class="uk-button uk-button-default"></input>
                </form>

                <h4 class="uk-text-center">Search Result:</h4>
                <div class="uk-child-width-1-2@s uk-text-center" uk-grid="">
                    {this.state.cardData.map(({uri, card}, idx) => <div> <CardItem key={idx} uri={uri} cardData={card} /> </div>)}
                </div>
            </div>
            
        );
    }
}
 
export default CardSearch;