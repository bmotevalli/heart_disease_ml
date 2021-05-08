import * as actionTypes from "./action";

const initialState = {
  isSideMenuExpanded: false,
  lstInps: [
    {name: "age", disp: "Age", type: "txt", value: "65"},
    {name: "sex", disp: "Sex", type:"select", options: ["Male", "Female"], value: "Male"},
    {name: "cp", disp: "Chest Pain Type", type: "select", options: ["Typical Angina", "Atypical Angina", "Non-Anginal", "Asymptomatic"], value: "Typical Angina"},
    {name: "trestbps", disp: "Rest Blood Sugar", type: "txt", value: "145"},
    {name: "chol", disp: "Serum cholesterol", type: "txt", value: "233"},
    {name: "fbs", disp: "Fasting blood sugar (FBS)", type: "select", options: ["FBS < 120 mg/dl", "FBS > 120 mg/dl"], value: "FBS < 120 mg/dl"},
    {name: "restecg", disp: "Resting electrocardiographic", type: "select", options: ["Nothing to Note", "ST-T Wave abnormality", "Enlarged Heart Chamber"], value: "Nothing to Note"},
    {name: "thalach", disp: "Maximum Heart Rate", type: "txt", value: "150"},
    {name: "exang", disp: "Exercise induced angina", type: "select", options: ["No", "Yes"], value: "No"},
    {name: "oldpeak", disp: "Old Peak", type: "txt", value: "2.3"},
    {name: "slop", disp: "Peak exercise slope", type: "select", options: ["Unsloping", "Flats Loping", "Downs Loping"], value: "Unsloping"},
    {name: "ca", disp: "Ca Number", type: "select", options: ["0","1","2","3"], value: "0"},
    {name: "thal", disp: "Thalassemia", type: "txt", value: "1"},
  ]
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.TOGGLE_SIDEMENU:
      const isExpanded = !state.isSideMenuExpanded;
      return {
        ...state,
        isSideMenuExpanded: isExpanded,
      };

    case actionTypes.SET_PARAM_VALUE:
      let param = action.payload.para;
      let paraValue = action.payload.value;
      // let objIndex = state.lstInps.findIndex((obj => obj.name == param.name));
      // console.log(paraValue)
      // state.lstInps[objIndex].value = paraValue;
      // console.log(state.lstInps[objIndex])
      // console.log(state.lstInps)
      return {
        ...state,
        lstInps: state.lstInps.map(item => {
          if (item.name === param.name){
            param.value = paraValue
            return param
          }
          else {
            return item
          }
        })
      }

  }

  return state;
};

export default reducer;
