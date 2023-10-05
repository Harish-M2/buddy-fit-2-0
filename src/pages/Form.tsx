import React, { useRef, useState } from "react";
import { MultiSelect, MultiSelectChangeEvent } from 'primereact/multiselect';
import { Toast } from 'primereact/toast';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { Button } from 'primereact/button';
import './Form.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import { useDarkMode } from "./DarkModeContext";

interface City {
    name: string;
    code: string;
}

const Form: React.FC = () => {
    const toast = useRef<Toast | null>(null);
    const [selectedSports, setSelectedSports] = useState<City[]>([]);
    const cities: City[] = [
        { name: 'Football', code: 'NY' },
        { name: 'Tennis', code: 'RM' },
        { name: 'Running', code: 'LDN' },
        { name: 'Golf', code: 'IST' },
        { name: 'Swimming', code: 'PRS' }
    ];

    const show = () => {
        const itemArray = selectedSports.map((city, i) => city.name + (i < selectedSports.length - 1 ? ', ' : ''));
        toast.current?.show({ severity: 'success', summary: 'Form Submitted', detail: itemArray.join(', ') });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (selectedSports.length === 0) {
            toast.current?.show({
                severity: 'error',
                summary: 'Error',
                detail: 'Please select at least one sport.',
            });
            return;
        }

        show();

        // Reset the form
        setSelectedSports([]);
    };

    const handleMultiSelectChange = (e: MultiSelectChangeEvent) => {
        setSelectedSports(e.value);
    };

    const { darkMode } = useDarkMode();

    return (
        <IonPage className={`${darkMode ? 'dark-mode' : ''}`}>
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
                <div className="card flex justify-content-center">
                    <form onSubmit={handleSubmit} className="flex flex-column align-items-center gap-2">
                        <Toast ref={toast} />
                        <MultiSelect
                            id="item"
                            name="item"
                            options={cities}
                            value={selectedSports}
                            onChange={handleMultiSelectChange}
                            optionLabel="name"
                            placeholder="Select Sports"
                            maxSelectedLabels={3}
                            className="w-full md:w-40rem"
                        />
                        {selectedSports.length === 0 && <small className="p-error">Please select at least one sport.</small>}
                        <Button type="submit" label="Submit" className="mt-2" />
                    </form>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default Form;
