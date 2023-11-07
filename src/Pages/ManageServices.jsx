import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import ManageCart from './ManageCart';

const ManageServices = () => {
    const { user } = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);


    const url = (`http://localhost:5000/booking?email=${user?.email}`);
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setBookings(data))
    }, [url])


    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th className='text-2xl text-green-500 font-semibold'>Service Name</th>
                            <th className='text-2xl text-green-500 font-semibold'>Date</th>
                            <th className='text-2xl text-green-500 font-semibold'>Address</th>
                            <th className='text-2xl text-green-500 font-semibold'>Update</th>
                            <th className='text-2xl text-red-500 font-semibold'>Delete</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings.map(booking => <ManageCart booking={booking} key={booking._id}></ManageCart>)
                        }


                    </tbody>


                </table>
            </div>
        </div>

    );
};

export default ManageServices;