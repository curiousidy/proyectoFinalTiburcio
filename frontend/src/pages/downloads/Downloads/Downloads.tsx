import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/react';
import React from 'react';
export interface DownloadsInterface {}

const Downloads : React.FC = () => {
	return (
	<IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Downloads</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Downloads</IonTitle>
          </IonToolbar>
        </IonHeader>
       
      </IonContent>
    </IonPage>
  );
};

export default Downloads;
