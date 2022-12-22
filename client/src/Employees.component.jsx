import { Component } from "react";
import Employee from "./Employee.component";

class Employees extends Component {
  render() {
    return (
      <div>
        {employeesArray.map((employeeItem) => {
          return (
            <Employee
              fName={employeeItem.fName}
              lName={employeeItem.lName}
              date={employeeItem.date}
              pic={employeeItem.pic}
            />
          );
        })}
      </div>
    );
  }
}
export default Employees;
export const employeesArray = [
  {
    fName: "YACOV",
    lName: "INGGI",
    date: new Date("1990-01-01"),
    pic: "images/first.jpg",
  },
  {
    fName: "cfhfg",
    lName: "INGGI",
    date: new Date("1990-01-01"),
    pic: "images/first.jpg",
  },
  {
    fName: "lj",
    lName: "INGGI",
    date: new Date("1990-01-01"),
    pic: "images/first.jpg",
  },
  {
    fName: "vcdt",
    lName: "INGGI",
    date: new Date("1990-01-01"),
    pic: "images/first.jpg",
  },
];