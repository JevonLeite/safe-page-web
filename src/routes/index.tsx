import { Routes, Route } from "react-router-dom"

import Landing from '~/pages/Landing'
import Safe from '~/pages/Safe'

export default function RoutesControl() {
  return (
    <Routes>
      <Route index element={<Landing />} />
      <Route path='/' element={<Landing />} />

      <Route path='/safe' element={<Safe />} />
    </Routes>
  )
}
