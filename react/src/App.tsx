import { lazy, Suspense } from 'react'
import './App.css'
function App() {
  const Carousal = lazy(() => import('../components/Carousal'))
  const Toast = lazy(() => import('../components/Toast'))
  const Accordian = lazy(() => import('../components/Accordian'))
  const NestedComment = lazy(() => import('../components/NestedComment'))
  const ToDoList = lazy(() => import('../components/ToDoList'))

  const accordianComps = [{
    key: 0,
    title: 'First',
    component: <p>First Component</p>
  }, {
    key: 1,
    title: 'Second',
    component: <p>Second Component</p>
  }, {
    key: 2,
    title: 'Third',
    component: <p>Third Component</p>
  }, {
    key: 3,
    title: 'Fourth',
    component: <p>Fourth Component</p>
  }]
  return (
    <Suspense fallback={<p>loading</p>} >
      {/* <Toast message={'alert'} duration={5000} position={'bottom'} type={'success'} /> */}
      {/* <Accordian accordianComps={accordianComps}/> */}
      <ToDoList />
    </Suspense>
  )
}

export default App
