import { useAuth0 } from '@auth0/auth0-react';
import { IonTabs, IonRouterOutlet, IonTabBar, IonTabButton, IonIcon, IonLabel } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { homeOutline, copyOutline, searchOutline,  peopleCircleOutline } from 'ionicons/icons';
import React from 'react'
import { Redirect, Route } from 'react-router';
import ComingSoon from '../pages/comingsoon/comingsoon';
import Home from '../pages/home/home';
import Login from '../pages/login/login';


import MovieDetails from '../pages/movieDetails/movieDetails';
import Profile from '../pages/profile/userProfile';
import Search from '../pages/search/search';


const Routes: React.FC = () => {
  const { loginWithRedirect,isAuthenticated } = useAuth0();
 
  
    return (

      <>
        {
        isAuthenticated ? 
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
                <Route path="/profile">
                  <Profile />
                </Route>
                <Route path="/movieDetails/:id">
                  <MovieDetails />
                </Route>
                <Route exact path="/">
                  <Redirect to="/login" />
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
                <IonTabButton tab="profile" href="/profile">
                  <IonIcon icon={peopleCircleOutline} />
                  <IonLabel>Profile</IonLabel>
                </IonTabButton>
              </IonTabBar>
            
            
            
            </IonTabs>
          </IonReactRouter>
        : <Login loginRedirect={loginWithRedirect}/>
        }
      </>
    );
  };
  
  export default Routes;