import { IonTabs, IonRouterOutlet, IonTabBar, IonTabButton, IonIcon, IonLabel } from '@ionic/react';
import { homeOutline, copyOutline, searchOutline, downloadOutline } from 'ionicons/icons';
import React from 'react';
import { Route, Redirect } from 'react-router';
import { ComingSoon, Home, Search, Downloads } from '../../../pages';



export interface LayoutInterface {}

const Layout : React.FC<LayoutInterface> = () => {
	return (
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
		  <Route path="/search">
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
          <IonTabButton tab="comingSoon" href="/commingsoon">
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

	);
	
};

export default Layout;
