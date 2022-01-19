import React, { useState, useEffect } from 'react'
import { nanoid } from 'nanoid'

import Search from '../Search'
import Footer from '../Footer'
import List from '../List'

import './index.css'

export default function Box() {
    const [data, setData] = useState([
        { id: 1, value: 'hello world', checked: false },
        { id: 2, value: '你好世界', checked: true }
    ])

    var saveData = () => {
        localStorage.removeItem('todoListData')
        var str = JSON.stringify(data)
        console.log(str);
        localStorage.setItem('todoListData', str)
    }

    useEffect(() => {
        //初次打开页面时从localStorage中读取数据
        let s = localStorage.getItem('todoListData')
        if (s !== null) {
            console.log(JSON.parse(s));
            setData(JSON.parse(s))
        }

    }, [])

    useEffect(() => {
        //data更新后自动存入localStorage
        saveData()
    }, [data])

    var addData = (value) => {
        setData([{ id: nanoid(), value, checked: false }, ...data])

    }

    var deleteData = () => {
        setData(data => {
            return data.filter(item => {
                return item.checked === false
            })
        })

    }

    var changeData = (id, type) => {
        setData((data) => {
            return data.map(item => {
                if (item.id == id) {
                    item.checked = type
                }
                return item
            })
        })

    }

    var selectAll = () => {
        setData((data) => {
            return data.map(item => {
                item.checked = true
                return item
            })
        })

    }
    return (
        <div className='box'>
            <Search addData={addData} />
            <List data={data} changeData={changeData} />
            <Footer deleteData={deleteData} selectAll={selectAll} />
        </div>
    )
}
