import {IonContent, IonItem, IonList, IonPage, IonSearchbar, IonTitle, IonToolbar} from '@ionic/react';
import { useEffect, useState } from 'react';
import axios from "axios";
import { fecthMovie } from '../../services/api';

const Search: React.FC = (): JSX.Element => {
  // const data = ['Amsterdam', 'Buenos Aires', 'Cairo', 'Geneva', 'Hong Kong', 'Istanbul', 'London', 'Madrid', 'New York', 'Panama City'];
  // let [results, setResults] = useState([...data]);
 
  let [results, setResults] = useState<any[]>([]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    fecthMovie()
    .then((response)=>{
       console.log(response.results);
       setResults(response.results);
    });
    
  }, [])
  
  
  const handleChange = (ev: Event) => {
    
    let query = "";
    const target = ev.target as HTMLIonSearchbarElement;
    if (target) query = target.value!.toLowerCase();
   console.log(results);
   
    
    setResults(results.filter((d:any) => d.title.toLowerCase().indexOf(query) > -1));
    
  }
  
  
  return (
    
     <IonPage>
        <IonToolbar>
          <IonTitle className='title'>Search Film</IonTitle>
        </IonToolbar>
        <IonToolbar className='searchBar'>
          <IonSearchbar debounce={200} 
          onIonChange={(ev) => handleChange(ev)}
          />
        </IonToolbar>
        <IonContent fullscreen={true} className='ion-padding'>
            <IonList>
              { results.map(result => (
                <IonItem>{ result.title }</IonItem>
              ))}
            </IonList>
        </IonContent>
    </IonPage>
  );
};

export default Search;
