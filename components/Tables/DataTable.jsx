import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import MUIDataTable from "mui-datatables";

export default function DataTable(props) {
    return (
        <div className='table-wrapper'>
            <div className='table-header'>
                <div className='d-flex align-items-center justify-content-between'>
                    <h1 className='table-title'>{props.title}</h1>
                    <button className='primary-btn'>{`Add ${props.type}`}</button>
                </div>
                {/* <div className='search-wrapper'>
                    <input type="text" placeholder={`Search ${props.type}`}></input>
                    <FaSearch />
                </div> */}
            </div>
            <div className='mui-data-wrapper'>
                <MUIDataTable
                    // title={props.title}
                    data={props.data}
                    columns={props.columns}
                    options={props.options}
                />
            </div>

        </div >
    )
}
