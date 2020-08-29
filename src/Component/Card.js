import React, { Component, Fragment } from 'react'
import './Card.css'
import img from '../assests/img/college_02.jpg'
import Rating from './Rating'
import Offertext from './Offertext'
import Landmarktext from './Landmarktext'
class Card extends Component {
    render() {
        const tags = this.props.card.tags.map((tag, index) => <span className='tag' key={index}>{tag}</span>)
        const address = this.props.card.nearest_place.map((place, index) => {
            if (index !== 0)
                return <span className="secondary-address" key={index}>{place}</span>
            return <span key={index}>{place}</span>
        })
        const famousplace = this.props.card.famous_nearest_places;
// const famousplace2=()
        const amenties = this.props.card.amenties.map((amenties, index) => {
            if (index !== 0)
                return (<Fragment key={index} ><span className="dot"></span> <span>{amenties}</span></Fragment>)
            return <span className='amenty' key={index}>{amenties}</span>
        })
        return (
            <div className="card">
                <div className='cover-img'>
                    <img src={img} alt="college" />
                    {this.props.card.promoted ? <div className='promoted'>Promoted</div> : null}
                    <div className="rating-remarks"><div><span className="rating">3.9</span>/5</div><div>very good</div></div>
                    <div className='tags'>
                        {tags}
                    </div>
                    <div className="ranking">{this.props.card.ranking}</div>
                </div>
                <div className='clg-details'>
                    <div className='clg-details-left'>
                        <div className='clg-title'>
                            <span>{this.props.card.college_name.substring(0, this.props.card.college_name.indexOf('-'))}</span>
                            <span><Rating rating={this.props.card.rating} /></span>
                        </div>
                        <div className='clg-address'>
                            {address}
                        </div>
                        <div className='clg-famous-place'>
                        <Landmarktext landmarkText={famousplace}/>
                        </div>
                        <div className='clg-offer'>
                            <Offertext offertext={this.props.card.offertext}/>
                        </div>
                    </div>
                    <div className='clg-details-right'>
                        <div className='price'>
                            <span className='original-price'>&#8377;{this.props.card.original_fees}</span>
                            <span className="discount-tags">
                                <span className="price-tag"><span className="tag-line">{this.props.card.discount}</span></span>
                            </span>
                        </div>
                        <div className='offer'>
                            <div className="offer-price">&#8377;{this.props.card.discounted_fees}</div>
                            <div className='sem-cycle'>{this.props.card.fees_cycle}</div>
                        </div>
                        <div className='amenties'>
                            {amenties}
                        </div>
                    </div>
                </div>

            </div>)
    }
}
export default Card;
