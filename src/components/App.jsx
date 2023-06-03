import React, { Component } from 'react';
// import Notiflix from 'notiflix';
// import axios from 'axios';
import Searchbar from './Searchbar/Searchbar';
import * as Service from '../Service/Service';
import ImageGallery from './ImageGallery/ImageGallery';
// import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';
// import { isVisible } from '@testing-library/user-event/dist/utils';

export class App extends Component {
  state = {
    images: [],
    query: '',
    page: 1,
    isLoading: false,
    isVisible: false,
    isEmpty: false,
    error: null,
  };

  componentDidUpdate(_, prevState) {
    const {query, page} = this.state;
    if(prevState.query !== query || prevState.page !== page) {
      this.getPhotos(query, page)
    }
  }

  getPhotos = async (query, page) => {
    if(!query) {
      return;
    }

    this.setState({isLoading: true});

    try {
      const {
        hits, 
        page: currentPage,
        totalHits, 
        per_page =12
      } = await Service.getImages(query, page);
      if(hits.lenght === 0) {
        this.setState({isEmpty: true})
      }
      this.setState(prevState => ({
        images: [...prevState.images, ...hits],
        isVisible: currentPage < Math.ceil(totalHits / per_page),
      }))
    } catch (error) {this.setState({error: error.message})
  } finally {
    this.setState({isLoading: false})
  }
  }
  
  onHandelSubmite = value => {
    this.setState({query: value, page: 1, images: [], error: null, isEmpty: false})
  };

  onLoadMore = () => {
    this.setState(prevState => ({page: prevState.page +1}))
  }
  
  render() {
    const { images } = this.state;
    return (
      <div>
        <Searchbar onSubmite={this.onHandelSubmite}/>
        {/* {error && <Text textAlign="center">❌ Something went wrong - {error}</Text>}
        {isEmpty && <Text textAlign="center">Sorry. There are no images ... 😭</Text>}  */}
        <ImageGallery images={images}/>
        
        

      </div>
    )
  }
}






      
      

