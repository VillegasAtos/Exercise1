import React, { useState, useEffect } from "react";
import { getCompanies, getUsers } from "../Functions/Functions";
function Exercise1() {
  const [companies, setCompanies] = useState([]);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    initialite();
  }, []);

  const initialite = async () => {
    let dataCompanies = await getCompanies();
    let dataUsers = await getUsers();
    setUsers(dataUsers);
    setCompanies(dataCompanies);
  };

  return (
    <>
      <table className="table text-center">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Employees</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {companies.map((company) => (
            <tr key={company.id}>
              <td>{company.id}</td>
              <td>{company.name}</td>
              <td>
                <table className="table text-center">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Gender</th>
                      <th>Status</th>
                      <th>Salary</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users
                      .filter((user) => company.employees.includes(user.id))
                      .map((user) => (
                        <tr key={user.id}>
                          <td>{user.name}</td>
                          <td>{user.gender}</td>
                          <td>{user.status}</td>
                          <td>{user.salary}</td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </td>
              <td>{company.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Exercise1;
