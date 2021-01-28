
import React, { Component } from 'react';
import '../node_modules/uikit/dist/css/uikit.css'
import CardItem from './card-item';

// TODO: Move getCardData() here and pass all the card data as props!
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

class CardList extends Component {
    constructor(props) {
        super(props);
        this.nextPage = this.nextPage.bind(this);
    }

    state = {
        page: 0,
        cardData: [{}]
    }
    
   nextPage() {
       console.log("nextPage() called!");
       this.setState(state => ({ page: state.page+10 }));
    }

    async componentDidMount() {
        let cardDataNew = [];
        console.log(this.state.page)
        for (let i = 1; i < 11; i++) {
            cardDataNew.push(await getCardData(this.state.page+i));
        }
        this.setState( {cardData : cardDataNew} );
    }

    render() { 
        return(
            <div>
                <div class="uk-child-width-expand@s uk-text-center" uk-grid="">
                    <div>
                        <CardItem cardData={this.state.cardData[0]}></CardItem>
                    </div>
                    <div>
                        <CardItem cardData={this.state.cardData[1]}></CardItem>
                    </div>
                </div>

                <div class="uk-child-width-expand@s uk-text-center" uk-grid="">
                    <div>
                        <CardItem cardData={this.state.cardData[3]}></CardItem>
                    </div>
                    <div>
                        <CardItem cardData={this.state.cardData[4]}></CardItem>
                    </div>
                </div>

                <div class="uk-child-width-expand@s uk-text-center" uk-grid="">
                    <div>
                        <CardItem cardData={this.state.cardData[5]}></CardItem>
                    </div>
                    <div>
                        <CardItem cardData={this.state.cardData[6]}></CardItem>
                    </div>
                </div>

                <div class="uk-child-width-expand@s uk-text-center" uk-grid="">
                    <div>
                        <CardItem cardData={this.state.cardData[7]}></CardItem>
                    </div>
                    <div>
                        <CardItem cardData={this.state.cardData[8]}></CardItem>
                    </div>
                </div>

                <div class="uk-child-width-expand@s uk-text-center" uk-grid="">
                    <div>
                        <CardItem cardData={this.state.cardData[9]}></CardItem>
                    </div>
                    <div>
                        <CardItem cardData={this.state.cardData[10]}></CardItem>
                    </div>
                </div>
                <button class="uk-button uk-button-default uk-button-large" onClick={this.nextPage}>Next Page</button>
            </div>
            
        );
    }
}
 
export default CardList;