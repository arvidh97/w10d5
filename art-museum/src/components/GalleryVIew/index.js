import { useParams, Redirect } from "react-router-dom";

const GalleryView = props => {
    let { galleryId } = useParams();
    const {galleries} = props;
    // console.log(galleries)
    const gallery = galleries.find(el => el.galleryid === parseInt(galleryId));
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
        </div>
    )
}

export default GalleryView;
