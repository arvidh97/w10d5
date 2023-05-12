import { Link } from "react-router-dom";

const ArtImageTile = props => {
    const {art, galleryId} = props;
    return (
        <Link to={`/galleries/${galleryId}/art/${art.id}`}>
            <img src={art.images[0].baseimageurl} alt="okay"/>
        </Link>
    )
};

export default ArtImageTile;
