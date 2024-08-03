import { Input } from "@nextui-org/react";
import { Superhero } from "../types/superhero";
import { HeroCard } from "./HeroCard";

type Props = {
  items: Superhero[];
  search: string;
  setSearch: (search: string) => void;
  selectedSuperheros: Superhero[];
  handleSelectSuperhero: (superhero: Superhero) => void;
};

export function SuperherosList({
  items,
  search,
  setSearch,
  selectedSuperheros,
  handleSelectSuperhero,
}: Props) {
  return (
    <>
      <div className="flex w-full justify-center mb-4">
        <Input
          placeholder="Buscar Superheróis"
          value={search}
          onValueChange={setSearch}
        />
      </div>

      <div className="grid gap-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {items.map((item) => (
          <div key={item.id} className="flex items-center justify-center">
            <HeroCard
              key={item.id}
              superhero={item}
              onSelect={handleSelectSuperhero}
              isSelected={selectedSuperheros.some((sh) => sh.id === item.id)}
            />
          </div>
        ))}
      </div>
    </>
  );
}
