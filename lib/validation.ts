import { z } from "zod";

export const UserFormValidation = z.object({
  name: z
    .string()
    .min(2, "O nome deve possuir no mínimo 2 caracteres")
    .max(50, "O nome deve possuir no máximo 50 caracteres"),
  email: z.string().email("E-mail inválido"),
  phone: z
    .string()
    .refine(
      (phone) => /^\+\d{10,15}$/.test(phone),
      "Número de telefone inválido"
    ),
});

export const PatientFormValidation = z.object({
  name: z
    .string()
    .min(2, "O nome deve possuir no mínimo 2 caracteres")
    .max(50, "O nome deve possuir no máximo 50 caracteres"),
  email: z.string().email("E-mail inválido"),
  phone: z
    .string()
    .refine(
      (phone) => /^\+\d{10,15}$/.test(phone),
      "Número de telefone inválido"
    ),
  birthDate: z.coerce.date(),
  gender: z.enum(["Masculino", "Feminino", "Outro"]),
  address: z
    .string()
    .min(5, "O endereço deve possuir no mínimo 5 caracteres")
    .max(500, "O endereço deve possuir no máximo 500 caracteres"),
  occupation: z
    .string()
    .min(2, "A profissão deve possuir no mínimo 2 caracteres")
    .max(500, "A profissão deve possuir no máximo 500 caracteres"),
  emergencyContactName: z
    .string()
    .min(2, "O nome do contato deve possuir no mínimo 2 caracteres")
    .max(50, "O nome do contato deve possuir no máximo 50 caracteres"),
  emergencyContactNumber: z
    .string()
    .refine(
      (emergencyContactNumber) => /^\+\d{10,15}$/.test(emergencyContactNumber),
      "Número de telefone inválido"
    ),
  primaryPhysician: z.string().min(2, "Selecione pelo menos um médico"),
  insuranceProvider: z
    .string()
    .min(2, "O plano de saúde deve possuir no mínimo 2 caracteres")
    .max(50, "O plano de saúde deve possuir no máximo 50 caracteres"),
  insurancePolicyNumber: z
    .string()
    .min(2, "O número do plano de saúde deve possuir no mínimo 2 caracteres")
    .max(50, "O número do plano de saúde deve possuir no máximo 50 caracteres"),
  allergies: z.string().optional(),
  currentMedication: z.string().optional(),
  familyMedicalHistory: z.string().optional(),
  pastMedicalHistory: z.string().optional(),
  identificationType: z.string().optional(),
  identificationNumber: z.string().optional(),
  identificationDocument: z.custom<File[]>().optional(),
  treatmentConsent: z
    .boolean()
    .default(false)
    .refine((value) => value === true, {
      message: "Você precisa aceitar receber o tratamento",
    }),
  disclosureConsent: z
    .boolean()
    .default(false)
    .refine((value) => value === true, {
      message:
        "Você precisa aceitar compatilhar informações sobre sua saúde para fins de tratamento",
    }),
  privacyConsent: z
    .boolean()
    .default(false)
    .refine((value) => value === true, {
      message: "Você precisa aceitar os termos da política de privacidade.",
    }),
});

export const CreateAppointmentSchema = z.object({
  primaryPhysician: z.string().min(2, "Selecione pelo menos um médico"),
  schedule: z.coerce.date(),
  reason: z
    .string()
    .min(2, "O motivo deve possuir no mínimo 2 caracteres")
    .max(500, "O motivo deve possuir no máximo 500 caracteres"),
  note: z.string().optional(),
  cancellationReason: z.string().optional(),
});

export const ScheduleAppointmentSchema = z.object({
  primaryPhysician: z.string().min(2, "Selecione pelo menos um médico"),
  schedule: z.coerce.date(),
  reason: z.string().optional(),
  note: z.string().optional(),
  cancellationReason: z.string().optional(),
});

export const CancelAppointmentSchema = z.object({
  primaryPhysician: z.string().min(2, "Selecione pelo menos um médico"),
  schedule: z.coerce.date(),
  reason: z.string().optional(),
  note: z.string().optional(),
  cancellationReason: z
    .string()
    .min(2, "O motivo deve possuir no mínimo 2 caracteres")
    .max(500, "O motivo deve possuir no máximo 500 caracteres"),
});

export function getAppointmentSchema(type: string) {
  switch (type) {
    case "create":
      return CreateAppointmentSchema;
    case "cancel":
      return CancelAppointmentSchema;
    default:
      return ScheduleAppointmentSchema;
  }
}
