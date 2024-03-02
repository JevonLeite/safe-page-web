import { variants } from './variants'
import { LoadingAnimation } from './styles'

interface ILoadingProps {
  size: 'sm' | 'md' | 'lg'
  loading: boolean
  color?: string
}

export default function Loading({
  size = 'md',
  loading,
  color = '#276c8d',
}: ILoadingProps) {
  return (
    <LoadingAnimation color={color} loading={loading} {...variants[size]} />
  )
}
