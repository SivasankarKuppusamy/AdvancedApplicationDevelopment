import React, { useState } from 'react';
import { PieChart, Pie, Cell } from 'recharts';
import '../Styles/LoanCalculator.css';

const LoanCalculator = () => {
  const [loanAmount, setLoanAmount] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [loanTerm, setLoanTerm] = useState('');
  const [repaymentTerm, setRepaymentTerm] = useState('');
  const [totalPayment, setTotalPayment] = useState(0);
  const [interestPayment, setInterestPayment] = useState(0);
  const [principalPayment, setPrincipalPayment] = useState(0);
  const [repaymentAmount, setRepaymentAmount] = useState(0);

  const calculateLoan = () => {
    const principal = parseFloat(loanAmount);
    const rate = parseFloat(interestRate) / 100 / 12; // Monthly interest rate
    const term = parseFloat(loanTerm) * 12; // Loan term in months
    const monthlyPayment = (principal * rate) / (1 - Math.pow(1 + rate, -term));
    const totalPaymentValue = monthlyPayment * term;
    const totalInterestPayment = totalPaymentValue - principal;
    setTotalPayment(totalPaymentValue.toFixed(2));
    setInterestPayment(totalInterestPayment.toFixed(2));
    setPrincipalPayment(principal.toFixed(2));
  };

  const calculateRepayment = () => {
    const term = parseFloat(repaymentTerm);
    const totalPaymentValue = parseFloat(totalPayment);
    const repayment = totalPaymentValue / term;
    setRepaymentAmount(repayment.toFixed(2));
  };

  const handleCalculate = () => {
    calculateLoan();
  };

  const handleCalculateRepayment = () => {
    calculateRepayment();
  };

  const data = [
    { name: 'Interest', value: parseFloat(interestPayment) },
    { name: 'Principal', value: parseFloat(principalPayment) },
  ];

  const COLORS = ['#FF6384', '#36A2EB'];

  return (
    <div className='loan-calculator'>
      <div className='calculator-container'>
        <h2>Loan Calculator</h2>
        <label className='label'>
          Loan Amount:
          <input className='input-field' type="number" value={loanAmount} onChange={(e) => setLoanAmount(e.target.value)} />
        </label>
        <label className='label'>
          Interest Rate (%):
          <input className='input-field' type="number" value={interestRate} onChange={(e) => setInterestRate(e.target.value)} />
        </label>
        <label className='label'>
          Loan Term (Years):
          <input className='input-field' type="number" value={loanTerm} onChange={(e) => setLoanTerm(e.target.value)} />
        </label>
        <button className='button' onClick={handleCalculate}>Calculate</button>
      </div>

      {totalPayment > 0 && (
        <div className='summary-container'>
          <h3>Loan Summary</h3>
          <p>Total Payment: ${totalPayment}</p>
          <p>Interest Payment: ${interestPayment}</p>
          <p>Principal Payment: ${principalPayment}</p>
        </div>
      )}

      {totalPayment > 0 && (
        <div className='repayment-container'>
          <h3>Repayment Details</h3>
          <label className='label'>
            Repayment Term (Months):
            <input className='input-field' type="number" value={repaymentTerm} onChange={(e) => setRepaymentTerm(e.target.value)} />
          </label>
          <button className='button' onClick={handleCalculateRepayment}>Calculate Repayment</button>
          {repaymentAmount > 0 && (
            <p>Repayment Amount per Month: ${repaymentAmount}</p>
          )}
        </div>
      )}

      {totalPayment > 0 && (
        <div className='pie-chart-container'>
          <h3>Pie Chart</h3>
          <PieChart width={400} height={400}>
            <Pie dataKey="value" data={data} outerRadius={80} fill="#8884d8">
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
          </PieChart>
        </div>
      )}
    </div>
  );
};

export default LoanCalculator;
