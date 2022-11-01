import React from 'react'

import { IonButton, IonContent} from '@ionic/react';
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