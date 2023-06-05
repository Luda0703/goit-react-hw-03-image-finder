import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import PropTypes from 'prop-types';
import {ImageGalleryUl} from './ImageGallery.styled'

const ImageGallery = ({ images }) => {

    return (
        <ImageGalleryUl>
             {images.map(({id, webformatURL, tags }) => (
             <ImageGalleryItem 
             key={id} 
             webformatURL={webformatURL} 
             tags={tags}
             />
             ))}
        </ImageGalleryUl>
    )
}
ImageGallery.propTypes = {
    images: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            webformatURL: PropTypes.string.isRequired,
            tags: PropTypes.string.isRequired,
        }).isRequired
    ).isRequired
}

export default ImageGallery;