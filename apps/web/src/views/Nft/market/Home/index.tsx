import styled from 'styled-components'
import { Box, Flex, Heading, LinkExternal, PageHeader, PageSection } from '@pancakeswap/uikit'
import { useTranslation } from '@pancakeswap/localization'
import SectionsWithFoldableText from 'components/FoldableSection/SectionsWithFoldableText'
import { useGetCollections } from 'state/nftMarket/hooks'
import { FetchStatus } from 'config/constants/types'
import PageLoader from 'components/Loader/PageLoader'
import useTheme from 'hooks/useTheme'
import orderBy from 'lodash/orderBy'
import Collections from './Collections'
import Newest from './Newest'
import config from './config'

const Gradient = styled(Box)`
  background: ${({ theme }) => theme.colors.gradientCardHeader};
`

const StyledPageHeader = styled(PageHeader)`
  margin-bottom: -40px;
  padding-bottom: 40px;
`

const StyledHeaderInner = styled(Flex)`
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  text-align: right;
  & div:nth-child(1) {
    order: 1;
  }
  & div:nth-child(2) {
    order: 0;
    margin-bottom: 32px;
    align-self: end;
  }
  ${({ theme }) => theme.mediaQueries.sm} {
    flex-direction: row;
    & div:nth-child(1) {
      order: 0;
    }
    & div:nth-child(2) {
      order: 1;
      margin-bottom: 0;
      align-self: auto;
    }
  }
`

const Home = () => {
  const { t } = useTranslation()
  const { theme } = useTheme()
  const { data: collections, status } = useGetCollections()

  const hotCollections = orderBy(
    collections,
    (collection) => (collection.totalVolumeBNB ? parseFloat(collection.totalVolumeBNB) : 0),
    'desc',
  )

  const newestCollections = orderBy(
    collections,
    (collection) => (collection.createdAt ? Date.parse(collection.createdAt) : 0),
    'desc',
  )

  return (
    <>
      <StyledPageHeader>
        <StyledHeaderInner>
          <div>
            <Heading as="h1" scale="xxl" color="secondary" mb="24px">
              {t('Music Instrument Marketplace')}
            </Heading>
            <Heading scale="lg" color="text">
              {t('Enrich your unique musical instrument collections with Klaytn Smart Chain')}
            </Heading>
          </div>
        </StyledHeaderInner>
      </StyledPageHeader>
      {status !== FetchStatus.Fetched ? (
        <PageLoader />
      ) : (
        <PageSection
          innerProps={{ style: { margin: '0', width: '100%' } }}
          background={theme.colors.background}
          index={1}
          concaveDivider
          dividerPosition="top"
        >
          <Collections
            key="newest-collections"
            title={t('Trending collections')}
            testId="nfts-newest-collections"
            collections={newestCollections}
          />
          <Collections
            key="hot-collections"
            title={t('Hot Collections')}
            testId="nfts-hot-collections"
            collections={hotCollections}
          />
          <Newest />
        </PageSection>
      )}
      <Gradient p="64px 0">
        <SectionsWithFoldableText header={t('FAQs')} config={config(t)} m="auto" />
        <LinkExternal href="https://docs.pancakeswap.finance/contact-us/nft-market-applications" mx="auto" mt="16px">
          {t('Apply to NFT Marketplace!')}
        </LinkExternal>
      </Gradient>
    </>
  )
}

export default Home
