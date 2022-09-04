import React from 'react'
import {
  StyledTableContentCell,
  StyledTableContainer,
  StyledTableHeadCell,
} from './views'

const Table = ({ data, titles }) => {
  return (
    <StyledTableContainer dataSize={data.length} titleSize={titles.length}>
      {titles.map((title, index) => (
        <StyledTableHeadCell key={index}>{title}</StyledTableHeadCell>
      ))}
      {data.map((el) =>
        Object.values(el).map((person, index) => (
          <StyledTableContentCell key={index}>{person}</StyledTableContentCell>
        ))
      )}
    </StyledTableContainer>
  )
}

export default Table
