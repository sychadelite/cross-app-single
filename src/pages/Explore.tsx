import { IonAvatar, IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonHeader, IonIcon, IonItem, IonItemOption, IonItemOptions, IonItemSliding, IonLabel, IonList, IonMenuButton, IonPage, IonRow, IonSlide, IonSlides, IonTitle, IonToolbar, useIonLoading, useIonViewDidEnter, useIonViewDidLeave } from "@ionic/react";
import { useRef, useState } from "react";
import { femaleOutline, heart, maleOutline, personCircleOutline } from "ionicons/icons";

import './css/Explore.css'


type Item = {
    id: string;
    name: string;
    bio: string;
    gender: string;
};

export let PERSON_DATA: Item[] = [
    { id: 'p1', name: 'Divi Mini', bio: 'oh yeah', gender: 'female' },
    { id: 'p2', name: 'Sick for Lala', bio: 'noice', gender: 'female' },
    { id: 'p4', name: 'Shaiden Rouge', bio: 'prikitiw', gender: 'female' },
    { id: 'p5', name: 'Ryuzen', bio: 'alone all time', gender: 'male' },
    { id: 'p3', name: 'Sayang Reislin', bio: 'boleeh boleeh', gender: 'female' },
    { id: 'p6', name: 'Molty Blue Wolf', bio: 'single woles', gender: 'female' },
    { id: 'p7', name: 'Golden Natasha', bio: 'searching for partner', gender: 'female' }
];
export let FRIENDS_DATA: Item[] = [];

const Explore: React.FC = () => {
    var [counter, setCounter] = useState(0);
    const slidingOptionsRef = useRef<HTMLIonItemSlidingElement>(null)
    const [present, dismiss] = useIonLoading();

    useIonViewDidEnter(() => {
        setCounter(counter++);
        if (counter === 1) {
        }
    });
    useIonViewDidLeave(() => {
        setCounter(counter--);
        if (counter === 0) {
        }
    });

    const slideOpts = {
        initialSlide: 0,
        speed: 400,
        // Responsive breakpoints
        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 1,
                spaceBetween: 10
            },
            // when window width is >= 480px
            480: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            // when window width is >= 640px
            640: {
                slidesPerView: 3,
                spaceBetween: 30
            },
            // when window width is >= 640px
            1024: {
                slidesPerView: 4,
                spaceBetween: 40
            },
            // when window width is >= 640px
            1280: {
                slidesPerView: 5,
                spaceBetween: 50
            },
            // when window width is >= 640px
            1566: {
                slidesPerView: 6,
                spaceBetween: 60
            },
            // when window width is >= 640px
            2000: {
                slidesPerView: 7,
                spaceBetween: 70
            }
        }
    };

    const callPersonHandler = (args: String) => {
        console.log("Calling...", args);
    };
    const lovingPersonHandler = (event: React.MouseEvent, args: String) => {
        slidingOptionsRef.current?.closeOpened();
        event.stopPropagation();
        console.log("Loving...", args);

        // Got Target
        let fd = PERSON_DATA.filter(item => (item.id === args));
        for(let i=0; i<fd.length; i++) {
            FRIENDS_DATA.push(fd[i])
        }

        // // Updated Person
        // let pd = PERSON_DATA;
        // pd = pd.filter(item => !(item.id === args));
        // PERSON_DATA = pd

        // Remove El That Already Loved
        const slidedHighlightExplore: any = document.getElementById('slided-highlight-explore-'+args)
        const slidedItemExplore: any = document.getElementById('slided-item-explore-'+args)
        const remover = setTimeout(removeEl, 3000);
        function removeEl() {
            slidedHighlightExplore.remove()
            slidedItemExplore.remove()
            clearTimeout(remover);
        }
    };

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>Bosen Jomblo</IonTitle>
                    <IonButtons slot="end" class="ion-margin-end">
                        <IonButton routerLink={'/profile'}>
                            <IonIcon slot="icon-only" icon={personCircleOutline} />
                        </IonButton>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>

            <IonContent className="ion-padding" scrollY={true}>
                <IonSlides pager={true} options={slideOpts} class="swiper-scale">
                    {PERSON_DATA.length ? PERSON_DATA.map(person => (
                        <IonSlide id={`slided-highlight-explore-${person.id}`} key={person.id}>
                            <IonCard style={{minWidth: '80%', maxWidth: '30px'}}>
                                <IonCardHeader style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                                    <IonAvatar class="ion-margin">
                                        <img alt="Silhouette of a person's head" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
                                    </IonAvatar>
                                    <IonCardTitle>{person.name}</IonCardTitle>
                                    <IonCardSubtitle class="ion-margin-top">{person.gender}</IonCardSubtitle>
                                </IonCardHeader>

                                <IonCardContent>
                                    {truncate(`${person.bio}`)}
                                </IonCardContent>
                            </IonCard>
                        </IonSlide>
                    )) : <p>Default Markup</p>}
                </IonSlides>

                <IonList>
                    {PERSON_DATA.length ? PERSON_DATA.map(person => (
                        <IonItemSliding id={`slided-item-explore-${person.id}`} key={person.id} ref={slidingOptionsRef}>
                            <IonItemOptions side="end">
                                <IonItemOption color="success" onClick={(e) => {
                                    lovingPersonHandler(e, person.id)
                                    present({
                                        message: `Loving...`,
                                        duration: 3000
                                    })
                                }}>
                                    <IonIcon slot="icon-only" icon={heart} />
                                </IonItemOption>
                            </IonItemOptions>
                            <IonItem lines="full"
                                button
                                onClick={() => callPersonHandler(`${person.name}`)}
                                routerLink={`/explore/${person.id}`}
                            >
                                <IonAvatar style={{minWidth: '80px', minHeight: '80px'}}>
                                    <img alt="Silhouette of a person's head" src="https://ionicframework.com/docs/img/demos/avatar.svg"/>
                                </IonAvatar>
                                <IonCol class="ion-padding">
                                    <IonLabel class="ion-text-capitalize"><h1>{person.name}</h1></IonLabel>
                                    <IonLabel class="ion-margin-top ion-text-capitalize">{person.bio}</IonLabel>
                                    <IonLabel class="ion-text-capitalize">
                                        <IonRow>
                                            {person.gender === 'male' ? <IonIcon icon={femaleOutline} /> : <IonIcon icon={maleOutline} />}
                                            &nbsp;{person.gender}
                                        </IonRow>
                                    </IonLabel>
                                </IonCol>
                            </IonItem>
                        </IonItemSliding>
                    )) : <IonLabel class="ion-padding">Person Data is Empty</IonLabel>}
                </IonList>
            </IonContent>
        </IonPage>
    )
};

function truncate(arg0: any | undefined): import("react").ReactNode {
    return arg0.length > 40 ? arg0.substring(0, 40) + " ..." : arg0;
};

export default Explore;