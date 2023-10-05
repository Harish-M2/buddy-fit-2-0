import React from 'react';
import { Amplify } from 'aws-amplify';
import { withAuthenticator, WithAuthenticatorProps } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import awsconfig from './aws-exports'; // Make sure to configure aws-exports.js with your actual AWS Amplify settings
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/react';

Amplify.configure(awsconfig);

interface Props extends WithAuthenticatorProps {}

const Tab1: React.FC<Props> = ({ signOut, user }) => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Welcome</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen className="ion-padding">
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">Welcome</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <main className="ion-text-center">
                    <h1>Hello {user?.username}</h1>
                    <IonButton onClick={signOut}>Sign out</IonButton>
                </main>
            </IonContent>
        </IonPage>
    );
};

export default withAuthenticator(Tab1);
