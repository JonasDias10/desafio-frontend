import { Image } from "@nextui-org/react";
import { Superhero } from "../types/superhero";

type Props = {
  superhero: Superhero;
  onSelect?: (superhero: Superhero) => void;
  isSelected?: boolean;
};

export function HeroCard({ superhero, onSelect, isSelected }: Props) {
  const handleSelection = () => {
    if (onSelect) onSelect(superhero);
  };

  return (
    <div
      className={`flex relative cursor-pointer ${
        isSelected ? "border-4 border-violet-800" : "border border-gray-300"
      } rounded-lg overflow-hidden`}
      onClick={handleSelection}
    >
      <div className="absolute z-10 bottom-0 w-full text-center">
        <p className="bg-black/60 text-white font-bold rounded-md p-2">
          {superhero.name}
        </p>
      </div>
      <Image
        isZoomed
        className="z-0 w-full h-full"
        src={superhero.images.sm}
        alt={`Image of the superhero ${superhero.name}`}
      />
    </div>
  );
}
