import { lazy, Suspense, useState } from "react";
import { accordianItems, carouselItems } from "./apps/utils";
import "./App.css";

const Accordian = lazy(() => import("./apps/accordian/Accordian"));
const Carousel = lazy(() => import("./apps/carousel/Carousel"));
const Toast = lazy(() => import("./apps/toast/Toast"));
const Comment = lazy(() => import("./apps/nestedComment/Comment"));
const Rating = lazy(() => import("./apps/rating/Rating"));
const ToDoList = lazy(() => import("./apps/toDoList/ToDo"));
const ListHighlight = lazy(() => import("./apps/highlight/ListHighlight"));
const Frame = lazy(() => import("./apps/photoGallery/Frame"));
const NewsFeed = lazy(() => import("./apps/newsFeed/Feed"));
const ProgressBar = lazy(() => import("./apps/progressBar/ProgressBar"));
const BreadCrumb = lazy(() => import("./apps/breadCrumb/BreadCrumb"));

function App() {
  const [activeAccordian, setActiveAccordian] = useState(0);

  return (
    <Suspense fallback={<p>loading....</p>}>
      {/* <Accordian
        accordianItems={accordianItems}
        activeAccordian={activeAccordian}
        setActiveAccordian={setActiveAccordian}
      /> */}
      {/* <Carousel carouselItems={carouselItems}/> */}
      {/* <Toast content={<p>Toast</p>} position={'bottom'} notificationTime={3000}/> */}
      {/* <Comment /> */}
      {/* <Rating/> */}
      {/* <ToDoList /> */}
      {/* <ListHighlight/> */}
      {/* <Frame /> */}
      {/* <NewsFeed/> */}
      <ProgressBar/>
      {/* <BreadCrumb /> */}
    </Suspense>
  );
}

export default App;
