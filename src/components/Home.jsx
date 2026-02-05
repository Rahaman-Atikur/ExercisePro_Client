import React from 'react';

const Home = () => {
    return (
        <div>
            <h2 className='text-7xl font-extrabold'>Input all the Information </h2>
            <input type="text" placeholder="Name" className="input" />
            <br />
            <input type="text" placeholder="Id" className="input input-lg" /> 
            <br />
            <input type="text" placeholder="Age" className="input input-lg" />
            <br />
            <input type="text" placeholder="City" className="input input-lg" />
            <br />
            <input type="text" placeholder="Country" className="input input-lg" />
            <br />
            <input type="text" placeholder="Large" className="input input-lg" />
            <br />

            <input type="submit" value="Submit" className="btn" />
           
        </div>
    );
};

export default Home;