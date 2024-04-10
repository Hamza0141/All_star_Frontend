import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import customerService from "../../../../services/customer.service";
import serviceRequest from "../../../../services/service.service";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandPointer } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useAuth } from "../../../../Contexts/AuthContext";
import VehicleRequest from "../../../../services/vehicle.service";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import orderService from "../../../../services/order.service";

function Order() {
  const [customer, setCustomer] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [singleCustomer, setSingleCustomer] = useState(null);
  const [vehicle, setVehicle] = useState(null); // State to store vehicle information
  const [selectedVehicle, setSelectedVehicle] = useState(); // State to store selected vehicle
  const [availableService, setAvailableService] = useState();
  const [customerFlag, setCustomerFlag] = useState(true);
  const [vehicleFlag, setVehicleFlag] = useState(false);
  const [additionalForm, setAdditionalForm] = useState({
    additional_request: "",
    order_total_price: "",
    order_status: "Received",
    service_ids: [],
  });
  //error handler states
  const [serverError, setServerError] = useState();
  const [success, setSuccess] = useState(false);

  const { employee } = useAuth();
  const token = employee ? employee.employee_token : null;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const CustomerResponse = await customerService.getAllCustomer(token);
        const serviceResponse = await serviceRequest.getAllService(token);
        if (!CustomerResponse.ok || !serviceResponse.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await CustomerResponse.json();
        const services = await serviceResponse.json();
        setCustomer(data.data);
        setAvailableService(services);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const filteredCustomer = customer.filter((cust) =>
    Object.values(cust).some((val) =>
      val.toString().toLowerCase().includes(searchInput.toLowerCase())
    )
  );

  const getSingleCustomer = async (id) => {
    try {
      const sortedCustomer = customer.find((c) => c.customer_id === id);
      setSingleCustomer(sortedCustomer);
      setCustomerFlag(false);
      const vehicleResponse = await VehicleRequest.getVehicleByCustomerId(
        id,
        token
      );
      if (!vehicleResponse.ok) {
        throw new Error("Failed to fetch Vehicle");
      }
      const vehicleData = await vehicleResponse.json();
      setVehicle(vehicleData); // Set vehicle state with the fetched data
      setVehicleFlag(true);
    } catch (error) {
      console.error(error);
      toast.error("Failed to fetch get details.");
    }
  };

  const selectVehicle = (vehicleId) => {
    // Logic to handle when a vehicle is selected
    console.log("Selected vehicle ID:", vehicleId);
    const selectedVehicle = vehicle.find((v) => v.vehicle_id === vehicleId);
    setSelectedVehicle(selectedVehicle);
  };

  // const selectedServices=(serviceID)=>{
  //      console.log("Selected service ID:", serviceID)
  //      setAdditionalForm(serviceID);
  // }
  if (selectedVehicle) {
    const formData = {
      employee_id: employee.employee_id,
      customer_id: singleCustomer.customer_id,
      vehicle_id: selectedVehicle?.vehicle_id,
      order_total_price: additionalForm?.order_total_price,
      additional_request: additionalForm?.additional_request,
      service_ids: "",
      order_status: additionalForm?.order_status,
    };
    console.log(formData);
  }
  const handleSubmit = (e) => {
    // Prevent the default behavior of the form
    e.preventDefault();
    // Pass the form data to the service
    const newOrder = orderService.createOrder(formData, token);
    newOrder
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);

        // If Error is returned from the API server, set the error message
        if (data.error) {
          setServerError(data.error);
        } else {
          // Handle successful response
          setSuccess(true);
          setServerError("");
          toast.success("successfully added");
          navigator("/admin/customers");
        }
      })
      // Handle Catch
      .catch((error) => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        setServerError(resMessage);
      });
  };

  return (
    <section className="contact-section">
      <div className="auto-container">
        <div className="contact-title">
          <h2>Create New Order</h2>
        </div>
        {/* map through customer's data  */}

        {!selectedVehicle && !singleCustomer && (
          <div className="contact-form">
            <div className="row clearfix">
              <div className="form-group col-md-12">
                <input
                  type="text"
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                  placeholder="Search by First name, Last name, Phone, Email"
                />
                {searchInput && customerFlag && (
                  <Table striped bordered hover>
                    <tbody>
                      {filteredCustomer?.map((cust) => (
                        <tr key={cust.customer_id}>
                          <td>{cust.customer_first_name}</td>
                          <td>{cust.customer_last_name}</td>
                          <td>{cust.customer_email}</td>
                          <td>{cust.customer_phone_number}</td>
                          <td>
                            <button
                              type="button"
                              onClick={() =>
                                getSingleCustomer(cust.customer_id)
                              }
                            >
                              <FontAwesomeIcon icon={faHandPointer} />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                )}
                {!searchInput && (
                  <Link to="/admin/add-customer">
                    <button
                      className="btn-style-one"
                      type="button"
                      data-loading-text="Please wait..."
                    >
                      Add New Customer
                    </button>
                  </Link>
                )}
              </div>
            </div>
          </div>
        )}

        {/* display selected customer data  */}

        {singleCustomer && (
          <div className="customerInfo">
            <h3>
              {singleCustomer.customer_first_name + " "}
              {singleCustomer.customer_last_name}
            </h3>
            <div className="cust-Key-value">
              <p className="cust-Key">Email:</p>
              <p className="cust-value">{singleCustomer.customer_email}</p>
            </div>
            <div className="cust-Key-value">
              <p className="cust-Key">Phone:</p>
              <p className="cust-value">
                {singleCustomer.customer_phone_number}
              </p>
            </div>
            <div className="cust-Key-value">
              <p className="cust-Key">Active :</p>
              <p className="cust-value">
                {singleCustomer.active_customer_status}
              </p>
            </div>
            <div className="cust-Key-value">
              <p className="cust-Key">Edit</p>
            </div>
          </div>
        )}

        {/* display selected vehicle data  */}

        {selectedVehicle && (
          <div className="SelectedVehicleInfo">
            <h3>{selectedVehicle?.vehicle_make}</h3>

            <div className="cust-Key-value">
              <p className="cust-Key">Color:</p>
              <p className="cust-value">{selectedVehicle?.vehicle_color}</p>
            </div>
            <div className="cust-Key-value">
              <p className="cust-Key">Tag:</p>
              <p className="cust-value">{selectedVehicle?.vehicle_tag}</p>
            </div>
            <div className="cust-Key-value">
              <p className="cust-Key">Year:</p>
              <p className="cust-value">{selectedVehicle?.vehicle_year}</p>
            </div>
            <div className="cust-Key-value">
              <p className="cust-Key">Milage:</p>
              <p className="cust-value">{selectedVehicle?.vehicle_mileage}</p>
            </div>
            <div className="cust-Key-value">
              <p className="cust-Key">VIN:</p>
              <p className="cust-value">{selectedVehicle?.vehicle_serial}</p>
            </div>
            <div className="cust-Key-value">
              <p className="cust-Key">Edit:</p>
              <p className="cust-value"></p>
            </div>
          </div>
        )}

        {/* display available service */}

        {selectedVehicle && (
          <div className="service-wrapper">
            <h3 className="title-header">Choose Service</h3>
            {availableService?.map((service) => (
              <div className="services" key={service.service_id}>
                <div className="service-Key-value">
                  <p className="service-Key">{service.service_name}</p>
                  <p className="service-value">{service.service_description}</p>
                </div>
                <div className="checkbox-wrapper">
                  <input className="form-checkbox" type="checkbox" onClick="" />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* display additional request */}

        {selectedVehicle && (
          <div>
            <div className="additional_request">
              <h3 className="title-header">Additional Requests</h3>
              <div className="inputs">
                <div className="additional_request_input">
                  <input
                    type="text"
                    value=""
                    placeholder="Additional Request"
                  />
                </div>
                <div className="priceInput">
                  <input type="number" value="" placeholder="Price" />
                </div>
              </div>
              <div className="submitBotton">
                <button
                  className="btn-style-one"
                  type="button"
                  data-loading-text="Please wait..."
                >
                  SUBMIT ORDER
                </button>
              </div>
            </div>
          </div>
        )}

        {/* display customer vehicles */}

        {!selectedVehicle && vehicleFlag && (
          <div className="vehicleInfo">
            <h2>Vehicle Information</h2>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Year</th>
                  <th>Make</th>
                  <th>Model</th>
                  <th>Tag</th>
                  <th>Serial</th>
                  <th>Color</th>
                  <th>Mileage</th>
                  <th>Choose</th>
                </tr>
              </thead>
              <tbody>
                {vehicle?.map((v) => (
                  <tr key={v.vehicle_id}>
                    <td>{v.vehicle_year}</td>
                    <td>{v.vehicle_make}</td>
                    <td>{v.vehicle_model}</td>
                    <td>{v.vehicle_tag}</td>
                    <td>{v.vehicle_serial}</td>
                    <td>{v.vehicle_color}</td>
                    <td>{v.vehicle_mileage}</td>
                    <td>
                      <button
                        type="button"
                        onClick={() => selectVehicle(v.vehicle_id)}
                      >
                        <FontAwesomeIcon icon={faHandPointer} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        )}
      </div>
    </section>
  );
}

export default Order;
