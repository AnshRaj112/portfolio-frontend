import React from "react";

const Landing: React.FC = () => {
  return (
    <div className="relative w-screen h-screen bg-gradient-to-t from-[#1D1340] via-[#2C1D62] to-[#4B31A6] border border-black overflow-hidden">
      {/* Blurred Gradient Background Element */}
      <div className="absolute w-[617.33px] h-[1539.01px] rotate-[-58deg] opacity-50 bg-[radial-gradient(circle_at_243.2%_70.73%,white_0%,#8851FF_100%)] blur-[250px]"></div>

      {/* SVG Background Shape */}
      <div className="absolute top-0 left-0">
        <svg
          width="889"
          height="624"
          viewBox="0 0 889 624"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_d_114_31)">
            <path
              d="M73.2921 17.1111L33.6966 44.4889V119.778L4 133.467V503.067L23.7978 509.911V595.467H122.787L162.382 616H296.017L325.713 595.467H489.045L513.792 602.311H835.506L855.303 574.933V468.844L885 455.156V82.1333L855.303 68.4444V44.4889L820.657 30.8H741.466L706.82 0H617.73L583.084 30.8H444.5L434.601 44.4889H211.876L192.079 17.1111H73.2921Z"
              fill="#1D1340"
            />
            <path
              d="M75.3373 41.5116L35 65.4419V530.372L171.139 609H266.94L297.193 588.488H811.494L836.705 561.14V465.419L872 451.744V96.2093L836.705 85.9535V55.186L811.494 41.5116H720.735L695.524 21H624.934L599.723 41.5116H75.3373Z"
              fill="#A480F2"
            />
          </g>
          <defs>
            <filter
              id="filter0_d_114_31"
              x="0"
              y="0"
              width="889"
              height="624"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_114_31"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_114_31"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      </div>

      {/* Welcome Text */}
      <div className="absolute top-1/4 left-10">
      <h1 className="text-[54.69px] font-medium font-[Poppins] text-white">
          Welcome
        </h1>
        <h2 className="text-[54.69px] font-medium font-[Poppins] text-[#1D1340]">
          To My Universe
        </h2>
        
      </div>

      {/* Description */}
      <p className="absolute top-1/3 left-10 text-white text-[20px] leading-[30px] font-[Poppins] font-medium w-[722px]">
        Lorem ipsum dolor sit amet consectetur. Cras vitae volutpat venenatis
        tristique volutpat velit. Aliquet tellus rutrum et blandit rhoncus
        imperdiet libero sed nisl. Hendrerit aliquet cras ipsum eget ultricies.
        Sed massa sit id ultrices in. Facilisi amet odio ultricies viverra leo
        in id orci. Fermentum orci interdum eget ullamcorper sed. Felis sit
        lorem id et.
      </p>

      {/* Download CV Button */}
      <div className="absolute top-2/3 left-10">
        <button className="w-[263.24px] h-[63.93px] bg-gradient-to-r from-[#23143F] to-[#C02828] rounded-[15.4px] text-white text-[24.10px] font-medium font-[Poppins]">
          Download CV
        </button>
      </div>

      {/* Floating Stars */}
      <div className="absolute bottom-10 right-10 transform rotate-180">
        <div className="w-[4.83px] h-[4.83px] bg-[#D9D9D9] opacity-50 blur-[10px] rounded-full"></div>
        <div className="w-[4.83px] h-[4.83px] bg-[#D9D9D9] blur-[10px] rounded-full"></div>
        <div className="w-[4.83px] h-[4.83px] bg-[#D9D9D9] blur-[10px] rounded-full"></div>
        <div className="w-[2.42px] h-[2.42px] bg-[#D9D9D9] opacity-50 blur-[5px] rounded-full"></div>
        <div className="w-[2.42px] h-[2.42px] bg-[#D9D9D9] opacity-50 blur-[5px] rounded-full"></div>
        <div className="w-[2.42px] h-[2.42px] bg-[#D9D9D9] blur-[5px] rounded-full"></div>
        <div className="w-[4.83px] h-[4.83px] bg-[#D9D9D9] blur-[10px] rounded-full"></div>
      </div>
    </div>
  );
};

export default Landing;
