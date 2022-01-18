import React, { useState } from 'react'
import { nanoid } from 'nanoid'

import Search from '../Search'
import Footer from '../Footer'
import List from '../List'

import './index.css'

export default function Box() {
    const [data, setData] = useState([
        { id: 1, value: 'hello world', checked: false },
        { id: 2, value: '你好世界', checked: false }
    ])

    var addData = (value) => {
        setData([...data, { id: nanoid(), value, checked: false }])

    }

    var deleteData = (id) => {

    }

    return (
        <div className='box'>
            <Search addData={addData} />
            <List data={data} />
            <Footer deleteData={deleteData} />
        </div>
    )
}
