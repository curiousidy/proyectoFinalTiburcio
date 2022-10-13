import { IonPage, IonToolbar, IonTitle, IonContent, IonRow, IonCol, IonButton, IonHeader } from '@ionic/react';
import React from 'react';

import './userProfile.css';


export interface ProfileInterface {}

const Profile : React.FC = () => {
	return (
	<IonPage>
      <IonHeader>
          <IonToolbar>
            <IonTitle className='title'>User Profile</IonTitle>
          </IonToolbar>
        </IonHeader>

      <IonContent className='imageOption'>

          <IonContent className="ion-padding">
            <IonRow>
                <IonCol>
                    <img className="userAvatar" src="/assets/avatar.png" alt="Rounded avatar" />
                </IonCol>

                <IonCol className='userProfileButton'>
                
                    <IonButton expand='full'>
                        Take photo
                    </IonButton>
                    <IonButton expand='full'>
                        Upload image
                    </IonButton>
                
                </IonCol>
              </IonRow>
              <form className='formData'>

                <input value="Nombre"/>

                <input value="Apellidos"/>

                <input value="Tu email"/>

                <input value="Tu contraseña" />

              </form>
            </IonContent>
      </IonContent>
    </IonPage>
  );
};

export default Profile;