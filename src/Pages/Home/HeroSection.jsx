import img2 from "../../assets/Images/img2.webp"
import img3 from "../../assets/Images/img3.webp"
import img4 from "../../assets/Images/img4.webp"

const HeroSection = () => {
  return (
    <div className="bg-[#eff4f5] pt-10">
      {/* Top content */}
      <div className="flex flex-col lg:flex-row items-center justify-between  lg:px-20 py-20 gap-10">
        {/* Left - Title and Contact */}
        <div className="flex-1 space-y-6">
          <h1 className="text-5xl lg:text-6xl font-extrabold text-black leading-tight">
            SAWARIYA <br /> INTERIOR 
          </h1>

          <div className="space-y-3 text-[18px] text-black font-medium">
            <div className="flex items-start gap-3">
              <span className="text-[#b2834a] text-2xl">☎</span>
              <span>
                +9100000000
              </span>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-[#b2834a] text-2xl">📍</span>
              <span>
                Bhopal - 462010,
                <br />
                Madhya Pradesh, India
              </span>
            </div>
          </div>
        </div>

        {/* Right - 3 Images */}
        <div className=" relative flex flex-col lg:flex-row items-center lg:items-stretch gap-4">
  {/* Left - Two smaller images stacked */}
  <div className="flex flex-col gap-4 flex-[0.7]">
    <img
      src={img2}
      alt="Interior 1"
      className="rounded-[30px] w-full h-[250px] object-cover"
    />
    <img
      src={img3}
      alt="Interior 2"
      className="rounded-[30px] w-full h-[250px] object-cover"
    />
  </div>

  {/* Right - One tall image */}
  <div className="flex-[0.3]">
    <img
      src={img4}
      alt="Interior 3"
      className="rounded-[60px] w-full h-[520px] object-cover"
    />
  </div>
</div>

      </div>

      {/* Social Icons */}
      <div className="bg-[#eff4f5] py-10 flex justify-center gap-6 ">
        <a href="#" target="_blank" rel="noreferrer">
          <i className="fab fa-facebook text-blue-500 text-5xl"></i>
        </a>
        <a href="#" target="_blank" rel="noreferrer">
          <i className="fab fa-instagram text-pink-500 text-5xl"></i>
        </a>
        <a href="#" target="_blank" rel="noreferrer">
          <i className="fab fa-youtube text-red-500 text-5xl"></i>
        </a>
        <a href="#" target="_blank" rel="noreferrer">
          <i className="fab fa-google text-yellow-500 text-5xl"></i>
        </a>
      <hr  className="bg-red-900"/>
      </div>
      
    </div>
  );
};

export default HeroSection;
