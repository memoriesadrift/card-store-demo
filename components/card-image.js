import React, { Component } from 'react';
import '../node_modules/uikit/dist/css/uikit.css'

async function getImageUri(_name) {
    if(_name === '_rand') {
        let numRows = await fetch("http://wwwlab.cs.univie.ac.at/~sulovskys00/api/getCards.php").then(response => response.json());
        numRows = numRows.cards.length;
        let idno = Math.floor(Math.random() * numRows) + 1;
        console.log(idno)
        let nameFetchUri = "http://wwwlab.cs.univie.ac.at/~sulovskys00/api/getCard.php?id=" + idno ;
        console.log(nameFetchUri);
        let nameData = await fetch(nameFetchUri).then(response => response.json());
        console.log(nameData)
        _name = nameData.NAME;
    }
    let apiUrl = "https://api.scryfall.com/cards/named?exact=" + _name.replace(/\s/g, '+'); 
    console.log("Fetching card image from: ", apiUrl)
    const data = await fetch(apiUrl).then(response => response.json())
    let imgUri = data.image_uris === undefined ? data.card_faces[0].image_uris.normal : data.image_uris.normal;
    return imgUri;
}

class CardImage extends Component {
    state = {
        uri: ""
    }

    async componentDidMount() {
        const imguri = await getImageUri(this.props.cardName);
        this.setState({uri: imguri});
    }

    render() { 
        return (<img class="card-image uk-animation-kenburns uk-padding-remove" src={this.state.uri} uk-img></img>);
    }
}
 
export default CardImage;