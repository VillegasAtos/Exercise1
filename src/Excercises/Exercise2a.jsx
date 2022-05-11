import React, { useState, useEffect } from "react";
import { joinUsersAndCompanies } from "../Functions/Functions";

function Exercise2a() {
  const [employees, setemployees] = useState([]);

  useEffect(() => {
    initialite();
  }, []);

  const initialite = async () => {
    let dataCompanies = await joinUsersAndCompanies();
    let companiesFiltered = [];
    dataCompanies
      .filter((company) => company.status === "active")
      .forEach((company) => {
        company.employees.forEach((emplyee) => {
          if (emplyee.status === "inactive") {
            companiesFiltered.push(emplyee.name);
          }
        });
      });

    setemployees(companiesFiltered);
  };

  return (
    <>
      <ul class="list-group">
        {employees.map((employee) => (
          <li className="list-group-item" key={employee}>
            {" "}
            {employee}
          </li>
        ))}
      </ul>
    </>
  );
}

export default Exercise2a;
