import { createContext, useContext } from 'react';
import { ReservationContextType } from '..';

export const ReservationContext = createContext<
  ReservationContextType | undefined
>(undefined);

export function useReservation() {
  const context = useContext<ReservationContextType | undefined>(
    ReservationContext,
  );
  if (!context) {
    throw new Error('useReservation should be used into a ReservationProvider');
  }
  return context;
}
