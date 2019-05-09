export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5cd42dd077cb23843dd5578e',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-ye4scpuh',
                  apiId: '0bf1964f-3c9d-4d55-a598-a9d0c66c5eb7'
                },
                {
                  buildHookId: '5cd42dd19e287af120243828',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-cns4m44y',
                  apiId: 'a54840f6-93d6-4902-9fe2-f3ec586521d3'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/kristofferj/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-cns4m44y.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
