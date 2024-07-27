import React from 'react'
import { useState, useEffect } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import Item from './Item'

function ListOfItems({ data, areas }) {
  useEffect(() => {
    console.log('Компонент ListOfItems отрендерен!')
  }, [])

  return (
    <div>
      {data.map(
        (item) => {
          const iD = areas.find((area) => area.id === item.area.id)
          // console.log(iD.id)

          const itemInfo = {
            count: data.indexOf(item) + 1,
            id: item.id,
            installation_date: item.installation_date,
            is_automatic: item.is_automatic,
            type: item._type[0],
            initial_values: item.initial_values,
            area: iD,
          }
          return <Item key={item.id} {...itemInfo} />
        } // map
      )}
    </div>
  )
}

export default ListOfItems
