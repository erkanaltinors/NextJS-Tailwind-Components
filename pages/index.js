import Head from 'next/head'
import Image from 'next/image'
import { Result } from 'postcss'
import Card from '../components/cards/Card'
import Section from '../components/layouts/Section'
import Container from '../components/layouts/Container'
import Grid from '../components/layouts/Grid'

 function Home({details}) {
  return (
    <>
          <Section spacing="large" background="secondary">
            <Container align="center">
              <Grid classes="flex gap-6 wrap -ml-4 -mr-4">
        {
          details.map(detail => {
            return (
              <Card image="https://dummyimage.com/300x200/8921de/fff" key={detail.SortOrder} layout="responsive" title={detail.Name} width="300" height="200" detail={detail.Icerik} label={detail.Tarih} url="test" />
            )
          })
        }
          </Grid>
        </Container>
          </Section>
    </>
  )
}
export default Home

export async function getStaticProps(){
  const response = await fetch('http://corporate.lcwaikiki.v2.api.dev.clockwork.ist/')
  let data = await response.json()
  return {
    props: {
      details: data.news
    }
  }
}