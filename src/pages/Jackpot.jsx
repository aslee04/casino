import React from 'react'
import JackpotBigChart from './items/jackpot-big-chart'
import JackpotAmountCharts from './items/jackpot-amount-charts'

const Jackpot = () => {
    return (
        <div>
            <JackpotBigChart />

            <div className="grid grid-cols-3 gap-2.5">
                <JackpotAmountCharts title='Total Amount'></JackpotAmountCharts>
                <JackpotAmountCharts title='Players total'></JackpotAmountCharts>
                <JackpotAmountCharts title='Items total'></JackpotAmountCharts>
            </div>
        </div>
    )
}

export default Jackpot