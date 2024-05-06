import React from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../../styles/Layouts';
import { useGlobalContext } from '../../context/globalContext';
import Form from '../Form/Form';

function Incomes(){

    const {addIncome} = useGlobalContext()

    return(
        <IncomesStyled>
            <InnerLayout>
            <h1>Incomes</h1>
                <h2 className="total-income">Total Income: </h2>
                <div className="income-content">
                    <div className="form-container">
                        <Form/>
                    </div>
                    <div className="incomes">
                        
                    </div>
                </div>
            </InnerLayout>
        </IncomesStyled>
    )
}

const IncomesStyled = styled.div`

`;

export default Incomes