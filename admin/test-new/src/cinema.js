import React from 'react';
import { EmbeddedArrayInput, EmbeddedArrayField } from 'aor-embedded-array';
import {
    Create, Edit, List, Datagrid, EmailField,
    TextField, TextInput, SimpleForm,
    DisabledInput, EditButton, Filter
    , LongTextInput, ReferenceInput, SelectInput,
    ReferenceArrayInput, SelectArrayInput
} from 'admin-on-rest';



export const CinemaList = (props) => (
    <List title="Cinema" pagination={null} {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="rap_ten" label="Tên Rạp" />
            {/* <EmbeddedArrayField source="phims" labelStyle ={{display: 'none'}}>
                <TextField source="phim_ten" />
            </EmbeddedArrayField> */}
            {/* <ImageField source="anhs" title="title" /> */}
            {/* <TextField source="rap_thongtin" label="Thông tin" /> */}
            <TextField source="rap_diachi" label="Địa chỉ" />
            <EditButton />
        </Datagrid>
    </List>
);
export const CinemaCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <DisabledInput label="Id" source="id" />
            <TextInput source="rap_ten" label="Tên Rạp" />
            <LongTextInput source="rap_thongtin" label="Thông tin" />
            <TextInput source="rap_diachi" label="Địa chỉ" />
            <ReferenceArrayInput label="Phim" source="phims" reference="phim">
                <SelectArrayInput optionText="phim_ten" />
            </ReferenceArrayInput>
        </SimpleForm>
    </Create>
);
export const CinemaEdit = (props) => (
    <Edit title="Cinema" {...props}>
        <SimpleForm>
            <DisabledInput label="Id" source="id" />
            <TextInput source="rap_ten" label="Tên Rạp" />
            <LongTextInput source="rap_thongtin" label="Thông tin" />
            <TextInput source="rap_diachi" label="Địa chỉ" />
            {/* <ReferenceInput label="Phim" source="phimId" reference="phim">
                <SelectInput optionText="phim_ten" />
            </ReferenceInput> */}
            <ReferenceArrayInput label="Phim" source="phims" reference="phim">
                <SelectArrayInput optionText="phim_ten" />
            </ReferenceArrayInput>
        </SimpleForm>
    </Edit>
);