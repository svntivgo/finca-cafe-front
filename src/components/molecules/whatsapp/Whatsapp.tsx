import React, { useState } from 'react';
import { Button, Icon, WHATSAPP_BUTTON } from '../../atoms';
import LogoWhatsapp from '../../../assets/whatsapp.png';
import { OptionsContainerStyled, WhatsappContainerStyled } from '..';
import { openNewTab } from '../../../shared/helper/open-new-tab';

export const Whatsapp: React.FC = () => {
  const [show, setShow] = useState(false);
  return (
    <WhatsappContainerStyled>
      <Icon src={LogoWhatsapp} width="24px" onClick={() => setShow(!show)} />
      {show && (
        <OptionsContainerStyled>
          <Button
            style={WHATSAPP_BUTTON}
            text="Hotel / Tour del café"
            onClick={() => {
              openNewTab('https://api.whatsapp.com/send?phone=573183866398');
              setShow(!show);
            }}
          />
          <Button
            style={WHATSAPP_BUTTON}
            text="Mirador de café / eventos"
            onClick={() => {
              openNewTab('https://api.whatsapp.com/send?phone=573178000001');
              setShow(!show);
            }}
          />
        </OptionsContainerStyled>
      )}
    </WhatsappContainerStyled>
  );
};
