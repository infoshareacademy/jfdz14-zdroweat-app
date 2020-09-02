import React from 'react'
import { DATABASE_URL } from '../../index'
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend } from 'recharts'
// const data = [
//   { name: "II", "dodane w tym roku": 20 },
//   { name: "IV", "dodane w tym roku": 40 },
//   { name: "VI", "dodane w tym roku": 50 },
//   { name: "VIII", "dodane w tym roku": 60 },
//   { name: "X", "dodane w tym roku": 80 },
//   { name: "XII", "dodane w tym roku": 100 },
// ];

class SimpleLineChart extends React.Component {
  state = {
    newRecipes: 1,
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
        const newRecipesCount = arrayRecipes
          .map((item) => item.id)
          .filter((item) => typeof item === 'string' && item !== '').length
        console.log(newRecipesCount)
        this.setState({
          newRecipes: newRecipesCount,
        })
      })
  }

  componentDidMount() {
    this.fetchData()
  }

  render() {
    const data = [
      { 'dodane w tym roku': 0 },
      { name: '2020', 'dodane w tym roku': this.state.newRecipes },
    ]

    return (
      <LineChart
        width={250}
        height={160}
        data={data}
        margin={{ top: 10, right: 10, left: 0, bottom: 10 }}
      >
        <XAxis dataKey="name" />
        <YAxis />

        <Tooltip />
        <Legend verticalAlign="bottom" align="center" />

        <Line
          strokeWidth={2}
          type="monotone"
          dataKey="dodane w tym roku"
          stroke="#A3A380"
        />
      </LineChart>
    )
  }
}

// const SimpleLineChart = () => {
//   return (
//     <LineChart
//       width={250}
//       height={160}
//       data={data}
//       margin={{ top: 10, right: 10, left: 0, bottom: 10 }}
//     >
//       <XAxis dataKey="name" />
//       <YAxis />

//       <Tooltip />
//       <Legend verticalAlign="bottom" align="center" />

//       <Line
//         strokeWidth={2}
//         type="monotone"
//         dataKey="dodane w tym roku"
//         stroke="#A3A380"
//       />
//     </LineChart>
//   );
// };

export default SimpleLineChart
