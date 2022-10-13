import { IonContent, IonPage } from '@ionic/react';
import { Swiper, SwiperSlide } from "swiper/react";
import '../../../node_modules/swiper/swiper.min.css';
import { Layout } from '../../components/layout';

import './commingsoon.css'

const ComingSoon: React.FC = () => {
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
                        <SwiperSlide className='slide'>
                              <img src='/assets/pelicula.jpg' alt='contruction' className='imgFullScreenSlider'/>
                        </SwiperSlide>

                        <SwiperSlide className='slide'>
                              <img src='/assets/amazingSpiderman.jpg' alt='contruction' className='imgFullScreenSlider'/>
                        </SwiperSlide>

                        <SwiperSlide className='slide'>
                            <img src='/assets/amazingSpiderman2.jpg' alt='contruction' className='imgFullScreenSlider'/>
                        </SwiperSlide>
          </Swiper>
      </IonContent>
      </Layout>
    </IonPage>
  );
};

export default ComingSoon;
