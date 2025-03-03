import Image from "next/image";


const Dashboard = () => {
  return (
    <section className="max-w-5xl mx-auto flex flex-col items-center justify-center">
       <Image
        src="/images/dashboard.jpeg"
        alt="Dizishore Dashboard"
        width={500}
        height={300}
        className="w-11/12 rounded-lg"
        unoptimized
      />
    </section>
  );
}

export default Dashboard;
