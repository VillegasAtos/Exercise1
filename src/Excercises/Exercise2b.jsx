import React, { useEffect, useState } from "react";
import { joinUsersAndCompanies } from "../Functions/Functions";
function Exercise2b() {
  const [companies, setcompanies] = useState([]);

  useEffect(() => {
    initialite();
  }, []);

  const initialite = async () => {
    let dataCompanies = await joinUsersAndCompanies();
    let companiesFiltered = [];
    dataCompanies.forEach((company) => {
      let amountMales = 0;
      let amountFemales = 0;
      company.employees.forEach((employee) => {
        if (employee.gender === "male") {
          amountMales += Number(employee.salary);
        } else {
          amountFemales += Number(employee.salary);
        }
      });
      companiesFiltered.push({
        name: company.name,
        amountMales: amountMales,
        amountFemales: amountFemales,
      });
    });
    console.log(companiesFiltered);
    setcompanies(companiesFiltered);
  };
  return (
    <>
      <table className="table text-center">
        <thead>
          <tr>
            <th>Company</th>
            <th>Amount of Males</th>
            <th>Amount of Females</th>
          </tr>
        </thead>
        <tbody>
          {companies.map((company, index) => (
            <tr key={index}>
              <td>{company.name}</td>
              <td>{company.amountMales}</td>
              <td>{company.amountFemales}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Exercise2b;
