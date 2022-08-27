import { useState } from "react";
import logoImg from "../../assets/logo.svg";
import { Container, Content } from "./styles";

export function Header() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
    useState(false);

  function handleOpenNewTransactionModa() {
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModa() {
    setIsNewTransactionModalOpen(false);
  }

  return (
    <Container>
      <Content>
        <img src={logoImg} alt="fin-manager money" />
        <button type="button">Nova transação</button>
      </Content>
    </Container>
  );
}
