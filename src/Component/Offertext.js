import React, { Fragment } from 'react'
import './Offertext.css'

const Offertext = (props) => {
    let offerText = props.offertext.substring(0, props.offertext.indexOf('LOGIN'))
    let pointer1=0;
    let pointer2;
    let highLightpointer;
    let offerTextUpdated = [];
    let highlightedWords=[];
    let isnum = false;
    for (let i = 0; i < offerText.length; i++) {
        if (Number.isInteger(Number(offerText[i])) && offerText[i] !== ' ') {
            if (!isnum) {
                highLightpointer=i;
                pointer1=pointer2;
                pointer2=i;
                offerTextUpdated.push(offerText.substring(pointer1, pointer2))
                isnum = true;
            }
        } else {
            if (isnum && offerText[i] !== ',') {
                pointer1=pointer2;
                pointer2=i;
                offerTextUpdated.push(offerText.substring(pointer1, pointer2))
                highlightedWords.push(offerText.substring(highLightpointer,pointer2))
                isnum = false;
            }
        }
        if(i===offerText.length-1)
            offerTextUpdated.push(offerText.substring(pointer2))
    }
    pointer1=0;
    offerTextUpdated=offerTextUpdated.map(offer=>{
        if(offer===highlightedWords[pointer1])
        {
            pointer1++;
            return <span className='highlight' key={pointer1-1}>{offer}</span>
        }
        return offer;
    })
    return (
        <Fragment>
            {offerTextUpdated}
            <a href='#'>LOGIN</a>
        </Fragment>
    )
}
export default Offertext;