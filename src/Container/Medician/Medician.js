import React from 'react';
import { Button } from 'reactstrap';
import List from '../../Component/List/List';

function Medician(props) {
    const orgData = [
        {
            id: 101,
            name: 'Abacavir',
            quantity: 25,
            price: 150,
            expiry: 2022
        },
        {
            id: 102,
            name: 'Eltrombopag',
            quantity: 90,
            price: 550,
            expiry: 2021
        },
        {
            id: 103,
            name: 'Meloxicam',
            quantity: 85,
            price: 450,
            expiry: 2025
        },
        {
            id: 104,
            name: 'Allopurinol',
            quantity: 50,
            price: 600,
            expiry: 2023
        },
        {
            id: 105,
            name: 'Phenytoin',
            quantity: 63,
            price: 250,
            expiry: 2021
        },
    ]
    
    const getId = (id)=>{
        console.log(id);
    }
    return (
        <List 
            getProps={getId}
            Data={orgData}
        />
    );
}

export default Medician;