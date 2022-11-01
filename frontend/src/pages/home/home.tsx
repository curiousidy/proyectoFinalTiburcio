import { IonCol, IonContent, IonPage, IonRow, IonIcon, IonButton, IonList } from '@ionic/react';
import { add, ellipsisVertical, informationCircleOutline, play } from 'ionicons/icons';
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import '../../../node_modules/swiper/swiper.min.css';
import { Layout } from '../../components/layout';

import './home.css';
import { fecthMovieHomeGenre, fecthMovieHomeByGenre } from '../../services/api';

import { useHistory } from 'react-router-dom';

const Home: React.FC = () => {

  const [genre, setGenre] = useState<any[]>([]);
  const [films, setFilms] = useState<any[]>([]);
  const set = new Set();

  let history = useHistory();


  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
      asyncFunction();
    
  }, [])

  useEffect(()=>{
   
    films.map(e=>  set.add(e.genre_ids[0]))
    setGenre(genre.filter(genres => Array.from(set).includes(genres.id) ))
    
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[films])
 
  const asyncFunction = async () => {
    const {genres} = await fecthMovieHomeGenre()
    setGenre([...genres])
      
    const {results} = await fecthMovieHomeByGenre() 
    setFilms(results)
    
  }
 
  return (
    <IonPage>
      <Layout>
        <IonContent fullscreen={true} className="content">
          <div className='spotlight'>
            <div className='gradient'></div>
  
              <IonRow className='submenu'>
                <IonCol size='4' className='ion-text-center'>
                  <div className='btn-vertical'>
                    <IonIcon icon={add}/>
                    <span>My List</span>
                  </div>
                </IonCol>

                <IonCol size='4' className='ion-text-center'>
                  <div className='btn-play'>
                    <IonIcon icon={play} color="dark"/>
                    <span>Play</span>
                  </div>
                </IonCol>

                <IonCol size='4' className='ion-text-center'>
                  <div className='btn-vertical'>
                    <IonIcon icon={informationCircleOutline}/>
                    <span>Info</span>
                  </div>
                </IonCol>
              </IonRow>
          </div>


          <div className='ion-padding'>
            {
              genre.map((genreFilm:any) => (
              
            <IonList>
               <span className='section-title'>{genreFilm.name}</span>
              

              <Swiper
                        effect={"coverflow"}
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView={1.4}
                        spaceBetween={20}
  
  
                        coverflowEffect={{
                            rotate: 10,
                            stretch: 1,
                            depth: 100,
                            modifier: 1,
                            slideShadows: false,
                        }}
                        pagination={true}
                        className="mySwiper"
                    >
  
                      {
                        films.map((filmByGenre:any) => (
                          (genreFilm.id === filmByGenre.genre_ids[0]) ?
                            <SwiperSlide className='slide'>
                                  <img src={`https://image.tmdb.org/t/p/w500${filmByGenre.poster_path}`} alt='poster'/>
                                  <IonRow>
                                    <IonCol>
                                      <IonButton fill='clear' color="medium" size='small' onClick={() => history.push(`/movieDetails/${filmByGenre.id}`)} >
                                        <IonIcon icon={informationCircleOutline}/>
                                      </IonButton>
                                    </IonCol>
  
                                    <IonCol className='ion-text-right'>
                                      <IonButton fill='clear' color="medium" size='small'>
                                        <IonIcon icon={ellipsisVertical}/>
                                      </IonButton>
                                    </IonCol>
                                  </IonRow>
                              </SwiperSlide>
                        : null
                        ))
                      }
                    </Swiper>
                  
            </IonList>
            ))
            }
          </div>
        </IonContent>
      </Layout>
    </IonPage>
  );
};

export default Home;
