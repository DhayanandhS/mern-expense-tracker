/* eslint-disable jsx-a11y/heading-has-content */
import React from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../../styles/Layouts';
import Chart from '../Chart/Chart.js';
import { useGlobalContext } from '../../context/globalContext.js';
import { dollar} from '../../utils/Icons.js'


function Dashboard(){
    const {totalExpenses,totalIncome} = useGlobalContext()
    return(
        <DashboardStyled>
            <InnerLayout>
                <h1>All Transactions</h1>
                    <div className="stats-con">
                        <div className="chart-con">
                            <Chart/>
                            <div className="amount-con">
                                <div className="income">
                                    <h2></h2>
                                    <p>
                                    {dollar} {totalIncome()}
                                </p>
                                </div>
                            </div>
                        </div>
                    </div>
            </InnerLayout>
        </DashboardStyled>
    )
}

const DashboardStyled = styled.div`

`;

export default Dashboard