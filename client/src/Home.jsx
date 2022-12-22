import EmployeeTable from "./Employee-Table.compnent";
import Employees from "./Employees.component";
function Home(props) {
  return (
    <div>
      <h5> {props.fName}</h5>
      <EmployeeTable/>
      {/* <Employees/> */}
    </div>
  );
}

export default Home;
