import React from 'react'
import {
  StyledTableContentCell,
  StyledTableContainer,
  StyledTableHeadCell,
} from './views'

const Table = ({ data, titles }) => {
  const preparedData = data.map((person) => Object.values(person))

  return (
    <StyledTableContainer dataSize={data.length} titleSize={titles.length}>
      {titles.map((title, index) => (
        <StyledTableHeadCell key={index}>{title}</StyledTableHeadCell>
      ))}
      {preparedData.map((el) =>
        el.map((person, index) => (
          <StyledTableContentCell key={index}>{person}</StyledTableContentCell>
        ))
      )}
    </StyledTableContainer>
  )
}

export default Table
