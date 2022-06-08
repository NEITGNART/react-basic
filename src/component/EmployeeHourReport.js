import React, {useState} from 'react';
import {Container, Form} from 'react-bootstrap';
import EmployeeList from "./EmployeeList";

const EmployeeHourReport = () => {


    const [startMonth, setStartMonth] = useState("2022-04-01")
    const [endMonth, setEndMonth] = useState("2022-04-07")

    console.log(startMonth)
    return (
        <div>

            <Container>
                <div className="d-flex justify-content-between">
                    <div>
                        <Form.Group controlId="startDate" onChange={(e) => setStartMonth(e.target.value)}>
                            <Form.Label>Select start date</Form.Label>
                            <Form.Control type="date" name="startDate"/>
                        </Form.Group>
                    </div>
                    <div>
                        <Form.Group controlId="endDate" onChange={(e) => setEndMonth(e.target.value)}>
                            <Form.Label>Select end date</Form.Label>
                            <Form.Control type="date" name="endDate"/>
                        </Form.Group>
                    </div>
                </div>
                <EmployeeList startMonth={startMonth} endMonth={endMonth}/>
            </Container>

        </div>
    )
};

export default EmployeeHourReport;
