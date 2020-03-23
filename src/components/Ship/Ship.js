import React from 'react';
import { useForm } from 'react-hook-form';
import './Ship.css'
import { useAuth } from '../Login/useAuth';

const Ship = () => {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => { 
        console.log(data) 
    }
    const auth = useAuth();

    //console.log(watch('example')) 

    return (

        <form className="Ship-form" onSubmit={handleSubmit(onSubmit)}>

            
            <input name="name" defaultValue={auth.user.name} ref={register({ required: true })} placeholder="name"/>
            {errors.name && <span className="error">Name is required</span>}
            
            <input name="email" defaultValue={auth.user.email} ref={register({ required: true })} placeholder="email"/>
            {errors.email && <span className="error">Email is required</span>}
            
            <input name="addressLine1" ref={register({ required: true })} placeholder="Address"/>
            {errors.addressLine1 && <span className="error">Adress is required</span>}
            <input name="addressLine2" ref={register} placeholder="Address"/>
            
            <input name="city" ref={register({ required: true })}  placeholder="City"/>
            {errors.city && <span className="error">City is required</span>}
            
            <input name="country" ref={register({ required: true })} placeholder="Country" />
            {errors.country && <span className="error">Country is required</span>}
            
            <input name="zipCode" ref={register({ required: true })} placeholder="Zip Code" />
            {errors.zipCode && <span className="error">Zip Code is required</span>}

            <input type="submit" />
        </form>
    )

};

export default Ship;