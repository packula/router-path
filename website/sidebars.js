module.exports = {
  docs: [
    {
      type: 'category',
      label: 'API reference',
      items: [
        'api/param',
        'api/path',
        {
          type: 'category',
          collapsed: true,
          label: 'Types',
          items: [
            'api/type/AnyParam',
            'api/type/NormalizeParam',
            'api/type/Param',
            'api/type/ParamArg',
            'api/type/ParamOrString',
            'api/type/Path',
          ],
        },
      ],
    },
  ],
}
