import Image from "next/image";
import * as Sentry from "@sentry/nextjs";

import RegisterForm from "@/components/forms/register-form";
import { getUser } from "@/lib/actions/patient.actions";

const Register = async ({ params: { userId } }: SearchParamProps) => {
  const user = await getUser(userId);

  Sentry.metrics.set("user_view_register", user.name);

  return (
    <div className="flex h-screen max-h-screen">
      <section className="remove-scrollbar container">
        <div className="sub-container max-w-[860px] flex-1 flex-col py-10">
          <Image
            src="/assets/icons/logo-full.svg"
            alt="paciente"
            height={1000}
            width={1000}
            className="mb-12 h-10 w-fit"
          />

          <RegisterForm user={user} />

          <p className="copyright py-12">© 2024 MediGo</p>
        </div>
      </section>

      <Image
        src="/assets/images/register-img.png"
        height={1000}
        width={1000}
        alt="paciente"
        className="side-img max-w-[390px]"
      />
    </div>
  );
};

export default Register;
