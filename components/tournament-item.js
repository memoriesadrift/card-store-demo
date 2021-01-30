import React, { Component } from 'react';
import '../node_modules/uikit/dist/css/uikit.css'
import 'uikit'

class TournamentItem extends Component {
    constructor(props) {
        super(props);
    }


    render() { 
        return (
            <div class="uk-card uk-card-default uk-margin uk-text-center">
                <div>
                    <div class="uk-card-body">
                        <h3 class="uk-card-title"> We are hosting a {this.props.tournamentData.format} Tournament!</h3>
                        <p>
                            Tournament No. {this.props.tournamentData.registryno}. <br></br>
                            Prize Support: {this.props.tournamentData.amount}€ distributed between the top {this.props.tournamentData.distribution} players.<br></br>
                            <a class="uk-button uk-button-text" href={this.props.tournamentData.href}>Click Here to Edit This Tournament</a>
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default TournamentItem;


