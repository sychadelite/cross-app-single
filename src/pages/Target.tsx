import { IonAvatar, IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonItem, IonItemOption, IonItemOptions, IonItemSliding, IonLabel, IonList, IonMenuButton, IonPage, IonTitle, IonToolbar, 
    useIonViewDidEnter,
    useIonViewDidLeave,
    useIonViewWillEnter,
    useIonViewWillLeave } from "@ionic/react";
import { ban, trash, create, personCircleOutline, closeOutline } from "ionicons/icons";
import React, { useRef, useState } from "react";
import { FRIENDS_DATA } from "./Explore";

import SheetModal from "../components/SheetModal"

type Item = {
    id: string;
    name: string;
    bio: string;
    gender: string;
};

export const TARGET_PERSON: Item[] = FRIENDS_DATA

export const TARGET_ACTIONABLE: Item[] = []

const Meet: any = () => {
    var [counter, setCounter] = useState(0);

    const slidingOptionsRef = useRef<HTMLIonItemSlidingElement>(null)
    
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
    useIonViewWillEnter(() => {
    });  
    useIonViewWillLeave(() => {
    });

    const callFriendHandler = (args: String) => {
        console.log("Calling...", args);
    };
    const blockFriendHandler = (event: React.MouseEvent) => {
        slidingOptionsRef.current?.closeOpened();
        event.stopPropagation();
        console.log("Blocking...");
    };
    const deleteFriendHandler = (event: React.MouseEvent, args: String) => {
        slidingOptionsRef.current?.closeOpened();
        event.stopPropagation();
        console.log("Deleting...");

        // Got Action & Pass it to Sheet Modal
        let tp = TARGET_PERSON.filter(item => (item.id === args));
        for(let i=0; i<tp.length; i++) {
            TARGET_ACTIONABLE.push(tp[i])
        }

        const elModal: any = document.getElementById('sheet-modal-page')
        elModal.style.display = 'block'
        const elTriggerModal: any = document.getElementById('open-modal')
        elTriggerModal.click()
    };
    const editFriendHandler = (event: React.MouseEvent) => {
        slidingOptionsRef.current?.closeOpened();
        event.stopPropagation();
        console.log("Editing...");
    };
    
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton/>
                    </IonButtons>
                    <IonTitle>All Target</IonTitle>
                    <IonButtons slot="end" class="ion-margin-end">
                        <IonButton routerLink={'/profile'}>
                            <IonIcon slot="icon-only" icon={personCircleOutline} />
                        </IonButton>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <IonList>
                    {TARGET_PERSON.length ? TARGET_PERSON.map(friend => (
                        <IonItemSliding id={`slided-item-target-${friend.id}`} key={friend.id} ref={slidingOptionsRef}>
                            <IonItemOptions side="start">
                                <IonItemOption color="warning" onClick={editFriendHandler}>
                                    <IonIcon slot="icon-only" icon={create} />
                                </IonItemOption>
                                <IonItemOption color="danger" onClick={blockFriendHandler}>
                                    <IonIcon slot="icon-only" icon={ban} />
                                </IonItemOption>
                            </IonItemOptions>
                            <IonItemOptions side="end">
                                <IonItemOption color="danger" onClick={(e) => {
                                    deleteFriendHandler(e, friend.id)
                                }}>
                                    <IonIcon slot="icon-only" icon={closeOutline} />
                                </IonItemOption>
                            </IonItemOptions>
                            <IonItem lines="full"
                                button
                                onClick={() => callFriendHandler(`${friend.name}`)}
                                routerLink={`/target/${friend.id}`}
                            >
                                <IonAvatar class="ion-margin-end">
                                    <img alt="Silhouette of a person's head" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
                                </IonAvatar>
                                <IonLabel>{friend.name}</IonLabel>
                            </IonItem>
                        </IonItemSliding>
                    )) : <IonLabel class="ion-padding">Target Data is Empty</IonLabel>}
                </IonList>
            </IonContent>
            <SheetModal/>
        </IonPage>
    )
};

export default Meet;