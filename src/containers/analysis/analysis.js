import React, { Component } from 'react';
import InputComp from "../../components/Input/InputComp"
import { connect } from "react-redux";

import * as ApiPre from "../../api/predictHeartDisease";

class Analysis extends Component {
    state = { 
        heartDisease: null
    }

    onPredict = () => {
        const arr = this.props.lstInps.map((item, index) => {
            let k = item.name;
            let v = item.value;
            if (item.type === "select") {
                v = item.options.findIndex((opt => opt == v))
            }
            return [k, v]
        })
        
        const req = Object.fromEntries(arr);
        ApiPre.predictHeartDisease(req).then(res => {
            console.log(res)
            this.setState({
                heartDisease: parseInt(parseFloat(res.data.body.disease) * 100)
            })
        })
    }

    render() { 

        let txtDescription = (
            <React.Fragment>
                <h3>Input Parameters</h3>
                <p>To assess the condition of the patient the following parameters are required. The <b>Age</b> and <b>Sex</b> 
                 of the patient should be provided. </p>
            </React.Fragment>
        )


        let heartDiseaseRes = <div></div>    
        
        const widthPb = "200px"
        const marginTop = "10px"
        const marginLeft = "50px"

        if (this.state.heartDisease){
            let styleWidth = this.state.heartDisease.toString() + "%";
            let valNow = this.state.heartDisease.toString();            
            if (this.state.heartDisease < 25){
                heartDiseaseRes = (
                    <div class="progress" style={{width: widthPb , marginTop: marginTop, marginLeft: marginLeft}}>
                        <div class="progress-bar bg-success" role="progressbar" style={{width:styleWidth}} aria-valuenow={valNow} aria-valuemin="0" aria-valuemax="100">{valNow}%</div>
                    </div>
                )
            }
            else if (this.state.heartDisease < 50) {
                heartDiseaseRes = (
                    <div class="progress" style={{width: widthPb, marginTop: marginTop, marginLeft: marginLeft}}>
                        <div class="progress-bar bg-info" role="progressbar" style={{width:styleWidth}} aria-valuenow={valNow} aria-valuemin="0" aria-valuemax="100">{valNow}%</div>
                    </div>
                )
            }
            else if (this.state.heartDisease < 75) {
                heartDiseaseRes = (
                    <div class="progress" style={{width: widthPb, marginTop: marginTop, marginLeft: marginLeft}}>
                        <div class="progress-bar bg-warning" role="progressbar" style={{width:styleWidth}} aria-valuenow={valNow} aria-valuemin="0" aria-valuemax="100">{valNow}%</div>
                    </div>
                )
            }
            else {
                heartDiseaseRes = (
                    <div class="progress" style={{width: widthPb, marginTop: marginTop, marginLeft: marginLeft}}>
                        <div class="progress-bar bg-danger" role="progressbar" style={{width:styleWidth}} aria-valuenow={valNow} aria-valuemin="0" aria-valuemax="100">{valNow}%</div>
                    </div>
                )
            }
        }

        return ( 
            <div >
                <div style={{marginTop: "50px", marginLeft:"50px"}}>
                    {txtDescription}
                </div>
                <div class="row" style={{marginTop: "50px", alignContent:"center"}}>
                    <table>
                        {this.props.lstInps.map((item, index) => {
                            return (
                                <InputComp para={item} key={index}/>
                            )
                        })}
                        
                    </table> 
                    <div class="row">
                        <button onClick={this.onPredict} type="button" class="btn btn-primary" style={{height:"40px", width: "80px", marginLeft: marginLeft, marginTop: marginTop, marginBottom: "25px"}}>Predict</button>
                        {heartDiseaseRes}   
                    </div>     
                </div>
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