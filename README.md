🚩English🚩

# App films

- In the final project, the aim is to apply the knowledge acquired in the different units given by the teacher.
     - Obligatory points that the teacher needs:
        - How to build the backend with node and sequalize (see pdfs provided by the teacher).
        - How to build the frontend with ionic - react (in my case, the teacher makes the project with Angular).
        - Uploading files and/or taking pictures in the client.
    - Other knowledge acquired through research:
        - Authentication system from Auth0.

- The application consists of the following:

    - Welcome window (login), in which the user must register or log in with the data used, with google or with some other enabled network (if any). It will be carried out with the Auth0 service.

    - Show the films that are currently playing (tab home).

    - Show the films that will be released soon (tab coming soon).
    - Search among the films currently playing and see their details (search tab).

    - Within the detail of the film the user will be able to give his opinion about it and see a list of the opinions of that film.
    -The user's profile, where you can view, edit and delete the posts they have written.

## Getting started 🚀

The repository is divided into 4 folders:

- frontend --> where the app made with ionic and react will be. The folder structure is as follows:

    - Components-> where the components that are common to all the pages will be currently placed. In this case I only have the layout, which only contains a header (for the back button, the logo and the logout button) and a footer (for the home, commin soon, search and profile tabs).

    - pages -> contains each of the pages to be displayed. Each page is subdivided into folders: 

        - Components(contains the components that are not common to other pages.).

        - file.tsx file with the name of the page.

        - css file with the styles for that page.

        - index.ts is the file that will be in charge of making all the exports of the folder in which it is located. This way if a page contains many files, when we are going to import it into another page or component, we will only have one import line for all the components in this folder.

    - routes -> contains the routes to use in the app. It has been extracted from the main component (App.tsx) to leave the code cleaner in this file.

    - services -> contains the calls to the api used to get the current movies (The movie DB).

    - theme -> default global styles that ionic comes with.

- backend --> this is where we will set up our api-Rest with node.

    - config -> contains the database connection configuration. In this case I have used the one I already had in the first practice. I have created a new table to store the post information.

    - controller -> contains the operations to perform with the database...create, update, delete and list post.

    - model -> contains the TYPES of data to be stored in the database.

    - route -> contains the routes to perform each of the endpoints.

- postman --> files for importing endpoints and testing locally.

- assets -> folder located outside of those already mentioned to store the images shown in the readme.

## Pre-requisites 📋

For this project, we need to install the following:

```
nodejs
ionic
docker desktop
auth0, although it is not mandatory for login, it does make the job a lot easier.
```
## Installation 🔧

Node

```
Download from https://nodejs.org/en/
```

Ionic

```
npm install -g "ionic/cli
```

Docker (it is not mandatory to install this application for the app to work. It is enough to link it to the configured database).

```
https://www.docker.com/products/docker-desktop/

Go to docker hub, search for the mysql image, download it and follow the tutorial on the page. https://hub.docker.com/_/mysql
```


Auth0

```
https://auth0.com/docs/quickstart/native/ionic-react/01-login#getting-started

npm install @auth0/auth0-react

- You need to create an account.

- Once the account is created, we will access the dashboard to make the configurations.

- In the left menu, we access the Applications option. Select the project previously created.

- In the Applications URls section:
    - Allowed Callback URLs we must put http://localhost:8100/home , since this will be the route to which we are going to access after the login with auth0.

    - Allowed Logout URLs, Allowed Web Origins, Allowed Web Origins(cors) -> http://localhost:8100/.

- Configuring the Auth0 provider in react:
    -index.tsx:
```

```js
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import {Auth0Provider} from '@auth0/auth0-react';
import { defineCustomElements } from '@ionic/pwa-elements/loader';


const container = document.getElementById('root');
const root = createRoot(container!);



root.render(
  <React.StrictMode>
    <Auth0Provider 
      domain = 'dev-tjazj88j3nvb4idg.us.auth0.com' 
      clientId='zIT0TUWpaEqCcHXs2VlJc7zLLo35ZP7z'
      redirectUri= {"http://localhost:8100/home"}>
        <App />
    </Auth0Provider>
  </React.StrictMode>
);
defineCustomElements(window);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

```

```
    - To provide the user data: we need to import auth0 like this, import { useAuth0 } from '@auth0/auth0-react'; and then use it to access any of the data that it allows us to use, in this case we access the data to know if a user is logged in or not. If it is logged in we will show the home with the access to each one of the options of the menu, if it is not logged in, you return to the login:

```

