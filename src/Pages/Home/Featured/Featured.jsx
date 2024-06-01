

const Featured = () => {
    return (
        <div className="mt-[60px] mx-[70px] mb-[30px]">
             <div className='text-center'>
                <p className='text-red-500 mb-[20px]'>---Some Featured---</p>
                <hr className='border-[2px]  ml-[80px] w-[300px] lg:ml-[420px] mb-[20px]' />
                <h1 className='font-bold text-3xl mb-[20px]'>Our Featured</h1>
                <hr className='border-[2px] ml-[80px] w-[300px] lg:ml-[420px] mb-[40px]' />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-[20px]">
                {/* card-1 */}
            <div className="card  hover:translate-y-8 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src="https://i.ibb.co/C8kYwVy/pexels-shvetsa-3845115.jpg" alt="Shoes" className="rounded-xl w-full h-[200px]" />
  </figure>
  <div className="card-body ">
    <h2 className="card-title">Our Impact!</h2>
    <ul className="list-disc">
      <li><span className="font-bold mb-[10px]">Lives Saved:</span>Over 10,000 lives saved and counting!</li>
      <li><span className="font-bold mb-[10px]" >Donor Community:</span>Over 10,000 lives saved and counting!</li>
      <li><span className="font-bold mb-[10px]">Success Stories:</span>Over 10,000 lives saved and counting!</li>
      
    </ul>
    <div className="card-actions">
      <button className="btn bg-red-400 my-[20px] text-white">View Our Impact</button>
    </div>
  </div>
            </div>
              
              {/* card-2 */}

              <div className="card hover:translate-y-8  bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src="https://i.ibb.co/GFfhnBw/pexels-shvetsa-4167541.jpg" alt="Shoes" className="rounded-xl  w-full h-[200px]" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">Become a Hero</h2>
    <ul className="list-disc">
      <li><span className="font-bold mb-[10px]">Milestone Recognition:</span>Earn badges and rewards for your contributions.</li>
      <li><span className="font-bold mb-[10px]" >Hero of the Month:</span>Meet Jane, our Donor of the Month</li>
      <li><span className="font-bold mb-[10px]">Donation Drives:</span>Join us at the next community blood drive.</li>
      
    </ul>
    <div className="card-actions">
      <button className="btn bg-red-400 my-[20px] text-white">View Doner</button>
    </div>
  </div>
            </div>


              {/* card-3 */}

              <div className="card hover:translate-y-8 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src="https://i.ibb.co/bWzh1Gf/pexels-cottonbro-3957987.jpg" alt="Shoes" className="rounded-xl w-full h-[200px]" />
  </figure>
  <div className="card-body ">
    <h2 className="card-title">Join Our Community</h2>
    <ul className="list-disc">
      <li><span className="font-bold mb-[10px]">Volunteer Opportunities:</span>Find out how you can volunteer.</li>
      <li><span className="font-bold mb-[10px]" >Corporate Programs:</span>Get your company involved in saving lives.</li>
      <li><span className="font-bold mb-[10px]">Social Media Spotlight:</span>#DonateLife - Share your story and get featured.</li>
      
    </ul>
    <div className="card-actions">
      <button className="btn bg-red-400 my-[20px] text-white">View Our Volunteer</button>
    </div>
  </div>
            </div>

            </div>
            
        </div>
    );
};

export default Featured;