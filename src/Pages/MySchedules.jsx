import React, { useContext, useEffect, useState } from 'react';
import MyBooking from './MyBooking';
import { AuthContext } from '../provider/AuthProvider';

const MySchedules = () => {
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
                            <th className='text-2xl text-green-500 font-semibold'>Pending</th>
                            <th className='text-2xl text-green-500 font-semibold'>Progress</th>
                            <th className='text-2xl text-green-500 font-semibold'>Completed</th>


                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings.map(booking => <MyBooking booking={booking} key={booking._id}></MyBooking>)
                        }


                    </tbody>


                </table>
            </div>
        </div>

    );
};

export default MySchedules;