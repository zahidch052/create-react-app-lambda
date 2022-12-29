import React from 'react'
import TableComponent from '../../components/table/Table'

const CloseSummary = () => {
    return (
        <TableComponent>
            <thead>
                <tr>
                    <th>Symbol</th>
                    <th>Trade</th>
                    <th>Buy Amount</th>
                    <th>Buy Price</th>
                    <th>Bid</th>
                    <th>Buy PnL</th>
                    <th>Sell Amount</th>
                    <th>Sell Prices</th>
                    <th>Ask</th>
                    <th>Sell PnL</th>
                    <th>Net Amount</th>
                    <th>Net Amount(BR)</th>
                    <th>Net Amount(SB)</th>
                    <th>Net PnL</th>
                    <th>Net PnL(BR)</th>
                    <th>Net PnL(Sb)</th>
                    <th>Net Value(BR)</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>SYMBOL</td>
                    <td>1</td>
                    <td>0.0100</td>
                    <td>1243.094</td>
                    <td>1260.76</td>
                    <td>44.65</td>
                    <td>0.000</td>
                    <td>0000.0000</td>
                    <td>0.0000</td>
                    <td>0.000</td>
                    <td>0.000</td>
                    <td>0.0000</td>
                    <td>0.0000</td>
                    <td>0.0000</td>
                    <td>0.0000</td>
                    <td>0.0000</td>
                    <td>0.0000</td>

                </tr>
            </tbody>
        </TableComponent>
    )
}

export default CloseSummary