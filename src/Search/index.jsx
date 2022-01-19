import React from 'react'

import './index.css'

export default function Search(props) {

    var handleCommit = () => {

        // console.log(props)
        let val = document.querySelector('.searchText').value
        if (val === '') {
            alert('请输入事项！')
            return
        }
        props.addData(val)
        // console.dir(val)
        document.querySelector('.searchText').value = ''
    }

    return (
        <div id='searchBox'>
            <input type="text" name="" className='searchText' placeholder='请输入事项' />
            <button className='search-btn' onClick={handleCommit}>Add</button>
        </div>
    )
}
