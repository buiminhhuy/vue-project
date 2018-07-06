# vue-project

> A minimal vue project with Element UI & axios & iconfont & permission control & lint, this project was used to demo for plug-in a vue-library

## Build Setup

``` bash

# Clone project
git clone https://github.com/buithi/vue-project.git

# Install dependencies
npm install

# serve with hot reload at localhost:9528
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

## Related Project
 [vue-library](https://github.com/buithi/vue-library) `This library is a module/plugin for the vue-project`<br />
 [vue-element-admin](https://github.com/PanJiaChen/vue-element-admin)<br />
 [vueAdmin-template](https://github.com/PanJiaChen/vueAdmin-template)<br />

### Element-Ui using cdn tutorial
Import css and js of `Element`, and then import vue. Because `Element` is vue-dependent, vue must be import before it.

Then find [webpack.base.conf.js](https://github.com/PanJiaChen/vueAdmin-template/blob/element-ui-cdn/build/webpack.base.conf.js)
Add `externals` to make webpack not package vue and element.

```
externals: {
  vue: 'Vue',
  'element-ui':'ELEMENT'
}
```

Finally there is a small detail to pay attention to that if you import vue in global, you don't need to manually `Vue.use(Vuex)`, it will be automatically mounted, see
 [issue](https://github.com/vuejs/vuex/issues/731)

And you can use `npm run build --report` to see the effect


## Structure Project
[Reusable, Scalable and Easy to organize project using VueJS]
https://medium.com/hong-kong-tech/reusable-scalable-and-easy-to-organize-project-using-vuejs-part-1-d08fa83b8581

## License
[MIT](https://github.com/buithi/vue-project/blob/master/LICENSE) license.

Copyright (c) 2018-present Huy Bui