import React from 'react';
import { Paragraph } from '../../atoms';
import { Link } from 'react-router-dom';
import { COLORS } from '../../../constants/colors';

import termsES from '../../../assets/terms-conditions/Terminos_y_condiciones.pdf';
import termsEN from '../../../assets/terms-conditions/Terms_and_conditions.pdf';
import minorES from '../../../assets/terms-conditions/Política_para_el_Registro_de_Menores_de_Edad.pdf';
import minorEN from '../../../assets/terms-conditions/Policy_for_the_Registration_of_Minors.pdf';
import manualBourbon from '../../../assets/terms-conditions/Manual_de_alojamiento_Bourbon_-_Hoteles_Finca_del_Café.pdf';
import manualTypica from '../../../assets/terms-conditions/Manual_de_alojamiento_Typica_-_Hoteles_Finca_Del_Café.pdf';

export const TermsConditions: React.FC = () => {
  return (
    <div
      style={{
        display: 'flex',
        padding: '6rem 3rem',
        flexDirection: 'column',
        color: COLORS.PEARL_BLACK,
      }}
    >
      <Paragraph text="Terminos y condiciones" style={{ marginTop: '2rem' }} />
      <Link to={termsES} target="_blank">
        ES
      </Link>
      <Link to={termsEN} target="_blank">
        EN
      </Link>
      <Paragraph
        text="Política para el registro de menores"
        style={{ marginTop: '2rem' }}
      />
      <Link to={minorES} target="_blank">
        ES
      </Link>
      <Link to={minorEN} target="_blank">
        EN
      </Link>
      <Paragraph
        text="Manual de alojamiento Bourbon"
        style={{ marginTop: '2rem' }}
      />
      <Link to={manualBourbon} target="_blank">
        EN/ES
      </Link>
      <Paragraph
        text="Manual de alojamiento Typica"
        style={{ marginTop: '2rem' }}
      />
      <Link to={manualTypica} target="_blank">
        EN/ES
      </Link>
    </div>
  );
};
