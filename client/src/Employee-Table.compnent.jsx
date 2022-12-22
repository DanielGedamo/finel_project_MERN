import { Component } from "react";
import { employeesArray } from "./Employees.component";
class EmployeeTable extends Component {
  render() {
    return (
      <table>
        <thead>
          <th>first name</th>
          <th>last name</th>
          <th>date</th>
          <th>pic url</th>
        </thead>
        <tbody>
          {employeesArray.map((employeeItem) => (
            <tr>
              <td>{employeeItem.fName}</td>
              <td>{employeeItem.lName}</td>
              <td>{employeeItem.date.getFullYear()}</td>
              <td>{employeeItem.pic}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}
export default EmployeeTable;
