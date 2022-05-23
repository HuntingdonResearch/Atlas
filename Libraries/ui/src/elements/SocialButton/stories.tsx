import React, { ReactNode } from 'react';
import Buttons from '../../elements/Buttons';
import Content from '../../elements/Content';
import SocialButton from '../../elements/SocialButton';
import Column from '../../layouts/Column';
import Columns from '../../layouts/Columns';
import Container from '../../layouts/Container';

export default {
  component: SocialButton,
  title: 'Elements/SocialButton'
};

export const Apple = () => (
  <Shell>
    <Buttons>
      <SocialButton provider="apple">
        Sign up with Apple
      </SocialButton>
      <SocialButton provider="apple" outlined>
        Sign in with Apple
      </SocialButton>
    </Buttons>
  </Shell>
);

export const Bitbucket = () => (
  <Shell>
    <Buttons>
      <SocialButton provider="bitbucket">
        Sign up with Bitbucket
      </SocialButton>
      <SocialButton provider="bitbucket" outlined>
        Sign in with Bitbucket
      </SocialButton>
    </Buttons>
  </Shell>
);

export const Dropbox = () => (
  <Shell>
    <Buttons>
      <SocialButton provider="dropbox">
        Sign up with Dropbox
      </SocialButton>
      <SocialButton provider="dropbox" outlined>
        Sign in with Dropbox
      </SocialButton>
    </Buttons>
  </Shell>
);

export const Discord = () => (
  <Shell>
    <Buttons>
      <SocialButton provider="discord">
        Sign up with Discord
      </SocialButton>
      <SocialButton provider="discord" outlined>
        Sign in with Discord
      </SocialButton>
    </Buttons>
  </Shell>
);

export const Facebook = () => (
  <Shell>
    <Buttons>
      <SocialButton provider="facebook">
        Sign up with Facebook
      </SocialButton>
      <SocialButton provider="facebook" outlined>
        Sign in with Facebook
      </SocialButton>
    </Buttons>
  </Shell>
);

export const Flickr = () => (
  <Shell>
    <Buttons>
      <SocialButton provider="flickr">
        Sign up with Flickr
      </SocialButton>
      <SocialButton provider="flickr" outlined>
        Sign in with Flickr
      </SocialButton>
    </Buttons>
  </Shell>
);

export const Foursquare = () => (
  <Shell>
    <Buttons>
      <SocialButton provider="foursquare">
        Sign up with Foursquare
      </SocialButton>
      <SocialButton provider="foursquare" outlined>
        Sign in with Foursquare
      </SocialButton>
    </Buttons>
  </Shell>
);

export const GitHub = () => (
  <Shell>
    <Buttons>
      <SocialButton provider="github">
        Sign up with GitHub
      </SocialButton>
      <SocialButton provider="github" outlined>
        Sign in with GitHub
      </SocialButton>
    </Buttons>
  </Shell>
);

export const GitLab = () => (
  <Shell>
    <Buttons>
      <SocialButton provider="gitlab">
        Sign up with GitLab
      </SocialButton>
      <SocialButton provider="gitlab" outlined>
        Sign in with GitLab
      </SocialButton>
    </Buttons>
  </Shell>
);

export const Google = () => (
  <Shell>
    <Buttons>
      <SocialButton provider="google">
        Sign up with Google
      </SocialButton>
      <SocialButton provider="google" outlined>
        Sign in with Google
      </SocialButton>
    </Buttons>
  </Shell>
);

export const Instagram = () => (
  <Shell>
    <Buttons>
      <SocialButton provider="instagram">
        Sign up with Instagram
      </SocialButton>
      <SocialButton provider="instagram" outlined>
        Sign in with Instagram
      </SocialButton>
    </Buttons>
  </Shell>
);

export const LinkedIn = () => (
  <Shell>
    <Buttons>
      <SocialButton provider="linkedin">
        Sign up with LinkedIn
      </SocialButton>
      <SocialButton provider="linkedin" outlined>
        Sign in with LinkedIn
      </SocialButton>
    </Buttons>
  </Shell>
);

