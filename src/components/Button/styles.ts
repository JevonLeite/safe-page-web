import styled, { css } from 'styled-components'
import { lighten, shade, tint } from 'polished'

interface IButtonProps {
  disabled?: boolean
  color: string
}

export const Container = styled.button<IButtonProps>`
  ${({ disabled, color }) => css`
    display: flex;
    align-items: center;
    justify-content: center;

    margin: 8px;

    width: 164px;
    height: 42px;

    border-radius: 4px;

    background-color: ${color};

    ${!disabled
      ? css`
          &:hover {
            background-color: ${shade(0.2, color)};
          }
        `
      : css`
          background-color: ${tint(0.3, color)};
          cursor: not-allowed;
        `}
  `}
`

export const TextContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 75%;
  height: 100%;
`

export const Text = styled.span`
  ${({ theme }) => css`
    font-size: 1rem;
    font-weight: 500;
    color: ${theme.colors.white};
  `}
`

export const IconContainer = styled.div<IButtonProps>`
  ${({ color }) => css`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 25%;
    height: 100%;

    border-left-width: 1px;
    border-left-style: solid;
    border-left-color: ${lighten(0.4, color)};

    svg {
      color: white;
    }
  `}
`
