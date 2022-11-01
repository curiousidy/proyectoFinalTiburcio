import { IonPage, IonToolbar, IonTitle, IonContent, IonRow, IonCol, IonButton, IonHeader, IonCard, IonCardSubtitle, IonCardContent, IonLabel, IonTextarea } from '@ionic/react';
import React, { useEffect, useState } from 'react';
import { Camera, CameraResultType, CameraSource,  } from '@capacitor/camera';

import './userProfile.css';
import { Layout } from '../../components/layout';
import { useAuth0 } from '@auth0/auth0-react';

export interface ProfileInterface {}


const Profile : React.FC = () => {
  const [image, setImage] = useState<any>("/assets/avatar.png");
  const { user } = useAuth0();
  const [postEmail, setPostEmail] = useState<any>([]);

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
    
    
  };
  
  useEffect(() => {
    emailPost();
    
  }, [])
  


  const emailPost:any = async () => {
    const response = await fetch(`http://localhost:8080/api/posts/byemail/${user?.email}`);
    const data = await response.json();
    setPostEmail([...await data]);  
  }

  const deleteInformation = async (id:string) => {
    
    await fetch(`http://localhost:8080/api/posts/${id}`,{
      method:'DELETE',
    });
    emailPost();
  }

   const updateInformation = async (id:string) => {
      const post = {
        post:document.getElementById(id)?.textContent
      }
      await fetch(`http://localhost:8080/api/posts/${id}`,{
        method:'PUT',
        body: JSON.stringify(post),
        headers:{'Content-Type': 'application/json',}
      });
      emailPost();
   }

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
              <IonRow>
                {user?.email}
              </IonRow>
              <IonLabel>Post escrito por el usuario:</IonLabel>
              {
                postEmail && 
                postEmail.map((postUser:any) => {
                  return (
                  <IonCard>
                    <IonHeader>
                      <IonCardSubtitle>
                      {postUser.createdAt}
                      </IonCardSubtitle>
                    </IonHeader>
                    <IonCardContent>
                      <IonTextarea id={postUser.id} autoGrow value={postUser.post}></IonTextarea>
                      <IonRow>
                        <IonCol>
                          <IonButton expand='full' size='small'onClick={() => updateInformation(postUser.id)} >Editar</IonButton>
                        </IonCol>
                        <IonCol>
                          <IonButton expand='full' size='small' onClick={() => deleteInformation(postUser.id)}>Borrar</IonButton>
                        </IonCol>
                      </IonRow>
                    </IonCardContent>
                  </IonCard>

                  )
                })
                  }
            </IonContent>
      </IonContent>
      </>
      </Layout>
    </IonPage>
  );
};

export default Profile;