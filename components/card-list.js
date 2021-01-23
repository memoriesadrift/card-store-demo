
import React, { Component } from 'react';
import '../node_modules/uikit/dist/css/uikit.css'
import CardItem from './card-item';

class CardList extends Component {
    constructor(props) {
        super(props);
        this.nextPage = this.nextPage.bind(this);
    }
    state = {
        page: 0
    }
    
   nextPage() {
       console.log("nextPage() called!");
       this.setState(state => ({ page: state.page+10 }));
    }

    render() { 
        return(
            <div>
                <div class="uk-child-width-expand@s uk-text-center" uk-grid="">
                    <div>
                        <CardItem cardId={this.state.page+1}></CardItem>
                    </div>
                    <div>
                        <CardItem cardId={this.state.page+2}></CardItem>
                    </div>
                </div>

                <div class="uk-child-width-expand@s uk-text-center" uk-grid="">
                    <div>
                        <CardItem cardId={this.state.page+3}></CardItem>
                    </div>
                    <div>
                        <CardItem cardId={this.state.page+4}></CardItem>
                    </div>
                </div>

                <div class="uk-child-width-expand@s uk-text-center" uk-grid="">
                    <div>
                        <CardItem cardId={this.state.page+5}></CardItem>
                    </div>
                    <div>
                        <CardItem cardId={this.state.page+6}></CardItem>
                    </div>
                </div>

                <div class="uk-child-width-expand@s uk-text-center" uk-grid="">
                    <div>
                        <CardItem cardId={this.state.page+7}></CardItem>
                    </div>
                    <div>
                        <CardItem cardId={this.state.page+8}></CardItem>
                    </div>
                </div>

                <div class="uk-child-width-expand@s uk-text-center" uk-grid="">
                    <div>
                        <CardItem cardId={this.state.page+9}></CardItem>
                    </div>
                    <div>
                        <CardItem cardId={this.state.page+10}></CardItem>
                    </div>
                </div>
                <button class="uk-button uk-button-default uk-button-large" onClick={this.nextPage}>Next Page</button>
            </div>
            
        );
    }
}
 
export default CardList;