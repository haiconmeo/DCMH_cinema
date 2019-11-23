import React from 'react';
import {
    Create, Edit, List, Datagrid,
    TextField, TextInput, SimpleForm,
    DisabledInput, EditButton, LongTextInput,
    ImageInput, ImageField,
    FileInput, FileField

} from 'admin-on-rest';



export const MovieList = (props) => (
    <List title="Movies" pagination={null} {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="phim_ten" label="Tên Phim" />
            <TextField source="phim_nuocphathanh" label="Nước Phát Hành" />
            <TextField source="phim_theloai" label="Thể Loại" />
            <TextField source="phim_ngayphathanh" label="Ngày Phát Hành" />
            <TextField source="phim_trangthai" label="Trạng Thái" />
            <EditButton />
        </Datagrid>
    </List>
);
export const MovieCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <DisabledInput label="Id" source="id" />
            <ImageInput source="anhphim" label="Related pictures" multiple={false} accept="image/*">
                <ImageField source="src" title="title" />
            </ImageInput>
            <TextInput source="phim_ten" label="Tên Phim" />
            <TextInput source="phim_nuocphathanh" label="Nước Phát Hành" />
            <TextInput source="phim_theloai" label="Thể Loại" />
            <TextInput source="phim_ngayphathanh" label="Ngày Phát Hành" />
            <TextInput source="phim_trangthai" label="Trạng Thái" />
            {/* <TextInput source="phim_trailer" label="Trailer" /> */}
            <TextInput source="rate" label="Rate" />
            <TextInput source="thoiluong" label="Thời Lượng" />
            <FileInput source="phim_trailer" label="Trailer" accept="video/*">
                <FileField source="src" title="title" />
            </FileInput>

            <LongTextInput source="phim_thongtin" label="Thông Tin" />
        </SimpleForm>
    </Create>
);
export const MovieEdit = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <DisabledInput label="Id" source="id" />
            {/* <TextInput source="anhphim.[1]" label="Ảnh Phim" />
            <EmbeddedArrayInput source="anhphim" label="Ảnh Phim">
                <TextInput source="" />
            </EmbeddedArrayInput> */}
            <ImageInput source="anhphim" label="Ảnh Phim" multiple={false}>
                <ImageField source="src" title="title" />
            </ImageInput>

            <TextInput source="phim_ten" label="Tên Phim" />
            <TextInput source="phim_nuocphathanh" label="Nước Phát Hành" />
            <TextInput source="phim_theloai" label="Thể Loại" />
            <TextInput source="phim_ngayphathanh" label="Ngày Phát Hành" />
            <TextInput source="phim_trangthai" label="Trạng Thái" />
            {/* <TextInput source="phim_trailer" label="Trailer" /> */}
            <FileInput source="phim_trailer" label="Trailer" accept="video/*">
                <FileField source="src" title="title" />
            </FileInput>
            <LongTextInput source="phim_thongtin" label="Thông Tin" />
        </SimpleForm>
    </Edit>
);