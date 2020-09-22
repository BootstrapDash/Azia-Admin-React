import React, { Component, useState } from 'react';
import ComponentsSidebar from '../shared/ComponentsSidebar';
import { Form, Dropdown, InputGroup, FormControl } from 'react-bootstrap';
import InputMask from "react-input-mask";
import { SketchPicker, PhotoshopPicker, SwatchesPicker} from 'react-color';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import Select from 'react-select';
import Nouislider from "nouislider-react";
import "nouislider/distribute/nouislider.css";
import bsCustomFileInput from 'bs-custom-file-input'


export class FormElements extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    
    this.state = {
      toggleSwitchDefault: false,
      toggleSwitchSecondary: false,
      toggleSwitchSuccess: false,
      toggleSwitchDark: false,
      toggleSwitchDefault2: true,
      toggleSwitchSecondary2: true,
      toggleSwitchSuccess2: true,
      toggleSwitchDark2: true
    }
  }
  componentDidMount() {
    bsCustomFileInput.init()
  }
  render() {
    return (
      <div>
        <div className="container d-flex p-md-0">
          <ComponentsSidebar/>
          <div className="az-content-body pd-lg-l-40 d-flex flex-column">
            <div className="az-content-breadcrumb">
              <span>Components</span>
              <span>Forms</span>
              <span>Form Elements</span>
            </div>
            <h2 className="az-content-title">Form Elements</h2>

            <div className="az-content-label mg-b-5">Form Input &amp; Textarea</div>
            <p className="mg-b-20">A basic form control input and textarea with disabled and readonly mode.</p>

            <div className="row row-sm">
              <div className="col-lg">
                <Form.Control type="text" placeholder="Input box" />
              </div>{/* col */}
              <div className="col-lg mg-t-10 mg-lg-t-0">
                <Form.Control type="text" placeholder="Input box (readonly)" readOnly />
              </div>{/* col */}
              <div className="col-lg mg-t-10 mg-lg-t-0">
                <Form.Control type="text" placeholder="Input box (disabled)" disabled/>
              </div>{/* col */}
            </div>{/* row */}

            <div className="row row-sm mg-t-20">
              <div className="col-lg">
                <Form.Control as="textarea" rows="3" placeholder="Textarea" />
              </div>{/* col */}
              <div className="col-lg mg-t-10 mg-lg-t-0">
                <Form.Control as="textarea" rows="3" placeholder="Textarea (readonly)" readOnly/>
              </div>{/* col */}
              <div className="col-lg mg-t-10 mg-lg-t-0">
                <Form.Control as="textarea" rows="3" placeholder="Textarea (disabled)" disabled/>
              </div>{/* col */}
            </div>{/* row */}

            <hr className="mg-y-30"/>

            <div className="az-content-label mg-b-5">Valid State Input</div>
            <p className="mg-b-20">A form control with success, warning and error state.</p>

            <form className="needs-validation was-validated">
              <div className="row row-sm">
                <div className="col-lg-4">
                  <div className="form-group has-success mg-b-0">
                    <Form.Control type="text" placeholder="Input box (success state)" defaultValue="This is input" required/>
                    <Form.Control as="textarea" rows="3" className="mg-t-20" placeholder="Textarea (success state)" defaultValue="This is textarea" required/>
                  </div>{/* form-group */}
                </div>{/* col */}
                <div className="col-lg-4 mg-t-20 mg-lg-t-0">
                  <div className="form-group has-danger mg-b-0">
                    <Form.Control type="text" placeholder="Input box (invalid state)" required/>
                    <Form.Control as="textarea" rows="3" className="mg-t-20" placeholder="Textarea (invalid state)" required/>
                  </div>{/* form-group */}
                </div>{/* col */}
              </div>{/* row */}
            </form>

            <hr className="mg-y-30"/>

            <div className="az-content-label mg-b-5">Custom Checkboxes &amp; Radios</div>
            <p className="mg-b-20">A custom styled checkboxes and radios.</p>

            <div className="row">
              <div className="col-lg-3">
                <Form.Check 
                  type={'checkbox'}
                  id={`default-${'checkbox'}`}
                  label={'Checkbox Unchecked'}
                  className={'ckbox'}
                />
              </div>{/* col-3 */}
              <div className="col-lg-3 mg-t-20 mg-lg-t-0">
                <Form.Check 
                  type={'checkbox'}
                  id={`checked-${'checkbox'}`}
                  label={'Checkbox checked'}
                  className={'ckbox'}
                  defaultChecked
                />
              </div>{/* col-3 */}
              <div className="col-lg-3 mg-t-20 mg-lg-t-0">
                <Form.Check 
                  type={'checkbox'}
                  id={`disabled-${'checkbox'}`}
                  label={'Checkbox disabled'}
                  className={'ckbox'}
                  disabled
                />
              </div>{/* col-3 */}
            </div>{/* row */}

            <div className="row mg-t-10">
              <div className="col-lg-3">
                <Form.Check 
                  type={'radio'}
                  id={`default-${'radio'}`}
                  label={'Radio Unchecked'}
                  className={'rdiobox'}
                />
              </div>{/* col-3 */}
              <div className="col-lg-3 mg-t-20 mg-lg-t-0">
                <Form.Check 
                  type={'radio'}
                  id={`checked-${'radio'}`}
                  label={'Radio checked'}
                  className={'rdiobox'}
                  defaultChecked
                />
              </div>{/* col-3 */}
              <div className="col-lg-3 mg-t-20 mg-lg-t-0">
                <Form.Check 
                  type={'radio'}
                  id={`disabled-${'radio'}`}
                  label={'Radio disabled'}
                  className={'rdiobox'}
                  disabled
                />
              </div>{/* col-3 */}
            </div>{/* row */}

            <hr className="mg-y-30"/>

            <div className="az-content-label mg-b-5">File Browser</div>
            <p className="mg-b-20">A custom styled file browser.</p>

            <div className="row row-sm">
              <div className="col-sm-7 col-md-6 col-lg-4">
                <div className="custom-file">
                  <Form.Control type="file" className="custom-file-input"/>
                  <label className="custom-file-label" htmlFor="customFile">Choose file</label>
                </div>
              </div>{/* col */}
            </div>{/* row */}

            <hr className="mg-y-30"/>

            <div className="az-content-label mg-b-5">Toggle Switches</div>
            <p className="mg-b-20">A custom made toggles with jquery support.</p>

            <div className="az-toggle-group-demo">
              <div className={ this.state.toggleSwitchDefault ? 'az-toggle on' : "az-toggle"} onClick={ () => this.setState({toggleSwitchDefault: !this.state.toggleSwitchDefault}) }><span></span></div>
              <div className={ this.state.toggleSwitchSecondary ? 'az-toggle az-toggle-secondary on' : "az-toggle"} onClick={ () => this.setState({toggleSwitchSecondary: !this.state.toggleSwitchSecondary}) }><span></span></div>
              <div className={ this.state.toggleSwitchSuccess ? 'az-toggle az-toggle-success on' : "az-toggle"} onClick={ () => this.setState({toggleSwitchSuccess: !this.state.toggleSwitchSuccess}) }><span></span></div>
              <div className={ this.state.toggleSwitchDark ? 'az-toggle az-toggle-dark on' : "az-toggle"} onClick={ () => this.setState({toggleSwitchDark: !this.state.toggleSwitchDark}) }><span></span></div>
            </div>

            <div className="az-toggle-group-demo mg-t-10">
              <div className={ this.state.toggleSwitchDefault2 ? 'az-toggle on' : "az-toggle"} onClick={ () => this.setState({toggleSwitchDefault2: !this.state.toggleSwitchDefault2}) }><span></span></div>
              <div className={ this.state.toggleSwitchSecondary2 ? 'az-toggle az-toggle-secondary on' : "az-toggle"} onClick={ () => this.setState({toggleSwitchSecondary2: !this.state.toggleSwitchSecondary2}) }><span></span></div>
              <div className={ this.state.toggleSwitchSuccess2 ? 'az-toggle az-toggle-success on' : "az-toggle"} onClick={ () => this.setState({toggleSwitchSuccess2: !this.state.toggleSwitchSuccess2}) }><span></span></div>
              <div className={ this.state.toggleSwitchDark2 ? 'az-toggle az-toggle-dark on' : "az-toggle"} onClick={ () => this.setState({toggleSwitchDark2: !this.state.toggleSwitchDark2}) }><span></span></div>
            </div>

            <table className="table az-table-reference">
              <thead>
                <tr>
                  <th className="wd-40p">Class Reference</th>
                  <th className="wd-60p">Values</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><code className="pd-0 bg-transparent">className="az-toggle az-toggle-[value]"</code></td>
                  <td>secondary | success | dark</td>
                </tr>
              </tbody>
            </table>

            <hr className="mg-y-30"/>

            <div className="az-content-label mg-b-5">Input Groups</div>
            <p className="mg-b-20">Easily extend form controls by adding text, buttons, or button groups on either side of textual inputs.</p>

            <div className="row row-sm">
              <div className="col-lg-4">
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">@</span>
                  </div>
                  <Form.Control type="text" placeholder="Username"/>
                </div>{/* input-group */}
              </div>{/* col */}
              <div className="col-lg-4">
                <div className="input-group mb-3">
                  <Form.Control type="text" placeholder="Recipient's username"/>
                  <div className="input-group-append">
                    <span className="input-group-text" id="basic-addon2">@example.com</span>
                  </div>
                </div>
              </div>{/* col */}
              <div className="col-lg-4">
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text">$</span>
                  </div>
                  <Form.Control type="text" aria-label="Amount (to the nearest dollar)"/>
                  <div className="input-group-append">
                    <span className="input-group-text">.00</span>
                  </div>
                </div>{/* input-group */}
              </div>{/* col */}
            </div>{/* row */}

            <hr className="mg-y-30"/>

            <div className="az-content-label mg-b-5">Input Mask</div>
            <p className="mg-b-20">Input masks allows a user to more easily enter fixed width input where you would like them to enter the data in a certain format (dates,phones, etc).</p>

            <div className="row row-sm">
              <div className="col-lg-3">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <div className="input-group-text">
                      Date:
                    </div>
                  </div>
                  <InputMask mask="99/99/9999" className="form-control" placeholder="MM/DD/YYYY"/>
                </div>{/* input-group */}
              </div>{/* col-4 */}
              <div className="col-lg-3 mg-t-20 mg-lg-t-0">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <div className="input-group-text">
                      Phone:
                    </div>
                  </div>{/* input-group-prepend */}
                  <InputMask mask="+99 99 999 99" className="form-control" placeholder="+99 99 999 99"/>
                </div>{/* input-group */}
              </div>
              <div className="col-lg-3 mg-t-20 mg-lg-t-0">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <div className="input-group-text">
                      Credit Card:
                    </div>{/* input-group-text */}
                  </div>{/* input-group-prepend */}
                  <CreditCardMask />
                  {/* <input id="ssnMask" type="text" className="form-control" placeholder="000-00-0000"/> */}
                </div>
              </div>
            </div>{/* row */}

            <hr className="mg-y-30"/>

            <div className="az-content-label mg-b-5">Color Picker</div>
            <p className="mg-b-20">Colorpicker (Sketch)</p>

            <div className="wd-200">
              <SketchColorPicker />
            </div>

            <p className="mg-t-40 mg-b-10">Colorpicker (Photoshop)</p>

            <div className="wd-200">
              <PsColorPicker />
            </div>

            <p className="mg-t-40 mg-b-10">Colorpicker (Swatches)</p>
            <div className="wd-200">
              <SwatchesColorPicker />
            </div>

            <hr className="mg-y-30"/>

            <div className="az-content-label mg-b-5">jQuery UI Date Picker</div>
            <p className="mg-b-20">The datepicker is tied to a standard form input field. Click on the input to open an interactive calendar in a small overlay. If a date is chosen, feedback is shown as the input's value.</p>

            <div className="wd-200 mg-b-20">
              <div className="input-group">
                <div className="input-group-prepend">
                  <div className="input-group-text">
                    <i className="typcn typcn-calendar-outline tx-24 lh--9 op-6"></i>
                  </div>
                </div>
                <DefaultDatepicker />

              </div>
            </div>{/* wd-200 */}

            <hr className="mg-y-30"/>

            <div className="az-content-label mg-b-5">Select<span className="tx-sserif">2</span> Box</div>
            <p className="mg-b-20">Select2 gives you a customizable select box with support for searching, tagging, remote data sets, infinite scrolling, and many other highly used options.</p>

            <div className="row row-sm mg-b-20">
              <div className="col-lg-4">
                <p className="mg-b-10">Single Select</p>
                <Select 
                  options={[
                    { value: 'firefox', label: 'firefox' },
                    { value: 'chrome', label: 'chrome' },
                    { value: 'safari', label: 'safari' },
                    { value: 'opera', label: 'opera' },
                    { value: 'internetexplore', label: 'internetexplore' }
                  ]}
                />
              </div>{/* col-4 */}
              <div className="col-lg-4 mg-t-20 mg-lg-t-0">
                <p className="mg-b-10">Single Select (Disabled)</p>
                <Select
                  isDisabled
                  options={[
                    { value: 'firefox', label: 'firefox' },
                    { value: 'chrome', label: 'chrome' },
                    { value: 'safari', label: 'safari' },
                    { value: 'opera', label: 'opera' },
                    { value: 'internetexplore', label: 'internetexplore' }
                  ]}
                />
              </div>{/* col-4 */}
              <div className="col-lg-4 mg-t-20 mg-lg-t-0">
                <p className="mg-b-10">Multi Select</p>
                <Select
                  isMulti
                  options={[
                    { value: 'firefox', label: 'firefox' },
                    { value: 'chrome', label: 'chrome' },
                    { value: 'safari', label: 'safari' },
                    { value: 'opera', label: 'opera' },
                    { value: 'internetexplore', label: 'internetexplore' }
                  ]}
                />
              </div>{/* col-4 */}
            </div>{/* row */}

            <hr className="mg-y-30"/>

            <div className="az-content-label mg-b-5">Nouislider</div>
            <p className="mg-b-20">Easy, flexible and responsive range slider with skin support.</p>

            <div className="row row-sm">
              <div className="col-lg-5">
                <Nouislider range={{ min: 0, max: 100 }} start={72} connect={[true, false]} className="slider-primary mg-t-25"/>
                <Nouislider range={{ min: 0, max: 100 }} start={92} connect={[true, false]} className="slider-danger mg-t-25"/>
                <Nouislider range={{ min: 0, max: 100 }} start={43} connect={[true, false]} className="slider-warning mg-t-25"/>
                <Nouislider range={{ min: 0, max: 100 }} start={20} connect={[true, false]} className="slider-info mg-t-25"/>
                <Nouislider range={{ min: 0, max: 100 }} start={75} connect={[true, false]} className="slider-success mg-t-25"/>
              </div>{/* col-6 */}
              <div className="col-lg-6 offset-lg-1 mg-t-20 mg-lg-t-0">
                <Nouislider range={{ min: 0, max: 100 }} start={72} connect={[true, false]} orientation="vertical" className="slider-primary mg-r-30"/>
                <Nouislider range={{ min: 0, max: 100 }} start={92} connect={[true, false]} orientation="vertical" className="slider-danger mg-r-30"/>
                <Nouislider range={{ min: 0, max: 100 }} start={43} connect={[true, false]} orientation="vertical" className="slider-warning mg-r-30"/>
                <Nouislider range={{ min: 0, max: 100 }} start={20} connect={[true, false]} orientation="vertical" className="slider-info mg-r-30"/>
                <Nouislider range={{ min: 0, max: 100 }} start={75} connect={[true, false]} orientation="vertical" className="slider-success mg-r-30"/>
              </div>{/* col-6 */}
            </div>{/* row */}

            <hr className="mg-y-30"/>


          </div>{/* az-content-body */}
        </div>{/* container */}        
      </div>
    )
  }
}

