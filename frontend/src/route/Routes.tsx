import { IonTabs, IonRouterOutlet, IonTabBar, IonTabButton, IonIcon, IonLabel } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { homeOutline, copyOutline, searchOutline, downloadOutline } from 'ionicons/icons';
import React from 'react'
import { Redirect, Route } from 'react-router';
import { Home, ComingSoon, Search, Downloads } from '../pages';

const Routes: React.FC = () => {
    return (
        <IonReactRouter>
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
        </IonReactRouter>
    );
  };
  
  export default Routes;