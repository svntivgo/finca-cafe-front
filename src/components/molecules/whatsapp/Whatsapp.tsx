import React, { useState } from 'react';
import { Button, Icon } from '../../atoms';
import LogoWhatsapp from '../../../assets/whatsapp.png';
import { OptionsContainerStyled, WhatsappContainerStyled } from '..';
import { openNewTab } from '../../../shared/helper/open-new-tab';
import { COLORS } from '../../../constants/colors';

export const Whatsapp: React.FC = () => {
  const [show, setShow] = useState(false);
  return (
    <WhatsappContainerStyled>
      <Icon src={LogoWhatsapp} width="24px" onClick={() => setShow(!show)} />
      {show && (
        <OptionsContainerStyled>
          <Button
            colors={COLORS.PEARL_BLACK}
            text="Hotel / Tour del café"
            font="Poppins"
            fontSize="0.5rem"
            padding="0.25rem 1rem"
            radius="8px"
            margin="0.25rem"
            onCLick={() => {
              openNewTab('https://api.whatsapp.com/send?phone=573183866398');
              setShow(!show);
            }}
          />
          <Button
            colors={COLORS.PEARL_BLACK}
            text="Mirador de café / eventos"
            font="Poppins"
            fontSize="0.5rem"
            padding="0.25rem 1rem"
            radius="8px"
            margin="0.25rem"
            onCLick={() => {
              openNewTab('https://api.whatsapp.com/send?phone=573178000001');
              setShow(!show);
            }}
          />
        </OptionsContainerStyled>
      )}
    </WhatsappContainerStyled>
  );
};