class CreditCardMask extends Component {
  state = {
      value: '',
      mask: '9999-9999-9999-9999',
      placeholder: '0000-0000-0000-0000'
    }
    
    onChange = (event) => {
      var value = event.target.value;
      var newState = {
        mask: '9999-9999-9999-9999',
        value: value,
      };
      if (/^3[47]/.test(value)) {
        newState.mask = '9999-999999-99999';
        newState.placeholder = '0000-000000-00000'
      }
      this.setState(newState);
    }
    
    render() {
      return <InputMask {...this.state} onChange={this.onChange}  className="form-control" placeholder={this.state.placeholder} />;
    }
}

function SketchColorPicker() {
  const [color, setColor] = useState('#ffe74c');
  return (
      <InputGroup className="mb-3">
          <FormControl
          placeholder="Color Value"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          value={color}
          onChange={(event) => setColor(event.target.value)}
          />
          <InputGroup.Append>
              <Dropdown>
                  <Dropdown.Toggle id="dropdown-basic" className="px-3" style={{height: '100%', backgroundColor:color, color: color, borderColor: color}}>
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                      <SketchPicker color={color} onChange={(color) => setColor(color.hex)} />
                  </Dropdown.Menu>
              </Dropdown>
          </InputGroup.Append>
      </InputGroup>
  );
}

