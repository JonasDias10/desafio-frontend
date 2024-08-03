import { Spinner } from "@nextui-org/react";

export function Loading() {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <Spinner label="Carregando..." size="lg" />
    </div>
  );
}
