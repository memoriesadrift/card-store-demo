import '../node_modules/uikit/dist/css/uikit.css'
import 'uikit'
import React, { Component } from 'react';


class CreateTournament extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            registryno: 0,
            format: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    
    async handleSubmit(event) {
        event.preventDefault();
        let exists = await this.checkTournamentExists();
        //console.log("exists: ", exists)
        if (exists === true) {
            alert('Tournament with Registry No. ' + this.state.registryno +' already exists!');
            return false;
        }
        if (this.state.registryno < 1) {
            alert("Registry No. can't be less than 1!");
            return false;
        }

        let apiUri = 'http://wwwlab.cs.univie.ac.at/~sulovskys00/api/createTournament.php?no=' + this.state.registryno + "&fmt=" + this.state.format;
        await fetch(apiUri).then(res => console.log(res)).then(alert('Created Tournament ' + this.state.registryno + ' !')).then(window.location.href = "../tournament/"+this.state.registryno);
    }

    async checkTournamentExists() {
        let fetchUri = "http://wwwlab.cs.univie.ac.at/~sulovskys00/api/getTournament.php?no=" + this.state.registryno; 
        let tournamentData = await fetch(fetchUri).then(response => response.json());
        //console.log("Tournament Data: ", tournamentData);
        if (tournamentData === false ) return false;
        return true;
    }

    handleInputChange(event) { 
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
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
                                <input class="uk-input uk-width-auto@s uk-text-center" type="submit" value="Create" />
                            </div>
                        </form>


                    </div>
                </div>
            </div>
        );
    }
}
 
export default CreateTournament;