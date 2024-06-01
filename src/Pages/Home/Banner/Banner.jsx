
const Banner = () => {
    return (
        <div className="">
            <div className="hero h-[550px] " style={{backgroundImage: 'url(https://i.ibb.co/xXY5DFm/pexels-kirill-dratsevich-237907001-12227661.jpg)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Blood Donors
Critically Needed</h1>
      <p className="mb-5">One blood donation can save as many as three lives. Sustainable and quality blood services play a critical role in the health of a society and in preparing for, and responding to, disasters. </p>
      <button className="btn bg-red-400 mr-[30px]">Join as donor</button>
      <button className="btn bg-red-400">Search Donors</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;