import { lazy, Suspense, useState } from 'react';
import { accordianItems } from './apps/utils';
import './App.css'

const Accordian = lazy(() => import('./apps/accordian/Accordian'));
function App() {

  const [activeAccordian, setActiveAccordian] = useState(0);

  return (
    <Suspense fallback={<p>loading....</p>}>
      <Accordian accordianItems={accordianItems} activeAccordian={activeAccordian} setActiveAccordian={setActiveAccordian} />
    </Suspense>
  )
}

export default App
