import React, {useState, useEffect} from 'react'
import {DataGrid} from '@material-ui/data-grid'
import { makeStyles } from "@material-ui/core/styles"

const columns = [
    {field: 'id', headerName: 'ID'},
    {field: 'title', headerName: 'Title', flex:1},
    {field: 'body', headerName: 'Body', flex:1}
]

const DataTable = () => {

    const [tableData, setTableData] = useState([])

    const useStyles = makeStyles({
        dataGrid: {
            borderRadius: 3,
            tableLayout: 'fixed'
        }
    });
    const classes = useStyles();
    useEffect(() => {
        console.log("inside this********")
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((data) => data.json())
            .then((data) => setTableData(data))
    },[])

    return (
        <div className="dataGrid">
            <DataGrid
                autoHeight={true}
                rows={tableData}
                columns={columns}
                className={classes.dataGrid}
                pageSize={5}
                options={{
                    actionsColumnIndex: -1,
                    exportButton: true,
                    draggable: true,
                }}
                checkboxSelection
            />
        </div>
    )
}

export default DataTable;