import React from 'react';
import { useHistory } from 'react-router-dom';

const CustomBackButton = () => {
    const history = useHistory();

    const handleClick = () => {

        // Jeśli warunek jest spełniony, cofnij się bez przeładowania strony
        history.goBack();
    };

    return <button onClick={handleClick}>Cofnij</button>;
};

export default CustomBackButton;