import React, { useRef } from 'react';
import {
    IonButton,
    IonModal,
    IonHeader,
    IonContent,
    IonToolbar,
    IonTitle,
    IonPage,
    IonList,
    IonItem,
    IonLabel,
    IonAvatar,
    IonImg,
    IonSearchbar,
    IonIcon,
    useIonLoading,
} from '@ionic/react';
import { caretBackCircleOutline, trash } from 'ionicons/icons';

import { TARGET_ACTIONABLE } from '../pages/Target';

function SheetModal() {
    const [present, dismiss] = useIonLoading();
    const modal = useRef<HTMLIonModalElement>(null);

    const deleteTarget = () => {
        const lastIndex = TARGET_ACTIONABLE.length - 1
        // Bring back ex gebetan to Explore
        // ....
        
        // Remove El That Already Targeted
        const slidedItemTarget: any = document.getElementById('slided-item-target-'+TARGET_ACTIONABLE[lastIndex].id)
        const remover = setTimeout(removeEl, 3000);
        function removeEl() {
            slidedItemTarget.remove()
            clearTimeout(remover);
        }
        modal.current?.dismiss()
        console.log('target deleted...')
    }
    const cancelAction = () => {
        modal.current?.dismiss()
        console.log('action cancelled...')
    }

    return (
        <IonPage id="sheet-modal-page" style={{display: 'none'}}>
            <IonButton id="open-modal" expand="block" style={{width: '0px', height: '0px'}}></IonButton>
            <IonModal ref={modal} trigger="open-modal" initialBreakpoint={0.25} breakpoints={[0, 0.25, 0.5, 0.75]} onWillDismiss={() => {
                    const elModal: any = document.getElementById('sheet-modal-page') 
                    elModal.style.display = 'none'
                }}
                >
                <IonContent className="ion-padding">
                    <IonHeader class="ion-margin">
                        <IonLabel>
                            Yakin gak gebet dia lagi ?
                        </IonLabel>
                    </IonHeader>
                    {/* <IonSearchbar onClick={() => modal.current?.setCurrentBreakpoint(0.75)} placeholder="Search"></IonSearchbar>
                    <IonList>
                        <IonItem>
                            <IonAvatar slot="start">
                                <IonImg src="https://i.pravatar.cc/300?u=b" />
                            </IonAvatar>
                            <IonLabel>
                                <h2>Connor Smith</h2>
                                <p>Sales Rep</p>
                            </IonLabel>
                        </IonItem>
                        <IonItem>
                            <IonAvatar slot="start">
                                <IonImg src="https://i.pravatar.cc/300?u=a" />
                            </IonAvatar>
                            <IonLabel>
                                <h2>Daniel Smith</h2>
                                <p>Product Designer</p>
                            </IonLabel>
                        </IonItem>
                        <IonItem>
                            <IonAvatar slot="start">
                                <IonImg src="https://i.pravatar.cc/300?u=d" />
                            </IonAvatar>
                            <IonLabel>
                                <h2>Greg Smith</h2>
                                <p>Director of Operations</p>
                            </IonLabel>
                        </IonItem>
                        <IonItem>
                            <IonAvatar slot="start">
                                <IonImg src="https://i.pravatar.cc/300?u=e" />
                            </IonAvatar>
                            <IonLabel>
                                <h2>Zoey Smith</h2>
                                <p>CEO</p>
                            </IonLabel>
                        </IonItem>
                    </IonList> */}
                    <IonItem lines="full"
                        button
                        onClick={() => {
                            deleteTarget()
                            present({
                                message: `Deleting Gebetan...`,
                                duration: 3000
                            })
                        }}
                    >
                        <IonIcon slot="start" icon={trash} />
                        <IonLabel>Yakin, hapus dari daftar</IonLabel>
                    </IonItem>
                    <IonItem lines="full"
                        button
                        onClick={() => cancelAction()}
                    >
                        <IonIcon slot="start" icon={caretBackCircleOutline} />
                        <IonLabel>Gak Yakin, kembali</IonLabel>
                    </IonItem>
                </IonContent>
            </IonModal>
        </IonPage>
    );
}

export default SheetModal;

