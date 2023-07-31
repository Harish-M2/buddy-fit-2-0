import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { IonButton, IonIcon } from '@ionic/react';
import { star } from 'ionicons/icons';
import './Tab1.css';

const Tab1: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Welcome</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">Welcome</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <div className="button-container">
                    <IonButton>
                        <ionicon size="small" slot="start" icon={star}></ionicon>
                        Football
                    </IonButton>

                    <IonButton>
                        <IonIcon size="small" slot="start" icon={star}></IonIcon>
                        Tennis
                    </IonButton>
                    <IonButton>
                        <IonIcon size="small" slot="start" icon={star}></IonIcon>
                        Golf
                    </IonButton>
                    <IonButton>
                        <IonIcon size="small" slot="start" icon={star}></IonIcon>
                        Running
                    </IonButton>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default Tab1;
