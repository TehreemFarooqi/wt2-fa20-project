import React, {Fragment,useEffect,useState } from 'react';
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';
import {Link,withRouter} from 'react-router-dom';


import data from  '../data/data.json';
import './ownStyle.css';
import '../Index.css';

    function DeleteMember(props) {
        useEffect(() => {
            setId(props.match.params.id);
        });

        const [id, setId] = useState('');
        const memberData = data.find(el => el.id == id);
        const display = (
            <Card key= {memberData?.id}>
            <Card.Body>
            <img src= {memberData?.image}alt="new" />
                <Card.Text>{memberData?.name} </Card.Text>
                <Card.Title> Enrollment Id: { memberData?.cms}</Card.Title>
                <Card.Title> Bio: { memberData?.bio}</Card.Title>
                <Card.Title> Group Name: {memberData?.gname} </Card.Title>
                <Card.Title>Github Link: <a href={memberData?.url} target="_blank" rel=" noopener noreferrer">{memberData?.url} </a></Card.Title>
                <Card.Title>Are you sure you wanna delete {memberData?.name}? </Card.Title>
                <Link to= "/" className="btn-primary"> Confirm </Link>
                <Link to= "/" className="btn-primary"> Back to Home </Link>
            </Card.Body>
            </Card>
        );
        return (
            <Fragment>
                <CardColumns className=" m-3 p-3 owncard "> {display}   </CardColumns>
                <hr></hr>
            </Fragment>
        );
    }
export default withRouter(DeleteMember);