import styled from "styled-components"

const Container = styled.div`
    flex: 3;
    margin-left: 10px;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0px 0px 11px 0px rgba(166,166,166,0.2);
`
const Title = styled.h2`
    font-weight: 500;
`
const Table = styled.table`
    width: 100%;
    border-spacing: 10px;
    margin: 20px 0;
    border: none;

`
const R = styled.tr`
    background-color: #f6f6f6;
`

const TH = styled.th`
    padding: 10px;
    font-weight: 500;
`

const TD = styled.td`
    font-size: 14px;
    text-align: center;
    padding: 0;

`
const ImageContainer = styled.div`
    text-align: center;
`
const Image = styled.img`
    height: 40px;
    width: 40px;
    border-radius: 50%;
    object-fit: cover;
`
const Name = styled.div``
const Date = styled.div``
const Amount = styled.div``

export default function WidgetL() {


    const Status = ({stat}) => {

        if(stat == "approved"){
            return <TD style={{backgroundColor:"#E5FAF2", color:"#22a767"}}>APPROVED</TD>
        }
        else if(stat == "rejected"){
            return <TD style={{backgroundColor:"#FFF0F1", color:"#cb1d1d"}}>REJECTED</TD>
        }
        else if(stat == "pending"){
            return <TD style={{backgroundColor:"#EBF1FE", color:"#2A7ADE"}}>PENDING</TD>
        }
    }
    return (
        <Container>
            <Title>Latest Transactions</Title>
            <Table>
                {/* TABLE HEADING */}
                <R>
                    <TH colSpan={2}>Customer</TH>
                    <TH>Date</TH>
                    <TH>Amount</TH>
                    <TH>Status</TH>
                </R>
                {/* TABLE DATA */}
                <R>
                    <TD><ImageContainer><Image img src="https://pub-static.fotor.com/assets/projects/pages/d5bdd0513a0740a8a38752dbc32586d0/fotor-03d1a91a0cec4542927f53c87e0599f6.jpg"/></ImageContainer></TD>
                    <TD><Name>Mahinda Rajapaksha</Name></TD>
                    <TD><Date>2 September 2021</Date></TD>
                    <TD><Amount>LKR 2100</Amount></TD>
                    <Status stat = "approved"/>
                </R>
                <R>
                    <TD><ImageContainer><Image img src="https://pub-static.fotor.com/assets/projects/pages/d5bdd0513a0740a8a38752dbc32586d0/fotor-03d1a91a0cec4542927f53c87e0599f6.jpg"/></ImageContainer></TD>
                    <TD><Name>Nimal Lansa</Name></TD>
                    <TD><Date>27 May 2021</Date></TD>
                    <TD><Amount>LKR 2100</Amount></TD>
                    <Status stat = "rejected"/>
                </R>
                <R>
                    <TD><ImageContainer><Image img src="https://pub-static.fotor.com/assets/projects/pages/d5bdd0513a0740a8a38752dbc32586d0/fotor-03d1a91a0cec4542927f53c87e0599f6.jpg"/></ImageContainer></TD>
                    <TD><Name>Mahela Jayawardhena</Name></TD>
                    <TD><Date>31 June 2021</Date></TD>
                    <TD><Amount>LKR 2100</Amount></TD>
                    <Status stat = "pending"/>
                </R>
                <R>
                    <TD><ImageContainer><Image img src="https://pub-static.fotor.com/assets/projects/pages/d5bdd0513a0740a8a38752dbc32586d0/fotor-03d1a91a0cec4542927f53c87e0599f6.jpg"/></ImageContainer></TD>
                    <TD><Name>Mahela Jayawardhena</Name></TD>
                    <TD><Date>2 January 2021</Date></TD>
                    <TD><Amount>LKR 2100</Amount></TD>
                    <Status stat = "pending"/>
                </R>
                <R>
                    <TD><ImageContainer><Image img src="https://pub-static.fotor.com/assets/projects/pages/d5bdd0513a0740a8a38752dbc32586d0/fotor-03d1a91a0cec4542927f53c87e0599f6.jpg"/></ImageContainer></TD>
                    <TD><Name>Mahela Jayawardhena</Name></TD>
                    <TD><Date>2 June 2021</Date></TD>
                    <TD><Amount>LKR 2100</Amount></TD>
                    <Status stat = "approved"/>
                </R>
            </Table>
        </Container>
    )
}
