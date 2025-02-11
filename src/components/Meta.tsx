import Head from 'next/head'

type MetaProps = {
  title: string
  description: string
  keywords: string
}

const Meta: React.FC<MetaProps> = ({ title, description, keywords }) => (
  <Head>
    <meta charSet="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="keywords" content={keywords} />
    <meta name="description" content={description} />
    <title>{title}</title>
  </Head>
)

export default Meta
