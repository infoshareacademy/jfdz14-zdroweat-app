import React from 'react'
import { DATABASE_URL } from '../../index'
import { BarChart, Bar, Legend } from 'recharts'

class TinyBarChart extends React.Component {
  state = {
    meat: 1,
    wege: 1,
    vegan: 1,
  }

  fetchData = () => {
    fetch(`${DATABASE_URL}/recipes.json`)
      .then((response) => response.json())
      .then((recipes) => {
        const arrayRecipes = recipes
          ? Object.keys(recipes).map((key) => {
              return {
                id: key,
                ...recipes[key],
              }
            })
          : []
        const meatCount = arrayRecipes
          .map((item) => item.type)
          .filter((filtered) => filtered.includes('meat')).length
        const wegeCount = arrayRecipes
          .map((item) => item.type)
          .filter((filtered) => filtered.includes('wege')).length

        const veganCount = arrayRecipes
          .map((item) => item.type)
          .filter((filtered) => filtered.includes('vegan')).length

        this.setState({
          meat: meatCount,
          wege: wegeCount,
          vegan: veganCount,
        })
      })
  }

  componentDidMount() {
    this.fetchData()
  }
  render() {
    const data = [
      { name: 'Wege', wege: this.state.wege },
      { name: 'Mięsko', mięsko: this.state.meat },
      { name: 'wegańskie', wegańskie: this.state.vegan },
    ]
    return (
      <BarChart
        width={250}
        height={160}
        data={data}
        style={{
          fontSize: '1rem',
        }}
      >
        <Bar barSize={25} dataKey="wege" fill="#BB8588" />
        <Bar barSize={25} dataKey="mięsko" fill="#D6CE93" />
        <Bar barSize={25} dataKey="wegańskie" fill="#D8A48F" />
        <Legend
          verticalAlign="bottom"
          align="center"
          style={{ marginTop: '2rem' }}
        />
      </BarChart>
    )
  }
}
export default TinyBarChart
