import { lazy, Suspense } from 'react'
import './App.css'
function App() {
  const Carousal = lazy(() => import('../components/Carousal'))
  const Toast = lazy(() => import('../components/Toast'))
  return (
    <Suspense fallback={<p>loading</p>} >
      <Toast message={'alert'} duration={5000} position={'bottom'} type={'success'} />
    </Suspense>
  )
}

export default App
