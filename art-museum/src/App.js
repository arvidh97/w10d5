import harvardArt from "./data/harvardArt";
import GalleryNavigation from "./components/GalleryNavigation";
import GalleryView from "./components/GalleryVIew";
import { Route } from "react-router-dom";
import { Redirect, Switch } from "react-router-dom/cjs/react-router-dom.min";
// console.log(harvardArt);

function App() {
  return (
    <div className="page-wrapper">
        <GalleryNavigation galleries={harvardArt.records}/>
        <Switch>
        {/* <Route path='/error'>
            <h2>Page Not Found</h2>
        </Route> */}
        <Route path="/galleries/:galleryId">
            <GalleryView galleries={harvardArt.records}/>
        </Route>
        <Route path='/:error'>
          <h2>Page Not Found</h2>
        </Route>
        <Route path="/">
          <h2>Harvard Art Museum</h2>
          <p>Look, but Don't Touch. Please select a Gallery in the navigation bar.</p>
        </Route>
        {/* <Redirect to='/error'/> */}
        </Switch>
    </div>
  );
}

export default App;
