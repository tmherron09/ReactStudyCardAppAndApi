import React from 'react';
import axios from 'axios';
import CardData from './CardData';


class Details extends React.Component {

    state = {
        cards: [
            {
                id: "",
                word: "",
                definition: ""
            }
        ],
        currentCollection: ""
    };



    async makeRequest() {
        let cards;
        //let card = new Object;
        const res = await axios.get('https://localhost:44393/api/collection')
            .then((res) => {
                // Handle Success
                console.log("It was successful and got :\n" + res);
                return res;
            })
            .catch((error) => {
                console.log('An error has occured.\n' + error);
            })
        return res;
    }

    async componentDidMount() {
        let res = await this.makeRequest();
        console.log(res.data[0].cards);
        this.setState({
            cards: res.data[0].cards,
            currentCollection: res.data[0].title
        });
        console.log("I successfully mounted.");
    }


    render() {

        //this.makeRequest();
        console.log("State: " + this.state.cards);


        return (
            <div>
                <h1> Collection: {this.state.currentCollection} </h1>
                <hr />
                <div className={"container-sm "}>
                    <div className={"row justify-content-between"}>
                        {this.state.cards.map(card =>
                            <CardData card={card} key={card.word} />
                        )}
                    </div>
                </div>
            </div>
        );
    }

}


export default Details;