function PsColorPicker() {
  const [color, setColor] = useState('#6bf178');
  const [menuOpen,toggleMenu]= useState(false);
  return (
      <InputGroup className="mb-3">
          <FormControl
              placeholder="Color Value"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
              value={color}
              onChange={(event) => setColor(event.target.value)}
          />
          <InputGroup.Append>
              <Dropdown show={menuOpen}>
                  <Dropdown.Toggle id="dropdown-basic" className="px-3" style={{height: '100%', backgroundColor:color, color: color, borderColor: color}} onClick={()=> {toggleMenu(!menuOpen)}}>
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                      <PhotoshopPicker color={color} onChange={(color) => setColor(color.hex)} onAccept={()=>{toggleMenu(false)}} onCancel={()=>{toggleMenu(false)}} />
                  </Dropdown.Menu>
              </Dropdown>
          </InputGroup.Append>
      </InputGroup>
  );
}

function SwatchesColorPicker() {
  const [color, setColor] = useState('#ff5964');
  return (
      <InputGroup className="mb-3">
          <FormControl
          placeholder="Color Value"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          value={color}
          onChange={(event) => setColor(event.target.value)}
          />
          <InputGroup.Append>
              <Dropdown>
                  <Dropdown.Toggle id="dropdown-basic" className="px-3" style={{height: '100%', backgroundColor:color, color: color, borderColor: color}}>
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                      <SwatchesPicker color={color} onChange={(color) => setColor(color.hex)} />
                  </Dropdown.Menu>
              </Dropdown>
          </InputGroup.Append>
      </InputGroup>
  );
}

const DefaultDatepicker = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <DatePicker selected={startDate} onChange={date => setStartDate(date)} className="form-control" style={{'z-index':3}}/>
  );
};

export default FormElements
