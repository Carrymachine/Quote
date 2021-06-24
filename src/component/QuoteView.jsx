import styled, {} from 'styled-components'
const QuoteView = ({viewData}) => {

    const ViewWrap = styled.div `
        display: flex;
        flex-direction: column;

        
    `;

    const View = styled.div `
        font-size: 28px;
        padding-top: 30px;
        padding-bottom: 30px;
        
    `;
    const AuthorBox = styled.div `
        display: flex;
        fonst-size: 16px;
        justify-content: flex-end;
        margin: 10px 0 10px 0;
    `;


    return (
        <ViewWrap>
            <View start>{viewData.value}</View>
            <AuthorBox end><div>{viewData.author}</div></AuthorBox>
        </ViewWrap>
    );
}

export default QuoteView