import React, { Fragment } from 'react'
import './Offertext.css'
import './Landmark.css'

const Landmarktext = (props) => {
    let landmarkText = props.landmarkText;    
    let pointer1 = 0;
    let landmarkTextUpdated = [];
    let highlightedWords = [];
    for (let i = 0; i < landmarkText.length; i++) {
        if (Number.isInteger(Number(landmarkText[i])) && landmarkText[i] !== ' ') {
            landmarkTextUpdated.push(landmarkText.substring(pointer1, i))
            let kmsIndex = landmarkText.toLowerCase().indexOf('kms', i) + 3;
            highlightedWords.push(landmarkText.substring(i, kmsIndex))
            landmarkTextUpdated.push(landmarkText.substring(i, kmsIndex))
            i = kmsIndex;
            pointer1 = i;
        }
        if (i === landmarkText.length - 1)
            landmarkTextUpdated.push(landmarkText.substring(pointer1))
    }
    pointer1 = 0;
    landmarkTextUpdated = landmarkTextUpdated.map(landmark => {
        if (landmark === highlightedWords[pointer1]) {
            pointer1++;
            return <strong key={pointer1 - 1}>{landmark}</strong>
        }
        return landmark;
    })
    return (
        <Fragment>
        { landmarkTextUpdated }
        </Fragment>
    )
}
export default Landmarktext;