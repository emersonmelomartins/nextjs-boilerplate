import * as S from './styles';

export function Main({
  title = 'React Avançado',
  description = 'Typescript, ReactJS, NextJS, Styled-Components',
  variant = 'primary',
}) {
  return (
    <S.Wrapper variant={variant}>
      <S.Logo
        src="/img/logo.svg"
        alt="Imagem de um átomo e React Avançado escrito ao lado."
      />
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
      <S.Illustration
        src="/img/hero-illustration.svg"
        alt="Um desenvolvedor de frente para uma tela com código."
      />
    </S.Wrapper>
  );
}
