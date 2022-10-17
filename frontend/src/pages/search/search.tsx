import {IonCol, IonContent, IonItem, IonList, IonPage, IonSearchbar, IonTitle, IonToolbar} from '@ionic/react';
import { useEffect, useState } from 'react';
import { fecthMovie } from '../../services/api';
import './search.css'

const Search: React.FC = ()=> {

 
  let [results, setResults] = useState<any[]>([]);
  let [resultsAux, setResultsAux] = useState<any[]>([]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    fecthMovie()
    .then((response)=>{
       console.log(response.results);
       setResults(response.results);
       setResultsAux(response.results);
    });
    
  }, [])
  
  
  const handleChange = (ev: Event) => {
    
    let query = "";
    const target = ev.target as HTMLIonSearchbarElement;
    if (target) query = target.value!.toLowerCase();
    
   
    setResultsAux(results.filter((d:any) => d.title.toLowerCase().indexOf(query) > -1));
    
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
              { resultsAux.map(result => (
                <IonItem>
                    <IonCol className='wrapper' >
                      <p className='nameFilm'>{ result.title }</p>
                      <p className='description'>{result.overview}</p>
                    </IonCol>
                    <IonCol>
                      <img src={`https://image.tmdb.org/t/p/w500${result.poster_path}`} alt="posterImage"/>
                    </IonCol>
                </IonItem>
                
              ))}
            </IonList>
        </IonContent>
    </IonPage>
  );
};

export default Search;
