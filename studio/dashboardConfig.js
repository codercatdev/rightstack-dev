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
                  buildHookId: '5e2a2b77c9bb1b86b9dec2a7',
                  title: 'Sanity Studio',
                  name: 'rightstack-dev-studio',
                  apiId: '8ec9e942-71bb-4754-8e6e-c258999c193a'
                },
                {
                  buildHookId: '5e2a2b773977665db2019608',
                  title: 'Landing pages Website',
                  name: 'rightstack-dev',
                  apiId: 'a61c19cd-3d69-457b-9336-98c801a24871'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ajonp/rightstack-dev',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://rightstack-dev.netlify.com', category: 'apps'}
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
