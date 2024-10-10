import StatCard from "@/components/stat-card";
import Image from "next/image";
import Link from "next/link";

const Admin = () => {
  return (
    <div className="mx-auto flex max-w-7xl flex-col space-y-14">
      <header className="admin-header">
        <Link href="/" className="cursor-pointer">
          <Image
            src="/assets/icons/logo-full.svg"
            alt=""
            height={32}
            width={162}
            className="h-8 w-fit"
          />
        </Link>

        <p className="text-16-semibold">Painel de administração</p>
      </header>

      <main className="admin-main">
        <section className="w-full space-y-4">
          <h1 className="header">Bem vindo 👋</h1>
          <p className="text-dark-700">
            Comece o dia gerenciando as consultas.
          </p>
        </section>

        <section className="admin-stat">
          <StatCard
            type="appointments"
            count={5}
            label="Consultas agendadas"
            icon="/assets/icons/appointments.svg"
          />

          <StatCard
            type="pending"
            count={10}
            label="Consultas pendentes"
            icon="/assets/icons/pending.svg"
          />

          <StatCard
            type="cancelled"
            count={2}
            label="Consultas canceladas"
            icon="/assets/icons/cancelled.svg"
          />
        </section>
      </main>
    </div>
  );
};

export default Admin;
