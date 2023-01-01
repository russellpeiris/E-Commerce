import { AnalyticsOutlined, HomeOutlined, MonetizationOnOutlined, AccountCircleOutlined, SendToMobileOutlined, ArticleOutlined, EmailOutlined, FeedbackOutlined, ChatOutlined, WorkOutlineOutlined, Inventory2Outlined } from "@mui/icons-material"
import { Link } from "react-router-dom"
import { NavLink as BaseNavLink } from "react-router-dom";
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
const ListItem = styled.li``

const NavLink = styled(BaseNavLink)`
    display: flex;
    margin: 4px 0;
    padding: 5px;
    align-items: center;
    text-decoration: none;
    cursor: pointer;
    border-radius: 5px;
    transition: all 0.2s ease;
    color: black;

    &:hover{
        padding: 5px 5px 5px 8px;
        box-shadow: 0px 0px 11px 0px rgba(166,166,166,1);
    }
    
    &.active{
        color: black;
        box-shadow: 0px 0px 11px 0px rgba(166,166,166,1);
        background-color: #6ECCAF;
    }
`
const Sidebar = () => {

    return (

            <Container>
                <Wrapper>
                    <Menu>
                        <Title>Dashboard</Title>
                        <List>
                            <ListItem>
                                <NavLink to={'/'} >
                                    <Icon>
                                        <HomeOutlined/>
                                    </Icon>Home
                                </NavLink>
                            </ListItem>
                            <ListItem>
                                <NavLink to={'/analytics'}>
                                    <Icon><AnalyticsOutlined/></Icon>Analytics
                                </NavLink>
                            </ListItem>
                            <ListItem>
                                <NavLink to={'/sales'}>
                                    <Icon><MonetizationOnOutlined/></Icon>Sales
                                </NavLink>
                            </ListItem>
                        </List>
                    </Menu>
                    <Menu>
                        <Title>Quick Menu</Title>
                        <List>
                            <ListItem>
                                <NavLink to={'/users'}>
                                    <Icon><AccountCircleOutlined/></Icon>Users
                                </NavLink>
                                </ListItem>
                            <ListItem>
                                <NavLink to={'/products-list'}>
                                    <Icon><Inventory2Outlined/></Icon>Products
                                </NavLink>
                                </ListItem>
                            <ListItem>
                                <NavLink to={'/transactions'}>
                                    <Icon><SendToMobileOutlined/></Icon>Transactions
                                </NavLink>
                                </ListItem>
                            <ListItem>
                                <NavLink to={'/reports'}>
                                    <Icon><ArticleOutlined/></Icon>Reports
                                </NavLink>
                            </ListItem>
                        </List>
                    </Menu>
                    <Menu>
                        <Title>Notifications</Title>
                        <List>
                            <ListItem>
                                <NavLink to={'/mail'}>
                                    <Icon><EmailOutlined/></Icon>Mail
                                </NavLink>
                            </ListItem>
                            <ListItem>
                                <NavLink to={'/feedback'}>
                                    <Icon><FeedbackOutlined/></Icon>Feedback
                                </NavLink>
                            </ListItem>
                            <ListItem>
                                <NavLink to={'/messages'}>
                                    <Icon><ChatOutlined/></Icon>Messages
                                </NavLink>
                            </ListItem>                        
                        </List>
                    </Menu>
                    <Menu>
                        <Title>Staff</Title>
                        <List>
                            <ListItem>
                                <NavLink to={'/manage'}>
                                    <Icon><WorkOutlineOutlined/></Icon>Manage
                                </NavLink>
                            </ListItem>
                            <ListItem>
                                <NavLink to={'/analytics'}>
                                    <Icon><AnalyticsOutlined/></Icon>Analytics
                                </NavLink>
                            </ListItem>
                            <ListItem>
                                <NavLink to={'/reports'}>
                                    <Icon><ArticleOutlined/></Icon>Reports
                                </NavLink>
                            </ListItem>                        
                        </List>
                    </Menu>
                </Wrapper>
            </Container>
    )
}

export default Sidebar
