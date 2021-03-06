// import { GetServerSideProps } from "next";
import ServiceCard from "../components/ServiceCard";
import { services } from "../data";

const index = () => {
  console.log(services);
  return (
    <div className='flex flex-col flex-grow px-6 pt-1'>
      <h5 className='my-3 font-medium'>
        I am a soon-to-be freshly minted Computer Science graduate from Oregon
        State University coupled with professional experience in the United
        States Navy, encompassing 9+ years of complex problem solving and
        leadership experience. I have exemplified my keen ability to
        troubleshoot difficult engineering problems, collaborate on teams, and
        utilize OOP and web programming at an expert level.
      </h5>
      <div className='flex-grow p-4 mt-5 bg-gray-400 dark:bg-dark-100' style={{marginLeft:'-1.5rem', marginRight:'-1.5rem'}}>
        <h6 className='my-3 text-xl font-bold tracking-wide'>What I Offer</h6>
        <div className='grid gap-6 lg:grid-cols-2'>
          {
            services.map(service => (
              <div className='bg-gray-200 rounded-lg dark:bg-dark-200 lg:col-span-1'>
              <ServiceCard service={service} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default index;
