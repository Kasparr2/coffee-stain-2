import { IonPage, IonHeader, IonToolbar, IonButtons, IonBackButton, IonTitle, IonContent } from '@ionic/react';
import './blackcoffee.css';


const Blackcoffee: React.FC = () => {
    return (
        <><IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot='start'>
                        <IonBackButton defaultHref='/' />
                    </IonButtons>
                    <IonTitle>Black coffee</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">Black coffee</IonTitle>
                    </IonToolbar>
                </IonHeader>
            </IonContent>
        </IonPage></>
    );
}

export default Blackcoffee;