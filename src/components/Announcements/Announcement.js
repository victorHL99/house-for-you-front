import React from 'react';

import { BiArea, BiBed, BiCar, BiBath } from 'react-icons/bi';
import * as S from './style';

export default function Announcement(props) {
  const { announcement } = props;
  return (
    <S.Announcement>
      <h1>${announcement.value} /month</h1>
      <p>{announcement.description}</p>
      <p>
        Adress: {announcement.address}, {announcement.number_house}
      </p>
      <S.ContainerIcons>
        <div>
          <BiArea size={25} />
          <p>{announcement.area} m²</p>
        </div>
        <div>
          <BiBed size={25} />
          <p>{announcement.bedrooms} bedrooms</p>
        </div>
        <div>
          <BiCar size={25} />
          <p>{announcement.garage}</p>
        </div>
        <div>
          <BiBath size={25} />
          <p>{announcement.bathrooms} bathrooms</p>
        </div>
        <button type="submit" onClick={console.log(announcement.phone_number)}>
          Contact
        </button>
      </S.ContainerIcons>
    </S.Announcement>
  );
}
