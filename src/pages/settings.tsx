import { IonBackButton, IonButton, IonButtons, IonCol, IonContent, IonGrid, IonHeader, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import './settings.css';

const Settings: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot='start'>
                        <IonBackButton defaultHref='/' />
                    </IonButtons>
                    <IonTitle>Settings</IonTitle>
                </IonToolbar>
                </IonHeader>        
        <IonContent>
        <IonGrid>
        <IonRow >
        <IonCol size="8" offset="2">
        <IonButton expand="block" >Sound settings</IonButton>
        <IonButton expand="block">Screen settings</IonButton>
        <IonButton expand="block">Payment options</IonButton>
        </IonCol>
        </IonRow>
        </IonGrid>
        </IonContent>
        </IonPage>
        
    );
}

export default Settings;