import axios from 'axios'
import React, { useEffect, useState } from 'react'
import NavigationBar from './NavigationBar'

const ViewDonor = () => {
       const  [data,changeData]=useState([])
    const fetchData=()=>{
        axios.get("https://host-demo-app.onrender.com/api/courses").then(
            (response)=>{
                changeData(response.data)
            }
        ).catch()
    }

    useEffect(
        ()=>{
            fetchData()
        },[]
    )
  return (
    <div>
        
        <div>
           <NavigationBar />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <div className="row g-3">

                            {
                                data.map( 
                                    (Value,Index)=>{
                                        return(
                                            <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
                                                   <div className="card">
                                               
                                                <div className="card-body">
                                                    <h5 className="card-title">Details</h5>
                                                    <strong>DonorName:</strong>{Value.donor_name}<br />
                                                    <strong>Age:</strong>{Value.age}<br />
                                                    <strong>Gender:</strong>{Value.gender}<br />
                                                    <strong>Blood Group:</strong>{Value.blood_group}<br />
                                                    <strong>Phone:</strong>{Value.phone}<br />
                                                   
                                                    <strong>Email:</strong>{Value.email}<br />
                                                    <strong>City:</strong>{Value.city}<br />
                                                    <strong>Weight:</strong>{Value.weight_kg}<br />
                                                     <strong>Last Donation Date:</strong>{Value.last_donation_date}<br />
                                                    <button className="btn btn-primary">View Details</button>

                                                </div>
                                            </div>

                                            </div>
                                        )
                                    }
                                )
                            }
                            
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ViewDonor