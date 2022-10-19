import { IonContent, IonPage } from '@ionic/react';
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import '../../../node_modules/swiper/swiper.min.css';
import { Layout } from '../../components/layout';
import { fecthMovieUpcoming } from '../../services/api';

import './commingsoon.css'

const ComingSoon: React.FC = () => {
  let [results, setResults] = useState<any[]>([]);
  
  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    fecthMovieUpcoming()
    .then((response)=>{
      
       setResults(response.results);
    });
    
  }, [])
  return (
    <IonPage>
      <Layout>
      <IonContent fullscreen={true}>
          <Swiper
                          effect={"coverflow"}
                          grabCursor={true}
                          centeredSlides={true}
                          slidesPerView={1}
                          spaceBetween={0}


                          coverflowEffect={{
                              rotate: 10,
                              stretch: 1,
                              depth: 100,
                              modifier: 1,
                              slideShadows: false,
                          }}
                          pagination={true}
                          className="mySwiperComingSoon"
                      >
                        {
                          results.map(result =>(
                            <SwiperSlide className='slide'>
                              <img src={`https://image.tmdb.org/t/p/w500${result.poster_path}`} alt="posterImage" className='imgFullScreenSlider'/>
                            </SwiperSlide>
                          ))
                        }
          </Swiper>
      </IonContent>
      </Layout>
    </IonPage>
  );
};

export default ComingSoon;
