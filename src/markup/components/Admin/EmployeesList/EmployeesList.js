// Import the necessary components 
import React, { useState, useEffect } from "react";
import { Table, Button } from 'react-bootstrap';
// Import the auth hook  
import { useAuth } from "../../../../Contexts/AuthContext";
// Import the date-fns library 
import { format } from 'date-fns'; // To properly format the date on the table 
// Import the getAllEmployees function  
import employeeService from "../../../../services/employee.service";
import UpdateEmployee from "../UpdateEmployee/UpdateEmployee";
import UpdateIcon from "@mui/icons-material/Update";
import DeleteIcon from "@mui/icons-material/Delete";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

// Create the EmployeesList component 
const EmployeesList = () => {
  // Create all the states we need to store the data
  // Create the employees state to store the employees data  
  const [employees, setEmployees] = useState([]);
  // A state to serve as a flag to show the error message 
  const [apiError, setApiError] = useState(false);
  // A state to store the error message 
  const [apiErrorMessage, setApiErrorMessage] = useState(null);
  // To get the logged in employee token
  const { employee } = useAuth();
  let token = null; // To store the token 
  if (employee) {
    token = employee.employee_token;
  }

  useEffect(() => {
    // Call the getAllEmployees function 
    const allEmployees = employeeService.getAllEmployees(token);
    allEmployees.then((res) => {
      if (!res.ok) {
        console.log(res.status);
        setApiError(true);
        if (res.status === 401) {
          setApiErrorMessage("Please login again");
        } else if (res.status === 403) {
          setApiErrorMessage("You are not authorized to view this page");
        } else {
          setApiErrorMessage("Please try again later");
        }
      }
      return res.json()
    }).then((data) => {
      if (data.data.length !== 0) {
        setEmployees(data.data)
      }

    }).catch((err) => {
      console.log(err);
    })
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await employeeService.deleteEmployee(id, token);
      if (!response.ok) {
        toast.error(response.statusText);
        throw new Error("Failed to delete employee");
      }

      toast.success("Successfully Deleted");
      setTimeout(() => {
        window.location.href = "/admin/employees";
      }, 500);
    } catch (error) {
      console.error(error);
      setApiError(true);
      setApiErrorMessage("Error: " + error.message);
    }
  };

  return (
    <>
      {apiError ? (
        <section className="contact-section">
          <div className="auto-container">
            <div className="contact-title">
              <h2>{apiErrorMessage}</h2>
            </div>
          </div>
        </section>
      ) : (
        <>
          <section className="contact-section">
            <div className="auto-container">
              <div className="contact-title">
                <h2>Employees</h2>
              </div>
              {employees && (
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>Active</th>
                      <th>First Name</th>
                      <th>Last Name</th>
                      <th>Email</th>
                      <th>Phone</th>
                      <th>Added Date</th>
                      <th>Role</th>
                      <th>Edit/Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {employees.map((employee) => (
                      <tr key={employee.employee_id}>
                        <td>{employee.active_employee ? "Yes" : "No"}</td>
                        <td>{employee.employee_first_name}</td>
                        <td>{employee.employee_last_name}</td>
                        <td>{employee.employee_email}</td>
                        <td>{employee.employee_phone}</td>
                        <td>
                          {format(
                            new Date(employee.added_date),
                            "MM - dd - yyyy | kk:mm"
                          )}
                        </td>
                        <td>{employee.company_role_name}</td>
                        <td>
                          <div className="edit-delete-icons">
                            <Link
                              to={`/update-employee/${employee.employee_id}`}
                            >
                              <button type="button">
                                <UpdateIcon />
                              </button>
                            </Link>
                            |
                            <button
                              type="button"
                              onClick={() => handleDelete(employee.employee_id)}
                            >
                              <DeleteIcon />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              )}
            </div>
          </section>
        </>
      )}
    </>
  );
}

// Export the EmployeesList component 
export default EmployeesList;