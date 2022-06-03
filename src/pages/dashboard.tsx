//splashscreen
import React from 'react';
import { IonButton, IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonGrid, IonRow, IonCol, IonFooter, IonImg, IonRouterOutlet } from '@ionic/react';
import './dashboard.css';



const Dashboard: React.FC = () => {

    return (
       <IonPage>
           <IonHeader>
               <IonToolbar>
                   <IonButtons slot="start">
                       <IonMenuButton color="warning"/>
                   </IonButtons>
                   <IonTitle>Splash</IonTitle>
               </IonToolbar>
               
           </IonHeader>
           <IonContent>
            <h1>This is a splash art screen</h1>
            </IonContent>
           <IonFooter>
               <IonGrid>
                   <IonRow >
                       <IonCol size="8" offset="2">
                                <IonButton expand="block" shape="round" routerLink='coffee'>Press to continue</IonButton>
                       </IonCol>
                   </IonRow>
               </IonGrid>
               </IonFooter>
       </IonPage>
        );
}

export default Dashboard;

