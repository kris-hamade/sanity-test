export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '5edf882c387ed49b91e21371',
                  title: 'Sanity Studio',
                  name: 'sanity-test-studio-c1box32e',
                  apiId: 'a56d0569-8262-49cc-9317-4b9b3cee901f'
                },
                {
                  buildHookId: '5edf882cc8317c3aa2b172bb',
                  title: 'Portfolio Website',
                  name: 'sanity-test-web-ck9tr8fz',
                  apiId: '14f41132-c09a-4aa4-b14c-84151957502a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/slash2223456/sanity-test',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-test-web-ck9tr8fz.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
