import styled from "styled-components"
import {Language, NotificationsNone, Settings} from '@mui/icons-material'
import { Badge } from "@mui/material"
import { color, display } from "@mui/system"

const Container = styled.div`
        width: 100%;
        height: 50px;
        background-color: #fff;
        position: sticky;
        z-index: 999;
`
const Wrapper = styled.div`
    height: 100%;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const Left = styled.div`
    
`

const Logo = styled.span`
    font-weight: 500;
    font-size: 30px;
    cursor: pointer;
`

const Right = styled.div`
    display: flex;
    align-items: center;
`

const Icons = styled.div`
    cursor: pointer;
    position: relative;
    margin: 0 10px;

`

const Avatar = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    cursor: pointer;
`

const Topbar = () => {
    return (
        <div>
            <Container>
                <Wrapper>
                    <Left>
                        <Logo>Admin Portal</Logo>
                    </Left>
                    <Right>
                        <Icons>
                        <Badge badgeContent={4}  sx={{
                                                    "& .MuiBadge-badge": {
                                                    color: "#black",
                                                    backgroundColor: "#6ECCAF"
                                                    },
                                                }}>
                            <NotificationsNone color="#black" />
                        </Badge>
                        </Icons>
                        <Icons>
                        <Badge badgeContent={4}  sx={{
                                                    "& .MuiBadge-badge": {
                                                    color: "#black",
                                                    backgroundColor: "#6ECCAF"
                                                    },
                                                }}>
                            <Language color="#black" />
                        </Badge>
                        </Icons>
                        <Icons>
                        <Badge badgeContent={4}  sx={{
                                                    "& .MuiBadge-badge": {
                                                    color: "#black",
                                                    backgroundColor: "#6ECCAF",
                                                    display: "none"
                                                    },
                                                }}>
                            <Settings color="#black" />
                        </Badge>
                        </Icons>
                        <Avatar img src="https://pub-static.fotor.com/assets/projects/pages/d5bdd0513a0740a8a38752dbc32586d0/fotor-03d1a91a0cec4542927f53c87e0599f6.jpg"/>   
                    </Right>
                </Wrapper>
            </Container>
        </div>
    )
}

export default Topbar