export const Microsoft = () => (
  <Shell>
    <Buttons>
      <SocialButton provider="microsoft">
        Sign up with Microsoft
      </SocialButton>
      <SocialButton provider="microsoft" outlined>
        Sign in with Microsoft
      </SocialButton>
    </Buttons>
  </Shell>
);

export const Odnoklassniki = () => (
  <Shell>
    <Buttons>
      <SocialButton provider="odnoklassniki">
        Sign up with Odnoklassniki
      </SocialButton>
      <SocialButton provider="odnoklassniki" outlined>
        Sign in with Odnoklassniki
      </SocialButton>
    </Buttons>
  </Shell>
);

export const OpenID = () => (
  <Shell>
    <Buttons>
      <SocialButton provider="openid">
        Sign up with OpenID
      </SocialButton>
      <SocialButton provider="openid" outlined>
        Sign in with OpenID
      </SocialButton>
    </Buttons>
  </Shell>
);

export const Pinterest = () => (
  <Shell>
    <Buttons>
      <SocialButton provider="pinterest">
        Sign up with Pinterest
      </SocialButton>
      <SocialButton provider="pinterest" outlined>
        Sign in with Pinterest
      </SocialButton>
    </Buttons>
  </Shell>
);

export const Reddit = () => (
  <Shell>
    <Buttons>
      <SocialButton provider="reddit">
        Sign up with Reddit
      </SocialButton>
      <SocialButton provider="reddit" outlined>
        Sign in with Reddit
      </SocialButton>
    </Buttons>
  </Shell>
);

export const Slack = () => (
  <Shell>
    <Buttons>
      <SocialButton provider="slack">
        Sign up with Slack
      </SocialButton>
      <SocialButton provider="slack" outlined>
        Sign in with Slack
      </SocialButton>
    </Buttons>
  </Shell>
);

export const SoundCloud = () => (
  <Shell>
    <Buttons>
      <SocialButton provider="soundcloud">
        Sign up with SoundCloud
      </SocialButton>
      <SocialButton provider="soundcloud" outlined>
        Sign in with SoundCloud
      </SocialButton>
    </Buttons>
  </Shell>
);

export const Tumblr = () => (
  <Shell>
    <Buttons>
      <SocialButton provider="tumblr">
        Sign up with Tumblr
      </SocialButton>
      <SocialButton provider="tumblr" outlined>
        Sign in with Tumblr
      </SocialButton>
    </Buttons>
  </Shell>
);

export const Twitter = () => (
  <Shell>
    <Buttons>
      <SocialButton provider="twitter">
        Sign up with Twitter
      </SocialButton>
      <SocialButton provider="twitter" outlined>
        Sign in with Twitter
      </SocialButton>
    </Buttons>
  </Shell>
);

export const Vimeo = () => (
  <Shell>
    <Buttons>
      <SocialButton provider="vimeo">
        Sign up with Vimeo
      </SocialButton>
      <SocialButton provider="vimeo" outlined>
        Sign in with Vimeo
      </SocialButton>
    </Buttons>
  </Shell>
);

export const VK = () => (
  <Shell>
    <Buttons>
      <SocialButton provider="vk">
        Sign up with VK
      </SocialButton>
      <SocialButton provider="vk" outlined>
        Sign in with VK
      </SocialButton>
    </Buttons>
  </Shell>
);

export const Yahoo = () => (
  <Shell>
    <Buttons>
      <SocialButton provider="yahoo">
        Sign up with Yahoo
      </SocialButton>
      <SocialButton provider="yahoo" outlined>
        Sign in with Yahoo
      </SocialButton>
    </Buttons>
  </Shell>
);

export const YouTube = () => (
  <Shell>
    <Buttons>
      <SocialButton provider="youtube">
        Sign up with YouTube
      </SocialButton>
      <SocialButton provider="youtube"outlined>
        Sign in with YouTube
      </SocialButton>
    </Buttons>
  </Shell>
);

function Shell({ children, fluid = false }: { children: ReactNode, fluid?: boolean }) {
  return (
    <Container fluid={fluid}>
      <Columns centered>
        <Column size="half">
          <Content>
            {children}
          </Content>
        </Column>
      </Columns>
    </Container>
  );
}
