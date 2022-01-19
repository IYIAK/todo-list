import React from 'react'

import './index.scss';

export default function Footer(props) {
    return (
        <div id='footer'>
            <button className='selectAll' onClick={props.selectAll}>全选</button>
            <button className='del' onClick={props.deleteData}>删除</button>
        </div >
    )
}
