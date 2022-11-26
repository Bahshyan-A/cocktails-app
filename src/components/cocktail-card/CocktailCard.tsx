import React from 'react';
import { CocktailCardProps } from './ICocktailCard';
import { Card } from 'antd';

const { Meta } = Card;

export const CocktailCard = ({name, id, imgURL, category, size = 240}: CocktailCardProps) => {
  return (
    <Card
    hoverable
    style={{ width: size }}
    cover={<img alt="example" src={imgURL} />}
  >
    <Meta title={name} description={category} />
  </Card>
  )
}
