import styled from 'styled-components'

export const StyledTableContainer = styled.div`
  display: grid;
  border: 0.1px solid #d3d3d3;
  background: aliceblue;
  box-shadow: 0.1px 0.1px 1px #d3d3d3;
  width: 800px;
  text-align: center;
  grid-template: repeat(10, 1fr) / repeat(8, 1fr);
  align-items: center;
`

export const StyledTableCell = styled.div`
  text-align: center;
  display: grid;
  width: 100px;
  height: 50px;
  align-items: center;
  border-bottom: 0.1px solid #d3d3d3;
  font-weight: ${({ font }) => font || '400'};
`
