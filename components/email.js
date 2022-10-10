
import React from 'react'



import apiData from '../ApiServer/db.json'

let data = apiData



function email() {
  return (
    <main>

    <h1>🤠Registrer deg🤠</h1>
    <p>Må launche API server for å sende data til API</p>
    <p>Email List</p>

    <div className='list'>
    {data.posts.map(post => (
        <>
        <div className='list-style'>
            <p>{post.id}</p>               
            <p>{post.email}</p>
        </div>
        </>
    ))}
    </div>
</main>
  )
}

export default email