import React from 'react'
import { TABLE_DATA, TABLE_TITLES } from '../../../../../constants/TabBar'
import { StyledTableCell, StyledTableContainer } from './views'

const preparedData = TABLE_DATA.map((person) => Object.values(person))

console.log(preparedData)

const Table = () => {
  return (
    <StyledTableContainer>
      {TABLE_TITLES.map((title, index) => (
        <StyledTableCell key={index} font={'700'}>
          {title}
        </StyledTableCell>
      ))}
      {preparedData.map((el, index, array) => (
        <>
          <StyledTableCell key={index}>{el[0]}</StyledTableCell>
          <StyledTableCell key={index}>{el[1]}</StyledTableCell>
          <StyledTableCell key={index}>{el[2]}</StyledTableCell>
          <StyledTableCell key={index}>{el[3]}</StyledTableCell>
          <StyledTableCell key={index}>{el[4]}</StyledTableCell>
          <StyledTableCell key={index}>{el[5]}</StyledTableCell>
          <StyledTableCell key={index}>{el[6]}</StyledTableCell>
          <StyledTableCell key={index}>{el[7]}</StyledTableCell>
        </>
      ))}
    </StyledTableContainer>
  )
}

export default Table
