import { Button } from "@/components/ui/button";

const AffiliateCTA = () => {
  return (
    <section className="bg-[#032B4B] text-white py-4 md:py-16 md:px-6 flex items-center">
      <div className="max-w-5xl w-full mx-auto flex flex-col md:flex-row items-center md:items-center justify-between gap-2">


        <div className="flex-1 min-w-0">
          <p className="text-2xl md:text-3xl font-light text-gray-200 leading-relaxed text-center md:text-left">
            Sign up for the DiziShore affiliate program now and start earning today!
          </p>
        </div>


        <Button className="bg-white text-blue-600 text-sm md:text-md font-bold px-10 md:px-14 mt-0 py-4 md:py-6 rounded-full shadow-md hover:bg-gray-200 transition self-center md:self-center md:ml-6">
          Sign Up Now
        </Button>

      </div>
    </section>
  );
};

export default AffiliateCTA;
