import React, { Component } from 'react';
import Link from 'next/link'
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
                            <Link href="../tournament/[regno]" as={`../tournament/${this.props.tournamentData.registryno}`}><a class="uk-button uk-button-text">Click Here to Edit This Tournament</a></Link>
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default TournamentItem;


