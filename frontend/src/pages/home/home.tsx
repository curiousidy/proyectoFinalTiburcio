import { IonCol, IonContent, IonHeader, IonPage, IonRow, IonToolbar, IonIcon } from '@ionic/react';
import { caretDownOutline } from 'ionicons/icons';
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
        <div className='spotlight'/>

        <div className='gradient'></div>

        <div className='info'>
          <img className='title' src='/assets/logo.png' alt='tituloHome' /*TODO title image*//>
        </div>
        
      </IonContent>
    </IonPage>
  );
};

export default Home;
