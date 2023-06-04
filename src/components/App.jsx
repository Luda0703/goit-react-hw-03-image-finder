import React, { Component } from 'react';
import Notiflix from 'notiflix';
import Searchbar from './Searchbar/Searchbar';
import * as Service from '../Service/Service';
import ImageGallery from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';


export class App extends Component {
  state = {
    images: [],
    query: '',
    page: 1,
    isLoading: false,
    isVisible: false,
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
        per_page
      } = await Service.getImages(query, page);
      if(hits.lenght === 0) {
        this.setState(Notiflix.Notify.failure('Sorry, there are no images matching your search query. Please try again.'))
      }
      this.setState(prevState => ({
        images: [...prevState.images, ...hits],
        isVisible: currentPage < Math.ceil(totalHits / per_page)
      }))
     
    } catch (error) {this.setState({error: error.massage})
  } finally {
    this.setState({isLoading: false})
  }
  }
  
  // onHandleSubmite = value => {
  //   this.setState({query: value, page: 1, images: [], error: null})
  // };

  onLoadMore = () => {
    this.setState(prevState => ({page: prevState.page +1}))
  }
  
  render() {
    const {images, isVisible, isLoading, error} = this.state
    return (
      <>
        <Searchbar onSubmite={this.onHandleSubmite}/>
        {error && <h2>Пожалуйста, введите слово для поиска!</h2>}
        {images.length > 0 && <ImageGallery images={images}/>}
        {isLoading && <Loader/>}
        {isVisible && <Button onClick={this.onLoadMore}/>}
        
      </>
    )
  }
}






      
      

