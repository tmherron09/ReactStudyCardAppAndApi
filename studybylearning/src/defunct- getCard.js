import React from 'react';
import axios from 'axios';
import CardData from './CardData';


class Details extends React.Component {
    constructor(props) {
        super(props);  

    }

    state = {
        cards: [
            {
                word: "",
                definition: ""
            }
        ],

        currentCollection: "",
        selectedCollection: 0,
        currentCard: { word: "", def: "" },
        currentCardNumber: 1,
        numOfCards: 0,
        cardDisplay: "",
        cardFront: true
    };


    async makeRequest(collectionNumber) {
        let cards;
        //let card = new Object;
        const res = await axios.get(`https://localhost:44393/api/collection/${this.state.selectedCollection}`)
            .then((res) => {
                // Handle Success
                console.log("It was successful and got :\n" + res);
                console.log("The Res Data is of type: " + typeof (res.data));
                Object.keys(res)
                return ;
            })
            .catch((error) => {
                console.log('An error has occured.\n' + error);
            })
        return res;
    }

    async componentDidMount() {
        
    }

    OnCardClickHandler() {
        if (this.state.cardFront && this.state.cards) {
            console.log("The cards collection in och: " + this.state.cards)
            let def = this.state.cards.currentCard.definition;
            this.setState({
                cardDisplay: def
            })
        } else {
            currentCard++;
            let word = this.state.cards[this.state.currentCardNumber].word;
            this.setState({
                cardDisplay: word
            })
        }
    }


    render() {

        //this.makeRequest();
        


        return (
            <div>
                <h1> Collection: {this.state.currentCollection} </h1>
                <hr />
                <div className={"container-sm "}>
                    <div className={"row justify-content-between"}>
                        <CardData cardDisplay={this.state.cardDisplay} key={this.state.currentCard.word} currentCardNumber={this.state.currentCardNumber} numOfCards={this.state.numOfCards} cardButtonClick={this.OnCardClickHandler()} />
                    </div>
                </div>
            </div>
        );
    }

}


export default Details;




{/* <div className={"container-sm "}>
                    <div className={"row justify-content-between"}>
                        {this.state.cards.map(card =>
                            <CardData card={card} key={card.word} numOfCards={this.state.numOfCards} />
                        )}
                    </div>
                </div> */}