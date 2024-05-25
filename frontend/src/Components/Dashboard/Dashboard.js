import React from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../../styles/Layouts';
import { Chart } from 'chart.js';

function Dashboard(){
    return(
        <DashboardStyled>
            <InnerLayout>
                <h1>All Transactions</h1>
                    <div className="stats-con">
                        <div className="chart-con">
                            <Chart/>
                        </div>
                    </div>
            </InnerLayout>
        </DashboardStyled>
    )
}

const DashboardStyled = styled.div`

`;

export default Dashboard