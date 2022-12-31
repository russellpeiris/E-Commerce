import { AnalyticsOutlined, HomeOutlined, MonetizationOnOutlined, AccountCircleOutlined, SendToMobileOutlined, ArticleOutlined, EmailOutlined, FeedbackOutlined, ChatOutlined, WorkOutlineOutlined, Inventory2Outlined } from "@mui/icons-material"
import styled from "styled-components"

const Container = styled.div`
    flex: 1;
    background-color: #fff;
    height: calc(100vh - 50px); // keep space after - sign
    position: sticky;

`

const Wrapper = styled.div`
    padding: 20px;
    margin: 0 5px;
`
const Menu = styled.div`
    margin-bottom: 10px;
`

const Title = styled.h2`
    font-size: 16px;
    color: #555;
`

const List = styled.ul`
    font-size: 14px;
    list-style: none;
    padding-left: 0;
`

const Icon = styled.div`
    padding-right: 5px;
    
`
const ListItem = styled.li`
    display: flex;
    padding: 5px;
    margin: 2px 0;
    align-items: center;
    border-radius: 5px;
    transition: all 0.2s ease;
    cursor: pointer;

    &:hover{
        padding: 5px 5px 5px 8px;
        /* background-color: #75BBA7; */
        box-shadow: 0px 0px 11px 0px rgba(166,166,166,1);
    }
    .active{
        all:inherit;
        box-shadow: 0px 0px 11px 0px rgba(166,166,166,1);
    
        &:hover{
            padding: 5px 5px 5px 8px;
        }
    }
`
const ListItemActive = styled.li`
    display: flex;
    padding: 5px;
    margin: 2px 0;
    align-items: center;
    border-radius: 5px;
    transition: all 0.2s ease;
    background-color: #6ECCAF;
    cursor: pointer;
    box-shadow: 0px 0px 11px 0px rgba(166,166,166,1);
    
    &:hover{
        padding: 5px 5px 5px 8px;
    }
`

const Sidebar = () => {
    return (
            <Container>
                <Wrapper>
                    <Menu>
                        <Title>Dashboard</Title>
                        <List>
                            <ListItemActive><Icon><HomeOutlined/></Icon>Home</ListItemActive>
                            <ListItem><Icon><AnalyticsOutlined/></Icon>Analytics</ListItem>
                            <ListItem><Icon><MonetizationOnOutlined/></Icon>Sales</ListItem>
                        </List>
                    </Menu>
                    <Menu>
                        <Title>Quick Menu</Title>
                        <List>
                            <ListItem><Icon><AccountCircleOutlined/></Icon>Users</ListItem>
                            <ListItem><Icon><Inventory2Outlined/></Icon>Products</ListItem>
                            <ListItem><Icon><SendToMobileOutlined/></Icon>Transactions</ListItem>
                            <ListItem><Icon><ArticleOutlined/></Icon>Reports</ListItem>
                        </List>
                    </Menu>
                    <Menu>
                        <Title>Notifications</Title>
                        <List>
                            <ListItem><Icon><EmailOutlined/></Icon>Mail</ListItem>
                            <ListItem><Icon><FeedbackOutlined/></Icon>Feedback</ListItem>
                            <ListItem><Icon><ChatOutlined/></Icon>Messages</ListItem>                        
                        </List>
                    </Menu>
                    <Menu>
                        <Title>Staff</Title>
                        <List>
                            <ListItem><Icon><WorkOutlineOutlined/></Icon>Manage</ListItem>
                            <ListItem><Icon><AnalyticsOutlined/></Icon>Analytics</ListItem>
                            <ListItem><Icon><ArticleOutlined/></Icon>Reports</ListItem>                        
                        </List>
                    </Menu>
                </Wrapper>
            </Container>
    )
}

export default Sidebar
