import React, { Fragment } from 'react'
import './Rating.css'
const Rating=(props)=>{
    let star=[];
    for(let i=0;i<5;i++)
    {
        if(i<props.rating)
            star.push(<span key={i} className='star rated'></span>)
        else
            star.push(<span key={i} className='star unrated'></span>)

    }
return(
    <Fragment>
{star}
</Fragment>
)
}
export default Rating;