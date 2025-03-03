import Image from "next/image";


const Dashboard = () => {
  return (
    <section className="flex flex-col items-center justify-center">
       <Image
        src="/images/dashboard.jpeg"
        alt="Dizishore Dashboard"
        width={500} 
        height={300} 
        className="w-3/4 rounded-lg"
      />
    </section>
  );
}

export default Dashboard;
