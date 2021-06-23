import QuoteView from './QuoteView'
import styled, {css} from 'styled-components'

const Card = ({quoteData, onChange}) => {

    const CardSection = styled.div `
        width: 550px;
        height: 253px;
        background-color: white;
        padding: 40px 50px;
    `;

    const ButtonWrap = styled.div `
        display: flex;
        flex-direction: row;
        
        &.flex-end {
            justifyContent: flex-end;
        }
        
    `;

    const ChangeButton = styled.button `
        width: 100px;
        height: 38px;
    `;

    return(
        <CardSection>
            <div>
                <QuoteView viewData={quoteData}/>
                <ButtonWrap>
                    <button></button>
                    <button></button>
                </ButtonWrap>
                <ButtonWrap className={'flex-end'}>
                    <ChangeButton onClick={onChange}>New Quote</ChangeButton>
                </ButtonWrap>
            </div>
        </CardSection>
    );
}

export default Card