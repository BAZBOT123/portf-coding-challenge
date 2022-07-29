import { useEffect, useState } from 'react'
import './App.css';
import { Bar } from '@nivo/bar'

function App() {
  const [data, setData] = useState([])

  const [formData, setFormData] = useState(
    {
      brewed_before: '',
      brewed_after: '',
      abv: '',
    }
  )

  const sliceDay = (date) => {
    if (date !== '') {
      const year = date.substring(0, 4)
      const month = date.substring(5, 7)
      return month + '-' + year
    }
  }

  let url = `https://api.punkapi.com/v2/beers?`
  if (formData.brewed_after !== '' && formData.brewed_before !== '') {
    url = url + `brewed_after=${sliceDay(formData.brewed_after)}&brewed_before=${sliceDay(formData.brewed_before)}&`
  }

  if (formData.abv !== '') {
    url = url + `abv_gt=${formData.abv - 1}&abv_lt=${formData.abv + 1}&`
  }

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(json => {
        setData(json)
      })

  }, [url])

  console.log('barry', url)

  const handleChange = (event) => {
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value
      }
    })
  }

  const findMaxabv = () => {
    const maxAbv = data.map(beerItem => beerItem.abv)
    return (Math.max(...maxAbv))
  }


  console.log(data)
  return (

    <div className="App">

      <nav>
        <label htmlFor="brewed_before">brewed before</label>
        <br />
        <input
          type="date"
          pattern="\d{4}-\d{2}-\d{2}"
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
          pattern="\d{4}-\d{2}-\d{2}"
          id="brewed_after"
          name="brewed_after"
          value={formData.brewed_after}
          onChange={handleChange}
        />

        <br />
        <label htmlFor="abv">Filter by abv<br/>{formData.abv}</label>
        <br />
        <input
          type="range"
          name="abv"
          id="abv"
          min='0'
          max={findMaxabv()}
          step='1'
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
