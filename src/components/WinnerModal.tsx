import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@nextui-org/react";
import { Superhero } from "../types/superhero";
import { HeroCard } from "./HeroCard";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  onOpenChange: (isOpen: boolean) => void;
  winner: Superhero | null;
};

export function WinnerModal({ isOpen, onClose, onOpenChange, winner }: Props) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} onOpenChange={onOpenChange}>
      <ModalContent>
        <ModalHeader className="text-center">
          <h1>O Grande Vencedor da Batalha</h1>
        </ModalHeader>
        <ModalBody>
          <div className="flex w-full justify-center">
            {winner ? (
              <HeroCard key={winner.id} superhero={winner} />
            ) : (
              <h1>Não houve nenhum vencedor, tente novamente.</h1>
            )}
          </div>
        </ModalBody>
        <ModalFooter>
          <Button onClick={onClose}>Fechar</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
