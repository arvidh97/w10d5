import { Link, useParams } from "react-router-dom/cjs/react-router-dom.min";

const ArtDescription = props => {
    let {galleryId, artId} = useParams();
    return (
        <div>
            <Link to={`/galleries/${galleryId}`}>Back to Gallery</Link>
        </div>
    )
}
export default ArtDescription;