```js
import { useAuth0 } from '@auth0/auth0-react';
import { IonTabs, IonRouterOutlet, IonTabBar, IonTabButton, IonIcon, IonLabel } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { homeOutline, copyOutline, searchOutline,  peopleCircleOutline } from 'ionicons/icons';
import React from 'react'
import { Redirect, Route, useLocation } from 'react-router';
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

```

```
    - This data is saved as a cookie. This way you can know if the user is logged in or not.

-Additional resource to configure auth0 -> https://www.youtube.com/watch?v=sTJaHQINpTc
```

## Built with 🛠️

* [Ionic](https://ionicframework.com/) - Framework used.
* [React](https://es.reactjs.org/) - javascript library to build user interfaces.

## Link to POSTMAN with endpoints used.

## [😲 touch me](https://www.postman.com/supply-geologist-74417416/workspace/final-project/collection/21375750-19e668b7-19b5-4b16-8b68-e2154d1eeaff?action=share&creator=21375750)
After accessing the link, click on the "Final Project" section to see the endpoints.

## Other links related to the app
- [User and password access](https://drive.google.com/file/d/1srgMXYYEH0DH4WoxTDsVKP53AoOpSg5k/view?usp=sharing)
- [App running](https://drive.google.com/file/d/1bgz7rBODtgcNuLT7LpVLBX-sh9vHosbI/view?usp=sharing)

## Authors ✒️

* **Idaira Aleman Quintana**

---

⌨️ with ❤️ by [Idaira Alemá Quintana) 😊



🚩Spanish🚩

# App de peliculas

- En el proyecto final, lo que se pretende es aplicar los conocimientos adquiridos en las diferentes unidades dadas por el profesor.
     - Puntos oligatorios que necesita el proferor:
        - Como construir el backend con node y sequalize.(ver pdfs aportados por el profesor).
        - Como construir el frontend con ionic - react (en mi caso, el profesor realiza el proyecto con Ángular).
        - Subir archivos y/o sacar fotos en el cliente.
    - Otros conocimientos adquiridos mediante investigación:
        - Sistema de autenticación desde Auth0.

- La aplicación conciste en lo siguiente:

    - Ventana de bienvenida (login), en la que el usuario debe registrarse o loguearse con los datos utilizados, con google o con alguna otra red habilitada(si la hubiese).Se llevará a cabo con el servicio Auth0.

    - Mostrar las películas que actualemnte están en cartelera (tab home).

    - Mostrar las películas que se estrenarán próximamente (tab coming soon).

    - Buscar entre las películas actualmente en cartelera y ver su detalle (tab de buscar).

    - Dentro del detalle de la película el usuario podrá opinar sobre ella y ver un listado de las opiniones de esa película.

    - El perfil del usuario, dónde podrá ver, editar y borrar los post que ha escrito.



## Comenzando 🚀

El repositorio se divide en 4 carpetas:

- frontend --> donde estará la app hecha con ionic y react. La estructura de carpetas es la siguiente:

    - Components-> donde se pondrán actualmente los componentes que son comunes a todas las páginas. En este caso sólo tengo el layout, que sólo contiene un header(para el botón de back, el logo y el de cerrar sesión) y un "footer" (para los tabs del home, commin soon, search and profile).

    - pages -> contiene cada una de las páginas a mostrar. Cada una de las páginas está subdividida en carpetas: 

        - Components(contiene los componentes que no son comunes a otras páginas.)

        - Fichero.tsx con el nombre de la página.

        - fichero.css con los estilos para esa página.

        - index.ts es el fichero que se encargará de hacer todas las exportaciones de la carpeta en la que esté situado. De esta manera si una página contiene muchos ficheros, cuando vamos a importarlo en otra página o componente, sólo tendremos una línea de importación para todos los componententes de esta carpeta.

    - routes -> contiene las rutas a utilizar en la app. Se ha extraído del componente principal (App.tsx) para dejar el código más limpio en este fichero.

    - services -> contiene las llamadas a la api utilizada para obtener las películas actuales (The movie DB).

    - theme -> estilos globales por defecto que trae ionic.

- backend --> aqui montaremos nuestra api-Rest con node.

    - config -> contiene la configuración de la conexión a la base de datos. En este caso he aprovechado la que ya tenía en la primera práctica. He creado una nueva tabla para almacenar la información de los post.

    - controller -> contiene las operaciones a realizar con la base de datos...crear, actualizar, eliminar y listar post.

    - model -> contiene los TIPOS de datos que se van a almacenar en la base datos.

    - route -> contiene las rutas para realizar cada uno de los endpoints.

- postman --> archivos para que la importación de los endpoints y realizar pruebas de manera local.

- assets -> carpeta ubicada fuera de las ya mencionadas para guardar las imágenes mostradas en el readme.


## Pre-requisitos 📋

Para este proyecto, necesitamos instalar lo siguiente:

```
nodejs
ionic
docker desktop
auth0, aunque no es obligatorio para realizar un login, si facilita bastante el trabajo.
```

## Instalación 🔧

Node

```
Descargar de la página https://nodejs.org/en/
```

Ionic

```
npm install -g "ionic/cli
```

Docker (no es obligatorio instalar esta aplicación para que funcione la app. Basta con enlazarlo a la base de datos que se haya configurado)

```
https://www.docker.com/products/docker-desktop/

Entrar en docker hub, buscar la imagen mysql, descargarla y seguir el tutorial que indica en la propia página. https://hub.docker.com/_/mysql
```

Auth0

```
https://auth0.com/docs/quickstart/native/ionic-react/01-login#getting-started

npm install @auth0/auth0-react

- Hay que crearse una cuenta.

- Una vez creada la cuenta, accederemos al dashboard para realizar las configuraciones.

- En el menú izquierdo, accedemos a la opción Applications. Seleccionamos el proyecto creado previamente.

- En el apartado Applications URls:

    - Allowed Callback URLs debemos poner http://localhost:8100/home , ya que esta será la ruta a la que vamos a acceder tras el login con auth0.

    - Allowed Logout URLs, Allowed Web Origins, Allowed Web Origins(cors) -> http://localhost:8100/.

- Configurando el provider(proveedor de datos) de Auth0 en react:
    -index.tsx:
```

```js
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import {Auth0Provider} from '@auth0/auth0-react';
import { defineCustomElements } from '@ionic/pwa-elements/loader';


const container = document.getElementById('root');
const root = createRoot(container!);



root.render(
  <React.StrictMode>
    <Auth0Provider 
      domain = 'dev-tjazj88j3nvb4idg.us.auth0.com' 
      clientId='zIT0TUWpaEqCcHXs2VlJc7zLLo35ZP7z'
      redirectUri= {"http://localhost:8100/home"}>
        <App />
    </Auth0Provider>
  </React.StrictMode>
);
defineCustomElements(window);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

```

```
    - Para proveer los datos del usuario: necesitamos importar auth0 tal que así, import { useAuth0 } from '@auth0/auth0-react'; y luego utilizarlo para acceder a cualquiera de los datos que nos permita utilizar, en este caso accedemos al dato para saber si está logueado o no un usuario. Si está logueado mostraremos el home con el acceso a cada una de las opciones del menú, si no está logueado, vuelves al login:

```

```js
import { useAuth0 } from '@auth0/auth0-react';
import { IonTabs, IonRouterOutlet, IonTabBar, IonTabButton, IonIcon, IonLabel } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { homeOutline, copyOutline, searchOutline,  peopleCircleOutline } from 'ionicons/icons';
import React from 'react'
import { Redirect, Route, useLocation } from 'react-router';
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

```

```
    - Este dato se guarda como una cookie. De esta manera se puede saber si el usuario está o no logueado.

- Recurso adicional para configurar auth0 -> https://www.youtube.com/watch?v=sTJaHQINpTc
```

## Construido con 🛠️

* [Ionic](https://ionicframework.com/) - Framework usado.
* [React](https://es.reactjs.org/) - Librería javascript para construir interfaces de usuario.

## Enlace a POSTMAN con los endpoints utilizados.

## [😲 pincha aquí](https://www.postman.com/supply-geologist-74417416/workspace/final-project/collection/21375750-19e668b7-19b5-4b16-8b68-e2154d1eeaff?action=share&creator=21375750)
Tras acceder al enlace debe pulsar en el apartado "Proyecto Final" para ver los endpoints.

## Otros enlaces relacionados con la app
- [Acceso con usuario y contraseña](https://drive.google.com/file/d/1srgMXYYEH0DH4WoxTDsVKP53AoOpSg5k/view?usp=sharing)
- [App en funcionamiento](https://drive.google.com/file/d/1bgz7rBODtgcNuLT7LpVLBX-sh9vHosbI/view?usp=sharing)

## Autores ✒️

* **Idaira Alemán Quintana**

---

⌨️ con ❤️ por [Idaira Alemá Quintana) 😊
