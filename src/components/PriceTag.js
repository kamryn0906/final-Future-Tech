import React, { Component } from 'react';

class PriceTag extends Component {
    render() {
        const { className, title } = this.props;
        return (
            <div className={`${className} price-tag`}>
                ${title}
            </div>
        )
    }
}

export default PriceTag;