import React, { useState } from 'react'
import { settingsAsset, themeIconAsset } from '../../assets'
import TableComponent from '../../components/table/Table'
import CloseHistoryReportModal from './CloseHistoryReportModal'
import CurrentOpenPositionReportModal from './CurrentOpenPositionReportModal'
import FinancialStadingHistoryModal from './FinancialStadingHistoryModal'
import FinancialStandingModal from './FinancialStandingModal'
import LoginHistoryModal from './LoginHistoryModal'
import MoneyTransactionReportModal from './MoneyTransactionReportModal'
import NetFinancialStandingModal from './NetFinancialStandingModal'
import OpenHistoryReportModal from './OpenHistoryReportModal'
import OrderReportModal from './OrderReportModal'
import RoboOrderHistoryModal from './RoboOrderHistoryModal'
import UserDetailReportModal from './UserDetailReportModal'

const MoneyTransactionReport = () => {

    const [moneyTransModal, setmoneyTransModal] = useState(false)
    const moneyTransactionModalHandler = () => {
        setmoneyTransModal((prev) => !prev);
    }
    return (

        <TableComponent>
            <thead>
                <tr>
                    <th>Login Time</th>
                    <th>User Type</th>
                    <th>User Name</th>
                    <th>Name Acc</th>
                    <th>IP Address</th>
                    <th>Device Type</th>
                    <th>MAC Address</th>
                    <th>
                        <img src={settingsAsset} alt="" />
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>2022/05/01, 01:00</td>
                    <td>Broker</td>
                    <td>Charli@321</td>
                    <td>Charli</td>
                    <td>192.168.20.2</td>
                    <td>0000.0000</td>
                    <td>0000.0000</td>
                    <td>
                        <p className='fs-12' onClick={() => moneyTransactionModalHandler()}>M</p>
                    </td>
                    {moneyTransModal &&
                        <MoneyTransactionReportModal moneyTransactionModalHandler={moneyTransactionModalHandler} />
                    }
                </tr>
            </tbody>
        </TableComponent>
    )
}

export default MoneyTransactionReport