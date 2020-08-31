import React from 'react'
import CountUp from 'react-countup'

import Piechart from './Piechart'
import Map from './Map'
import DashboardText from './DashboardText'
import styles from './Dashboard.module.css'
import BasicContainer from './BasicContainer'
import SimpleLineChart from './SimpleLineChart'
import TinyBarChart from './TinyBarChart'
import BasicContainerTwo from './BasicContainerTwo'
import { DATABASE_URL } from '../../index'

// icons
import AttachMoneyIcon from '@material-ui/icons/AttachMoney'
import Restaurant from '@material-ui/icons/Restaurant'
import TimerIcon from '@material-ui/icons/Timer'

class DashboardWrapper extends React.Component {
  state = {
    recipesCount: 1,
    minTime: 1,
    minPrice: 1,
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

        const minimumTime = Math.min.apply(
          null,
          arrayRecipes.map((item) => item.readyInMinutes),
        )
        const minimumPrice = Math.min.apply(
          null,
          arrayRecipes.map((item) => item.price),
        )

        this.setState({
          recipesCount: arrayRecipes.length,
          minTime: minimumTime,
          minPrice: minimumPrice,
        })
      })
  }

  componentDidMount() {
    this.fetchData()
  }

  render() {
    return (
      <div>
        <div className={styles.container}>
          <BasicContainer
            title="NASZE PRZEPISY"
            text={<CountUp duration={3} end={this.state.recipesCount} />}
            data={
              <Restaurant
                className={styles.faceIcon}
                style={{ fontSize: 40, color: '#DDBEA9' }}
              />
            }
          />
          <BasicContainer
            title="MINIMALNY CZAS"
            text={<CountUp duration={3} end={this.state.minTime} />}
            data={
              <TimerIcon
                className={styles.favoriteIcon}
                style={{ fontSize: 40, color: '#bb8588' }}
              />
            }
          />

          <BasicContainer
            title="NAJNIŻSZA CENA"
            text={<CountUp duration={3} end={this.state.minPrice} />}
            data={
              <AttachMoneyIcon
                className={styles.userIcon}
                style={{ fontSize: 40, color: '#a3a380' }}
              />
            }
          />
        </div>

        <div className={styles.secondContainer}>
          <div className={styles.column2}>
            <DashboardText
              className={styles.containerTitleTwo}
              text="Z naszej aplikacji co roku korzysta coraz więcej osób!"
            />
            <div className={styles.teamSvg}></div>
          </div>
        </div>

        <div className={styles.container}>
          <BasicContainerTwo title="NOWE PRZEPISY" data={<SimpleLineChart />} />
          <BasicContainerTwo
            title="TOP PRZEPISY"
            data={
              <TinyBarChart
                wege={this.state.wege}
                vegan={this.state.vegan}
                meat={this.state.meat}
              />
            }
          />

          <BasicContainerTwo
            title="ZADOWOLENI UŻYTKOWNICY"
            data={<Piechart />}
          />
        </div>

        <div className={styles.mapContainer}>
          <DashboardText
            className={styles.mapText}
            text="ZdrowEat jest dostępny na całym świecie!"
          />

          <Map />
        </div>
      </div>
    )
  }
}
export default DashboardWrapper
