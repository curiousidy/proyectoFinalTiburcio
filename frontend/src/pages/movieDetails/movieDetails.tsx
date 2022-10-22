import { IonBackButton, IonButton, IonButtons, IonCol, IonContent, IonFooter, IonHeader, IonItem, IonLabel, IonPage, IonRow, IonTextarea, IonTitle, IonToolbar } from '@ionic/react'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { fecthMovieDetails } from '../../services/api';
import { useForm } from 'react-hook-form';

import './movieDetails.css';
import { Layout } from '../../components/layout';

const MovieDetails: React.FC = () => {

    const initialState = {};
    const [filmDetail, setFilmDetail] = useState<any>(initialState);
    const { register, handleSubmit, formState: { errors },  } = useForm();

    let { id } = useParams<any>();
        
    console.log(id);
    
    useEffect(() => {
          asyncFunction();
          return () => {
            console.log(filmDetail);
            setFilmDetail(initialState);
        }
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [])

      useEffect(() => {},[filmDetail]);

      const asyncFunction:any = async () => setFilmDetail(await fecthMovieDetails(id));

      const sendData = async (e:any) => {console.log(e,'holiii');}
      
    
  return (
    <IonPage>
        <Layout>
            <>
        <IonHeader>
            <IonToolbar>
            <IonTitle className='title'>Movie Details</IonTitle>
            </IonToolbar>
        </IonHeader>


        <IonContent fullscreen={true} className='ion-padding'>
            <IonRow className='rowFilmDetail'>
                <img src={`https://image.tmdb.org/t/p/w300${filmDetail?.poster_path}`} alt='poster'/>
            </IonRow>
           

            <IonRow ><p className='paragraphFilmDetail'>{filmDetail.title}</p></IonRow>

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
    
            <IonRow className='rowFilmDetail'>
                {filmDetail.overview}
            </IonRow>

            <IonRow className='opinionForm'>
            <form onSubmit={handleSubmit(sendData)}  className='opinionForm'>
                    <IonItem> 
                        <IonLabel position='floating'>Opinar sobre la película</IonLabel>
                          <IonTextarea  placeholder="Escribe aquí tu opinión" {...register("text",{ required: true, minLength: 1 })}/>
                      </IonItem>
                      {errors.text && <p >Se requiere un texto para enviar el formulario</p>}
            <IonRow>
                <IonCol>
                    <IonButton type="submit"  className='opinionForm'>Enviar</IonButton>

                </IonCol>
                <IonCol>
                    <IonButton type="submit"  className='opinionForm'>Editar</IonButton>
                    
                </IonCol>
                <IonCol>
                    <IonButton type="submit"  className='opinionForm'>Borrar</IonButton>
                    
                </IonCol>
            </IonRow>
            </form>
            </IonRow>
            <IonRow>
                <p>Otras Opiniones</p>
            </IonRow>
        </IonContent>
        </>
        </Layout>
    </IonPage>
  )
}

export default MovieDetails