
import React, { Component } from 'react';
import '../node_modules/uikit/dist/css/uikit.css'
import CardItem from './card-item';

async function getCardData() {
    let cards = [];
    let fetchUri = "http://wwwlab.cs.univie.ac.at/~sulovskys00/api/getCards.php?type=alpha";
    console.log("Fetching card data from: ", fetchUri);
    let data = await fetch(fetchUri).then(response => response.json());

    let dataArray = Object.values(data);
    dataArray = dataArray[0]; 
    for (const element of dataArray) {
        console.log(element)
        let apiUrl = "https://api.scryfall.com/cards/named?exact=" + element.NAME.replace(/\s/g, '+').replace('\'', ''); 
        console.log("Fetching card image from: ", apiUrl)
        let imgData = await fetch(apiUrl).then(response => response.json())
        let order = element.ISINORDER === undefined ? "No" : element.ISINORDER;
        let imgUri = imgData.image_uris === undefined ? imgData.card_faces[0].image_uris.normal : imgData.image_uris.normal;
        cards.push( {
            uri: imgUri,
            card: {
                idno: element.IDNO,
                edition: element.EDITION,
                condition: element.CONDITION,
                name: element.NAME,
                isinorder: order
            }})
    };

    return cards;
}

class AlphaList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 0,
            lastPage: 0,
            pageDialog: 0,
            cardData: []
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

   nextPage = async() => {
       console.log("nextPage() called!");
       await this.updateCardData(this.state.page+10);
       this.setState(state => ({ page: state.page+10 }));
    }

   prevPage = async() => {
       console.log("prevPage() called!");
       if(this.state.page < 10) {
           alert('On first page!');
           return
       }
       await this.updateCardData(this.state.page-10);
       this.setState(state => ({ page: state.page-10 }));
    }

   setPage = async(_pno) => {
       let pageNum = (_pno-1)*10;
       await this.updateCardData(pageNum);
       this.setState({ page: pageNum });
    }

    async handleSubmit(event) {
        event.preventDefault();
        if(this.state.pageDialog < 1 || this.state.pageDialog > this.state.lastPage) {
            alert('Invalid page number. Maximum: ' + this.state.lastPage)
            return;
        }
        await this.setPage(this.state.pageDialog);
        event.preventDefault();
    }
    handleChange(event) { this.setState({pageDialog: event.target.value});}
    
    async updateCardData(_start) {
        let cardDataNew = await getCardData();
        this.setState( {cardData : cardDataNew} );
    }

    async componentDidMount(){
        let numRows = await fetch("http://wwwlab.cs.univie.ac.at/~sulovskys00/api/getCards.php?type=p9").then(response => response.json());
        numRows = Math.ceil((numRows.cards.length)/10);
        this.setState({lastPage: numRows})
        await this.updateCardData(this.state.page);
    }
    
    render() { 
        return(
            <div>
                <div class="uk-child-width-1-2@s uk-text-center" uk-grid="">
                    {this.state.cardData.map(({uri, card}, idx) => <div> <CardItem key={idx} uri={uri} cardData={card} /> </div>)}
                </div>
            </div>
            
        );
    }
}
 
export default AlphaList;