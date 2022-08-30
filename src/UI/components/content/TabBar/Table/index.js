import React from 'react'
import { TABLE_DATA, TABLE_TITLES } from '../../../../../constants/TabBar'
import TableHeadItem from './TableHeadItem'
import {
  StyledTableBody,
  StyledTableCell,
  StyledTableContainer,
  StyledTableHead,
} from './views'

const Table = () => {
  return (
    <StyledTableContainer>
      <StyledTableHead>
        {TABLE_TITLES.map((title) => (
          <TableHeadItem key={title.id} name={title.name} />
        ))}
      </StyledTableHead>
      <StyledTableBody>
        {TABLE_DATA.map((person) => (
          <>
            <StyledTableCell>{person.name}</StyledTableCell>
            <StyledTableCell>{person.height}</StyledTableCell>
            <StyledTableCell>{person.mass}</StyledTableCell>
            <StyledTableCell>{person.hair_color}</StyledTableCell>
            <StyledTableCell>{person.skin_color}</StyledTableCell>
            <StyledTableCell>{person.eye_color}</StyledTableCell>
            <StyledTableCell>{person.birth_year}</StyledTableCell>
            <StyledTableCell>{person.gender}</StyledTableCell>
          </>
        ))}
      </StyledTableBody>
    </StyledTableContainer>
  )
}

export default Table
