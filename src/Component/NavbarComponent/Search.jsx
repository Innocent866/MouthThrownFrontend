import axios from 'axios'
import '../../style/layout/Search.css'
import React, { useContext, useState } from 'react'
import { AppContext } from '../../Context/context';

const Search = () => {
    const [data, setData] = useState([])
    const [input, setInput] = useState('')
    const { open } = useContext(AppContext);


    const getPost = async (value)=>{
        const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
        console.log(res.data);
            const result = res.data.filter((m)=>{
                return value && m.title && m.title.toLowerCase().includes(value)
            })
            setData(result);
            console.log(data);
            // console.log(fet);
            // console.log(result);
    }

    const handleSearch = (value)=>{
        setInput(value)
        getPost(value)
        console.log(value)
    }

  return (
    <div className='search-div'>
        <input
            type="text"
            placeholder="Search a product..."
            className={open ? "nav-search-bar-mobile" : "nav-search"}
            onChange={(e) => handleSearch(e.target.value)}
            value={input} 
          />
        <input
            type="text"
            placeholder="Search a product..."
            className={open ? "nav-search-bar-tablet" : "nav-search"}
            onChange={(e) => handleSearch(e.target.value)}
            value={input} 
          />
    
    <div className='search-items'>
        {data.map((item, index) => (
            <div key={index}>
                <p>{item.title}</p>
            </div>
        ))}
    </div>
    </div>
  )
}

export default Search