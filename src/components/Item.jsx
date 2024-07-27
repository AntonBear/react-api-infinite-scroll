import React from 'react'
import styles from './Item.module.css'
import { useEffect } from 'react'

function Item({
  count,
  id,
  installation_date,
  is_automatic,
  type,
  initial_values,
  area,
}) {
  useEffect(() => {
    console.log('Компонент Item отрендерен!')
  }, [])
  console.log(typeof area)
  const date = new Date(installation_date)
  const day = ('0' + date.getDate()).slice(-2)
  const month = ('0' + (date.getMonth() + 1)).slice(-2)
  const year = date.getFullYear()

  const formattedDate = `${day}.${month}.${year}`

  return (
    <div className={styles.Item}>
      <div>{count}</div>
      <div>
        {type === 'ColdWaterAreaMeter'
          ? 'ХВС'
          : type === 'HotWaterAreaMeter'
          ? 'ГВС'
          : null}
      </div>
      <div>{formattedDate}</div>
      <div>{is_automatic ? 'нет' : 'да'}</div>
      <div>{initial_values}</div>
      <div>
        {area.house.address} {area.str_number_full}
      </div>
    </div>
  )
}

export default Item
