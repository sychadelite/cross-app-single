import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonLabel, IonButtons, IonMenuButton, useIonViewDidEnter, useIonViewDidLeave, IonCard, IonCardContent, IonCardHeader, IonImg, IonItem, IonList, IonCol, IonButton, useIonLoading, IonIcon, IonRow } from "@ionic/react";
import { personAddOutline, personCircleOutline } from "ionicons/icons";
import { useState } from "react";

type Item = {
    src: string;
    name: string;
    nim: number;
};
const items: Item[] = [{ src: 'http://placekitten.com/g/200/300', name: 'Bhagas Pati', nim: 1002034021 }];

const Profile: React.FC = () => {
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
                    <IonTitle>Profile</IonTitle>
                    <IonButtons slot="end" class="ion-margin-end">
                        <IonButton routerLink={'/profile'}>
                            <IonIcon slot="icon-only" icon={personCircleOutline} />
                        </IonButton>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
            <IonCard>
                <IonCardHeader>
                    <IonList>
                    {items.map((image, i) => (
                        <IonItem class="ion-justify-content-center" key={i}>
                            <IonCol>
                                <IonImg src={image.src} style={{width: '200px', maxHeight: '300px', margin: '0 auto'}}/>
                                <IonLabel class="ion-text-center ion-margin">{image.name}</IonLabel>
                                <IonLabel class="ion-text-center ion-margin">{image.nim}</IonLabel>
                            </IonCol>
                        </IonItem>
                    ))}
                    </IonList>
                </IonCardHeader>

                <IonCardContent>
                    <IonRow class="ion-justify-content-center" style={{gap: '10px'}}>
                        <IonButton color="secondary" style={{width: '40%', minWidth: '150px'}} onClick={() => {
                            present({
                                message: `Redirect to Instagram...`,
                                duration: 3000
                            })
                        }} routerLink={'/explore'}>
                            Instagram
                        </IonButton>
                        <IonButton color="primary" style={{width: '40%', minWidth: '150px'}} onClick={() => {
                            present({
                                message: `Following...`,
                                duration: 3000
                            })
                        }} routerLink={'/explore'}>
                            <IonIcon class="ion-margin-end" slot="icon-only" icon={personAddOutline} />
                            Follow
                        </IonButton>
                    </IonRow>
                </IonCardContent>
            </IonCard>
            </IonContent>
        </IonPage>
    )
};

export default Profile;