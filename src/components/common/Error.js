import React from 'react';
import {Alert} from 'reactstrap';

export default function Error(props) {
    let msg = props.msg || "Oops ! Something went wrong.";
    return <Alert color="danger" {...props}>
        {msg}
    </Alert>
}