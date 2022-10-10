import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { BiArea, BiBed, BiCar, BiBath } from 'react-icons/bi';
import * as S from './style';

export default function Announcement(props) {
  const token = localStorage.getItem('token');
  const [pictures, setPictures] = useState([]);
  const [showPictures, setShowPictures] = useState(false);
  const { announcement } = props;

  useEffect(() => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    axios
      .get(
        `${process.env.REACT_APP_API_KEY}/pictures/${announcement.id}`,
        config,
      )
      .then(response => {
        setPictures(response.data);
        setShowPictures(true);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  console.log(pictures);

  function renderPictures() {
    return pictures.map(picture => (
      <S.ImageHouse src={picture.photos} alt="Imagem do anúncio" />
    ));
  }

  return (
    <S.Announcement>
      <S.ContainerImage>
        {showPictures ? renderPictures() : <p>Carregando...</p>}
      </S.ContainerImage>
      <h1>${announcement.value} /month</h1>
      <p>{announcement.description}</p>
      <p>
        Address: {announcement.address}, {announcement.number_house}
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
        <button
          type="submit"
          onClick={() => {
            window.open(
              `https://wa.me/55${announcement.phone_number}?text=Hello,%20I'm%20interested%20in%20the%20property%20`,
              '_blank',
            );
          }}
        >
          Tell me
        </button>
      </S.ContainerIcons>
    </S.Announcement>
  );
}
