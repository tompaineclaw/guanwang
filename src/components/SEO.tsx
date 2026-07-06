import { Helmet } from 'react-helmet-async'

type SEOProps = {
  title: string
  description: string
  path: string                 // 例如 '/about'  -> 拼成完整 canonical
  ogType?: 'website' | 'article'
  image?: string               // 默认 '/og-cover.jpg'
  noindex?: boolean
}

const SITE_NAME = '建峰亿腾科技'
const SITE_URL = 'https://jianfengyiteng.com.cn'
const DEFAULT_IMAGE = '/og-cover.jpg'

export default function SEO({
  title,
  description,
  path,
  ogType = 'website',
  image = DEFAULT_IMAGE,
  noindex = false,
}: SEOProps) {
  const fullUrl = `${SITE_URL}${path}`
  const imageUrl = image.startsWith('http') ? image : `${SITE_URL}${image}`
  const fullTitle = title.includes(SITE_NAME) ? title : `${title} · ${SITE_NAME}`

  const orgJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    alternateName: 'JianfengYiteng Tech',
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    description: '建峰亿腾科技专注 OPC 一人公司孵化，提供认知培训、公司注册、AI 工具栈、私域社群、订单对接、财税法务等全流程孵化服务。',
    email: 'ceo@jfyt.com.cn',
    telephone: '+86-15347327999',
    address: { '@type': 'PostalAddress', addressLocality: '湘潭市', addressRegion: '湖南省', streetAddress: '九华经开区创新创业中心2楼' },
    sameAs: [],
  }

  const pageJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: fullTitle,
    url: fullUrl,
    description,
    inLanguage: 'zh-CN',
    isPartOf: { '@type': 'WebSite', name: SITE_NAME, url: SITE_URL },
  }

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {noindex && <meta name="robots" content="noindex,nofollow" />}

      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="zh_CN" />
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />

      <link rel="canonical" href={fullUrl} />
      <link rel="alternate" hrefLang="zh-CN" href={fullUrl} />

      <script type="application/ld+json">{JSON.stringify(orgJsonLd)}</script>
      <script type="application/ld+json">{JSON.stringify(pageJsonLd)}</script>
    </Helmet>
  )
}
