import styled from 'styled-components';
import background from '../../assets/images/background.png';

export const Card = styled.li`
  padding-bottom: 36px;
  max-width: 380px;
  flex-basis: 100%;
  color: ${p => p.theme.colors.textLight};
  background: ${p => p.theme.colors.backgroundGradient};
  box-shadow: ${p => p.theme.shadows.card};
  border-radius: ${p => p.theme.radii.medium};

  @media screen and (min-width: 768px) {
    flex-basis: calc((100% - 16px) / 2);
  }

  @media screen and (min-width: 1200px) {
    flex-basis: calc((100% - 14px * 2) / 3);
  }
`;

export const Header = styled.header`
  height: 214px;
  /* width: 100%;
  height: 0;
  padding-top: 55%; */
  padding: 20px 20px 18px;
  background-image: url('${background}');
  background-position: 50% 28px;
  background-repeat: no-repeat;
  background-size: auto;
`;

export const AvatarWrapper = styled.div`
  position: relative;
  height: 8px;
  background: ${p => p.theme.colors.backgroundLight};
  box-shadow: ${p => p.theme.shadows.wrapper};
`;

export const OuterCircle = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  background: ${p => p.theme.colors.backgroundLight};
  box-shadow: ${p => p.theme.shadows.avatar};
  border-radius: ${p => p.theme.radii.round};
`;

export const InnerCircle = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: 62px;
  height: 62px;
  background: ${p => p.theme.colors.backgroundDark};
  border-radius: ${p => p.theme.radii.round};
  overflow: hidden;
`;

export const Avatar = styled.img`
  width: 54px;
  height: 54px;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.space[4]}px;
  margin-top: 62px;
  margin-bottom: 26px;
  text-align: center;
`;

export const Text = styled.p`
  text-transform: uppercase;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  width: 196px;
  margin: 0 auto;
  padding: 14px 0;
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes.s};
  text-transform: uppercase;
  background-color: ${p => (p.isActive ? '#5cd3a8' : '#ebd8ff')};
  box-shadow: ${p => p.theme.shadows.button};
  border: ${p => p.theme.borders.none};
  border-radius: ${p => p.theme.radii.normal};
`;
