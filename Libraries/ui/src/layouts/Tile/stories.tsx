import React from 'react';
import Content from '../../elements/Content';
import Image from '../../elements/Image';
import Notification from '../../elements/Notification';
import Subtitle from '../../elements/Subtitle';
import Title from '../../elements/Title';
import Tile from '../../layouts/Tile';
import Box from '../../elements/Box';
import Paragraph from '../../elements/Paragraph';

export default {
  component: Tile,
  title: 'Layouts/Tile'
};

export const Simple = () => (
  <Tile context="ancestor">
    <Tile direction="vertical" size={8}>
      <Tile>
        <Tile context="parent" direction="vertical">
          <Tile context="child" coalescing>
            <Notification color="primary">
              <Title>Vertical...</Title>
              <Subtitle>Top tile</Subtitle>
            </Notification>
          </Tile>
          <Tile context="child" coalescing>
            <Notification color="warning">
              <Title>...tiles</Title>
              <Subtitle>Bottom tile</Subtitle>
            </Notification>
          </Tile>
        </Tile>
        <Tile context="parent">
          <Tile context="child" coalescing>
            <Notification color="info">
              <Title>Middle tile</Title>
              <Subtitle>With an image</Subtitle>
              <Image size="4by3">
                <img src="https://bulma.io/images/placeholders/640x480.png" alt="Placeholder"/>
              </Image>
            </Notification>
          </Tile>
        </Tile>
      </Tile>
      <Tile context="parent">
        <Tile context="child" coalescing>
          <Notification color="danger">
            <Title>Wide tile</Title>
            <Subtitle>Aligned with the right tile</Subtitle>
            <Content>
              <p>Content</p>
            </Content>
          </Notification>
        </Tile>
      </Tile>
    </Tile>
    <Tile context="parent">
      <Tile context="child" coalescing>
        <Notification color="success">
          <Content>
            <Title>Tall tile</Title>
            <Subtitle>With even more content</Subtitle>
            <Content>
              <p>Content</p>
            </Content>
          </Content>
        </Notification>
      </Tile>
    </Tile>
  </Tile>
);

export const ThreeColumn = () => (
  <Tile context="ancestor">
    <Tile context="parent" direction="vertical" size={4}>
      <Tile context="child" coalescing>
        <Box>
          <Title>One</Title>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor
            vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
          </Paragraph>
        </Box>
      </Tile>
      <Tile context="child" coalescing>
        <Box>
          <Title>Two</Title>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor
            vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
          </Paragraph>
        </Box>
      </Tile>
    </Tile>
    <Tile context="parent">
      <Tile context="child" coalescing>
        <Box>
          <Title>Three</Title>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper diam at erat pulvinar, at pulvinar
            felis blandit. Vestibulum volutpat tellus diam, consequat gravida libero rhoncus ut. Morbi maximus, leo sit
            amet vehicula eleifend, nunc dui porta orci, quis semper odio felis ut quam.
          </Paragraph>
          <Paragraph>
            Suspendisse varius ligula in molestie lacinia. Maecenas varius eget ligula a sagittis. Pellentesque interdum,
            nisl nec interdum maximus, augue diam porttitor lorem, et sollicitudin felis neque sit amet erat. Maecenas
            imperdiet felis nisi, fringilla luctus felis hendrerit sit amet. Aenean vitae gravida diam, finibus dignissim
            turpis. Sed eget varius ligula, at volutpat tortor.
          </Paragraph>
          <Paragraph>
            Integer sollicitudin, tortor a mattis commodo, velit urna rhoncus erat, vitae congue lectus dolor consequat
            libero. Donec leo ligula, maximus et pellentesque sed, gravida a metus. Cras ullamcorper a nunc ac porta.
            Aliquam ut aliquet lacus, quis faucibus libero. Quisque non semper leo.
          </Paragraph>
        </Box>
      </Tile>
    </Tile>
  </Tile>
);

