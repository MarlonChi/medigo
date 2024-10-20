import Image from "next/image";
import * as Sentry from "@sentry/nextjs";

import AppointmentForm from "@/components/forms/appointment-form";
import { getPatient } from "@/lib/actions/patient.actions";

export default async function NewAppointment({
  params: { userId },
}: SearchParamProps) {
  const patient = await getPatient(userId);

  Sentry.metrics.set("user_view_new-appointment", patient.name);

  return (
    <div className="flex h-screen max-h-screen">
      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[860px] flex-1 justify-between">
          <Image
            src="/assets/icons/logo-full.svg"
            alt="paciente"
            height={1000}
            width={1000}
            className="mb-12 h-10 w-fit"
          />

          <AppointmentForm
            type="create"
            userId={userId}
            patientId={patient.$id}
          />

          <p className="copyright py-12">© 2024 MediGo</p>
        </div>
      </section>

      <Image
        src="/assets/images/appointment-img.png"
        height={1000}
        width={1000}
        alt="Agendamento"
        className="side-img max-w-[390px] bg-bottom"
      />
    </div>
  );
}
