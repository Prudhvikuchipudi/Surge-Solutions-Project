import React, { Component } from 'react';
import './App.css';

class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {uName: '',age: '',address:'',employmentStatus:'',goalOfLoan:'',loanAmount:'',income:''};

    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeAge = this.handleChangeAge.bind(this);
    this.handleChangeAddress = this.handleChangeAddress.bind(this);
    this.handleChangeEmploymentStatus = this.handleChangeEmploymentStatus.bind(this);
    this.handleChangeGoalOfLoan = this.handleChangeGoalOfLoan.bind(this);
    this.handleChangeLoanAmount = this.handleChangeLoanAmount.bind(this);
    this.handleChangeIncome = this.handleChangeIncome.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeName(event) {
    this.setState({uName: event.target.value});
}
handleChangeAge(event) {
  this.setState({age: event.target.value});
}
handleChangeAddress(event) {
  this.setState({address: event.target.value});
}
handleChangeEmploymentStatus(event) {
  this.setState({employmentStatus: event.target.value});
}
handleChangeGoalOfLoan(event) {
  this.setState({goalOfLoan: event.target.value});
}
handleChangeLoanAmount(event) {
  this.setState({loanAmount: event.target.value});
}
handleChangeIncome(event) {
  this.setState({income: event.target.value});
}


  handleSubmit(event) {
    
    alert('uName: ' + this.state.uName  + "\n" +"age: "+ this.state.age+ "\n"+"address: " + this.state.address+ "\n"+"employmentStatus: " + this.state.employmentStatus+ "\n"+"goalOfLoan: " + this.state.goalOfLoan+ "\n"+"loanAmount: " + this.state.loanAmount+ "\n"+"income: " + this.state.income );
    event.preventDefault();
  }
  render() {
    return (
      <div className="app">
        <div className="calc-wrapper">
        <form onSubmit = {this.handleSubmit}>
        
          <label>
            Name: 
            <input type="text" name="name"  uName={this.state.value} onChange={this.handleChangeName} />
            
          </label>
          
          <br></br>
          <label>
            Age:
            <input type="text" name="age" age={this.state.value} onChange={this.handleChangeAge} />
          </label>
          
          <br></br>
          <label>
            Address:
            <input type="text" name="address" address={this.state.value} onChange={this.handleChangeAddress}/>
          </label>
          <br></br>
          <label>
            Employment Status:
            <input type="text" name="employmentStatus" employmentStatus={this.state.value} onChange={this.handleChangeEmploymentStatus}/>
          </label>
          <br></br>
          <label>
          Goal of Loan: 
          <select goalOfLoan = {this.state.value} onChange={this.handleChangeGoalOfLoan}>
            
            <option value="Home Loan" >Home Loan</option>
            <option  value="Car Loan" >Car Loan</option>
            <option selected value="Not Selected" >Not Selected</option>
            
          </select>
          </label>
          <br></br>
          <label>
            Loan Amount:
            <input type="text" name="loanAmount" loanAmount={this.state.value} onChange={this.handleChangeLoanAmount}/>
          </label>
          <br></br>
          <label>
            Income:
            <input type="text" name="income" income={this.state.value} onChange={this.handleChangeIncome}/>
          </label>
          <br></br>
          <input type="submit" value="Submit" />
        </form>
        
        </div>
      </div>
    );
  }
}

export default App