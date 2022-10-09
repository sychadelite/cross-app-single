import { IonAvatar, IonBackButton, IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonIcon, IonPage, IonRow, IonTitle, IonToolbar } from "@ionic/react";
import { femaleOutline, maleOutline, personCircleOutline } from "ionicons/icons";
import { useParams } from "react-router"
import { PERSON_DATA } from "./Explore";

const ExploreDetail: React.FC = () => {
    const pId = useParams<{personId: string}>().personId;
    const selectedPerson = PERSON_DATA.find(p => p.id === pId);
    
    return(
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton></IonBackButton>
                    </IonButtons>
                    <IonTitle>
                        Target: {truncate(selectedPerson ? pId : 'No target found')}
                    </IonTitle>
                    <IonButtons slot="end" class="ion-margin-end">
                        <IonButton routerLink={'/profile'}>
                            <IonIcon slot="icon-only" icon={personCircleOutline} />
                        </IonButton>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">                
                <IonCard>
                    <IonCardHeader style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                        <IonAvatar class="ion-margin">
                            <img alt="Silhouette of a person's head" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
                        </IonAvatar>
                        <IonCardTitle><h2>{selectedPerson ? selectedPerson?.name : 'No name found'}</h2></IonCardTitle>
                        <IonCardSubtitle>
                            <IonRow>
                                {selectedPerson ? selectedPerson.gender === 'male' ? <IonIcon icon={femaleOutline} /> : <IonIcon icon={maleOutline} /> : null}
                                &nbsp;{selectedPerson ? selectedPerson.gender : null}
                            </IonRow>
                        </IonCardSubtitle>
                    </IonCardHeader>

                    <IonCardContent>
                        Bio: {selectedPerson ? selectedPerson?.bio : 'No bio found'}
                    </IonCardContent>
                </IonCard>
            </IonContent>
        </IonPage>
    )
};

function truncate(arg0: any | undefined): import("react").ReactNode {
    return arg0.length > 50 ? arg0.substring(0, 50) + " ..." : arg0;
};

export default ExploreDetail;


