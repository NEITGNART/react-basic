import React from 'react';

const Table = (props) => {

    const header = props.header
    const data = props.data

    const dataList = data.map((employee) =>
        <tr key={employee.visa}>
            {header.map((title, idx) =>
                <td key={idx}>
                    {employee[title]}
                </td>)}
        </tr>
    );

    return (
        <div>
            <table className="table table-bordered">
                <thead>
                <tr>
                    {
                        header.map((title, idx) => <th key={idx} scope="col">{title}</th>)
                    }
                </tr>
                </thead>
                <tbody>
                {dataList}
                </tbody>
            </table>


        </div>
    );
};

export default Table;
