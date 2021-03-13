import React, { Component } from 'react';

class Quantity extends Component {
    constructor(props) {
        super(props);
        this.state = {count: 1 };
    
        this.handleAdd = this.handleAdd.bind(this);
        this.handleSubtract = this.handleSubtract.bind(this);
    }

    handleAdd = () => {
        this.setState({count: this.state.count + 1});
    }

    handleSubtract = () => {
        if (this.state.count >=2){
            this.setState({count: this.state.count - 1});
        };
    }

    render() {
        const { className, quantity, count} = this.props;
        return (
            <div className={`${className} quantity`}>
                <div className='quantity__count'>
                    {this.state.count}
                </div>
                <a onClick={this.handleAdd} className={`${className} quantity__plus`}>
                    <i className='fas fa-plus'></i>     
                </a>
                <a onClick={this.handleSubtract} className={`${className} quantity__minus`}>
                    <i className='fas fa-minus'></i>      
                </a>
            </div>
        )
    }
}

export default Quantity;