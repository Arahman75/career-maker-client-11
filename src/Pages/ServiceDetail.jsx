import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';

const ServiceDetail = () => {
    const { user } = useContext(AuthContext)
    const service = useLoaderData({});
    // console.log(service);

    const handleAddBooking = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = user?.email;
        const price = form.price.value;
        const address = form.address.value;
        const date = form.date.value;
        const serviceName = form.serviceName.value;
        const booking = {
            name,
            serviceName,
            address,
            email,
            date,
            price
        }
        // console.log(booking);
        fetch('https://b8a11-career-maker-server.vercel.app/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.insertedId) {
                    toast('booking added successfully')
                }
            })
    }

    return (
        <div className='mt-6'>
            <h3 className='text-center text-4xl font-bold mb-4'>Service Details of : {service.name}</h3>
            <div className=''>
                <h3 className='text-center text-2xl font-bold mb-4 pt-4'>Service Provider Name : {user?.displayName}</h3>
                <div className='flex justify-center items-center mb-4'>
                    <img src={user?.photoURL} alt="user-img" className='w-24 h-24 rounded-lg mr-4' />
                    <h3 className='text-xl font-semibold'>Location : {service?.serviceArea || 'Bangladesh'}</h3>
                </div>

            </div>

            <div className="card card-compact bg-base-100 shadow-xl w-1/2 mx-auto">
                <figure><img src={service.img} alt="Shoes" className='h-80 w-full' /></figure>
                <div className="card-body">
                    <h2 className="card-title text-3xl">Service Name : {service.name}</h2>
                    <h3 className='text-xl font-semibold'>Price : ${service.price}</h3>
                    <div className='flex items-center'>
                        <img src={user?.photoURL} alt="user-img" className='w-16 h-16 rounded-full mr-4' />
                        <h3 className='text-xl font-bold'>{user?.displayName}</h3>
                    </div>
                    <p className='text-lg'>{service.description}</p>
                    <div className="card-actions justify-center">

                        {/* Open the modal using document.getElementById('ID').showModal() method */}
                        <button className="btn" onClick={() => document.getElementById('my_modal_5').showModal()}>Book Now</button>
                        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                            <div className="modal-box">
                                <form onSubmit={handleAddBooking}>
                                    <div className="form-control w-full max-w-xs">
                                        <label className="label">
                                            <span className="label-text">Service Name</span>
                                        </label>
                                        <input type="text" name='serviceName' placeholder="Service Name" defaultValue={service?.name} className="input input-bordered w-full max-w-xs" readOnly />
                                    </div>
                                    <div className="form-control w-full max-w-xs">
                                        <label className="label">
                                            <span className="label-text">Name</span>
                                        </label>
                                        <input type="text" placeholder="name" defaultValue={user?.displayName} name='name' className="input input-bordered w-full max-w-xs" readOnly />
                                    </div>
                                    <div className="form-control w-full max-w-xs">
                                        <label className="label">
                                            <span className="label-text">Email</span>
                                        </label>
                                        <input type="text" placeholder="email" defaultValue={user?.email} name='email' className="input input-bordered w-full max-w-xs" readOnly />
                                    </div>
                                    <div className="form-control w-full max-w-xs">
                                        <label className="label">
                                            <span className="label-text">Date</span>
                                        </label>
                                        <input type="date" placeholder="date" name='date' className="input input-bordered w-full max-w-xs" />
                                    </div>
                                    <div className="form-control w-full max-w-xs">
                                        <label className="label">
                                            <span className="label-text">Address</span>
                                        </label>
                                        <input type="text" placeholder="address" name='address' className="input input-bordered w-full max-w-xs" />
                                    </div>
                                    <div className="form-control w-full max-w-xs">
                                        <label className="label">
                                            <span className="label-text">Price</span>
                                        </label>
                                        <input type="text" placeholder="price" defaultValue={service?.price} name='price' className="input input-bordered w-full max-w-xs" readOnly />
                                    </div>
                                    <div className="text-center mt-4">
                                        <input className="btn btn-primary" type="submit" value="Purchase Service" />
                                    </div>
                                </form>

                                <div className="modal-action">
                                    <form method="dialog">
                                        {/* if there is a button in form, it will close the modal */}
                                        <button className="btn">Close</button>
                                    </form>
                                </div>
                            </div>
                        </dialog>
                    </div>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default ServiceDetail;