import styled from 'styled-components' 
import { DataGrid} from '@mui/x-data-grid';
import {DeleteForever} from '@mui/icons-material';
import {userList} from '../DummayData'
import {Link} from 'react-router-dom'
import { useState } from 'react';

const Container = styled.div`
    flex: 6;
    padding: 40px 20px 20px 20px;
`

const ActionContainer = styled.div`
    display: flex;
    align-items: center;
`
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
export default function UserList() {

  const [data, setData] = useState(userList);

  const handleDelete = (id) => {
    console.log(id);
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
      { field: 'id', headerName: 'ID',flex: 1, headerAlign: 'center', align: 'center'},
      { field: 'user', headerName: 'User', flex: 2, headerAlign: 'center', renderCell: (params) =>{

        return(<ActionContainer>
          <Image img src={params.row.avatar}/> {params.row.username}
          </ActionContainer>
        )

      } },
      { field: 'email', headerName: 'Email', flex: 2, headerAlign: 'center', align: 'center'},
      { field: 'status', headerName: 'Status', flex: 2, headerAlign: 'center', align: 'center'},
      { field: 'transaction', headerName: 'Transaction Volume', flex: 2, headerAlign: 'center', align: 'center'},
      {
        field: 'actions', headerName: 'Actions', flex: 2, headerAlign: 'center', align: 'center', renderCell: (params)=>{
        
          return(<ActionContainer>
              <Button to={"/user/"+params.row.id}>Edit</Button>
              <Icon>
                <DeleteForever onClick = {()=>handleDelete(params.row.id)}/>
              </Icon>
          </ActionContainer>
          )
        }
      }
    ];
    

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
