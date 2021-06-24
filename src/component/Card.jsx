import QuoteView from './QuoteView'
import styled, {css} from 'styled-components'

const Card = ({quoteData, colorData, onChange}) => {

    const CardSection = styled.div `
        width: 550px;
        height: 100%;
        background-color: white;
        padding: 40px 50px;
        border-radius: 3px;
    `;

    const ButtonBox = styled.div `
        width: 100%;
        display: flex;
    `;

    const ButtonWrap = styled.div `
        
        display: flex;
        justify-content: ${props => {
            if(props.end) return 'flex-end';
            else if(props.start) return 'flex-start';
        }};
        flex: ${props => {
            if(props.end) return '1';
            else if(props.start) return '1';
        }};
    `;

    const ChangeButton = styled.button `
        border: none;
        border-radius: 3px;
        color: white;
        ${props => {
        const color = colorData;
        return css`
          background: ${color};
        `;
        }};
        margin-top: 30px;
        margin-right: ${props => {
            if(props.short) return '10px';
        }};
        height: 38px;
        width: ${props => {
            if(props.long) return '100px';
            else if(props.short) return '38px';
        }};
    `;

    return(
        <CardSection>
            <QuoteView viewData={quoteData}/>
            <ButtonBox>
                <ButtonWrap start>
                    <ChangeButton short className="test">123</ChangeButton>
                    <ChangeButton short className="test">123</ChangeButton>
                </ButtonWrap>
                <ButtonWrap end>
                    <ChangeButton long onClick={onChange} className="test">New Quote</ChangeButton>
                </ButtonWrap>
            </ButtonBox>
        </CardSection>
    );
}

export default Card