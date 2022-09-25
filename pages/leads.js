import React from 'react'
import Header from '../components/Header'
import DataTable from '../components/Tables/DataTable'
import { FaEdit } from 'react-icons/fa';

export default function leads() {
  const columns = [
    {
      name: "name",
      label: "Name",
      options: {
        filter: true,
        sort: true,
      }
    },
    {
      name: "email",
      label: "Email",
      options: {
        filter: true,
        sort: true,
      }
    },
    {
      name: "phone",
      label: "Phone",
      options: {
        filter: true,
        sort: true,
      }
    },
    {
      name: "dob",
      label: "Birth Date",
      options: {
        filter: true,
        sort: true,
      }
    },
    {
      name: "current_country",
      label: "Country",
      options: {
        filter: true,
        sort: true,
      }
    },
    {
      name: "additional_info",
      label: "Notes",
      options: {
        filter: true,
        sort: true,
        customBodyRender: (value, tableMeta, updateValue) => {
          return (
            value.notes
          );
        },
      },
    },
    {
      name: "_id",
      label: " ",
      options: {
        filter: false,
        sort: false,
        customBodyRender: value =>
          <button
            className='primary-btn'
            onClick={() => {
              navigate(`/edit-student/${value}`);
            }}>
           Edit
          </button>
      },
    },
  ];
  const options = {
    // filterType: 'checkbox',
    selectableRows: false
  };
  const data = [{
    name:'John David',
    additional_info: {
      notes:'test'
    },
    email:'test@gmail.com',
    phone: '1234567890',
    dob:'09/06/2005',
    current_country:'INDIA'
  }]
  return (
    <div className='d-flex'>
      <Header />
      <DataTable title="Active Leads(0)" type="Leads" data={data} columns={columns} options={options} />
    </div>
  )
}
