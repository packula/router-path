module.exports = {
  docs: [
    {
      type: 'category',
      collapsed: false,
      label: 'Guides',
      items: [
        'guides/custom-parameters',
      ],
    },
    {
      type: 'category',
      label: 'API reference',
      items: [
        {
          type: 'category',
          collapsed: false,
          label: 'Functions',
          items: [
            'api/path',
          ],
        },
        {
          type: 'category',
          collapsed: false,
          label: 'Types',
          items: [
            'api/type/AnyParam',
            'api/type/NormalizeParam',
            'api/type/Param',
            'api/type/ParamArg',
            'api/type/ParamOrString',
            'api/type/PathPattern',
          ],
        },
      ],
    },
  ],
}
