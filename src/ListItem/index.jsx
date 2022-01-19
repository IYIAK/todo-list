import React, { useState } from 'react'
import './index.scss'
export default function Item(props) {


    var handleChecked = (e) => {
        props.changeData(props.id, e.target.checked)
    }

    return (
        <div className={'item ' + (props.type ? 'checked' : '')}>
            <input type="checkbox" onChange={handleChecked} checked={props.type} />
            <p>{props.value}</p>
        </div>
    )
}
