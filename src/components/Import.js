import React, {useEffect} from 'react'
import {
    Button,
     Container
  } from '@material-ui/core'
  import NewTable from './NewTable'
  // import { fetchMakes } from'../containers/Import'

const Import = (props) => {
    useEffect(()=> {
        console.log(props)
    })
    // fill out this component
    return (
        <NewTable>
        <Button variant="contained"color="primary" onClick={props.fetchMakes}>Import</Button>


        </NewTable>
      )
    }
    export default Import
      
      
        

