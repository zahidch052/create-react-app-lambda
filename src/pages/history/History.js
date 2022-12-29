import React from 'react'
import TableComponent from '../../components/table/Table'
const History = () => {
    return (
        <>
            <div className='bg-white rounded pb-4'>
                <TableComponent>
                    <thead className='historyTableHead'>
                        <tr>
                            <th>Time</th>
                            <th>ID</th>
                            <th>Type</th>
                            <th>Quantity</th>
                            <th>Open Price</th>
                            <th>SL</th>
                            <th>TP</th>
                            <th>Time</th>
                            <th>Close Position</th>
                            <th>Commission</th>
                            <th>PnL</th>
                            <th>Comment</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>00:00 AM EST</td>
                            <td>1232322</td>
                            <td>Sell</td>
                            <td>1.0</td>
                            <td>1243.54</td>
                            <td>3345.88</td>
                            <td>3345.88</td>
                            <td>00:00 AM EST</td>
                            <td>10%</td>
                            <td>10%</td>
                            <td>123433</td>
                            <td>00.000%</td>
                        </tr>
                    </tbody>
                </TableComponent>
            </div>
        </>
    )
}

export default History