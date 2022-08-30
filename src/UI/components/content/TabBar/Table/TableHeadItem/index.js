import React from 'react'
import styled from 'styled-components'

const StyledTableHeadItem = styled.div`
  text-align: center;
  font-weight: 600;
  width: 100px;
`

const TableHeadItem = ({ name }) => {
  return <StyledTableHeadItem>{name}</StyledTableHeadItem>
}

export default TableHeadItem
