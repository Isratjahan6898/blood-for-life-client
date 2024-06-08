import axios from "axios";
import { useEffect, useState } from "react";


const SearchPage = () => {

    const [bloodGroup, setBloodGroup] = useState('');
    const [district, setDistrict] = useState('');
    const [upazila, setUpazila] = useState('');
    const [donors, setDonors] = useState([]);

    const [districts, setDistricts]= useState([]);

    const [upazilas, setUpazilas]= useState([])

    useEffect(()=>{

        fetch('/districts.json')
        .then(res=>res.json())
        .then(data=> setDistricts(data))
    },[])

    useEffect(()=>{

        fetch('/upazila.json')
        .then(res=>res.json())
        .then(data=> setUpazilas(data))
    },[])

  
    const handleSearch = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/donors`, {
          params: { bloodGroup, district, upazila }
        });
        setDonors(response.data);
      } catch (error) {
        console.error('Error searching for donors:', error);
      }
    };
    return (
        <div>
            <div className="">
            <div className="hero bg-fixed h-[550px] " style={{backgroundImage: 'url(https://i.ibb.co/xXY5DFm/pexels-kirill-dratsevich-237907001-12227661.jpg)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Blood Donors
Critically Needed</h1>
      <p className="mb-5">One blood donation can save as many as three lives. Sustainable and quality blood services play a critical role in the health of a society and in preparing for, and responding to, disasters. </p>
     
    </div>
  </div>
</div>


        </div>


        <div className="my-[80px]">

        <div className="text-center">
      {/* <h1>Search Donors</h1> */}
     

<div>
            <label htmlFor='email' className='block mb-2 text-sm'>
                Blood Group
            </label>
            <select name='bloodGroup' value={bloodGroup} onChange={(e) => setBloodGroup(e.target.value)} className="select select-primary w-full max-w-xs">
                
                <option>A+</option>
                <option>A-</option>
                <option>B+</option>
                <option>B-</option>
                <option>AB+</option>
                <option>AB-</option>
                <option>O+</option>
                <option>O-</option>
            </select>
        </div>
    


          <div>
            <label htmlFor='email'value={district} onChange={(e) => setDistrict(e.target.value)} className='block mb-2 text-sm'>
                Distict
            </label>
            <select name='district' className="select select-primary w-full max-w-xs">
                 
               {
                districts.map(district=>

                    <option key={district.id}>{district.name}</option>
                )
               }

               
            </select>
        </div> 
      
    

        <div>
            <label htmlFor='email' className='block mb-2 text-sm'>
                Upazila
            </label>
            <select name="upazila" value={upazila} onChange={(e) => setUpazila(e.target.value)} className="select select-primary w-full max-w-xs">


                {
                    upazilas.map(upazila=>  <option key={upazila.id}>{upazila.name}</option> )
                }
                
            </select>
        </div> 


        <div>
        <button
        onClick={handleSearch}
           
            className='btn bg-rose-500 my-[10px] rounded-md py-3 text-white'
        >
           Search
        </button>
    </div>
      {/* <button onClick={handleSearch}>Search</button> */}
      <h2 className="text-red-600 font-bold">Donor List</h2>
      {/* <ul>
        {donors.map((donor, index) => (
          <li key={index}>{donor.name} - {donor.bloodGroup} - {donor.district} - {donor.upazila}</li>
        ))}
      </ul> */}

      <div className="flex justify-center my-[30px]">
        {
          donors.map((doner, index)=>       <div className="text-center" key={index}>
            <div className="card w-96 bg-slate-200 shadow-xl">
<div className="card-body">
<h2 className="font-bold text-2xl">{doner.name}</h2>
<p>{doner.bloodGroup}</p>
<p> {doner.district} </p>
<p>{doner.upazila}</p>
</div>
</div>
        </div>
    )
    }
      </div>
    </div>

        </div>
        </div>
    );
};

export default SearchPage;