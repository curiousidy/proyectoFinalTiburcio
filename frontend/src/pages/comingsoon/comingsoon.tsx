import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';


const ComingSoon: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Coming Soon</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Coming Soon</IonTitle>
          </IonToolbar>
        </IonHeader>
       
      </IonContent>
    </IonPage>
  );
};

export default ComingSoon;
