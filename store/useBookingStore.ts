import { create } from 'zustand';

interface BookingStore {
  isModalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

export const useBookingStore = create<BookingStore>((set) => ({
  isModalOpen: false,
  openModal: () => set({ isModalOpen: true }),
  closeModal: () => set({ isModalOpen: false }),
}));