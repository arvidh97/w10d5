import { useParams, Redirect, Route } from "react-router-dom";
import ArtImageTile from "../ArtImageTile";

const GalleryView = props => {
    let { galleryId } = useParams();
    const {galleries} = props;
    // console.log(galleries)
    const gallery = galleries.find(el => el.galleryid === parseInt(galleryId));

    // console.log(gallery)
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
            <Route path="/galleries/:galleryId" >
                {tiles}
            </Route>
        </div>
    )
}

export default GalleryView;
