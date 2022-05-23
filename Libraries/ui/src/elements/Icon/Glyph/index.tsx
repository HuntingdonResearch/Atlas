import React, { FC } from 'react';
import { GlyphProps } from './props';
import FontAwesomeGlyph, { isFontAwesomeCollection } from './FontAwesome';
import MaterialDesignIconsGlyph, { isMaterialDesignIconsCollection } from './MaterialDesignIcons';

const Glyph: FC<GlyphProps> = (props: GlyphProps) => {
  const { collection }: GlyphProps = props;

  if (isFontAwesomeCollection(collection)) {
    return (
      <FontAwesomeGlyph {...props}/>
    );
  }

  if (isMaterialDesignIconsCollection(collection)) {
    return (
      <MaterialDesignIconsGlyph {...props}/>
    );
  }

  return null;
};

export default Glyph;
