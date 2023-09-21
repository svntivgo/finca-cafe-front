import React from 'react';
import { Button } from '../../../atoms';
import { COLORS } from '../../../../constants/colors';
import { Text } from '../../../atoms';
import { ReservationOccupancyCardProps } from './interfaces';

export const ReservationOccupancyCard: React.FC<
  ReservationOccupancyCardProps
> = (props) => {
  return (
    <div>
      <div>
        <Text text="Mayores" />
        <Text text={props.adult} />
        <Button
          colors={COLORS.GREEN}
          font={COLORS.GOLD}
          text="+"
          onCLick={() => props.setAdult(+1)}
        />
        <Button
          colors={COLORS.GREEN}
          font={COLORS.GOLD}
          text="-"
          onCLick={() => props.setAdult(-1)}
        />
      </div>
      <div>
        <Text text="Menores" />
        <Text text={props.minor} />
        <Button
          colors={COLORS.GREEN}
          font={COLORS.GOLD}
          text="+"
          onCLick={() => props.setMinor(+1)}
        />
        <Button
          colors={COLORS.GREEN}
          font={COLORS.GOLD}
          text="-"
          onCLick={() => props.setMinor(-1)}
        />
      </div>
      <Button
        colors={COLORS.GREEN}
        font={COLORS.GOLD}
        text="Aceptar"
        onCLick={() => props.close()}
      />
    </div>
  );
};
