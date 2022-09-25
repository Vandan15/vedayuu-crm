import React from 'react'
import Header from '../components/Header'
import DataTable from '../components/Tables/DataTable'

export default function customer() {
  return (
    <div className='d-flex'>
      <Header />
      <DataTable
        title={"Active Customers (10)"}
        type="Customer"
        header={["NAME", "EMAIL", "SOURCE", "LOCATION"]}
        data={[
          {
            name: "ABC",
            email: "test@gmail.com",
            source: "WEB-SITE",
            location: "DELHI, IN"
          },
          {
            name: "XYZ",
            email: "test@gmail.com",
            source: "WEB-SITE",
            location: "DELHI, IN"
          }
        ]} />
    </div>
  )
}
