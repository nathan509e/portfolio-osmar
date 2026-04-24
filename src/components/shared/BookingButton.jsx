import React from "react";
import { Link } from "react-router-dom";
import { Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function BookingButton({ size = "default", className = "" }) {
  return (
    <Button
      asChild
      size={size}
      className={`bg-primary hover:bg-primary/90 font-body gap-2 ${className}`}
    >
      <Link to="/contato">
        <Calendar className="w-4 h-4" />
        Agendar Consulta
      </Link>
    </Button>
  );
}