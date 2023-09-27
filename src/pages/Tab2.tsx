// Tab2.tsx
import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';
import './Tab2.css';
import { useDarkMode } from './DarkModeContext'; // Import the useDarkMode hook

const Tab2: React.FC = () => {
    const { darkMode, toggleDarkMode } = useDarkMode(); // Use the darkMode state and toggleDarkMode function

    return (
        <IonPage className={darkMode ? 'dark-mode' : ''}>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Home</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent scrollY fullscreen>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">Sports</IonTitle>
                    </IonToolbar>
                </IonHeader>

                <IonCard>
                    <img alt="example1" src="https://ionicframework.com/docs/img/demos/card-media.png" />
                    <IonCardHeader>
                        <IonCardTitle>Football</IonCardTitle>
                        <IonCardSubtitle>Osterley</IonCardSubtitle>
                    </IonCardHeader>
                    <IonCardContent>Our purpose-built, all-weather football clubs feature the very latest ProTurf synthetic grass all with individual floodlit arenas.
                        After your game, relive that perfect 1-2 or nutmeg in our state-of-the-art sports lounges with BT Sport on the big screen and free Wi-Fi.</IonCardContent>
                </IonCard>
                <IonCard>
                    <img alt="example1" src="https://ionicframework.com/docs/img/demos/card-media.png" />
                    <IonCardHeader>
                        <IonCardTitle>Tennis</IonCardTitle>
                        <IonCardSubtitle>Osterley</IonCardSubtitle>
                    </IonCardHeader>
                    <IonCardContent>Our purpose-built, all-weather football clubs feature the very latest ProTurf synthetic grass all with individual floodlit arenas.
                        After your game, relive that perfect 1-2 or nutmeg in our state-of-the-art sports lounges with BT Sport on the big screen and free Wi-Fi.</IonCardContent>
                </IonCard>
                <IonCard>
                    <img alt="example1" src="https://ionicframework.com/docs/img/demos/card-media.png" />
                    <IonCardHeader>
                        <IonCardTitle>Golf</IonCardTitle>
                        <IonCardSubtitle>Osterley</IonCardSubtitle>
                    </IonCardHeader>
                    <IonCardContent>Our purpose-built, all-weather football clubs feature the very latest ProTurf synthetic grass all with individual floodlit arenas.
                        After your game, relive that perfect 1-2 or nutmeg in our state-of-the-art sports lounges with BT Sport on the big screen and free Wi-Fi.</IonCardContent>
                </IonCard>

                <div className="toggle-container">
                    <label htmlFor="darkModeToggle">Dark Mode</label>
                    <input
                        type="checkbox"
                        id="darkModeToggle"
                        checked={darkMode}
                        onChange={toggleDarkMode}
                    />
                </div>

            </IonContent>
        </IonPage>
    );
};

export default Tab2;
