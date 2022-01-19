import React from 'react'
import Item from '../ListItem'
import './index.scss'

export default function List(props) {

    return (

        <ul className='list'>
            {
                props.data.map((v) => {
                    return <li key={v.id}><Item value={v.value} id={v.id} type={v.checked} changeData={props.changeData} /></li>
                })
            }

        </ul>
    )
}
