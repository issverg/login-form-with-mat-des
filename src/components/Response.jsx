import React from 'react';
import {Paper} from "material-ui";

class Response extends React.Component {
   render() {
       return (
           <Paper style={{width: 100 + '%', textAlign: 'center', padding: 20, marginTop: 20}}>
               <div><strong>{ this.props.token.token }</strong></div>
           </Paper>
       );
   }
};

export default Response;
