import styled from "styled-components"
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Container = styled.div`
    box-shadow: 0px 0px 11px 0px rgba(166,166,166,0.2);
    padding: 30px;
    border-radius: 10px;
    flex: 1; // added because needed by product page

`
const Title = styled.h2`
    margin-bottom: 20px;
    font-size: 21px;
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
                {grid && <CartesianGrid/>}
                </LineChart>
        </ResponsiveContainer>
    </Container>
  )
}

