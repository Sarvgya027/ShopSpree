
import create from "zustand";

interface UseStoreModalStore {
  isOpen: boolean;
  onOpen: () => void; // Corrected return type
  onClose: () => void; // Corrected return type
}

export const useStoreModal = create<UseStoreModalStore>((set) => ({ // Corrected interface name
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

