import styled from "styled-components"
import Chart from "../components/Chart"
import { userData } from "../DummayData"

import { FeaturedInfo } from "../components/FeaturedInfo"
import WidgetS from "../components/WidgetS"
import WidgetL from "../components/WidgetL"

const Container = styled.div`
    flex: 6;
    padding: 40px 20px;
`
const Widgets = styled.div`
    display: flex;
    gap: 15px;
    margin-top: 20px;
`

export const Home = () => {
    return (
        <Container>
            <FeaturedInfo/>
            <Chart data={userData} title="User Analytics" grid dataKey="Active User"/>
            <Widgets>
                <WidgetS/>
                <WidgetL/>
            </Widgets>
        </Container>

    )
}
