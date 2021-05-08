import React, { Component } from 'react';
import * as actionTypes from "../../store/action"
import {connect} from "react-redux"

class InputComp extends Component {
    state = {  }

    onTxtChange = (e) => {
        // console.log(this.props.para)
        // console.log(this.props.lstInps)
        this.props.onParamValueChange(this.props.para, e.target.value)
    }

    render() { 

        console.log(this.props.para)
        let inp = <input name={this.props.para.name} value={this.props.para.value} onChange={this.onTxtChange}/>
        if (this.props.para.type === "select") {
            inp =(<select onChange={this.onTxtChange} value={this.props.para.value}>
               { this.props.para.options.map((opt, index) => {
                    return (
                        <option value={opt} key={index} >{opt}</option>
                    )
                })
            }
            </select>)
        }

        return ( 
            <tr>
                <td style={{textAlign:"right"}}>
                    <p>{this.props.para.disp}: </p>
                </td>
                <td>
                    {inp}
                </td>
            </tr>  );
    }
}

const mapStateToProps = state => {
    return {
        lstInps: state.lstInps
    }
}

const mapPropsToState = dispatch => {
    return {
      onParamValueChange: (para, value) => {
        dispatch({ type: actionTypes.SET_PARAM_VALUE, payload:  {para: para, value: value}});
      },
    };
  };
 
export default connect(mapStateToProps, mapPropsToState)(InputComp);