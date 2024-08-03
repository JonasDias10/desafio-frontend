import { Button } from "@nextui-org/react";
import { Superhero } from "../types/superhero";
import { HeroCard } from "./HeroCard";

type Props = {
  selectedSuperheros: Superhero[];
  handleBattle: () => void;
  clearSelection: () => void;
};

export function SelectedSuperheros({
  selectedSuperheros,
  handleBattle,
  clearSelection,
}: Props) {
  return (
    <div className="mt-8 text-center">
      <h1>Super-Heróis Selecionados</h1>
      <div className="flex flex-row max-w-full overflow-x-auto border border-gray-300 rounded-lg p-2 space-x-2">
        {selectedSuperheros.map((item) => (
          <div
            key={item.id}
            className="flex items-center p-2 border-b border-gray-200 last:border-b-0 min-w-[150px]"
          >
            <HeroCard key={item.id} superhero={item} />
          </div>
        ))}
      </div>

      <div className="flex gap-2 justify-center items-center mt-4">
        <Button
          color="primary"
          disabled={selectedSuperheros.length < 2}
          onClick={handleBattle}
        >
          Iniciar Batalha
        </Button>
        <Button color="secondary" onClick={clearSelection}>
          Limpar Lista
        </Button>
      </div>
    </div>
  );
}
