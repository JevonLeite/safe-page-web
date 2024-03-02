export const TOAST_ANIMATION = {
  hidden: { x: '100vh', opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      duration: 0.6,
      mass: 0.5,
    },
  },
  exit: { x: '100vh', opacity: 0 },
}
