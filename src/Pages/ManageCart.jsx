import React from 'react';
import { Link } from 'react-router-dom';

const ManageCart = ({ booking }) => {
    console.log(booking);
    const { img, serviceName, serviceArea, price } = booking;

    return (
        <tr>
            <td>
                <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                        <img src={img} alt="Avatar Tailwind CSS Component" />
                    </div>
                </div>
            </td>
            <td>
                <div className="flex items-center space-x-3">
                    <div>
                        <div className="font-bold">{serviceName}</div>
                    </div>
                </div>
            </td>
            <td>
                {serviceArea}
            </td>
            <td>
                {price}
            </td>

            <th>
                <Link to="">
                    <button className="btn btn-success">Update</button></Link>
            </th>
            <th>
                <button className="btn btn-error">Delete</button>
            </th>
        </tr>
    );
};

export default ManageCart;