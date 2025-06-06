import React from "react";

function QuoteGenerator(){
    const Quotes = [
        "Be yourself; everyone else is already taken.",
        "So many books, so little time.",
        "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
        "A room without books is like a body without a soul.", 
        "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
        "In three words I can sum up everything I've learned about life: it goes on.",
        "You only live once, but if you do it right, once is enough.",
        "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
    ]

    const RandomQuote = Quotes[Math.floor(Math.random()*Quotes.length)];
    return (
        <div>
            <h1>Quote Generator</h1>
            <button onClick={() => window.location.reload()}>QuoteGenerator</button>
            <p>{RandomQuote}</p>
            <style>
                {`
                    div {
                        max-width: 500px;
                        margin: 40px auto;
                        padding: 30px;
                        background: #f9f9f9;
                        border-radius: 12px;
                        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
                        text-align: center;
                    }
                    h1 {
                        color: #333;
                        margin-bottom: 20px;
                        font-size: 2rem;
                    }
                    button {
                        background: #007bff;
                        color: #fff;
                        border: none;
                        padding: 10px 24px;
                        border-radius: 6px;
                        font-size: 1rem;
                        cursor: pointer;
                        margin-bottom: 20px;
                        transition: background 0.2s;
                    }
                    button:hover {
                        background: #0056b3;
                    }
                    p {
                        font-size: 1.2rem;
                        color: #444;
                        margin-top: 20px;
                        font-style: italic;
                    }
                `}
            </style>
        
        </div>
    )
}

export default QuoteGenerator