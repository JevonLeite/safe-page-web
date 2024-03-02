import styled, { css } from 'styled-components'

export const Container = styled.div`
  width: 100%;
`
export const Card = styled.div`
  ${({ theme }) => css`
    padding: 10px 50px;
    color: ${theme.colors.white};
  `}
`
