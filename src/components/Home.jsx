import React from 'react';

const Home = () => {
    const handleInput = (event) => {
        event.preventDefault();
        const form = event.target;
        const formData = new FormData(form);
       const data = Object.fromEntries(formData.entries());
        console.log("Form Data:", data);
    };
    return (
        <div>
            <form onSubmit={handleInput} className='w-1/2 mx-auto mt-10'>


                <h2 className='text-7xl font-extrabold'>Input all the Information </h2>
            <input  name='name' type="text" placeholder="Name" className="input" />
            <br />
            <input name='id'  type="text" placeholder="Id" className="input input-lg" /> 
            <br />
            <input  name='age' type="text" placeholder="Age" className="input input-lg" />
            <br />
            <input type="text" placeholder="City" className="input input-lg" />
            <br />
            <input name='country' type="text" placeholder="Country" className="input input-lg" />
            <br />
            <input name='textBox' type="text" placeholder="Large" className="input input-lg" />
            <br />

            <input type="submit" value="Submit" className="btn" />
            </form>
            
           
        </div>
    );
};

export default Home;