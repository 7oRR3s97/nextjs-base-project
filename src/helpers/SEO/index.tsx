import { useTranslation } from 'next-i18next';

export interface Metadata {
  title: string;
  image: string;
  description: string;
  ogType: string;
  url: string;
  page: string;
  locale: string;
  params?: { [key: string]: string | string[] };
}

// TODO: Alterar dados para SEO
const useSeo = (props: Partial<Metadata>) => {
  const { t: userPageT } = useTranslation('seo-user-page');
  const { t: homePageT } = useTranslation('seo-home-page');
  if (props.page === 'user')
    return {
      title: userPageT('title'),
      image:
        'https://assets.website-files.com/613a4aeb1cd38a810f6a1448/61689732f4b0536181967320_Sem-Ti%CC%81tulo-1.png',
      description: userPageT('description'),
      url: `https://isaac.com.br/minhaconta`,
      ogType: 'website',
    };
  return {
    title: homePageT('title'),
    image:
      'https://assets.website-files.com/613a4aeb1cd38a810f6a1448/61689732f4b0536181967320_Sem-Ti%CC%81tulo-1.png',
    description: homePageT('description'),
    url: 'https://isaac.com.br',
    ogType: 'website',
  };
};

export default useSeo;
