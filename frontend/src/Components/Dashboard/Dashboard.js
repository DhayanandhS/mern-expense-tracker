/* eslint-disable jsx-a11y/heading-has-content */
import React,{useEffect} from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../../styles/Layouts';
import Chart from '../Chart/Chart.js';
import { useGlobalContext } from '../../context/globalContext.js';
import { dollar} from '../../utils/Icons.js'


function Dashboard(){
    const {totalExpenses,totalIncome,totalBalance,getIncomes, getExpenses} = useGlobalContext()
    useEffect(() => {
        getIncomes()
        getExpenses()
    }, [])
    return(
        <DashboardStyled>
            <InnerLayout>
                <h1>All Transactions</h1>
                    <div className="stats-con">
                        <div className="chart-con">
                            <Chart/>
                            <div className="amount-con">
                                <div className="income">
                                    <h2>Total Income</h2>
                                    <p>
                                    {dollar} {totalIncome()}
                                </p>
                                </div>
                                <div className="expense">
                                    <h2>Total Expense</h2>
                                    <p>
                                    {dollar} {totalExpenses()}
                                </p>
                                </div>
                                <div className="balance">
                                    <h2>Total Balance</h2>
                                    <p>
                                    {dollar} {totalBalance()}
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