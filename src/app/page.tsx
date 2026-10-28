import { DashboardCard } from "@/components/dashboard/dashboard-card";


  type DashboardCard = {
  title: string;
  total: number;
  description: string;
};

export default function Home() {
  const infos: DashboardCard[] = [
  {
    title: "Veículos",
    total: 0,
    description: "Veículos cadastrados",
  },
  {
    title: "Clientes",
    total: 0,
    description: "Clientes cadastrados",
  },
  {
    title: "Contratos",
    total: 0,
    description: "Contratos ativos",
  },
];

  return (
   
    <div className="bg-indigo-950 text-white min-h-screen  rounded-xl">
     <div className="p-10">
      <h1 className="text-3xl mb-10">FleetManager</h1>

      <h2 className="text-xl">Visão Geral</h2>
      <p className="text-[12px] text-gray-400">Sistema de gestão de locação de veículos</p>

       <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
          {infos.map((inf) => (
            
             <DashboardCard key={inf.title} title={inf.title} total={inf.total} description={inf.description}/>
           

          ))}
        </div>
     </div>
    </div>
     
  );
}
