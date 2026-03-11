import { lazy, Suspense, useState } from "react";
import { accordianItems, carouselItems } from "./apps/utils";
import "./App.css";

// const Accordian = lazy(() => import("./apps/accordian/Accordian"));
const Carousel = lazy(() => import("./apps/carousel/Carousel"));
function App() {
  const [activeAccordian, setActiveAccordian] = useState(0);

  return (
    <Suspense fallback={<p>loading....</p>}>
      {/* <Accordian
        accordianItems={accordianItems}
        activeAccordian={activeAccordian}
        setActiveAccordian={setActiveAccordian}
      /> */}
      <Carousel carouselItems={carouselItems}/>
    </Suspense>
  );
}

export default App;
