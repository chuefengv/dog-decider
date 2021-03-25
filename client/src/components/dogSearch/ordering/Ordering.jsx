import React from 'react';
import './Ordering.css';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';


function Ordering({checkedA, checkedB, checkedC, setCheckedA, setCheckedB, setCheckedC}){

    return(
        <div>
            <FormGroup row>
            <FormControlLabel
                control={<Checkbox checked={checkedA} onChange={()=>{setCheckedA(!checkedA)}} />}
                label="Small"
            />
            <FormControlLabel
                control={<Checkbox checked={checkedB} onChange={()=>{setCheckedB(!checkedB)}} />}
                label="Medium"
            />
            <FormControlLabel
                control={<Checkbox checked={checkedC} onChange={()=>{setCheckedC(!checkedC)}} />}
                label="Large"
            />
            </FormGroup>
        </div>
    )
}

export default Ordering;