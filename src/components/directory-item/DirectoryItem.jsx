import React from "react";
import {
  DirectoryItemContainer,
  BackgroundImage,
  Body,
} from "./DirectoryItem.styles";
import { useNavigate } from "react-router-dom";

export default function CategoryItem({ category }) {
  const { imageUrl, title, route } = category;
  const navigate = useNavigate();

  const onNavigateHandler = () =>  navigate(route);

  return (
    <DirectoryItemContainer onClick={onNavigateHandler}>
      <BackgroundImage imageUrl={imageUrl} />
      <Body>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </DirectoryItemContainer>
  );
}
