import styled from "styled-components";
function QuestionsPage() {

    const StyledHeader = styled.h1`
        font-size: 2rem;
    `;
    const HeaderRow = styled.div`
        display: grid;
        grid-template-columns: 1fr min-content;
        padding: 30px 20px;
    `;
    const BlueButton = styled.button`
        background-color: #378ad3;
        color:#fff;
        border: 0;
        border-radius: 5px;
        padding:15px 10px;
    `;
    const QuestionRow = styled.div`
        background-color: rgba(255, 255, 255, .1);
        padding:15px 15px;
        display: grid;
        grid-template-columns:repeat(3,minmax(min-content,60px))  1fr;
    `;
    const QuestionStat = styled.div`
        text-align: center;
        display: inline-block;
        font-size: 1.2rem;
        color:#aaa;
        span{
            font-size: .7rem;
            display: block;
            font-weight: 300;
            margin-top: 4px;
        }
    `;
    const QuestionTitleArea = styled.div`
        padding:0 30px; 
    `;
  
    const QuestionLink = styled.a`
        text-decoration: none;
        color:#3ca4ff;
        font-size: 1.1rem;
        display: block;
        margin-bottom: 5px;
    `;
      const Tag = styled.span`
      display: inline-block;
      margin-right: 5px;
      background-color: #3e4a52;
      color:#9cc3db;
      padding:4px;
      border-radius: 5px;
      font-size: .9rem;
    `;
    return (
        <main>
            <HeaderRow>
                <StyledHeader>Top Questions</StyledHeader>
                <BlueButton>Ask&nbsp;Questions</BlueButton>
                <QuestionRow>
                    <QuestionStat>0<span>votes</span></QuestionStat>
                    <QuestionStat>1<span>answer</span></QuestionStat>
                    <QuestionStat>6<span>views</span></QuestionStat>
                    <QuestionTitleArea>
                        <QuestionLink>Getting string in quote in javascript</QuestionLink> 
                        <Tag>javascript</Tag>
                        <Tag>parsing</Tag>
                        <Tag>quotes</Tag>
                        <Tag>literals</Tag>
                    </QuestionTitleArea>
                </QuestionRow>
            </HeaderRow>
        </main>
    )
}

export default QuestionsPage;