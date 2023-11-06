import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';

const AddServices = () => {
    const { user } = useContext(AuthContext)

    const handleAddService = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const img = form.img.value;
        const email = user?.email;
        const price = form.price.value;
        const serviceArea = form.serviceArea.value;
        const serviceName = form.serviceName.value;
        const description = form.description.value;

        const addService = {
            name,
            img,
            serviceName,
            serviceArea,
            email,
            description,
            price: price
        }
        console.log(addService);
        fetch('http://localhost:5000/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addService)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    toast('service add successfully')
                }
            })
    }


    return (
        <div>
            <div className='text-center mb-8'>
                <h3 className='text-4xl font-bold mb-2'>Add Service</h3>
                <p className='text-lg text-black font-semibold'>We are your local dog home boarding <br /> service giving you complete</p>
            </div>
            <form onSubmit={handleAddService}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">User Picture</span>
                        </label>
                        <input type="text" name='userPhoto' defaultValue={user?.photoURL
                        } className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Service Picture</span>
                        </label>
                        <input type="text" name='img' className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Service Name</span>
                        </label>
                        <input type="text" name='serviceName' className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name='name' defaultValue={user?.displayName} className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" defaultValue={user?.email} name="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="text" placeholder='price' name='price' className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Service Area</span>
                        </label>
                        <input type="text" name='serviceArea' placeholder='Service Area' className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <textarea type="text" name='description' placeholder='description' className="input input-bordered" required />
                    </div>
                </div>
                <div className="form-control mt-6">
                    <input className="btn btn-primary btn-block" type="submit" value="Add Service" />
                </div>
            </form>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default AddServices;