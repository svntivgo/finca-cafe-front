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
        <Text text="Adultos" />
        <Text text={props.adult} />
        <Button
          colors={COLORS.GREEN}
          font={COLORS.GOLD}
          text="+"
          onCLick={() => props.setAdult(+1)}
          margin="0 1rem 0 0"
        />
        <Button
          colors={COLORS.GREEN}
          font={COLORS.GOLD}
          text="-"
          onCLick={() => props.setAdult(-1)}
        />
      </div>
      <div>
        <Text text="Niños" />
        <Text text={props.minor} />
        <Button
          colors={COLORS.GREEN}
          font={COLORS.GOLD}
          text="+"
          onCLick={() => props.setMinor(+1)}
          margin="0 1rem 0 0"
        />
        <Button
          colors={COLORS.GREEN}
          font={COLORS.GOLD}
          text="-"
          onCLick={() => props.setMinor(-1)}
          margin="0 1rem 0 0"
        />
      </div>
      <Button
        colors={COLORS.GREEN}
        font={COLORS.GOLD}
        text="Aceptar"
        onCLick={() => props.close()}
        margin="1rem 0"
      />
    </div>
  );
};
