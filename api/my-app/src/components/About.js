import React, { useEffect, useState } from 'react'
import axios from 'axios'

const About = () => {

    const [data, setData] = useState([])

    const getData = () => {
        axios.get('https://fakestoreapi.com/products')
            .then((response) => {
                console.log(response)
                const myData = response.data
                setData(myData)
            })
    }
    useEffect(() => getData(), [])
    console.log(data)

    if (true) {
        return (
            <div>
                {data.map((item, index) => (
                    <table key={index}> {/* Adding key prop to each table */}
                        <tr key={item.id}> {/* Adding key prop to each row */}
                            <td>{item.id}</td>
                            <td>{item.title}</td>
                        </tr>
                    </table>
                ))}
            </div>
        );
    }
    
}
    export default About
