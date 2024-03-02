import { IToastMessage } from '~/hooks/toast'

import Toast from './Toast'

import { ToastsContainer } from './styles'

interface IToastContainerProps {
  messages: IToastMessage[]
}

export default function Toasts({ messages }: IToastContainerProps) {
  return (
    <ToastsContainer>
      {messages.map((message) => (
        <Toast key={message.id} message={message} />
      ))}
    </ToastsContainer>
  )
}
