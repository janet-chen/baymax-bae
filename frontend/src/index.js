import React from 'react';
import ReactDOM from 'react-dom';
import './main.css';
import baymax from './images/baymax2.png';
import {STEP} from "./constants";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

function Message(props) {
    return (
        <div className="message">
            {props.message}
        </div>
    );
}

function BaymaxImage() {
    return (
        <div >
            <img id="baymax" src={baymax}/>
        </div>
    );

}

class Baymax extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            step : props.step
        };
    }

    renderWelcome() {
        return (
            <div>
                <p>{this.state.step}</p>
                <Message message="Hi, I'm Baymax, your personal health assistant."/>
                <BaymaxImage/>
            </div>
        );
    }

    render() {
        switch (this.state.step) {
            case STEP.WELCOME:
                return this.renderWelcome();
            case STEP.CALCULATE:
                return (<p>{this.state.step}</p>);
                break;
            case STEP.REPORT:
                return (<p>{this.state.step}</p>);
                break;
            case STEP.SUGGESTION:
                break;
            case STEP.FINISH:
                break;
        }
    }

}

class Controller extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            step : STEP.WELCOME,
            timer : 5
        };
        this.intervalHandle = setInterval(
            () => this.tick(),
            1000
        );
    }

    updateStep() {
        console.log("step", this.state.step);
        STEP.enu
        this.setState({
            step: STEP[this.state.step++],
            timer: this.state.timer
        });
        console.log(this.state.step);
    }

    tick() {
        console.log(this.state.timer);
        if (this.state.timer < 0) {
            clearInterval(this.intervalHandle);
            this.updateStep();
        } else {
            let newTimer = this.state.timer - 1;
            this.setState({
                step: this.state.step,
                timer: newTimer
            });
        }
    }

    render() {
        return (
            <div>
                <div className="center-div">
                    <Baymax step={this.state.step}/>
                </div>
                {/*<ReactCSSTransitionGroup*/}
                    {/*transitionName="welcome-image"*/}
                    {/*transitionEnterTimeout={500}*/}
                    {/*transitionLeaveTimeout={300}>*/}
                {/*</ReactCSSTransitionGroup>*/}
            </div>
        );
    }
}

// ========================================

ReactDOM.render(<Controller/>, document.getElementById("root"));

function getStepFromValue(value) {
    return Object.keys(STEP).find(key => STEP[key] === value);
}