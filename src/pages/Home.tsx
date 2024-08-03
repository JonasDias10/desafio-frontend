import { Pagination } from "@nextui-org/react";
import { SelectedSuperheros } from "../components/SelectedSuperheros";
import { WinnerModal } from "../components/WinnerModal";
import { useSuperheroList } from "../hooks/useSuperheroList";
import { SuperherosList } from "../components/SuperherosList";
import { Loading } from "./Loading";

export function Home() {
  const {
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
  } = useSuperheroList();

  if (isLoading) return <Loading />;
  if (error) return <div>Ocorreu um erro: {error}</div>;

  return (
    <div className="container mx-auto p-4">
      <SuperherosList
        items={items}
        search={search}
        setSearch={setSearch}
        selectedSuperheros={selectedSuperheros}
        handleSelectSuperhero={handleSelectSuperhero}
      />

      <Pagination
        className="mt-4"
        showControls
        size="lg"
        total={pages}
        initialPage={page}
        onChange={(page) => setPage(page)}
      />

      <SelectedSuperheros
        selectedSuperheros={selectedSuperheros}
        handleBattle={handleBattle}
        clearSelection={clearSelectionHeroes}
      />

      <WinnerModal
        isOpen={isOpen}
        onClose={onClose}
        onOpenChange={onOpenChange}
        winner={winner}
      />
    </div>
  );
}
