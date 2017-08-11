/**
 * Created by Hrishikesh on 7/19/2017.
 */
import React, {Component} from 'react';
import { Button } from 'react-bootstrap';
import { ButtonGroup } from 'react-bootstrap';
import { DropdownButton } from 'react-bootstrap';
import { MenuItem } from 'react-bootstrap';



class ButtonDetail extends Component{
    constructor(props){
        super(props);

        this.state = {value: ''}
    }


    render()
    {
        return (

            <div className="video-detail col-md-4">
                <div>
                    <ButtonGroup>
                        <Button bsStyle="primary" onClick={(event) => this.onInputChange(event.target.value)} value="Hepatitis treatment" bsSize="large" block>Hepatitis</Button>
                        <Button bsStyle="primary" onClick={(event) => this.onInputChange(event.target.value)} value="Cancer cure" bsSize="large" block>Cancer</Button>
                        <Button bsStyle="primary" onClick={(event) => this.onInputChange(event.target.value)} value="Tuberculosis treatment" bsSize="large" block>Tuberculosis</Button>
                        <Button bsStyle="primary" onClick={(event) => this.onInputChange(event.target.value)} value="Diarrhoea treatment" bsSize="large" block>Diarrhoea</Button>
                        <Button bsStyle="primary" onClick={(event) => this.onInputChange(event.target.value)} value="Malaria treatment" bsSize="large" block>Malaria</Button>
                        <Button bsStyle="primary" onClick={(event) => this.onInputChange(event.target.value)} value="Heart Attack treatment" bsSize="large" block>Heart Attack</Button>
                        <Button bsStyle="primary" onClick={(event) => this.onInputChange(event.target.value)} value="Asthma treatment" bsSize="large" block>Asthma</Button>
                        <Button bsStyle="primary" onClick={(event) => this.onInputChange(event.target.value)} value="Brain Tumour treatment" bsSize="large" block>Brain Tumour</Button>
                        <Button bsStyle="primary" onClick={(event) => this.onInputChange(event.target.value)} value="Jaundice treatment" bsSize="large" block>Jaundice</Button>
                    </ButtonGroup>
                </div>
            </div>
        );
    }

    onInputChange(term){
        this.setState({term});
        console.log(term);
        this.props.onClickSelect(term);

    }

}

export default ButtonDetail;
