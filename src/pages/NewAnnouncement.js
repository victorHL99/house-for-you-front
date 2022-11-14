import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import * as S from '../styles/style';

export default function NewAnnouncement() {
  const [loadingAnnouce, setloadingAnnouce] = useState('Publish');
  const [announcement, setAnnoucement] = useState({
    value: '',
    number_house: '',
    description: '',
    area: '',
    bedrooms: '',
    garage: '',
    bathrooms: '',
    phone_number: '',
    address: '',
  });

  function sendAnnoucement(event) {
    event.preventDefault();
    setloadingAnnouce('Sending Announcement');
    console.log(announcement);
  }

  return (
    <div>
      <S.MainPage>
        <S.AuthContainer>
          <h1>New Announcement</h1>
          <S.SignForm onSubmit={sendAnnoucement}>
            <TextField
              id="outlined-basic"
              label="number_house"
              variant="outlined"
              type="number"
              name="number_house"
              data-cy="number_house"
              color="success"
              required
              onChange={e =>
                setAnnoucement({
                  ...announcement,
                  number_house: e.target.value,
                })
              }
            />

            <TextField
              id="outlined-basic"
              label="value"
              variant="outlined"
              type="number"
              name="value"
              data-cy="value"
              color="success"
              required
              onChange={e =>
                setAnnoucement({ ...announcement, value: e.target.value })
              }
            />
            <S.Button type="submit" data-cy="send_announce">
              {loadingAnnouce}
            </S.Button>
          </S.SignForm>
        </S.AuthContainer>
      </S.MainPage>
    </div>
  );
}
