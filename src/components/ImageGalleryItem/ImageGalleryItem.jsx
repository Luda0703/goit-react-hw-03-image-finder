import PropTypes from 'prop-types';
import {ImageGalleryItemLi, ImageGalleryItemImage} from './ImageGalleryItem.styled'

const ImageGalleryItem = ({webformatURL, tags}) => {
    return (
        <>
            <ImageGalleryItemLi>
                <ImageGalleryItemImage src={webformatURL} alt={tags} />
            </ImageGalleryItemLi>
        </>
    )  
}

ImageGalleryItem.propTypes = {
    webformatURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
}

export default ImageGalleryItem;