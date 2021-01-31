import '../node_modules/uikit/dist/css/uikit.css'
import 'uikit'
import React, { Component } from 'react';

async function getTournamentData(_regno) {
    let fetchUri = "http://wwwlab.cs.univie.ac.at/~sulovskys00/api/getTournament.php?no=" + _regno; 
    //console.log("calling fetch with uri: ", fetchUri);
    let tournamentData = await fetch(fetchUri).then(response => response.json());
    //console.log(tournamentData);
    return {
        registryno: tournamentData.REGISTRYNO,
        format: tournamentData.FORMAT,
    }
}

class TournamentCrud extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            cachedRegistryno: NaN,
            registryno: NaN,
            format: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.deleteTournament = this.deleteTournament.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    
    async handleSubmit(event) {
        event.preventDefault();
        if (this.state.registryno < 1) {
            alert("Registry No. can't be less than 1!");
            return false;
        }
        let apiUri = 'http://wwwlab.cs.univie.ac.at/~sulovskys00/api/updateTournament.php?oldno=' + this.state.cachedRegistryno + "&newno=" + this.state.registryno + "&fmt=" + this.state.format;
        await fetch(apiUri).then(alert('Updated Tournament ' + this.state.registryno + ' !'));
        this.setState((state) => {return {cachedRegistryno: state.registryno}})
    }

    async deleteTournament() {
        //console.log("deleteTournament() called!");
        let apiUri = 'http://wwwlab.cs.univie.ac.at/~sulovskys00/api/deleteTournament.php?no=' + this.state.registryno;
        await fetch(apiUri).then(alert('Deleted Tournament ' + this.state.registryno + ' !')).then(window.location.href = "../../tournaments");
    }

    handleInputChange(event) { 
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        })
    }

    async componentDidMount() {
        let tournamentData = await getTournamentData(this.props.regno);
        this.setState({
            cachedRegistryno: tournamentData.registryno,
            registryno: tournamentData.registryno,
            format: tournamentData.format
        })
    }

    render() { 
        return (
            <div class="uk-card uk-card-default uk-margin uk-text-center">
                <div>
                    <div class="uk-card-body">
                        <h3 class="uk-card-title"> Tournament No. {this.state.cachedRegistryno} </h3>
                        <form class="uk-form-stacked" onSubmit={this.handleSubmit}>
                            <div class="uk-margin">
                                <label class="uk-form-label" for="form-stacked-text">Registry No.</label>
                                <div class="uk-form-controls">
                                    <input class="uk-input" id="form-stacked-text" type="number" name="registryno" onChange={this.handleInputChange} placeholder="Loading..." value={this.state.registryno}></input>
                                </div>
                            </div>
                            
                            <div class="uk-margin">
                                <label class="uk-form-label" for="form-stacked-text">Format</label>
                                <div class="uk-margin">
                                    <select class="uk-select" name="format" onChange={this.handleInputChange} value={this.state.format}>
                                        <option>Legacy</option>
                                        <option>Modern</option>
                                        <option>Standard</option>
                                        <option>Draft</option>
                                        <option>Pioneer</option>
                                        <option>Vintage</option>
                                        <option>Cube Draft</option>
                                        <option>Premodern</option>
                                        <option>Commander</option>
                                    </select>
                                </div>
                            </div>

                            <div class="uk-margin"> 
                                <input class="uk-input uk-width-auto@s uk-text-center" type="submit" value="Update" />
                            </div>
                        </form>

                        <button class="uk-button uk-button-danger uk-button-large" onClick={this.deleteTournament}>Delete This Tournament</button>  

                    </div>
                </div>
            </div>
        );
    }
}
 
export default TournamentCrud;