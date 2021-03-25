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

            <Pane
              is='a'
              marginTop={majorScale(2)}
              color='white'
              paddingY={majorScale(1)}
              paddingX={majorScale(2)}
              href='//github.com/tinkerun/tinkerun/releases/latest'
              display='inline-block'
              lineHeight={1.6}
              borderRadius={4}
              backgroundImage='linear-gradient(to left, #F08346, #E96969)'
              hoverElevation={3}
              elevation={2}
            >
              Download for macOS
            </Pane>

            <Pane
              marginTop={majorScale(1)}
              is='iframe'
              src="https://ghbtns.com/github-btn.html?user=tinkerun&repo=tinkerun&type=star&count=true"
              frameBorder="0"
              scrolling="0"
              width="150"
              height="20"
              title="GitHub"
            />
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
