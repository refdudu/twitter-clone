import React from 'react';
import Feed from '../Feed';

import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  CakeIcon,
  Followage,
  EditButton,
} from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>
      <ProfileData>
        <EditButton outlined>Editar perfil</EditButton>
        <h1>Renan Fischer</h1>
        <h2>@renan_fischer_</h2>
        <p>
          developer <br />
          <a href="http://instagram.com/renan.fischer">
            http://instagram.com/renan.fischer
          </a>
          😛
        </p>
        <ul>
          <li>
            <LocationIcon />
            Três de Maio
          </li>
          <li>
            <CakeIcon />
            Nascido(a) em 12 de agosto de 2003
          </li>
        </ul>
        <Followage>
          <span>
            <strong>99</strong> Seguindo
          </span>
          <span>
            <strong>999</strong> Seguidores
          </span>
        </Followage>
      </ProfileData>
      <Feed />
    </Container>
  );
};

export default ProfilePage;
