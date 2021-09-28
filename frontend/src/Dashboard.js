import {useState} from 'react'
import useAuth from './useAuth.js'
import {Container,Form} from 'react-bootstrap'

export default function Dashboard({code}){
    const accessToken=useAuth(code);
    const [search, setSearch]=useState("");
    return(
        <Container className="d-flex flex-column py-2" style={{height:"100vh"}}>
            <Form.Control type="search" placeholder="Search songs/artists" value={search} onChange={e=>setSearch(e.target.value)}/>
        </Container>
    )

}