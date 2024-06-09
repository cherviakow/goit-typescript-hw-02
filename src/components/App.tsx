import { useEffect, useState } from "react";
import React from "react";
import SearchBar from "./SearchBar/SearchBar";
import { fetchPictures } from "../API/Api";
import  Modal  from "./Modal/Modal";
import { Button } from "./Button/Button";
import { Loader } from "./Loader/Loader";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const App: React.FC = () => {
  
  const [pictures, setPictures] = useState<Picture[] | null>(null);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [largeImageUrl, setLargeImageUrl] = useState<string | null> (null);
  const [page, setPage] = useState<number>(1);
  const [query, setQuery] = useState<string>('');
  const [error, setError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [total, setTotal] = useState<number>(0);

  const getLargeImgUrl = (imgUrl: Image) => {
    setLargeImageUrl(imgUrl);
    toggleModal();
  };

  const handleLoadMore = () => {
    setPage((prevState: number) => prevState + 1,
    );
  };

  const toggleModal = () => {
    setShowModal(prevState => !prevState);
  };

  const searchResult = value => {
    if (value === '') {
    toast.warning('Please write something', {
      position: 'top-center',
      autoClose:2000,
    })
    } else {
    setQuery(value);
    setPage(1);
    setPictures([]);
    }
  };

  useEffect(() =>{
    async function getImages(){
      if (query === ''){
        return;
      }
      setIsLoading(true);

      try {
        const data = await fetchPictures(query, page);
        
        if(data.hits.length){
          setPictures((prevPictures: Picture[] | null) => [...prevPictures, ...data.hits] : data);
          setTotal(data.totalHits);
          setIsLoading(false);
        } else {
          setError(
            toast.error(
              'Sorry canot find your request',
              {position: 'top-center', autoClose: 2000}
            )
          );
        }
      } catch(error){
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }getImages();
  },[query, page]);
  
    const totalPage = pictures.length / total;

    return (
      <div>
      <SearchBar onSubmit={searchResult} />
          {error && <p>Something went wrong. Please refresh the page</p>}
          {isLoading && <Loader />}
          {showModal && (
            <Modal imgUrl={largeImageUrl} onClose={toggleModal} />
          )}
          <ImageGallery pictures={pictures} onClick={getLargeImgUrl} />
          {totalPage < 1 && <Button onClick={handleLoadMore} />}
    </div>
    
    );
  }
 
export default App;






// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );
// };
