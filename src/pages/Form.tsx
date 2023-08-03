import React, { useRef, useState } from "react";
import { MultiSelect, MultiSelectChangeEvent } from 'primereact/multiselect';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import './Form.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';   // theme
import 'primereact/resources/primereact.css';                       // core css
import 'primeicons/primeicons.css';                                 // icons
import 'primeflex/primeflex.css';

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

        // Check if there are no selected sports, and if so, prevent form submission.
        if (selectedSports.length === 0) {
            toast.current?.show({
                severity: 'error',
                summary: 'Error',
                detail: 'Please select at least one sport.',
            });
            return;
        }

        // If there are selected sports, proceed with form submission and show success message.
        show();

        // Reset the form after submission.
        e.currentTarget.reset();
    };

    const handleMultiSelectChange = (e: MultiSelectChangeEvent) => {
        setSelectedSports(e.value);
    };

    const isFormFieldInvalid = (name: string) => !selectedSports.length;

    const getFormErrorMessage = (name: string) => {
        return isFormFieldInvalid(name) ? <small className="p-error">Please select at least one sport.</small> : <small className="p-error">&nbsp;</small>;
    };

    return (
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
                {getFormErrorMessage('item')}
                <Button type="submit" label="Submit" className="mt-2" />
            </form>
        </div>
    )
}

export default Form;
