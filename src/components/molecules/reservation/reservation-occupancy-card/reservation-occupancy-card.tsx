import React from 'react';
import { Button, SelectInput } from '../../../atoms';
import { COLORS } from '../../../../constants/colors';
import { Text } from '../../../atoms';
import { ReservationOccupancyCardProps } from './interfaces';
import { MINOR_AGES } from '../../../../constants/minor-ages';
import { useReservation } from '../../../../context';

export const ReservationOccupancyCard: React.FC<
  ReservationOccupancyCardProps
> = (props) => {
  const { setMinorAges, reservation } = useReservation();
  const divsArray = Array.from(
    { length: Number(props.minors) },
    (_, index) => index + 1,
  );

  const childAgeHandler = (index: number, age: number) => {
    const newChildren = [...reservation.minorAges];
    newChildren.map((child) => {
      if (child.index === index) {
        child.age = age;
        return child;
      }
      return child;
    });
    if (!newChildren.find((minor) => minor.index === index)) {
      newChildren.push({ index, age });
    }
    setMinorAges(newChildren);
  };

  const addMinor = () => {
    childAgeHandler(Number(props.minors) + 1, 0);
  };

  const removeMinor = () => {
    const newChildren = [...reservation.minorAges];
    newChildren.pop();
    setMinorAges(newChildren);
  };

  return (
    <div>
      <div>
        <Text text="Adultos" />
        <Text text={props.adults} />
        <Button
          colors={COLORS.GREEN}
          font={COLORS.GOLD}
          text="+"
          onCLick={() => props.setAdults(+1)}
          margin="0 1rem 0 0"
        />
        <Button
          colors={COLORS.GREEN}
          font={COLORS.GOLD}
          text="-"
          onCLick={() => props.setAdults(-1)}
        />
      </div>
      <div>
        <Text text="Niños" />
        <Text text={props.minors} />
        <Button
          colors={COLORS.GREEN}
          font={COLORS.GOLD}
          text="+"
          onCLick={() => {
            addMinor();
            props.setMinors(+1);
          }}
          margin="0 1rem 0 0"
        />
        <Button
          colors={COLORS.GREEN}
          font={COLORS.GOLD}
          text="-"
          onCLick={() => {
            removeMinor();
            props.setMinors(-1);
          }}
          margin="0 1rem 0 0"
        />
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          height: 'auto',
          maxHeight: '250px',
          overflowY: 'auto',
        }}
      >
        {divsArray.map((_num, i) => {
          return (
            <SelectInput
              key={`age_${i}`}
              label={`Edad niño ${i + 1}`}
              options={MINOR_AGES}
              value={
                reservation.minorAges.find((child) => child.index === i + 1)
                  ?.age ?? 0
              }
              onChange={(e) => childAgeHandler(i + 1, e.target.value as number)}
              error={false}
              helperText="string | false | undefined;"
              style={{
                backgroundColor: 'whitesmoke',
                width: '150px',
              }}
            />
          );
        })}
      </div>
      <Button
        colors={COLORS.GREEN}
        font={COLORS.GOLD}
        text="Aceptar"
        onCLick={() => {
          props.close();
        }}
        margin="1rem 0"
      />
    </div>
  );
};
