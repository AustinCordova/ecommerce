import React from 'react';
import Data from '../Data/products.json';
import ProductCard from '../ProductCard';

class Filters  extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            productData: Data, 
            priceRange: "default",
            productType: "default"
        };
    }
    handlePriceRangeDropDown = (event) => {
        this.setState({
            priceRange: event.target.value,
        }, () => {
            this.setState({
                productData: this.handleProductDataFilter()
            })
        })
    }
    handleProductTypeDropDown = (event) => {
        this.setState({
            productType: event.target.value,
        }, () => {
            this.setState({
                productData: this.handleProductDataFilter()
            })
        })
    }
    handleProductDataFilter = () => {
        const { productType, priceRange, productData } = this.state;
        // Loop through the json file and adding a property for filtering out based on product type and/or price range
        return productData.map(pd => {
            const { price, type } = pd || { };
            let filtered = false;
            console.log(productType, type)
            if(productType !== "default" && productType !== type){
                filtered = true;
            } 
            if (!filtered && priceRange !== "default") {
                const priceArray = priceRange.split("-")
                const startPrice = parseFloat(priceArray[0].substr(1));
                const endPrice = parseFloat(priceArray[1].substr(1));
                const pdPrice = parseFloat(price.substr(1));
                filtered = pdPrice > endPrice || startPrice > pdPrice;
            }
            return {
                ...pd,
                filtered
            };
        })
    }
    render() {
        const { priceRange, productType, productData } = this.state;
        return (
            <>
                 <section className="myBtnContainer">
                        <select id="productType" value={productType} onChange={this.handleProductTypeDropDown}>
                            <option value="default">Show All</option>
                            <option value="Clothes">Clothing</option>
                            <option value="Accessories">Accessories</option>
                        </select>
                        <select id="priceRange" value={priceRange} onChange={this.handlePriceRangeDropDown}>
                            <option value="default">Show All</option>
                            <option value="$0-$10">$0 - $10</option>
                            <option value="$11-$20">$11 - $20</option>
                            <option value="$21-$30">$21 - $30</option>
                    </select>
                </section>
                 <div className="productRow">
                    {productData.map((item) => {
                        const {filtered} = item || {}

                        return <ProductCard className={filtered ? 'hideProduct' : ''} item={item}/>
                    } )} 
                </div> 
                
            </>
        );
    }
   
};

export default Filters;