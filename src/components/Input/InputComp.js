import React, { Component } from 'react';

class InputComp extends Component {
    state = {  }
    render() { 
        return ( 
        <div class="row">
            <tr>
                <td>
                    <p>{this.props.paramName}</p>
                </td>
                <td>
                    <input />
                </td>
            </tr>            
        </div> );
    }
}
 
export default InputComp;