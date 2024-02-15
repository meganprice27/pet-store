import React from 'react'

const Home = () => {
  return (
    <div>
      <div>Hero banner</div>
      <h2>Bark Bazaar</h2>
      <p>Dog products</p>
      <div>
        {['Product 1', 'Product 2'].map((product) => product)}
      </div>
      <footer>
        Footer
      </footer>
      </div>
  )
}

export default Home
