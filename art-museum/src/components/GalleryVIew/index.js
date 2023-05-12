import { useParams, Redirect, Route } from "react-router-dom";
import ArtImageTile from "../ArtImageTile";
import ArtDescription from "../ArtDescription";
import { Switch } from "react-router-dom/cjs/react-router-dom.min";

const GalleryView = props => {
    let { galleryId } = useParams();
    const {galleries} = props;
    // console.log(galleries)
    const gallery = galleries.find(el => el.galleryid === parseInt(galleryId));

    console.log(gallery)
    const tiles = gallery.objects.map(obj => {
        return (
            <ArtImageTile key={obj.id} art={obj} galleryId={galleryId}/>
        )
    }); // array of objects, each has a baseimageurl key

    if (!gallery) {
        return (
            <Redirect to='/not-found'></Redirect>
        )
    }
    // console.log(gallery)
    return (
        <div>
            <h1>Hello from Gallery View</h1>
            <h2>{gallery.name}</h2> 
            <Switch>
            <Route path="/galleries/:galleryId/art/:artId">
                <ArtDescription gallery = {gallery}>
                </ArtDescription>
            </Route>
            <Route path="/galleries/:galleryId" >
                {tiles}
            </Route>
            </Switch>
        </div>
    )
}

export default GalleryView;
