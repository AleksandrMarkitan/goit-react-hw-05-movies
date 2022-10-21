import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const InfoBox = styled.div`
  display: flex;
  padding: 24px;
`;
export const InfoText = styled.div`
  padding-left: 24px;
`;
export const AdditionalInfoBox = styled.div`
  padding: 16px;
  box-shadow: 1px 1px 4px rgba(126, 147, 255, 0.4);
`;

export const InfoLink = styled(NavLink)`
  &.active {
    color: red;
  }
`;
