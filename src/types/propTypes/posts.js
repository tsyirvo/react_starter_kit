import { arrayOf, shape, number, string } from 'prop-types';

export const post = shape({
  userId: number.isRequired,
  id: number.isRequired,
  title: string.isRequired,
  body: string.isRequired
});

export const postsList = arrayOf(post);
