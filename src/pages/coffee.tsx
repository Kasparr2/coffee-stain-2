import { IonPage, IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonTabBar, IonTabButton, IonLabel, IonButton, IonCol, IonGrid, IonRow, IonContent } from '@ionic/react';
import './coffee.css';
import './blackcoffee';

const Coffee: React.FC = () => {
    
    return (
                <IonPage>
                <IonHeader>
                    <IonToolbar>
                        <IonButtons slot="start">
                            <IonMenuButton color="warning" />
                        </IonButtons>
                        <IonTitle>Coffee</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent>
                <IonButton expand="block"  routerLink="Blackcoffee">Black coffee</IonButton>
                <IonButton expand="block"  routerLink='Flatwhite'>Flat white</IonButton>
                <IonButton expand="block"  routerLink='Espresso'>Espresso</IonButton>
                <IonButton expand="block"  routerLink='Cappuccino'>Cappuccino</IonButton>
                <IonButton expand="block"  routerLink='Machiato'>Machiato</IonButton>
                <IonButton expand="block"  routerLink='Americano'>Americano</IonButton>
                </IonContent>
                
                    <IonTabBar slot="bottom">
                        <IonTabButton tab="cart">
                        <IonLabel>Cart</IonLabel>
                        </IonTabButton>
                        <IonTabButton tab="favorites">
                        <IonLabel>Favorites</IonLabel>
                        </IonTabButton>
                        <IonTabButton tab="back">
                        <IonLabel>Back</IonLabel>
                        </IonTabButton>
                    </IonTabBar>

              
            </IonPage>
    );
}

export default Coffee;
<IonGrid>
<IonRow >
<IonCol size="12">
</IonCol>
</IonRow>
</IonGrid>