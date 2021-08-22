import React from 'react';
import { Admin, Resource} from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import {appList} from './components/appList';



//connect the data provider to the REST endpoint
const dataProvider = jsonServerProvider('http://localhost:1111/api');

function App() {
   return (
       <Admin dataProvider={dataProvider}>
           <Resource name="apps" list={appList}/>
       </Admin>
   );
}

export default App;