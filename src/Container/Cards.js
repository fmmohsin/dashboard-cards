import React, { Component } from 'react'
import './Cards.css'
import Card from '../Component/Card'
import Data from '../assests/colleges.json'
class Cards extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: 0,
            data: []
        };
    }

    loadMoreItems() {
        let items = [...this.state.data];
        let k;
        for (k = this.state.items; k < this.state.items+10; k++) {
            items.push(Data.colleges[k])
        }
        this.setState({data:items, items:k})
    }
    isBottom(el) {
        return el.getBoundingClientRect().bottom <= window.innerHeight;
      }
      
trackScrolling = () => {
    const wrappedElement = document.getElementById('cards');
    if (this.isBottom(wrappedElement)) {
      this.loadMoreItems();
    }
}
    componentDidMount() {
        this.loadMoreItems();
        document.addEventListener('scroll', this.trackScrolling);
    }
    componentDidUpdate(){
        if(Data.colleges.length<=this.state.items)
              document.removeEventListener('scroll', this.trackScrolling);
    }
    render() {
        const cards = this.state.data.map((card, index) => <Card key={index} card={card} />)
        return (
            <div id='cards' className="cards">
                {cards}
            </div>)
    }
}
export default Cards;