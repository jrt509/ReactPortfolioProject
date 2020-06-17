import React, { Component } from "react";
import PortfolioItems from "./portfolio-items";

export default class PortfolioContainer extends Component {
    constructor() {
        super();

        this.state = {
            pageTitle: "Welcome to my portfolio",
            isLoading: false,
            data: [

         {title: "Devcamp Fries", category: "Ecommerce"},
         {title: "Wild Cherry Slots", category: "Gaming"}, 
         {title: "Capstone Project", category: "Learning"}
        ]
        };
       this.handleFilter = this.handleFilter.bind(this);
    }
    handleFilter(filter) {
        this.setState({
            data: this.state.data.filter(item => {
                return item.category === filter;
            })
        })
    }

    portfolioItems() {
        

        return this.state.data.map(item => {
            return <PortfolioItems title={item.title} />;
        })
    }
    
    
    render() {
        if (this.state.isLoading) {
            return <div>Loading...</div>;
        }
        return (
            <div>
                <h2>{this.state.pageTitle}</h2>
                <button onClick={() => this.handleFilter('Ecommerce')}>Ecommerce</button>
                <button onClick={() => this.handleFilter('Gaming')}>Gaming</button>
                <button onClick={() => this.handleFilter('Learning')}>Learning</button>
                {this.portfolioItems()}
               
            </div>
        )
    }
}