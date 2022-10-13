import { IonTabs, IonRouterOutlet, IonTabBar, IonTabButton, IonIcon, IonLabel, IonCol, IonHeader, IonRow, IonToolbar } from '@ionic/react';
import { homeOutline, copyOutline, searchOutline, downloadOutline, caretDownOutline } from 'ionicons/icons';
import React from 'react';
import { Route, Redirect } from 'react-router';
import { ComingSoon, Home, Search, Downloads } from '../../../pages';



export interface LayoutInterface {}

const Layout : React.FC<LayoutInterface> = () => {
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
		<IonTabs>
        <IonRouterOutlet>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/comingsoon">
            <ComingSoon />
          </Route>
          <Route path="/search">
            <Search />
          </Route>
		    <Route path="/downloads">
            <Downloads />
          </Route>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
        </IonRouterOutlet>
		
        <IonTabBar slot="bottom">
          <IonTabButton tab="home" href="/home">
            <IonIcon icon={homeOutline} />
            <IonLabel>Home</IonLabel>
          </IonTabButton>
          <IonTabButton tab="comingsoon" href="/comingsoon">
            <IonIcon icon={copyOutline} />
            <IonLabel>Coming Soon</IonLabel>
          </IonTabButton>
          <IonTabButton tab="search" href="/search">
            <IonIcon icon={searchOutline} />
            <IonLabel>Search</IonLabel>
          </IonTabButton>
          <IonTabButton tab="downloads" href="/downloads">
            <IonIcon icon={downloadOutline} />
            <IonLabel>Download</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </>

	);
	
};

export default Layout;
