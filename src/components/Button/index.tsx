import { ButtonHTMLAttributes, ComponentType } from 'react'
import { useTheme } from 'styled-components'
import { IconBaseProps } from 'react-icons'

import Loading from '../Loading'

import { Container, Text, TextContainer, IconContainer } from './styles'

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string
  isDisabled?: boolean
  isLoading?: boolean
  icon?: ComponentType<IconBaseProps>
  color?: string
}

export default function Button({
  text,
  isDisabled = false,
  isLoading = false,
  icon: Icon,
  color,
  ...props
}: IButtonProps) {
  const { colors } = useTheme()

  return (
    <Container
      disabled={isDisabled}
      color={color || colors.primary}
      {...props}
    >
      <TextContainer>
        {isLoading ? (
          <Loading loading size="sm" color="#FFFFFF" />
        ) : (
          <Text>{text}</Text>
        )}
      </TextContainer>
      {Icon && (
        <IconContainer color={color || colors.primary}>
          <Icon size={18} />
        </IconContainer>
      )}
    </Container>
  )
}
