import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonLabel, IonButtons, IonMenuButton, useIonViewDidEnter, useIonViewDidLeave, IonButton, useIonLoading, IonIcon } from "@ionic/react";
import { personCircleOutline } from "ionicons/icons";
import React from "react";
import { useState } from "react";

const Home: React.FC = () => {
    var [counter, setCounter] = useState(0);
    const [present, dismiss] = useIonLoading();    
    
    useIonViewDidEnter(() => {
        setCounter(counter++);
        if(counter === 1) {
        }
    });
    useIonViewDidLeave(() => {
        setCounter(counter--);
        if(counter === 0) {            
        }
    });

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton/>
                    </IonButtons>
                    <IonTitle>Home</IonTitle>
                    <IonButtons slot="end" class="ion-margin-end">
                        <IonButton routerLink={'/profile'}>
                            <IonIcon slot="icon-only" icon={personCircleOutline} />
                        </IonButton>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                    <IonLabel><h1>Anda Masih Jones ?</h1></IonLabel>
                    <IonButton onClick={() => {
                        present({
                            message: `Dismissing after 3 seconds...`,
                            duration: 3000
                        })
                    }} routerLink={'/explore'} style={{width: '100%'}}>Cari Gebetan</IonButton>
                </div>
            </IonContent>
        </IonPage>
    )
};

export default Home;