import styled from 'styled-components'

export const StyledTableContainer = styled.div`
  display: grid;
  grid-auto-flow: row;
  max-height: 700px;
  border: 0.1px solid #d3d3d3;
  background: aliceblue;
  box-shadow: 0.1px 0.1px 1px #d3d3d3;
`
export const StyledTableHead = styled.div`
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  height: 50px;
  border-bottom: 0.1px solid #d3d3d3;
`

export const StyledTableBody = styled.div`
  text-align: center;
  display: grid;
  grid-auto-flow: row;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  width: 60px;
`

export const StyledTableCell = styled.div`
  text-align: center;
  display: grid;
  width: 100px;
  height: 50px;
  align-items: center;
  border-bottom: 0.1px solid #d3d3d3;
`
