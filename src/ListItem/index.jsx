import React from 'react'
import './index.scss'
export default function Item(props) {
    return (
        <div className='item'>
            <input type="checkbox" />
            <p>{props.value}</p>
        </div>
    )
}
