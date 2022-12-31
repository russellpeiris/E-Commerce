import styled from "styled-components"
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Container = styled.div`
    margin: 20px;
    padding: 20px;
    box-shadow: 0px 0px 11px 0px rgba(166,166,166,0.2);
    border-radius: 10px;
    font-size: 14px;
`

const Title = styled.h2`
    margin-bottom: 20px;
    font-size: 25px;
`

export default function Chart({title, data, dataKey, grid}){

  return (
    <Container>
        <Title>{title}</Title>
        <ResponsiveContainer width="100%" aspect={4/1}>
            <LineChart data = {data}>
                <XAxis dataKey='name' stroke="black"/>
                <Line type="monotone" dataKey={dataKey} stroke="#2E428A"/>
                <Tooltip/>
                {grid && <CartesianGrid/>
}            </LineChart>
        </ResponsiveContainer>
    </Container>
  )
}

