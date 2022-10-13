import { IonCol, IonContent, IonPage, IonRow, IonIcon, IonButton } from '@ionic/react';
import { add, ellipsisVertical, informationCircleOutline, play } from 'ionicons/icons';
import { Swiper, SwiperSlide } from "swiper/react";
import '../../../node_modules/swiper/swiper.min.css';
import { Layout } from '../../components/layout';

import './home.css';

const Home: React.FC = () => {
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
            <span className='section-title' /*TODO SECTION LIST FROM DATABASE */>Section List</span>

            <Swiper
                      effect={"coverflow"}
                      grabCursor={true}
                      centeredSlides={true}
                      slidesPerView={1.2}
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
                    <SwiperSlide className='slide'>
                          <img src='/assets/construction.png' alt='contruction'/>
                    </SwiperSlide>

                    <SwiperSlide className='slide'>
                        <img src='/assets/construction.png' alt='contruction'/>
                    </SwiperSlide>

                    <SwiperSlide className='slide'>
                          <img src='/assets/construction.png' alt='contruction'/>
                          <IonRow>
                            <IonCol>
                              <IonButton fill='clear' color="medium" size='small'>
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
                  </Swiper>
                  
              <span className='section-title' /*TODO SECTION LIST FROM DATABASE */>Second Section List</span>
          </div>
        </IonContent>
      </Layout>
    </IonPage>
  );
};

export default Home;
