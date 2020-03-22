/* eslint-disable indent */
const menu = [
  { type: 'config', id: 'news' },
  // { type: 'config', id: 'live' },
  { type: 'config', id: 'tournaments' },
  {
    type: 'nolink',
    title: 'Infos',
    children: [
      { type: 'config', id: 'info' },
      // { type: 'config', id: 'schedule' },
      { type: 'page', title: 'FAQ', id: 200391, link: '/faq' }
      // { type: 'page', title: 'Une page', id: 1246, link: '/grand-poitiers' }
    ]
  },
  { type: 'config', id: 'partners' }
]

module.exports = menu
