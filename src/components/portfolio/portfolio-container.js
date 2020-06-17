import React, { Component } from "react";
import PortfolioItems from "./portfolio-items";

export default class PortfolioContainer extends Component {
    constructor() {
        super();

        this.state= {
            pageTitle: "Welcome to my portfolio",
            data: [

         {title: "Devcamp Fries"},
         {title: "Wild Cherry Slots"}, 
         {title: "Capstone Project"}
        ]
        };
        this.handlePageTitleUpdate = this.handlePageTitleUpdate.bind(this)
    }

    portfolioItems() {
        

        return this.state.data.map(item => {
            return <PortfolioItems title={item.title} />;
        })
    }
    handlePageTitleUpdate() {
        this.setState({
            pageTitle: "Something Else"
        });
    }
    render() {
        return (
            <div>
                <h2>{this.state.pageTitle}</h2>
                {this.portfolioItems()}
                <hr/>
                <button onClick={this.handlePageTitleUpdate}>Change Title</button>
            </div>
        )
    }
}