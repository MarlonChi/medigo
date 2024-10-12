"use client";

import { useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";
import AppointmentForm from "./forms/appointment-form";

interface AppointmentModalProps {
  status: "schedule" | "cancel";
  patientId: string;
  userId: string;
  appointment?: any;
}

const AppointmentModal = ({
  status,
  patientId,
  userId,
  appointment,
}: AppointmentModalProps) => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          className={`capitalize ${status === "schedule" && "text-green-500"}`}
        >
          {status === "schedule" ? "Agendar" : "Cancelar"}
        </Button>
      </DialogTrigger>
      <DialogContent className="shad-dialog sm:max-w-md">
        <DialogHeader className="mb-4 space-y-3">
          <DialogTitle className="capitalize">
            {status === "schedule" ? "Agendar consulta" : "Cancelar consulta"}
          </DialogTitle>
          <DialogDescription>
            Por favor preencha os detalhes para{" "}
            {status === "schedule" ? "agendar " : "cancelar "}a consulta
          </DialogDescription>
        </DialogHeader>

        <AppointmentForm
          userId={userId}
          patientId={patientId}
          type={status}
          appointment={appointment}
          setOpen={setOpen}
        />
      </DialogContent>
    </Dialog>
  );
};

export default AppointmentModal;
