import React from 'react';
import {
    Edit, List, Datagrid, EmailField,
    TextField, TextInput, SimpleForm,
    EditButton
} from 'admin-on-rest';

export const UserList = (props) => (
    <List title="All users" pagination={null} {...props}>
        <Datagrid>
            <TextField source="user.id" label="ID" />
            <TextField source="user.username" label="UserName" />
            <EmailField source="user.email" label="Email" />
            <TextField source="phonenum" label="Phone" />
            <TextField source="address" label="Address" />
            <EditButton />
        </Datagrid>
    </List>
);

export const UserEdit = (props) => (
    <Edit  title={"Edit User"} {...props}>
        <SimpleForm>
            <TextField source="user.id" label="ID" />
            <TextField source="user.username" label="UserName" />
            <TextField source="user.email" label="Email" />
            <TextInput source="phonenum" label="Phone" />
            <TextInput source="address" label="Address" />
            <TextInput source="birth_date" label="Birth Date" />
            <TextInput source="cmmd" label="CMND" />
        </SimpleForm>
    </Edit>
);