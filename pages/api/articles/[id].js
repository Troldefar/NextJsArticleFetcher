import { articles } from '../../../data';

export default function handler({ query: { id } }, res) {
  const filtered = articles.filter(a => a.id === id);
  return res.status(200).json(filtered);
}