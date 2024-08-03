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
              <>
                <HeroCard key={winner.id} superhero={winner} />
                <div className="ml-4">
                  <p className="text-xl font-semibold">
                    Combate: {winner.powerstats.combat}
                  </p>
                  <p className="text-xl font-semibold">
                    Durabilidade: {winner.powerstats.durability}
                  </p>
                  <p className="text-xl font-semibold">
                    Inteligência: {winner.powerstats.intelligence}
                  </p>
                  <p className="text-xl font-semibold">
                    Poder: {winner.powerstats.power}
                  </p>
                  <p className="text-xl font-semibold">
                    Velocidade: {winner.powerstats.speed}
                  </p>
                  <p className="text-xl font-semibold">
                    Força: {winner.powerstats.strength}
                  </p>
                </div>
              </>
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
