import { IonBackButton, IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCol, IonContent, IonFooter, IonHeader, IonItem, IonLabel, IonPage, IonRow, IonTextarea, IonTitle, IonToolbar } from '@ionic/react'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { fecthMovieDetails } from '../../services/api';
import { useForm } from 'react-hook-form';

import './movieDetails.css';
import { Layout } from '../../components/layout';
import { useAuth0 } from '@auth0/auth0-react';

const MovieDetails: React.FC = () => {

    const initialState = {};
    const [filmDetail, setFilmDetail] = useState<any>(initialState);
    const [postDetail, setPostDetail] = useState<any>([]);
    const { register, handleSubmit, formState: { errors },  } = useForm();
    const { user } = useAuth0();

    let { id } = useParams<any>();
    
    
    
    useEffect(() => {
          asyncFunction();
          moviePost();
          return () => {
            setFilmDetail(initialState);

        }
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [])

    //   useEffect(() => {},[filmDetail]);



      const asyncFunction:any = async () => setFilmDetail(await fecthMovieDetails(id));

      const moviePost:any = async () => {
        const response = await fetch(`http://localhost:8080/api/posts/${id}`);
        const data = await response.json();
        setPostDetail([...await data]);  
      }

      const sendData = async (e:any) => {
      
       const post = {
        userEmail: user?.email,
        post: e.text,
        movie_id: filmDetail.id
       }

      const response = await fetch('http://localhost:8080/api/posts',{
        method:'POST',
        headers:{'Content-Type': 'application/json',},
        body: JSON.stringify(post),
      });
        moviePost();
    }
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
            </IonRow>
            </form>
            </IonRow>
                <p>Otras Opiniones</p>
            <IonRow className='ion-padding'>
                {
                  postDetail &&
                 
                  postDetail.map(({userEmail, post}:any)=>{
                    return (
                    <IonCard>
                     <IonCardHeader>
                      <IonCardSubtitle>
                        {userEmail}
                      </IonCardSubtitle>
                     </IonCardHeader>
                     <IonCardContent>
                        {post}
                     </IonCardContent>
                    </IonCard>
                    )
                  })
                }
                
            </IonRow>
        </IonContent>
        </>
        </Layout>
    </IonPage>
  )
}

export default MovieDetails