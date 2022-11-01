import { IonHeader, IonToolbar, IonContent, IonButton, IonIcon, IonButtons, IonBackButton, IonLabel, IonCol, IonRow } from '@ionic/react';
import { useAuth0 } from "@auth0/auth0-react";

import React from 'react';
import { exit } from 'ionicons/icons';
import './layout.css';


export interface LayoutInterface {
  children : JSX.Element;
}

const Layout : React.FC<LayoutInterface> = ({children}:LayoutInterface) => {
  const { logout } = useAuth0();
	return (
    <>
    
    <IonHeader class='ion-no-border'>
      <IonToolbar>
        <IonRow>
          <IonCol>
          <IonButtons>
                  <IonBackButton />
          </IonButtons>
          </IonCol>
        
          <IonCol>
            <img className='logo' src='/assets/netflix.jpg' alt='logoFilmFlix'/>
          </IonCol>
        
          <IonCol className='ion-text-right'>
            <IonButton size='small' onClick={() => logout({ returnTo: window.location.origin })}>
              <IonIcon icon={exit}/>
            </IonButton>
          </IonCol>

        </IonRow>

      </IonToolbar>
    </IonHeader>

    <IonContent>
      {children}
    </IonContent>

		
  </>

	);
	
};

export default Layout;
