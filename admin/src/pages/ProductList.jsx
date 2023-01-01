import styled from "styled-components"
import { DataGrid} from '@mui/x-data-grid';
import {DeleteForever} from '@mui/icons-material';
import {productRows} from '../DummayData'
import {Link} from 'react-router-dom'
import { useState } from 'react';


const Container = styled.div`
    flex: 6;
    padding: 40px 20px 20px 20px;
`

const Icon = styled.div`
    color: #cb1d1d;
    transition: all 0.2s ease;
    cursor: pointer;

    &:hover{
        transform: scale(1.1);
        color: #FF3841;
    }
    &:active{
        color: #cb1d1d;
}
`
const ActionContainer = styled.div`
    display: flex;
    align-items: center;
`
const ImageContainer = styled.div``
const Image = styled.img`
    width: 32px;
    height: 32px;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 10px;
`
const Button = styled(Link)`
    text-align: center;
    border-radius: 10px;
    padding: 5px 12px;
    background-color: #6ECCAF;
    cursor: pointer;
    transition: all 0.2s ease;
    margin-right: 5px;
    text-decoration: none;
    color: black;

    &:hover{
        background-color: #75BBA7;
        transform: scale(1.1);
    }
`
const columns = [
    { field: 'id', headerName: 'ID',flex: 1, headerAlign: 'center', align: 'center'},
    { field: 'product', headerName: 'Product', flex: 2, headerAlign: 'center', renderCell: (params) =>{

      return(<ImageContainer>
        <Image img src={params.row.img}/> {params.row.name}
        </ImageContainer>
      )

    } },
    { field: 'stock', headerName: 'Stock', flex: 2, headerAlign: 'center', align: 'center'},
    { field: 'status', headerName: 'Status', flex: 2, headerAlign: 'center', align: 'center'},
    { field: 'price', headerName: 'Price', flex: 2, headerAlign: 'center', align: 'center'},
    {
      field: 'actions', headerName: 'Actions', flex: 2, headerAlign: 'center', align: 'center', renderCell: (params)=>{
      
        return(<ActionContainer>
            <Button to={"/product/"+params.row.id}>Edit</Button>
            <Icon>
              <DeleteForever onClick = {()=>handleDelete(params.row.id)}/>
            </Icon>
        </ActionContainer>
        )
      }
    }
  ];
export default function ProductList() {
    const [data, setData] = useState(productRows);

    const handleDelete = (id) => {
        console.log(id);
        setData(data.filter((item) => item.id !== id));
      };

    return (
        <Container>
        <DataGrid
            rows={data} disableSelectionOnClick
            columns={columns}
            pageSize={10}
            rowsPerPageOptions={[5]}
            checkboxSelection
        />
        </Container>
    )
}