export const FourColumn = () => (
  <>
    <Tile context="ancestor">
      <Tile context="parent">
        <Tile context="child" coalescing>
          <Box>
            <Title>One</Title>
            <Subtitle>Subtitle</Subtitle>
          </Box>
        </Tile>
      </Tile>
      <Tile context="parent">
        <Tile context="child" coalescing>
          <Box>
            <Title>Two</Title>
            <Subtitle>Subtitle</Subtitle>
          </Box>
        </Tile>
      </Tile>
      <Tile context="parent">
        <Tile context="child" coalescing>
          <Box>
            <Title>Three</Title>
            <Subtitle>Subtitle</Subtitle>
          </Box>
        </Tile>
      </Tile>
      <Tile context="parent">
        <Tile context="child" coalescing>
          <Box>
            <Title>Four</Title>
            <Subtitle>Subtitle</Subtitle>
          </Box>
        </Tile>
      </Tile>
    </Tile>

    <Tile context="ancestor">
      <Tile direction="vertical" size={9}>
        <Tile>
          <Tile context="parent">
            <Tile context="child" coalescing>
              <Box>
                <Title>Five</Title>
                <Subtitle>Subtitle</Subtitle>
                <Content>
                  <Paragraph>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper diam at erat pulvinar, at
                    pulvinar felis blandit. Vestibulum volutpat tellus diam, consequat gravida libero rhoncus ut. Morbi
                    maximus, leo sit amet vehicula eleifend, nunc dui porta orci, quis semper odio felis ut quam.
                  </Paragraph>
                </Content>
              </Box>
            </Tile>
          </Tile>
          <Tile direction="vertical" size={8}>
            <Tile>
              <Tile context="parent">
                <Tile context="child" coalescing>
                  <Box>
                    <Title>Six</Title>
                    <Subtitle>Subtitle</Subtitle>
                  </Box>
                </Tile>
              </Tile>
              <Tile context="parent">
                <Tile context="child" coalescing>
                  <Box>
                    <Title>Seven</Title>
                    <Subtitle>Subtitle</Subtitle>
                  </Box>
                </Tile>
              </Tile>
            </Tile>
            <Tile context="parent">
              <Tile context="child" coalescing>
                <Box>
                  <Title>Eight</Title>
                  <Subtitle>Subtitle</Subtitle>
                </Box>
              </Tile>
            </Tile>
          </Tile>
        </Tile>
        <Tile>
          <Tile context="parent" size={8}>
            <Tile context="child" coalescing>
              <Box>
                <Title>Nine</Title>
                <Subtitle>Subtitle</Subtitle>
                <Content>
                  <Paragraph>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque
                    tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
                  </Paragraph>
                </Content>
              </Box>
            </Tile>
          </Tile>
          <Tile context="parent">
            <Tile context="child" coalescing>
              <Box>
                <Title>Ten</Title>
                <Subtitle>Subtitle</Subtitle>
                <Content>
                  <Paragraph>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque
                    tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
                  </Paragraph>
                </Content>
              </Box>
            </Tile>
          </Tile>
        </Tile>
      </Tile>
      <Tile context="parent">
        <Tile context="child" coalescing>
          <Box>
            <Content>
              <Title>Eleven</Title>
              <Subtitle>Subtitle</Subtitle>
              <Content>
                <Paragraph>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper diam at erat pulvinar, at
                  pulvinar felis blandit. Vestibulum volutpat tellus diam, consequat gravida libero rhoncus ut. Morbi
                  maximus, leo sit amet vehicula eleifend, nunc dui porta orci, quis semper odio felis ut quam.
                </Paragraph>
                <Paragraph>
                  Integer sollicitudin, tortor a mattis commodo, velit urna rhoncus erat, vitae congue lectus dolor
                  consequat libero. Donec leo ligula, maximus et pellentesque sed, gravida a metus. Cras ullamcorper a
                  nunc ac porta. Aliquam ut aliquet lacus, quis faucibus libero. Quisque non semper leo.
                </Paragraph>
              </Content>
            </Content>
          </Box>
        </Tile>
      </Tile>
    </Tile>

    <Tile context="ancestor">
      <Tile context="parent">
        <Tile context="child" coalescing>
          <Box>
            <Title>Twelve</Title>
            <Subtitle>Subtitle</Subtitle>
            <Content>
              <Paragraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor
                vestibulum ut.
              </Paragraph>
            </Content>
          </Box>
        </Tile>
      </Tile>
      <Tile context="parent" size={6}>
        <Tile context="child" coalescing>
          <Box>
            <Title>Thirteen</Title>
            <Subtitle>Subtitle</Subtitle>
            <Content>
              <Paragraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor
                vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
              </Paragraph>
            </Content>
          </Box>
        </Tile>
      </Tile>
      <Tile context="parent">
        <Tile context="child" coalescing>
          <Box>
            <Title>Fourteen</Title>
            <Subtitle>Subtitle</Subtitle>
            <Content>
              <Paragraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor
                vestibulum ut.
              </Paragraph>
            </Content>
          </Box>
        </Tile>
      </Tile>
    </Tile>
  </>
);