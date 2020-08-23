import React from 'react'
import CountUp from 'react-countup'

import Piechart from './Piechart'
import Map from './Map'
import DashboardText from './DashboardText'
import styles from './Dashboard.module.css'
import StackedAreaChart from './StackedAreaChart'
import BasicContainer from './BasicContainer'
import SimpleLineChart from './SimpleLineChart'
import TinyBarChart from './TinyBarChart'
import BasicContainerTwo from './BasicContainerTwo'
import { DATABASE_URL } from '../../index'
// icons
import Favorite from '@material-ui/icons/Favorite'
import FaceIcon from '@material-ui/icons/Face'
import ShareIcon from '@material-ui/icons/Share'
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle'

class DashboardWrapper extends React.Component {
  state = {
    recipesCount: 1,
    favouritesCount: 1,
    guestsCount: 1,
    shareCount: 1,
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
        this.setState({
          recipesCount: arrayRecipes.length,
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
            title="PRZEPISY"
            text={<CountUp duration={6} end={this.state.recipesCount} />}
            data={
              <FaceIcon
                className={styles.faceIcon}
                style={{ fontSize: 40, color: '#DDBEA9' }}
              />
            }
          />
          <BasicContainer
            title="ULUBIONE"
            text={<CountUp duration={3} end={2555} />}
            data={
              <Favorite
                className={styles.favoriteIcon}
                style={{ fontSize: 40, color: '#bb8588' }}
              />
            }
          />

          <BasicContainer
            title="ODWIEDZAJĄCY"
            text={<CountUp duration={3} end={567} />}
            data={
              <SupervisedUserCircleIcon
                className={styles.userIcon}
                style={{ fontSize: 40, color: '#a3a380' }}
              />
            }
          />
          <BasicContainer
            title="UDOSTĘPNIONO"
            text={<CountUp end={555} duration={3} />}
            data={<ShareIcon style={{ fontSize: 40, color: '#D8A48F' }} />}
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
          <div className={styles.column}>
            <StackedAreaChart />
          </div>
        </div>

        <div className={styles.container}>
          <BasicContainerTwo title="NOWE PRZEPISY" data={<SimpleLineChart />} />
          <BasicContainerTwo title="TOP PRZEPISY" data={<TinyBarChart />} />

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

// const DashboardWrapper = () => {
//   return (
//     <div>
//       <div className={styles.container}>
//         <BasicContainer
//           title="Przepisy"
//           text={<CountUp duration={3} end={1845} />}
//           data={
//             <FaceIcon
//               className={styles.faceIcon}
//               style={{ fontSize: 40, color: '#DDBEA9' }}
//             />
//           }
//         />
//         <BasicContainer
//           title="ULUBIONE"
//           text={<CountUp duration={3} end={2555} />}
//           data={
//             <Favorite
//               className={styles.favoriteIcon}
//               style={{ fontSize: 40, color: '#bb8588' }}
//             />
//           }
//         />

//         <BasicContainer
//           title="ODWIEDZAJĄCY"
//           text={<CountUp duration={3} end={567} />}
//           data={
//             <SupervisedUserCircleIcon
//               className={styles.userIcon}
//               style={{ fontSize: 40, color: '#a3a380' }}
//             />
//           }
//         />
//         <BasicContainer
//           title="UDOSTĘPNIONO"
//           text={<CountUp end={555} duration={3} />}
//           data={<ShareIcon style={{ fontSize: 40, color: '#D8A48F' }} />}
//         />
//       </div>

//       <div className={styles.secondContainer}>
//         <div className={styles.column2}>
//           <DashboardText
//             className={styles.containerTitleTwo}
//             text="Z naszej aplikacji co roku korzysta coraz więcej osób!"
//           />
//           <div className={styles.teamSvg}></div>
//         </div>
//         <div className={styles.column}>
//           <StackedAreaChart />
//         </div>
//       </div>

//       <div className={styles.container}>
//         <BasicContainerTwo title="NOWE PRZEPISY" data={<SimpleLineChart />} />
//         <BasicContainerTwo title="TOP PRZEPISY" data={<TinyBarChart />} />

//         <BasicContainerTwo title="ZADOWOLENI UŻYTKOWNICY" data={<Piechart />} />
//       </div>

//       <div className={styles.mapContainer}>
//         <DashboardText
//           className={styles.mapText}
//           text="ZdrowEat jest dostępny na całym świecie!"
//         />

//         <Map />
//       </div>
//     </div>
//   )
// }

export default DashboardWrapper
