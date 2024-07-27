import React from 'react'
import styles from './Container.module.css'
import { useEffect, useState } from 'react'
import ListOfItems from './ListOfItems'
import HashMap from './HashMap'
import axios from 'axios'

function Container(props) {
  const [data, setData] = useState([])
  const [areas, setAreas] = useState([])

  useEffect(() => {
    async function fetchData() {
      const resultData = await Promise.all([
        axios.get(
          'http://showroom.eis24.me/api/v4/test/meters/?offset=0&limit=50'
        ),
        axios.get('http://showroom.eis24.me/api/v4/test/areas/'),
      ])
      // console.log(resultData[0].data.results)
  
      setData(resultData[0].data.results)
      setAreas(resultData[1].data.results)
    }
    fetchData()
  }, [])

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await fetch(
  //       'http://showroom.eis24.me/api/v4/test/meters/?offset=0&limit=10'
  //     )
  //     const data = await response.json()
  //     setData(data.results)
  //   }
  //   fetchData()
  //   const getAdress = async () => {
  //     const response = await fetch(
  //       'http://showroom.eis24.me/api/v4/test/areas/'
  //     )
  //     const adress = await response.json()
  //     setAreas(adress.results)
  //   }
  //   getAdress()
  // }, [])

  // useEffect(() => {
  //   const getAdress = async () => {
  //     const response = await fetch(
  //       'http://showroom.eis24.me/api/v4/test/areas/'
  //     )
  //     const adress = await response.json()
  //     setAreas(adress.results)
  //   }
  //   getAdress()
  // }, [])

  useEffect(() => {
    console.log('Компонент Container отрендерен!')
  }, [])

  return (
    <div className={styles.Container}>
      <ListOfItems data={data} areas={areas} />
      <HashMap data={data} areas={areas} />
    </div>
  )
}

export default Container
