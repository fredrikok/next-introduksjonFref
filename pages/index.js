import React from 'react'
import Link from 'next/link'


function index() {
  return (
    <div>
      <h1>homepage</h1>

      <Link href="/posts/cardlist">
          <a>API List data</a>
      </Link>
      <Link href="/posts/register">
          <a>REGISTER API</a>
      </Link>

    </div>
  )
}

export default index