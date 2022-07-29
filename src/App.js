import { useEffect, useState } from 'react'
import './App.css';
import { Bar } from '@nivo/bar'

function App() {
  const [data, setData] = useState([])
  const url = 'https://api.punkapi.com/v2/beers'

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(json => {  
        setData(json)
  })
  },[])
console.log("hi", data)
  return (

    <div className="App">

      <nav>
        
        <input type="date"></input>
        <input type="date"></input>

        <input type="text"></input>
      </nav>
  





      <Bar
        width={1300}
        height={600}
        data={data}
        maxValue={"auto"}
        keys={["abv"]}
        indexBy="first_brewed"
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
        padding={0.4}
        valueScale={{ type: "linear" }}
        colors="#3182CE"
        animate={true}
        enableLabel={false}
        axisTop={null}
        axisRight={null}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "abv",
          legendPosition: "middle",
          legendOffset: -40
        }}
      />
      </div>
  );
}

export default App;
