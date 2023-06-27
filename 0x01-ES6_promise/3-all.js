import { createUser, uploadPhoto } from './utils';

export default function handleProfileSignup() {
  const photo = uploadPhoto();
  const user = createUser();

  return Promise.all([photo, user])
    .then((response) => {
      console.log(
        // eslint-disable-next-line comma-dangle
        `${response[0].body} ${response[1].firstName} ${response[1].lastName}`
      );
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}
