import Link from 'next/link';
import { useRouter } from 'next/router';
import Meta from '../../../components/Meta';
import { server} from '../../../config';

const Article = ({ article }) => {
  // const router = useRouter();
  // const { id } = router.query;
  return (
    <>
      <Meta title={article[0].title} />
      <h1>
        { article[0].title }
      </h1>
      <p>
        { article[0].body }
      </p>
      <div></div>
      <Link href='/'>
        Home
      </Link>
    </>
  )
}

export const getStaticProps = async (context) => {
  const res = await fetch(`${server}/api/articles/${context.params.id}`);
  const article = await res.json();
  return {
    props: {
      article
    }
  }
}

export const getStaticPaths = async () => {
  // Get all
  const res = await fetch(`${server}/api/articles/`);
  const articles = await res.json();
  // Map
  const ids = articles.map(article => article.id);
  // Return correct paths
  const paths = ids.map(id => ({
    params: {
      id: id.toString()
    }
  }))
  // Done
  return {
    paths,
    fallback: false
  }
}

export default Article
