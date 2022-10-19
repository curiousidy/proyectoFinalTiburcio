import { IonBackButton, IonButtons, IonCol, IonContent, IonHeader, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { fecthMovieDetails } from '../../services/api';
import './movieDetails.css';

const MovieDetails: React.FC = () => {

    const [filmDetail, setFilmDetail] = useState<any>({});

    let { id } = useParams<any>();
        
    console.log(id);
    
    useEffect(() => {
          asyncFunction();
          console.log(filmDetail);
          
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [])

      useEffect(() => {},[filmDetail]);

      const asyncFunction:any = async () => setFilmDetail(await fecthMovieDetails(id));
    
  return (
    <IonPage>
        <IonHeader>
            <IonToolbar>
            <IonButtons>
                <IonBackButton />
            </IonButtons>
            <IonTitle className='title'>Movie Details</IonTitle>
            </IonToolbar>
        </IonHeader>


        <IonContent fullscreen={true} className='ion-padding'>
            <IonRow className='rowFilmDetail'>
                <img src={`https://image.tmdb.org/t/p/w300${filmDetail?.poster_path}`} alt='poster'/>
            </IonRow>

            <IonRow className='rowFilmDetail'>{filmDetail.title}</IonRow>

            <IonRow className='rowFilmDetail'>
                <IonCol>
                    <p className='filmDetail'>Popularidad</p>
                    {filmDetail.popularity}
                </IonCol>
                
                <IonCol>
                    <p className='filmDetail'>Lanzamiento</p>
                    {filmDetail.release_date}
                </IonCol>
            </IonRow>
            {/* <IonRow>
                    {
                        filmDetail.production_companies.map((productionCompany:any) => 
                            <IonCol>
                                <img src={`https://image.tmdb.org/t/p/w500${productionCompany?.logo_path}`} alt="logoCompany" />
                            </IonCol>
                        )
                    }
            </IonRow> */}
            <IonRow className='rowFilmDetail'>
                {filmDetail.overview}
            </IonRow>
        </IonContent>
    </IonPage>
  )
}

export default MovieDetails