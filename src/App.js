// import { useEffect, useState } from 'react'
import './App.css';
import { Bar } from '@nivo/bar'
import data from './data.js'

function App() {
  // const [dat, setData] = useState(null)
  // const url = 'https://api.punkapi.com/v2/beers'

  // useEffect(() => {
  //   fetch(url)
  //     .then(res => res.json())
  //     .then(json => {
  //       console.log(json)    
  // })
  // },[])

  return (

    <div className="App">
  
      <Bar
        width={500}
        height={400}
        data={data}
        keys={["degress"]}
        indexBy="day"
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
          legend: "degrees",
          legendPosition: "middle",
          legendOffset: -40
        }}
      />
      </div>
  );
}

export default App;
