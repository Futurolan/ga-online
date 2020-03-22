import React from 'react'

import config from 'config/config'

import './styles.scss'

class SocialNetworksLinks extends React.Component {
  render () {
    if (config.social) {
      return (
        <div className='ga-social-networks-links has-text-centered'>
          <div className='field is-grouped'>
            {config.social.facebook &&
              <a className='control has-text-white' target='_blank' rel='noopener noreferrer' href={config.social.facebook}>
                <i className='fab fa-facebook' />
              </a>}
            {config.social.twitter &&
              <a className='control has-text-white' target='_blank' rel='noopener noreferrer' href={config.social.twitter}>
                <i className='fab fa-twitter' />
              </a>}
            {config.social.discord &&
              <a className='control has-text-white' target='_blank' rel='noopener noreferrer' href={config.social.discord}>
                <i className='fab fa-discord' />
              </a>}
            {config.social.flickr &&
              <a className='control has-text-white' target='_blank' rel='noopener noreferrer' href={config.social.flickr}>
                <i className='fab fa-flickr' />
              </a>}
            {config.social.twitch &&
              <a className='control has-text-white' target='_blank' rel='noopener noreferrer' href={config.social.twitch}>
                <i className='fab fa-twitch' />
              </a>}
            {config.social.youtube &&
              <a className='control has-text-white' target='_blank' rel='noopener noreferrer' href={config.social.youtube}>
                <i className='fab fa-youtube' />
              </a>}
            {config.social.instagram &&
              <a className='control has-text-white' target='_blank' rel='noopener noreferrer' href={config.social.instagram}>
                <i className='fab fa-instagram' />
              </a>}
          </div>
        </div>
      )
    } else {
      return null
    }
  }
}

export default SocialNetworksLinks
