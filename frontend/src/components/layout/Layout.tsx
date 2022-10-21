import { IonHeader, IonToolbar, IonContent, IonButton, IonIcon } from '@ionic/react';
import { useAuth0 } from "@auth0/auth0-react";

import React from 'react';
import { exit } from 'ionicons/icons';


export interface LayoutInterface {
  children : JSX.Element;
}

const Layout : React.FC<LayoutInterface> = ({children}:LayoutInterface) => {
  const { logout } = useAuth0();
	return (
    <>
    
    <IonHeader class='ion-no-border'>
      <IonToolbar>
        <img className='logo' src='/assets/logo.png' alt='logoFilmFlix'/>
        <IonButton slot='end' onClick={() => logout({ returnTo: window.location.origin })}>
          <IonIcon icon={exit}/>
        </IonButton>

      </IonToolbar>
    </IonHeader>

    <IonContent>
      {children}
    </IonContent>

		
  </>

	);
	
};

export default Layout;
