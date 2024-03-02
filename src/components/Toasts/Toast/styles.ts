import styled, { css } from 'styled-components'
import { motion } from 'framer-motion'
import { tint } from 'polished'

interface IToastProps {
  type: 'info' | 'success' | 'error' | 'warning'
}

export const AnimatedToastContainer = styled(motion.div)<IToastProps>`
  ${({ theme }) => css`
    display: flex;
    align-items: center;

    width: 360px;

    position: relative;
    padding: 16px;
    border-radius: 2px;
    box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);
    border-bottom: solid 6px ${tint(0.25, theme.colors.primary)};

    background-color: ${theme.colors.primary};
    color: ${theme.colors.white};

    z-index: 9;

    & + div {
      margin-top: 8px;
    }

    > svg {
      margin-right: 12px;
    }

    div {
      flex: 1;
      flex-direction: column;
      display: flex;
      justify-content: center;
      margin-left: 4px;

      p {
        margin: 2px 0 4px;
        font-size: 0.8rem;
        font-weight: 500;
        line-height: 16px;
        opacity: 0.8;
      }
    }
  `}
`
