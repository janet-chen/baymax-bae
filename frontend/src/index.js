import React from 'react';
import ReactDOM from 'react-dom';
import './main.css';
function Square(props) {
    return (
        <button className="square" onClick={props.onClick}>
            {props.value}
        </button>
    );
}

class Board extends React.Component {
    renderSquare(i) {
        return (
            <Square
                value={this.props.squares[i]}
                onClick={() => this.props.onClick(i)}
            />
        );
    }

    render() {
        return (
            <div>
                <div className="message">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}

function Message(props) {
    return (
        <div className="message">
            {props.message}
        </div>
    );
}

class Welcome extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div className="welcome">
                <Message message="Hi, I'm Baymax, your personal health assistant."/>
            </div>
        );
        // const history = this.state.history;
        // const current = history[this.state.stepNumber];
        // const winner = calculateWinner(current.squares);
        //
        // const moves = history.map((step, move) => {
        //     const desc = move ?
        //         'Go to move #' + move :
        //         'Go to game start';
        //     return (
        //         <li key={move}>
        //             <button onClick={() => this.jumpTo(move)}>{desc}</button>
        //         </li>
        //     );
        // });
        //
        // let status;
        // if (winner) {
        //     status = "Winner: " + winner;
        // } else {
        //     status = "Next player: " + (this.state.xIsNext ? "X" : "O");
        // }
        //
        // return (
        //     <div className="game">
        //         <div className="game-board">
        //             <Board
        //                 squares={current.squares}
        //                 onClick={i => this.handleClick(i)}
        //             />
        //         </div>
        //         <div className="game-info">
        //             <div>{status}</div>
        //             <ol>{moves}</ol>
        //         </div>
        //     </div>
        // );
    }
}

// ========================================

ReactDOM.render(<Welcome />, document.getElementById("root"));
