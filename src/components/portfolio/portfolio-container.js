import React, { Component } from "react";
import axios from "axios";
import PortfolioItems from "./portfolio-items";

export default class PortfolioContainer extends Component {
    constructor() {
        super();

        this.state = {
            pageTitle: "Welcome to my portfolio",
            isLoading: false,
            data: []

        
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
    getPortfolioItems() {
    
        axios
          .get("https://robtouton.devcamp.space/portfolio/portfolio_items")
          .then(response => {
            console.log("response data", response);
            this.setState({
                data: response.data.portfolio_items
            });
          })
          .catch(error => {
            console.log(error);
          });
    }
    
        
        
    portfolioItems() {
       
        
        return this.state.data.map(item => {
            debugger;
            return (
                 <PortfolioItems key={item.id} item={item} />
            )
        });
      }
    
    
    componentDidMount() {
        this.getPortfolioItems()
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
                <div className="portfolio-items-wrapper">{this.portfolioItems()}</div>
            </div>
        )
    }
}