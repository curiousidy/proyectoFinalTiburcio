import { IonCol, IonContent, IonHeader, IonPage, IonRow, IonToolbar, IonIcon } from '@ionic/react';
import { add, caretDownOutline, informationCircleOutline, play } from 'ionicons/icons';
import './home.css';

const Home: React.FC = () => {
  return (
    <IonPage>

      <IonHeader class='ion-no-border'>
        <IonToolbar>
          <img className='logo' src='/assets/logo.png' alt='logoFilmFlix'/>
          
          <IonRow class='ion-justify-content-center ion-text-center'>
            <IonCol size="4" class='ion-text-rigth'>
              TV Show
            </IonCol>

            <IonCol size="4">
              Movies
            </IonCol>
        
            <IonCol size='4'/*TODO ONCLICK*/>
              Categories <IonIcon icon={caretDownOutline}></IonIcon>
            </IonCol>

          </IonRow>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen={true}>
        <div className='spotlight'>
        <div className='gradient'></div>
            <div className='info'>
              <img className='title' src='/assets/info.jpg' alt='tituloHome' /*TODO title image*//>
            </div>

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
      </IonContent>
    </IonPage>
  );
};

export default Home;
