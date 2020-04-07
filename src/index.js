import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Square extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            value: null
        };
    }


    render() {
        return (
            <button
                className="square"
                style={{backgroundColor:this.state.bgColor}}
            >
                {this.state.value}
            </button>
        );
    }
}

class Board extends React.Component {
    constructor() {
        super();
        this.grille = [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]
    }
    renderSquare(i, square) {
        return <Square value={square} key={i} />;
    }

    render() {
        const status = 'Hanjie: X';

        return (
            <div>
                {this.grille.map((line , i) => (
                    <div className="board-row">
                        {line.map((square , i) => {


                            return this.renderSquare(i, square)


                        })}
                    </div>
                ))}
            </div>


        );
    }
}

class Game extends React.Component {
    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <Board />
                </div>
                <div className="game-info">
                    <div>{/* status */}</div>
                    <ol>{/* TODO */}</ol>
                </div>
            </div>
        );
    }
}

// ========================================

ReactDOM.render(
    <Game />,
    document.getElementById('root')
);
  