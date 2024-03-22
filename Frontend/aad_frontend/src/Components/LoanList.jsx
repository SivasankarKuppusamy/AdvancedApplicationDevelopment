import React, { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TablePagination } from '@mui/material';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';
import '../Styles/LoanList.css'
import axios from 'axios';

const LoanExplorer = () => {
  const [bankSchemes, setBankSchemes] = useState([]);
  const [banks, setBanks] = useState({});
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('isLoggedIn') === 'true');
  const [totalCount, setTotalCount] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const bankSchemesResponse = await axios.get('http://localhost:8080/bank-schemes', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        });
        const bankSchemesData = bankSchemesResponse.data;
        setBankSchemes(bankSchemesData);

        const bankIds = bankSchemesData.map(scheme => scheme.bankid);
        
        // const banksResponse = await axios.get('http://localhost:8080/bank/banks', {
        //   headers: {
        //     Authorization: `Bearer ${localStorage.getItem('token')}`
        //   },
        //   params: {
        //     ids: bankIds
        //   }
        // });
        // const banksData = banksResponse.data;
        // const banksMap = {};
        // banksData.forEach(bank => {
        //   banksMap[bank.id] = bank.name;
        // });
        // setBanks(banksMap);
        setTotalCount(bankSchemesData.length);
      } catch (error) {
        console.error('Error fetching bank schemes:', error);
      }
    };
    fetchData();
  }, []);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <div className="loan-list" style={{ display: 'flex', marginTop: '70px' }}>
      {isLoggedIn && <Sidebar />}
      <div className="loan-explorer-container" style={{ flex: 1, padding: '20px' }}>
        <h1>Loan Explorer</h1>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Bank</TableCell>
                <TableCell>Scheme Name</TableCell>
                <TableCell>Interest Rate</TableCell>
                <TableCell>Maximum Loan Amount</TableCell>
                <TableCell>Description</TableCell>
                <TableCell>Eligibility Criteria</TableCell>
                <TableCell>Apply Now</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {bankSchemes.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((scheme, schemeIndex) => (
                <TableRow key={schemeIndex}>
                  <TableCell>{scheme.bankid}</TableCell>
                  <TableCell>{scheme.schemeName}</TableCell>
                  <TableCell>{scheme.interestRate}</TableCell>
                  <TableCell>{scheme.maximumLoanAmount}</TableCell>
                  <TableCell>{scheme.description}</TableCell>
                  <TableCell>{scheme.eligibilityCriteria}</TableCell>
                  <TableCell>
                    <Link to={`/new-application/${scheme.bankid}/${scheme.id}`}>Apply Now</Link>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
          component="div"
          count={totalCount}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </div>
    </div>
  );
};

export default LoanExplorer;
