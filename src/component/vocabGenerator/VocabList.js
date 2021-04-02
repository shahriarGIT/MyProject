import React from 'react';
import './VocabList.css';
import { Card, CardBody, CardHeader, Button } from 'reactstrap';



const VocabList = props => {
    let card = null;
    if (props.swapState) {
        card = (
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

                    <h3 style={{}} > <span style={{ display: "inline-block" }} > </span> <span style={{ display: "inline-block" }} > {props.object.meaning}</span> </h3>
                    <h2 style={{ display: "inline-block" }} > <span style={{ display: "inline-block" }} className="a"><h3 >Hover Here To View Vocab :</h3> </span> <span style={{ display: "inline-block" }} className="b HideMeaning"> {props.object.word}</span> </h2>



                </CardBody>
                <div>
                    <Button style={{ backgroundColor: "#274472", fontSize: "20px", width: "50%" }} onClick={props.prev} > Previous</Button>
                    <Button style={{ backgroundColor: "#274472", fontSize: "20px", width: "50%" }} onClick={props.next} >Next </Button>
                </div>

            </Card>)

    }
    else {
        card = (
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
                <div>
                    <Button style={{ backgroundColor: "#274472", fontSize: "20px", width: "50%" }} onClick={props.prev} > Previous</Button>
                    <Button style={{ backgroundColor: "#274472", fontSize: "20px", width: "50%" }} onClick={props.next} >Next </Button>
                </div>

            </Card>
        )

    }


    return (
        <div>


            {card}


        </div>
    )
}


export default VocabList;