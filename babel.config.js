module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins: [
    [
      'import',
      {
        libraryName: 'vant', // 组件库名称（如使用其他库可替换）
        libraryDirectory: 'es', // 组件库的模块格式（es 或 lib）
        style: true // 是否自动引入组件样式（根据组件库要求设置）
      },
      'vant' // 给插件配置命名（避免多个组件库冲突）
    ]
  ]
}
