import {IonIcon, IonCol, IonHeader, IonRow, IonToolbar, IonContent } from '@ionic/react';
import { caretDownOutline } from 'ionicons/icons';
import React from 'react';




export interface LayoutInterface {
  children : JSX.Element;
}

const Layout : React.FC<LayoutInterface> = ({children}:LayoutInterface) => {
	return (
    <>
    
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

    <IonContent>
      {children}
    </IonContent>

		
  </>

	);
	
};

export default Layout;
