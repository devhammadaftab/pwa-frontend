import React from 'react';
import { Table } from 'reactstrap';
import { useStore } from 'store/index';
import { Result } from 'interfaces/index';

export interface FieldType {
    col: string
    field: string
}

interface Props {
    fields: FieldType[]
    results: Result[]
    onClick: (result: Result) => void
}

const Results: React.FC<Props> = ({ fields, results, onClick }) => {
    return <Table>
        <thead>
            <tr>
                {fields.map((field, index) => <th key={index}>{field.col}</th>)}
            </tr>
        </thead>
        <tbody>
            {results.map((result: Result, idx) => {
                return <tr key={idx}>

                    {fields.map((field, index) => <td key={index} onClick={() => onClick(result)}>{
                        //@ts-ignore
                        result[field.field]
                    }</td>)}
                </tr>
            })}
        </tbody>
    </Table>
}

export default Results;