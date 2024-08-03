import { useMemo, useState } from "react";
import { fetchMetahumans } from "../services/metahumansService";
import { Powerstats, Superhero } from "../types/superhero";
import { useFetch } from "../hooks/useFetch";
import { useDisclosure } from "@nextui-org/react";

interface UseSuperheroList {
  page: number;
  setPage: (page: number) => void;
  search: string;
  setSearch: (search: string) => void;
  selectedSuperheros: Superhero[];
  clearSelectionHeroes: () => void;
  winner: Superhero | null;
  isOpen: boolean;
  onOpenChange: () => void;
  onClose: () => void;
  isLoading: boolean;
  error: string | null;
  pages: number;
  items: Superhero[];
  handleSelectSuperhero: (superhero: Superhero) => void;
  handleBattle: () => void;
}

export function useSuperheroList(): UseSuperheroList {
  const [page, setPage] = useState<number>(1);
  const [search, setSearch] = useState<string>("");
  const [selectedSuperheros, setSelectedSuperheros] = useState<Superhero[]>([]);
  const [winner, setWinner] = useState<Superhero | null>(null);
  const rowsPerPage = 10;

  const { onOpenChange, isOpen, onClose } = useDisclosure();

  const {
    data: superheros,
    isLoading,
    error,
  } = useFetch<Superhero[]>(fetchMetahumans);

  const pages = useMemo(() => {
    if (!superheros) return 0;
    return Math.ceil(superheros.length / rowsPerPage);
  }, [superheros]);

  const items = useMemo(() => {
    if (!superheros) return [];

    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    if (search) {
      return superheros
        .filter((superhero) =>
          superhero.name.toLowerCase().includes(search.toLowerCase())
        )
        .slice(start, end);
    }

    return superheros.slice(start, end);
  }, [page, rowsPerPage, superheros, search]);

  const handleSelectSuperhero = (superhero: Superhero) => {
    setSelectedSuperheros((prev) => {
      if (prev.some((sh) => sh.id === superhero.id)) {
        return prev.filter((sh) => sh.id !== superhero.id);
      } else {
        return [...prev, superhero];
      }
    });
  };

  const getHeroPower = (hero: Superhero): number => {
    let powerOfHero = 0;

    for (const powerstat in hero.powerstats) {
      if (Object.prototype.hasOwnProperty.call(hero.powerstats, powerstat)) {
        powerOfHero += hero.powerstats[powerstat as keyof Powerstats];
      }
    }

    return powerOfHero;
  };

  const handleBattle = () => {
    const winner = selectedSuperheros.reduce((prevHero, currHero) =>
      getHeroPower(currHero) > getHeroPower(prevHero) ? currHero : prevHero
    );

    setWinner(winner);
    onOpenChange();
  };

  const clearSelectionHeroes = () => {
    setSelectedSuperheros([]);
  };

  return {
    page,
    setPage,
    search,
    setSearch,
    selectedSuperheros,
    clearSelectionHeroes,
    winner,
    isOpen,
    onOpenChange,
    onClose,
    isLoading,
    error,
    pages,
    items,
    handleSelectSuperhero,
    handleBattle,
  };
}
