import React, {useState} from 'react';
import EmployeeAPI from "../api/EmployeeAPI";
import Button from "react-bootstrap/Button";
import Table from "./Table";


const ListEmployees = ({startMonth, endMonth}) => {

    const [employees, setEmployees] = useState([])
    const [header, setHeader] = useState([])

    const getEmployees = async () => {
        try {
            const {data} = await EmployeeAPI.getEmployeeMetaInfo(startMonth, endMonth);
            setEmployees(data);
            // setHeader(Object.keys(data[0]));
            setHeader(headerMetaInfo);
        } catch (err) {
            console.log("Can't not fetch data from server")
        }
    }

    const headerMetaInfo = ["visa", "name", "firstName", "lastName", "consolidatedHours"]

    return (
        <div>
            <Button className="mt-3  mb-3" onClick={getEmployees}>Get Visa Employee</Button>
            <Table data={employees} header={header}></Table>
        </div>
    );
};

export default ListEmployees;
