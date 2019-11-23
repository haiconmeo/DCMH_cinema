import React from 'react';
import UserIcon from 'material-ui/svg-icons/social/group';
import MovieIcon from '@material-ui/icons/Movie';
import TheatersIcon from '@material-ui/icons/Theaters';
import {Admin, Resource, Delete  } from 'admin-on-rest';
import { UserList, UserEdit } from './users';
import {MovieList, MovieCreate, MovieEdit} from './movies';
import {CinemaList, CinemaCreate, CinemaEdit} from './cinema';
import DjangoRestClient from "aor-django-rest-framework";

import authClient from './authClient';
import addUploadFeature from './addUploadFeature';

const restClient = DjangoRestClient("http://localhost:8000/api",);
const uploadCapableClient = addUploadFeature(restClient);

const App = () => (
    <Admin authClient={authClient} title="Susan Cinema" restClient={uploadCapableClient}>
        <Resource name="auth/profile" options={{ label: 'User' }} list={UserList}  edit={UserEdit} remove={Delete} icon={UserIcon}  />
        <Resource name="phim" options={{ label: 'Movie' }} list={MovieList} create={MovieCreate} edit={MovieEdit}  remove={Delete} icon={MovieIcon}/>
        <Resource name="rap2"  options={{ label: 'Cinema' }} list={CinemaList} create={CinemaCreate} edit={CinemaEdit}  remove={Delete} icon={TheatersIcon} />
    </Admin>
);

export default App;