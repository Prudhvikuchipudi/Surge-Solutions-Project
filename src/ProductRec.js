import React, { Component } from 'react';
import CompanyProductList from './companyproducts/CompanyProductsList';
import './App.css';

class ProductRec extends React.Component {
    render() {
        return (
            <div className="ProductRec">
                <CompanyProductList />
            </div>
        )
    }
}
export default ProductRec;