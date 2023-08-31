import React, { PureComponent } from 'react'
import optStyle from './Optimization.module.css'

export default class Optimization extends PureComponent {

    state = {
        carName: 'Benz'
    }

    change = () => {
        this.setState({ carName: 'BMW' })
    }

    render() {
        const { carName } = this.state
        return (
            <div className={optStyle.parent}>
                <h2>This is Optimization Component</h2>
                <div>Car name is {carName}</div>
                <button onClick={this.change}>Click to Change CarName</button>
                <Child carName={carName} />
            </div>
        )
    }

    // shouldComponentUpdate(nextProps, nextState) {
    //     if (this.state.carName === nextState.carName)
    //         return false;
    //     else
    //         return true
    // }
}

class Child extends PureComponent {
    render() {
        return (
            <div className={optStyle.child}>
                <h2>This is Child Component</h2>
                <div>The car name is {this.props.carName} from Optimization Component</div>
            </div>
        )
    }

    // shouldComponentUpdate(nextProps, nextState) {
    //     if (this.props.carName === nextProps.carName)
    //         return false;
    //     else
    //         return true
    // }
}
