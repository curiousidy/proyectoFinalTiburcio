import {IonContent, IonItem, IonList, IonPage, IonSearchbar, IonTitle, IonToolbar} from '@ionic/react';
import { useState } from 'react';

const Search: React.FC = () => {

  const data = ['Amsterdam', 'Buenos Aires', 'Cairo', 'Geneva', 'Hong Kong', 'Istanbul', 'London', 'Madrid', 'New York', 'Panama City'];
  let [results, setResults] = useState([...data]);

  
  const handleChange = (ev: Event) => {
    let query = "";
    const target = ev.target as HTMLIonSearchbarElement;
    if (target) query = target.value!.toLowerCase();

    setResults(data.filter(d => d.toLowerCase().indexOf(query) > -1));
  }

  return (
    <IonPage>
         <IonToolbar>
          <IonTitle className='title'>Search Film</IonTitle>
        </IonToolbar>
        <IonToolbar className='searchBar'>
          <IonSearchbar debounce={200} onIonChange={(ev) => handleChange(ev)}/>
        </IonToolbar>
        <IonContent fullscreen={true} className='ion-padding'>
            <IonList>
              { results.map(result => (
                <IonItem>{ result }</IonItem>
              ))}
            </IonList>
        </IonContent>
    </IonPage>
  );
};

export default Search;
