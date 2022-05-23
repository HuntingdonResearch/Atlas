import { ButtonProps } from '../Button';

export interface SocialButtonProps extends ButtonProps {
  href?: string;

  provider:
    | 'apple'
    | 'bitbucket'
    | 'dropbox'
    | 'discord'
    | 'facebook'
    | 'flickr'
    | 'foursquare'
    | 'github'
    | 'gitlab'
    | 'google'
    | 'instagram'
    | 'linkedin'
    | 'microsoft'
    | 'odnoklassniki'
    | 'openid'
    | 'pinterest'
    | 'reddit'
    | 'slack'
    | 'soundcloud'
    | 'tumblr'
    | 'twitter'
    | 'vimeo'
    | 'vk'
    | 'yahoo'
    | 'youtube';
}
