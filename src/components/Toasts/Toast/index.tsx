import { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import {
  FiInfo,
  FiXCircle,
  FiCheckCircle,
  FiAlertTriangle,
} from 'react-icons/fi'

import { IToastMessage, useToast } from '~/hooks/toast'

import { TOAST_ANIMATION } from './animations'
import { AnimatedToastContainer } from './styles'

interface IToastProps {
  message: IToastMessage
}

const icons = {
  info: <FiInfo size={24} />,
  success: <FiCheckCircle size={24} />,
  error: <FiXCircle size={24} />,
  warning: <FiAlertTriangle size={24} />,
}

export default function Toast({
  message: { id, type, title, description },
}: IToastProps) {
  const { removeToast } = useToast()
  const [isShown, setIsShown] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      if (isShown) {
        setIsShown(false)
      }

      return () => removeToast(id)
    }, 4000)
  }, [removeToast, isShown, id])

  return (
    <AnimatePresence>
      {isShown && (
        <AnimatedToastContainer
          key={id}
          type={type}
          variants={TOAST_ANIMATION}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {icons[type]}

          <div>
            <strong>{title}</strong>
            <p>{description}</p>
          </div>
        </AnimatedToastContainer>
      )}
    </AnimatePresence>
  )
}
