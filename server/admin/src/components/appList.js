import * as React from "react";
import { List, Datagrid, TextField} from 'react-admin';

export const appList = props => (
    <List {...props}>
        <Datagrid> 
            <TextField source="id" />
            <TextField source="Name" />  
            <TextField source="Category" />  
            <TextField source="Logo" />  
            <TextField source="Version" />  
            <TextField source="Size" />  
            <TextField source="Description" />  
            <TextField source="Developer" />  
            <TextField source="Price" />  
            <TextField source="Rating" />
            <TextField source="Link" /> 
            <TextField source="Screens" />  
            <TextField source="createdAt" /> 
            <TextField source="updatedAt" />
            <TextField source="__v" />                      
        </Datagrid>
    </List>
);

