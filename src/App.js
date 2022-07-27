import { useEffect, useState } from 'react'
import './App.css';
import { ResponsiveBar } from '@nivo/bar'

function App() {
  const [data, setData] = useState(null)
const url = 'https://api.punkapi.com/v2/beers'

useEffect(() => {
  fetch(url)
    .then(res => res.json())
    .then(json => {
      console.log(json)    
})
},[])


  return (

    <main>
      <nav>
        <button>Date Filter</button>
        <button>Data by ABV</button>

      </nav>


    </main>
   
  );
}

export default App;
