// create your App component here
import React, { useState, useEffect } from "react";

function App() {

    const [dogPic, setDogPic] = useState(null)
    const API_URL = 'https://dog.ceo/api/breeds/image/random'


    useEffect(() => {
        fetch(API_URL)
        .then(r => r.json())
        .then(data => {
            const image = data.message
            setDogPic(image)
        })
    }, [])

    if(!dogPic) {
        return <p>Loading...</p>
    }

    return(
        <div>
            <img src={dogPic} alt="A Random Dog" />
        </div>
    )
}

export default App