import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import { IonAvatar, IonButton, IonContent, IonFooter, IonGrid, IonPage, IonRow } from '@ionic/react';
import './login.css';

interface props{
  loginRedirect:()=>Promise<void>;
}

 const Login:React.FC<props> = ({loginRedirect}) => {
    
  return (

   
      <IonContent className='content'>
          <video muted autoPlay loop className='video'  src="assets/video.mp4"></video>
            <IonButton onClick={loginRedirect} expand="full">Login</IonButton>
      </IonContent>

    
    
  );
}

export default Login;