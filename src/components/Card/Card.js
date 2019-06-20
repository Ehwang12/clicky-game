import React, { Component } from 'react'

export class Card extends Component {
    render() {
        const style = {
            width: "200px",
            margin: "1em"
        }
        return (
            <div>
                <img src="https://cdn.playbuzz.com/cdn/e8526148-cb96-40c4-8edd-9d873d8ebbdb/86421b9e-5057-44df-8d7b-967154735279.jpg" alt="Gollum" className="img-thumbnail card" style={style} />
            </div>
        )
    }
}

export default Card;
