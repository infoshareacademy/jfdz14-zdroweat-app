import React from 'react'
import Piechart from './Piechart'
import Barchart from './Barchart'
import Map from './Map'
import DashboardText from './DashboardText'
import styles from './Dashboard.module.css'

import BasicContainer from './BasicContainer'
import SimpleLineChart from './SimpleLineChart'
import TinyBarChart from './TinyBarChart'
import BasicContainerTwo from './BasicContainerTwo'
// icons
import Favorite from '@material-ui/icons/Favorite'
import FaceIcon from '@material-ui/icons/Face'
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle'
import StackedAreaChart from './StackedAreaChart'

const DashboardWrapper = () => {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.basic}>
          <BasicContainer
            title="UŻYTKOWNICY"
            text="1845"
            data={
              <FaceIcon className={styles.faceIcon} style={{ fontSize: 60 }} />
            }
          />
        </div>

        <div className={styles.basicContainerTwo}>
          <BasicContainerTwo title="TOP PRZEPISY" data={<TinyBarChart />} />
        </div>

        <div className={styles.basic}>
          <BasicContainer
            title="ODWIEDZAJĄCY"
            text="567"
            data={
              <SupervisedUserCircleIcon
                className={styles.userIcon}
                style={{ fontSize: 60 }}
              />
            }
          />
        </div>
        <div className={styles.basicContainerTwo}>
          <BasicContainerTwo
            title="ZADOWOLENI UŻYTKOWNICY"
            data={<Piechart />}
          />
        </div>
      </div>

      <div className={styles.thirdContainer}>
        <div className={styles.column2}>
          <DashboardText
            className={styles.containerTitle}
            text="Z naszej aplikacji co roku korzysta co raz więcej osób!"
          />
        </div>
        <div className={styles.column}>
          <StackedAreaChart />
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.basic}>
          <BasicContainer
            title="ULUBIONE"
            text="2555"
            data={
              <Favorite
                className={styles.favoriteIcon}
                style={{ fontSize: 60 }}
              />
            }
          />
        </div>

        <div className={styles.basicContainerTwo}>
          <BasicContainerTwo title="AKTYWNOŚĆ" data={<SimpleLineChart />} />
        </div>

        <div className={styles.basic}>
          <BasicContainer
            title="ODWIEDZAJĄCY"
            text="567"
            data={
              <SupervisedUserCircleIcon
                className={styles.userIcon}
                style={{ fontSize: 60 }}
              />
            }
          />
        </div>
        <div className={styles.basicContainerTwo}>
          <BasicContainerTwo
            title="ZADOWOLENI UŻYTKOWNICY"
            data={<Piechart />}
          />
        </div>
      </div>

      <div className={styles.firstContainer}>
        <DashboardText
          className={styles.containerTitle}
          text="ZdrowEat jest dostępny na całym świecie!"
          text2=" Zobacz, skąd pochodzą nasi użytkownicy."
        />

        <div className={styles.map}>
          <Map />
        </div>
      </div>
    </div>
  )
}

export default DashboardWrapper
