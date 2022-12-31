import { Visibility } from "@mui/icons-material"
import styled from "styled-components"

const Container = styled.div`
    flex: 2;
    margin-right: 10px;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0px 0px 11px 0px rgba(166,166,166,0.2);
`

const Title = styled.h2`
    font-weight: 500;
`
const List = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
`
const ListItem = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10px 0;
    padding: 8px;
    background-color: #f6f6f6;
`
const Image = styled.img`
    height: 40px;
    border-radius: 50%;
    width: 40px;
    object-fit: cover;
`
const User = styled.div`
    display: flex;
    flex-direction: column;
`
const UserName = styled.span``
const Job = styled.span`
    font-weight: 300;
    font-size: 14px;
`
const DisplayButton = styled.button`
    display: flex;
    align-items: center;
    border: none;
    border-radius: 10px;
    padding: 8px 12px;
    background-color: #6ECCAF;
    cursor: pointer;
    transition: all 0.2s ease;
    width: 100px;
    height: 40px;

    &:hover{
        background-color: #75BBA7;
        padding: 8px 12px 8px 14px;
        box-shadow: 0px 0px 11px 0px rgba(166,166,166,0.2);

    }
`
const IconV = styled.div` 
    margin-right: 3px;
    display: flex;
    align-items: center;
`

export default function WidgetS() {
  return (
    <Container>
        <Title>New Members</Title>
        <List>
            <ListItem><Image img src="https://pub-static.fotor.com/assets/projects/pages/d5bdd0513a0740a8a38752dbc32586d0/fotor-03d1a91a0cec4542927f53c87e0599f6.jpg"/>
                <User>
                    <UserName>Anna Keller</UserName>
                    <Job>Software Engineer</Job>
                </User>
                <DisplayButton><IconV><Visibility fontSize="small"/></IconV>Display</DisplayButton>
            </ListItem>
            <ListItem><Image img src="https://pub-static.fotor.com/assets/projects/pages/d5bdd0513a0740a8a38752dbc32586d0/fotor-03d1a91a0cec4542927f53c87e0599f6.jpg"/>
                <User>
                    <UserName>Anna Keller</UserName>
                    <Job>Software Engineer</Job>
                </User>
                <DisplayButton><IconV><Visibility fontSize="small"/></IconV>Display</DisplayButton>
            </ListItem>
            <ListItem><Image img src="https://pub-static.fotor.com/assets/projects/pages/d5bdd0513a0740a8a38752dbc32586d0/fotor-03d1a91a0cec4542927f53c87e0599f6.jpg"/>
                <User>
                    <UserName>Anna Keller</UserName>
                    <Job>Software Engineer</Job>
                </User>
                <DisplayButton><IconV><Visibility fontSize="small"/></IconV>Display</DisplayButton>
            </ListItem>
            <ListItem><Image img src="https://pub-static.fotor.com/assets/projects/pages/d5bdd0513a0740a8a38752dbc32586d0/fotor-03d1a91a0cec4542927f53c87e0599f6.jpg"/>
                <User>
                    <UserName>Anna Keller</UserName>
                    <Job>Software Engineer</Job>
                </User>
                <DisplayButton><IconV><Visibility fontSize="small"/></IconV>Display</DisplayButton>
            </ListItem>
        </List>
    </Container>
  )
}
