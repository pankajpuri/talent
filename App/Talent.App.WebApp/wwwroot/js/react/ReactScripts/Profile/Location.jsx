﻿import React from 'react'
import Cookies from 'js-cookie'
import { default as Countries } from '../../../../util/jsonFiles/countries.json';
import { ChildSingleInput } from '../Form/SingleInput.jsx';

export class Address extends React.Component {
    constructor(props) {
        super(props)
        

    }

   
    render() {
        return (
            <h1>
                I'm inside the Location.jsx/Addres comoponent
            </h1>
        );
    }

}

export class Nationality extends React.Component {
    constructor(props) {
        super(props)
       
    }

    
    render() {
        return (
            <h1>
                I'm inside the Location.jsx/ Nationality component
            </h1>
        );
        
    }
}