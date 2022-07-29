import { useEffect, useState } from 'react'
import './App.css';
import { Bar } from '@nivo/bar'

function App() {
  const [data, setData] = useState([])
  const [maxabv, setMaxabv] = useState([])
  const url = 'https://api.punkapi.com/v2/beers'
  const [formData, setFormData] = useState(
    {
      brewed_before: "",
      brewed_after: "",
      abv: "",
    }
  )

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(json => {
        setData(json)
      })
  }, [])

  const handleChange = (event) => {
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value
      }
    })

  }

  console.log("hi", formData)
  return (

    <div className="App">

      <nav>
        <label htmlFor="brewed_before">brewed before</label>
        <br />
        <input
          type="date"
          id="brewed_before"
          name="brewed_before"
          value={formData.brewed_before}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="brewed_after">brewed after</label>
        <br />
        <input
          type="date"
          id="brewed_after"
          name="brewed_after"
          value={formData.brewed_after}
          onChange={handleChange}
        />

        <br />
        <input
          type="range"
          name="abv"
          min='0'
          max='25'
          step='0.1'
          value={formData.abv}
          onChange={handleChange}
        ></input>
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
