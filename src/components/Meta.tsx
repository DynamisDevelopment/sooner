import Head from 'next/head'
import Script from 'next/script'

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

    <Script src="/js/jquery.min.js" strategy="beforeInteractive" />
    <Script
      src="/vendor/bootstrap/js/bootstrap.bundle.min.js"
      strategy="beforeInteractive"
    />
    <Script
      src="/vendor/bootstrap-select/js/bootstrap-select.min.js"
      strategy="beforeInteractive"
    />
    <Script
      src="/vendor/bootstrap-touchspin/jquery.bootstrap-touchspin.min.js"
      strategy="beforeInteractive"
    />
    <Script
      src="/vendor/counter/counterup.min.js"
      strategy="beforeInteractive"
    />
    <Script
      src="/vendor/counter/waypoints.min.js"
      strategy="beforeInteractive"
    />
    <Script
      src="https://cdn.jsdelivr.net/npm/magnific-popup@1.2.0/dist/jquery.magnific-popup.min.js"
      strategy="beforeInteractive"
    />
    <Script
      src="/vendor/imagesloaded/imagesloaded.pkgd.min.js"
      strategy="beforeInteractive"
    />
    <Script
      src="/vendor/masonry/isotope.pkgd.min.js"
      strategy="beforeInteractive"
    />
    <Script
      src="/vendor/owl-carousel/owl.carousel.min.js"
      strategy="beforeInteractive"
    />
    <Script
      src="https://cdn.jsdelivr.net/npm/swiper@11.2.6/+esm"
      strategy="beforeInteractive"
    />
    <Script
      src="/vendor/scroll/jquery.appear.js"
      strategy="beforeInteractive"
    />
    <Script
      src="/vendor/scroll/jquery.mCustomScrollbar.concat.min.js"
      strategy="beforeInteractive"
    />
    <Script
      src="/vendor/progress-bar/skill.bars.jquery.js"
      strategy="beforeInteractive"
    />
    <Script src="/js/functions.js" strategy="afterInteractive" />

    <title>{title}</title>
  </Head>
)

export default Meta
