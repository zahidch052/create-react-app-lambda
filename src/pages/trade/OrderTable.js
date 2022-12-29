import React, { useState } from 'react'
import { closeAsset, editAsset, profitsKeyAsset } from '../../assets'
import TableComponent from '../../components/table/Table'
import DeleteCheckedModal from './DeleteCheckedModal';

const OrderTable = () => {
    const [showDeleteChecked, setShowDeleteChecked] = useState(false);

    const deleteCheckedModalHandler = () => {
        setShowDeleteChecked((prev) => !prev);
    };

    return (
        <>
            <TableComponent>
                <thead>
                    <tr>
                        <th>Select</th>
                        <th>Symbol</th>
                        <th>TicketID</th>
                        <th>Open Com.</th>
                        <th>Buy/Sell</th>
                        <th>Amount</th>
                        <th>SL</th>
                        <th>TP</th>
                        <th>Open Price</th>
                        <th>Current Price </th>
                        <th>Used Margin</th>
                        <th>Time</th>
                        <th>Date</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <input type="checkbox" className='checkbox-square' />
                        </td>
                        <td>
                            <div className='d-flex gap-2 align-items-center'>
                                <div className='tableCoinName'>
                                    <p className='fs-14 fw-400'>S</p>
                                </div>
                                <p className='fs-14 fw-400'>SYMBOL</p>
                            </div>
                        </td>
                        <td>
                            124345777
                        </td>
                        <td>
                            <p className='fs-14 fw-400 green'>343344.87</p>
                        </td>
                        <td>Buy</td>
                        <td>1260.76</td>
                        <td>1000.00</td>
                        <td>-2033.33</td>
                        <td>0000.0000</td>
                        <td>0000.0000</td>
                        <td>0000.0000</td>
                        <td>00:00:00 EST</td>
                        <td>MM/DD/YYYY</td>
                        <td>
                            <div className='d-flex gap-2 align-items-center'>
                                <img src={profitsKeyAsset} width="25px" height="25px" alt="" />
                                <img src={editAsset} width="18px" height="18px" alt="" />
                                <img src={closeAsset} width="18px" height="18px" alt=""
                                    onClick={() => deleteCheckedModalHandler()}
                                />
                            </div>
                            {showDeleteChecked &&
                                <DeleteCheckedModal deleteCheckedModalHandler={deleteCheckedModalHandler} />
                            }
                        </td>
                    </tr>
                </tbody>
            </TableComponent>
        </>
    )
}

export default OrderTable