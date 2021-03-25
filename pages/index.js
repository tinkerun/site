import {Button, Heading, majorScale, Pane, Paragraph, Link} from 'evergreen-ui'

import Layout from '../components/layout'

export default function Home() {
  return (
    <Layout>
      <Pane
        width={1000}
        marginX='auto'
      >
        <Pane
          is='section'
          marginTop={100}
          display='flex'
          justifyContent='space-between'
        >
          <Pane
            textAlign='left'
            width={300}
          >
            <Pane
              is='img'
              src='/tinkerun.svg'
              width={60}
              height={60}
              marginTop={50}
            />

            <Heading
              marginTop={majorScale(3)}
              size={900}
              fontWeight='lighter'
            >
              Tinkerun
            </Heading>

            <Paragraph
              size={500}
              marginTop={majorScale(1)}
              fontWeight='lighter'
            >
              A new way of running <Link href='//github.com/laravel/tinker'>Tinker</Link>. <br/>
              Simplify the Web Artisan's workflow.
            </Paragraph>

            <Button
              is='a'
              marginTop={majorScale(2)}
              appearance='primary'
              height={majorScale(5)}
              href='//github.com/tinkerun/tinkerun/releases/latest'
            >
              Download for macOS
            </Button>
          </Pane>

          <Pane
            flex={1}
          >
            <Pane
              is='img'
              src='/screenshot.png'
              width='100%'
            />
          </Pane>
        </Pane>
      </Pane>
    </Layout>
  )
}
