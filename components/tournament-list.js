
import React, { Component } from 'react';
import '../node_modules/uikit/dist/css/uikit.css'
import CardItem from './card-item';
import TournamentItem from './tournament-item';

async function getTournamentData() {
    let tournaments = [];

    let fetchUri = "http://wwwlab.cs.univie.ac.at/~sulovskys00/api/getTournaments.php?prizes=yes";
    //console.log("Fetching card data from: ", fetchUri);
    let data = await fetch(fetchUri).then(response => response.json());
    let dataArray = Object.values(data);
    dataArray = dataArray[0]; 
    for (const element of dataArray) {
        let amount = element.AMOUNT === undefined ? 0 : element.AMOUNT;
        let distribution = element.DISTRIBUTION === undefined ? 0 : element.DISTRIBUTION;
        tournaments.push( {
            tournament: {
                registryno: element.REGISTRYNO,
                format: element.FORMAT,
                amount: amount,
                distribution: distribution,
                href: "/tournament/" + element.REGISTRYNO
            }})
    };
    
    fetchUri = "http://wwwlab.cs.univie.ac.at/~sulovskys00/api/getTournaments.php?prizes=no";
    //console.log("Fetching card data from: ", fetchUri);
    data = await fetch(fetchUri).then(response => response.json());
    dataArray = Object.values(data);
    dataArray = dataArray[0]; 
    for (const element of dataArray) {
        let amount = 0;
        let distribution = 0;
        tournaments.push( {
            tournament: {
                registryno: element.REGISTRYNO,
                format: element.FORMAT,
                amount: amount,
                distribution: distribution,
                href: "/tournament/" + element.REGISTRYNO
            }})
    };

    tournaments.sort((lhs, rhs) => parseInt(lhs.tournament.registryno) > parseInt(rhs.tournament.registryno)) 
    return tournaments;
}

class TournamentList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 0,
            lastPage: 0,
            pageDialog: 0,
            tournamentData: [],
            displayedTournaments: []
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

   nextPage = async() => {
       if(this.state.page == this.state.lastPage-1) {
           alert('On last page!');
           return
       }
       await this.updateTournamentData((this.state.page+1)*50);
       this.setState(state => ({ page: state.page+1 }));
    }

   prevPage = async() => {
       if(this.state.page < 1) {
           alert('On first page!');
           return
       }
       await this.updateTournamentData((this.state.page-1)*50);
       this.setState(state => ({ page: state.page-1 }));
    }

   setPage = async(_pno) => {
       _pno--;
       await this.updateTournamentData(_pno * 50);
       this.setState({ page: parseInt(_pno) });
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
    
    async updateTournamentData(_start) {
        this.setState( {displayedTournaments : this.state.tournamentData.slice(_start, _start+50)} );
    }

    async componentDidMount(){
        let numRows = await fetch("http://wwwlab.cs.univie.ac.at/~sulovskys00/api/getTournaments.php").then(response => response.json());
        let tournaments = await getTournamentData();
        numRows = Math.ceil((numRows.tournaments.length)/50);
        this.setState({lastPage: numRows})
        this.setState({tournamentData: tournaments})
        await this.updateTournamentData(this.state.page);
    }
    
    render() { 
        return(
            <div>
                <h4 class="uk-text-center">Page: {this.state.page+1}</h4>
                <div class="uk-child-width-1-2@s uk-text-center uk-margin-left uk-margin-right" uk-grid="">
                    {this.state.displayedTournaments.map(({tournament}, idx) => <div> <TournamentItem key={idx} tournamentData={tournament} /> </div>)}
                </div>

                <div class="uk-text-center uk-margin-top">
                    <button class="uk-button uk-button-default uk-button-large" onClick={this.prevPage}>Prev Page</button>  
                    <button class="uk-button uk-button-default uk-button-large" onClick={this.nextPage}>Next Page</button>
                </div>
                <div class="uk-text-center uk-margin-top uk-margin-bottom">
                    <form onSubmit={this.handleSubmit} onChange={this.handleChange}>
                        <label class="uk-margin-right-small uk width-auto"> 
                            <input placeholder="Go To Page" class="uk-input uk-width-1-6 uk-text-center" type="number" min="1" max={this.state.lastPage}/>
                        </label>
                        <input class="uk-input uk-width-auto@s uk-text-center" type="submit" value="Go" />
                    </form>
                </div>

            </div>
            
        );
    }
}
 
export default TournamentList;