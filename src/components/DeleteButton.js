import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';

export const DeleteButton = ( props ) => {
    const [isLoading, setLoading ] = useState(false);

    const type = props.type;
    const id = props.id;
    switch(type) {
        case 'tournament':
            console.log('Delete a tournament');
    } 
    useEffect(() => {
        if(isLoading) {

        }

    })
}