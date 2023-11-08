import React, { useEffect, useState } from 'react';

import ManageCart from './ManageCart';
import { ToastContainer, toast } from 'react-toastify';

const ManageServices = () => {
    const [bookings, setBookings] = useState([]);

    const url = (`https://b8a11-career-maker-server.vercel.app/services`);
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setBookings(data))
    }, [url])

    // handle delete
    const handleDelete = (id) => {
        const proceed = toast('Are you sure you want to delete');
        if (proceed) {
            fetch(`https://b8a11-career-maker-server.vercel.app/services/${id}`, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        toast('Deleted successfully')
                        const remaining = bookings.filter(booking => booking._id !== id);
                        setBookings(remaining)
                    }
                })
        }
    }
    return (
        <div>
            <div><h3>Services : {bookings.length}</h3></div>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th className='text-2xl text-green-500 font-semibold'>Service Picture</th>
                            <th className='text-2xl text-green-500 font-semibold'>Service Name</th>
                            <th className='text-2xl text-green-500 font-semibold'>Service Area</th>
                            <th className='text-2xl text-green-500 font-semibold'>Price</th>
                            <th className='text-2xl text-green-500 font-semibold'>Update</th>
                            <th className='text-2xl text-red-500 font-semibold'>Delete</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings.map(booking => <ManageCart booking={booking} key={booking._id}
                                handleDelete={handleDelete}
                            ></ManageCart>)
                        }


                    </tbody>


                </table>
            </div>
            <ToastContainer></ToastContainer>
        </div>

    );
};

export default ManageServices;