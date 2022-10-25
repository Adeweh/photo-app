import React, { useEffect, useState } from 'react';
import Search from './components/Search';
import './App.css';
import { unsplash } from './api/unsplash';
import ImageList from './components/ImageList';

const App =() =>{
  const [searchTerm, setSearchTerm] = useState("");
  const [images, setImages] = useState([]);

  const getSearchTerm = (term) => {
    setSearchTerm(term);
  }; 

  useEffect(() => {
    const fetchPhotos = async () => {
      const result = await unsplash.get(`/search/photos/?query=${searchTerm}`)
      setImages(result.data.results);
      console.log(result.data.results);
    };
    fetchPhotos();
  }, [searchTerm]);

  useEffect(() => {
    const fetchPhotos = async () => {
      const result = await unsplash.get("/photos/random?count= 5");
      setImages(result.data);
      console.log(result);
    };

    fetchPhotos();
  }, []);



  return (
    <div>
      <Search getSearchTerm={getSearchTerm}/>
      <ImageList images={images}/>
    </div>
  );
}

export default App;
