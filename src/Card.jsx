import Buttons from './Buttons'
import Count from './Count'
import { Heading } from './Heading'
import Reset from './Reset'

export default function Card(){
    return (
        <div className='card'>
            <Heading/>
            <Count/>
            <Reset/>
            <Buttons/>
        </div>
    )
}