import styles from "../style";
import { discount, robot } from "../assets";
import GetStarted from "./GetStarted";

const Hero = () => {
  return (
    <section id="home" className={` pt-24 pb-0 bg-[#151515] rounded-t-3xl`}>
      <div className="sm:px-16 px-6 lg:flex justify-between gap-x-10">
        <h1 className="max-w-1/2 flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
          Revolutionizing Crypto and Fintech Products
         </h1>
         <div className="max-w-[500px]">
            <h3 className="text-xl lg:text-2xl">
            Explore the Future of Finance with Innovative Solutions, Seamlessly Bridging Traditional and Digital Economies.
            </h3>
            <div className="text-lg lg:text-xl mt-10">
              <div>
              <span className="text-3xl">58,0000+</span>
              <br/>
Users from the globe
              </div>
            </div>
            <button className="mt-10 lg:text-2xl p-2 px-3 lg:px-6 lg:py-3 border flex items-center space-x-4 rounded-full">
              <span>Unlock Financial Freedom</span>
              <div className="bg-[#E75F00]  w-14 h-14 flex justify-center items-center rounded-full">
              ⤴
              </div>
            </button>
         </div>
      </div>

      <div>
        <img src="/hero.png" alt="" />
      </div>
    </section>
  );
};

/*


<div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">20%</span> Discount For{" "}
            <span className="text-white">1 Month</span> Account
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            The Next <br className="sm:block hidden" />{" "}
            <span className="text-gradient">Generation</span>{" "}
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div>
        </div>

        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
          Payment Method.
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Our team of experts uses a methodology to identify the credit cards
          most likely to fit your needs. We examine annual percentage rates,
          annual fees.
        </p>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={robot} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />

   
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
   
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
*/

export default Hero;
