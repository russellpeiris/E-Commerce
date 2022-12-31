import { ArrowDropDown, ArrowDropUp } from "@mui/icons-material"
import styled from "styled-components"

const Container = styled.div`
    width: 100%;
    display: flex;
    margin: 20px 0;
    justify-content: space-between;
`
const FeaturedItem = styled.div`
    flex: 1;
    background-color: #2E428A;
    margin:0 20px;
    padding: 30px;
    border-radius: 10px;
    color: #fff;
    cursor: pointer;
    box-shadow: 0px 0px 11px 0px rgba(166,166,166,1);
`
const Title = styled.span`
    font-size: 20px;
`
const FeaturedMoneyContainer = styled.div`
    margin: 10px 0;
    display: flex;
    align-items: center;
`
const FeaturedMoney = styled.span`
    font-size: 24px;
`
const Direction = styled.span`
    display: flex;
    align-items: center;
    margin-left: 30px;
`
const FeaturedSub = styled.span`
    font-size: 14px;
`
const Icon = styled.div`
    display: flex;
    align-items: center;

    .down{
        all: inherit;
        color: #FF3841;
    }
    .up{
        all: inherit;
        color: #7AE7C7;
    }
`

export const FeaturedInfo = () => {
    return (
        <Container>
            <FeaturedItem>
                <Title>Revenue</Title>
                <FeaturedMoneyContainer>
                    <FeaturedMoney>LKR 12500</FeaturedMoney>
                    <Direction>
                        -11<Icon><div className="down"><ArrowDropDown/></div></Icon>
                    </Direction>
                </FeaturedMoneyContainer>
                <FeaturedSub>Compared to last Month</FeaturedSub>
            </FeaturedItem>
            <FeaturedItem>
                <Title>Sale</Title>
                <FeaturedMoneyContainer>
                    <FeaturedMoney>LKR 9500</FeaturedMoney>
                    <Direction>
                        -6<Icon><div className="down"><ArrowDropDown/></div></Icon>
                    </Direction>
                </FeaturedMoneyContainer>
                <FeaturedSub>Compared to last Month</FeaturedSub>
            </FeaturedItem>
            <FeaturedItem>
                <Title>Cost</Title>
                <FeaturedMoneyContainer>
                    <FeaturedMoney>LKR 6200</FeaturedMoney>
                    <Direction>
                        +10<Icon><div className="up"><ArrowDropUp/></div></Icon>
                    </Direction>
                </FeaturedMoneyContainer>
                <FeaturedSub>Compared to last Month</FeaturedSub>
            </FeaturedItem>
        </Container>
    )
}
