import React, { useEffect, useState } from "react";
import { joinUsersAndCompanies } from "../Functions/Functions";
function Exercise2c() {
  const [companies, setcompanies] = useState([]);
  useEffect(() => {
    initialite();
  }, []);
  const initialite = async () => {
    let dataCompanies = await joinUsersAndCompanies();
    let companiesFiltered = [];
    dataCompanies.forEach((company) => {
      let amount = 0;
      company.employees.forEach((employee) => {
        amount += Number(employee.salary);
      });
      companiesFiltered.push({
        name: company.name,
        amount: amount,
      });
    });
    companiesFiltered.sort((a, b) => b.amount - a.amount);
    console.log(companiesFiltered);
    setcompanies(companiesFiltered);
  };
  return (
    <>
      <table className="table text-center">
        <thead>
          <tr>
            <th>Company</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {companies.map((company, index) => (
            <tr key={index}>
              <td>{company.name}</td>
              <td>{company.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Exercise2c;
