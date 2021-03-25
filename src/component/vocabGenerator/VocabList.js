import React from 'react';
import './VocabList.css';
import { Card, CardBody, CardHeader, Button } from 'reactstrap';



const VocabList = props => {


    return (
        <div>
            <Card style={{
                marginTop: "30px",
                marginBottom: "30px",
                textAlign: "center"
            }}>
                <CardHeader style={{
                    backgroundColor: "#41729F",
                    color: "white"
                }}><h4>Vocab Card</h4></CardHeader>
                <CardBody>

                    <h2 >{props.object.word}</h2>
                    <h3 style={{ display: "inline-block" }} > <span style={{ display: "inline-block" }} className="a"><h3 >Hover Here To View Meaning :</h3> </span> <span style={{ display: "inline-block" }} className="b HideMeaning"> {props.object.meaning}</span> </h3>



                </CardBody>
                <Button style={{ backgroundColor: "#274472", fontSize: "20px" }} onClick={props.next} >Next</Button>
            </Card>




        </div>
    )
}


export default VocabList;