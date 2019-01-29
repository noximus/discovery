import React, { Component } from 'react'
import { connect } from 'react-redux'
import SubTitle from '../elements/SubTitle'
import TxtTitle from '../elements/TxtTitle'
import SubmitBtn from '../elements/SubmitBtn'

class SignUp extends Component {  
  handleChange = (e) => {
      // this.setState({
      //     [e.target.id]: e.target.value
      // })
  }
  handleBlur = (e) => {
    // this.setState({
    //     [e.target.id]: e.target.value
    // })
    console.log(e.target.value)
  }
  handleSubmit = (e) => {
      e.preventDefault();
      console.log(this.props)
      this.props.history.push('/thank-you');
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <form onSubmit={this.handleSubmit}>
            <TxtTitle text={this.props.txtTitle} />
            <div className="tab-des">
            <SubTitle text={this.props.signUpTxt2} />
            <div className="form-group">
              <div className="fullName">
                <div className="fName">
                  <input type="text" id="firstName" placeholder={this.props.firstName} value={this.props.firstName} onChange={this.handleChange} onBlur={this.handleBlur} required="1"/>
                </div>
                <div className="lName">
                  <input type="text" id="lastName" placeholder={this.props.lastName} value={this.props.lastName} onChange={this.handleChange} onBlur={this.handleBlur} required="1"/>
                </div>
              </div>
              <SubmitBtn text="sign up" />
            </div>
              <div className="gdpr plh">
                <div><input id="gdpr" name="isGoing" type="checkbox" checked={this.props.isGoing} onChange={this.handleInputChange} /></div>
                <div>
                  <label htmlFor="gdpr">
                    <span className="aw">I agree to receive information from</span> <span className="aw">Discovery Communications in accordance</span> <span className="aw">with the following <a href="https://www.google.com/" >Privacy Policy</a></span>
                  </label>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state) => ({
  firstName: state.firstName,
  lastName: state.lastName,
  txtTitle: state.txtTitle,
  signUpTxt2: state.signUpTxt2
})
export default connect(mapStateToProps)(SignUp);