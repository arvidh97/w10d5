import {NavLink} from 'react-router-dom';
import "./GalleryNavigation.css"

const GalleryNavigation = props => {
    const {galleries} = props;
    const galleryList = galleries.map(gallery => {
        return (
            <li key={gallery.id}>
            <NavLink to={`/galleries/${gallery.id}`}>
                {gallery.name}
            </NavLink>
            </li>
        )
    })
    // console.log(galleries)
    return(
        <nav>
        <h1>Galleries</h1>
        <NavLink to='/'>Homepage</NavLink>
        <ul>
            {galleryList}
        </ul>
        </nav>
    )
}

export default GalleryNavigation;
