import React, { Component } from 'react';
import InputComp from "../../components/Input/InputComp"
import { connect } from "react-redux";

class Analysis extends Component {
    state = { 
    }
    render() { 
        return ( 
            <div style={{marginTop: "50px"}}>
                <table>
                    {this.props.lstInps.map((item, index) => {
                        return (
                            <InputComp para={item} key={index}/>
                        )
                    })}
                    
                </table>
            </div>
         );
    }
}
 
const mapStateToProps = state => {
    return {
        lstInps: state.lstInps
    }
}

export default connect(mapStateToProps)(Analysis);