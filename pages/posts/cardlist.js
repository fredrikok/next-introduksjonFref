
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
 
export default function cardlist() {
    const [data, getData] = useState([])
    const URL = 'https://rws-cards-api.herokuapp.com/api/v1/cards';
 
    useEffect(() => {
        fetchData()
    }, [])
 
 
    const fetchData = () => {
        fetch(URL)
            .then((res) =>
                res.json())
 
            .then((response) => {
                console.log(response);
                getData(response);
            })
    }
console.log(data)
 
    return (
        <>
        <main>
        <Link href="/">
                <a>Home</a>
            </Link>
              <h2>Card numbers : {data.nhits} </h2>
              <div className="list">
                {data?.cards?.map((item, i) => (

                    <tr key={i}>        
                    <td>{item.name}</td>
                    </tr>
                    ))}
                </div>
          </main>
        </>
    );
}
