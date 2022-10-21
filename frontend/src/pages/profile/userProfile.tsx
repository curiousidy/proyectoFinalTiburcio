import { IonPage, IonToolbar, IonTitle, IonContent, IonRow, IonCol, IonButton, IonHeader } from '@ionic/react';
import React, { useState } from 'react';
import { Camera, CameraResultType, CameraSource,  } from '@capacitor/camera';

import './userProfile.css';
import { Layout } from '../../components/layout';


export interface ProfileInterface {}


const Profile : React.FC = () => {
  const [image, setImage] = useState<any>("/assets/avatar.png");

  const takePicture = async () => {
    const cameraResult = await Camera.getPhoto({
      quality: 100,
      allowEditing: true,
      resultType: CameraResultType.Uri,
      source : CameraSource.Prompt,
      promptLabelPhoto: 'Gallery',
      promptLabelPicture : 'Camera',
      promptLabelHeader : 'Cancel'
    });
   
    // image.webPath will contain a path that can be set as an image src.
    // You can access the original file using image.path, which can be
    // passed to the Filesystem API to read the raw data of the image,
    // if desired (or pass resultType: CameraResultType.Base64 to getPhoto)
    var imageUrl = cameraResult.webPath;
  
    // Can be set to the src of an image now
    // imageElement.src = imageUrl;
    setImage(imageUrl)
    console.log(imageUrl);
    
    
  };
  

	return (
	<IonPage>
    <Layout>
    <>
    
      <IonHeader>
          <IonToolbar>
            <IonTitle className='title'>User Profile</IonTitle>
          </IonToolbar>
        </IonHeader>

      <IonContent className='imageOption'>

          <IonContent className="ion-padding">
            <IonRow>
                <IonCol>
                    <img className="userAvatar" src={image} alt="Rounded avatar" />
                </IonCol>

                <IonCol className='userProfileButton'>
                
                    <IonButton expand='full' onClick={() => takePicture()}>
                        Take photo / Upload Image
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
      </>
      </Layout>
    </IonPage>
  );
};

export default Profile;