import React from 'react'
import { fillStarAsset, starAsset } from '../../assets'
import TableComponent from '../../components/table/Table'

const EconomicCalender = () => {
    return (
        <>
            <div className='bg-white rounded'>
                <TableComponent>
                    <thead>
                        <tr>
                            <th>Time</th>
                            <th>Currency</th>
                            <th>Importance</th>
                            <th>Event</th>
                            <th>Actual</th>
                            <th>Forecast</th>
                            <th>Previous</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>00:00 AM EST</td>
                            <td>USD</td>
                            <td>
                                <div className='d-flex align-items-center gap-1'>
                                    <img src={fillStarAsset} alt="" width="19px" height="19px" />
                                    <img src={fillStarAsset} alt="" width="19px" height="19px" />
                                    <img src={starAsset} alt="" width="28px" height="28px" />
                                </div>
                            </td>
                            <td>Some event</td>
                            <td>00.000%</td>
                            <td>00.000%</td>
                            <td>00.000%</td>
                        </tr>
                    </tbody>
                </TableComponent>
            </div>
        </>
    )
}

export default EconomicCalender