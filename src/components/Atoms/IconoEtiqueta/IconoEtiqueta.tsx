import React from 'react';
import { IconButton, Icon } from '@mui/material';
import Etiqueta from '../Label/Typography';

interface IconoConEtiquetaProps {
  icono: React.ElementType; 
  etiqueta: string;
  color?: string;
  varianteEtiqueta?: 'titulo' | 'texto' | 'subtitulo'; 
}

const IconoConEtiqueta: React.FC<IconoConEtiquetaProps> = ({
  icono: IconoComponent,
  etiqueta,
  color = 'inherit',
  varianteEtiqueta = 'texto', 
}) => {
  return (
    <IconButton sx={{ display: 'flex', alignItems: 'center' }}>
      <Icon component={IconoComponent} fontSize="large" style={{ color }} /> 
      <Etiqueta variante={varianteEtiqueta} texto={etiqueta} />
    </IconButton>
  );
};

export default IconoConEtiqueta;
