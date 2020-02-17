// import react, hooks et librairie axios
import React, {useState, useEffect} from 'react'
import axios from 'axios'

// function to request scrape
const Scrape = () => {
    // hooks to store data
    const [scrapping, setScrapping] = useState("")
    // function to get scrapping data
    const getData = () => {
        axios.get('http://localhost:5000/scrape')
        .then(res => setScrapping(res.data))
        .catch((err) => console.log(err))
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <div>
            <form>
                <textarea value={scrapping}>
                </textarea>
            </form>
        </div>
    )

} 
 export default Scrape;