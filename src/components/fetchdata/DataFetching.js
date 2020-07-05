import React, { useState, useEffect } from 'react'
import axios from 'axios'

function DataFetching() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        axios.get(`https://newsapi.org/v2/top-headlines?language=en&apiKey=6c0479e631bd4deabc21d217aa010427`)
            .then(res => {
                console.log(res)
                setPosts(res.data.articles)
            })
            .catch(err => {
                console.error(err)
            })
    }, [])
    return (
        <div>
            <ul>
                {
                    posts.map((post,index) => (
                        <li key={index}>{post.title}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default DataFetching
