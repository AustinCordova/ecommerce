import React from 'react';

class ProductCard extends React.Component {
    render(){
        const {className} = this.props;
        return (
            <div className={`productCard${className ? ` ${className}` : ''}`}>
                <h3 className="headingCenter">{this.props.item && this.props.item.name}</h3>
                <img className="productImage" src={this.props.item && this.props.item.photo} alt={this.props.item && this.props.item.alt} />
                <p className="productDescription">{this.props.item && this.props.item.price}</p>
                <p className="productDescription">{this.props.item && this.props.item.description}</p>
            </div>
        )  
    }
};

export default ProductCard;