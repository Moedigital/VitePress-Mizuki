# Markdown Extension Examples

This page demonstrates some of the built-in markdown extensions provided by VitePress.

## Syntax Highlighting

VitePress provides Syntax Highlighting powered by [Shiki](https://github.com/shikijs/shiki), with additional features like line-highlighting:

**Input**

````md
```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```
````

**Output**

```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```

## Custom Containers

**Input**

```md
::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::
```

**Output**

::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::

## More

Check out the documentation for the [full list of markdown extensions](https://vitepress.dev/guide/markdown).  

|  IP | 全年龄  |  家长指导级(无性暗示但含少量脏话等内容) |  家长指导级+(少量性暗示) | 限制级  |  限制级G |
| ------------ | ------------ | ------------ | ------------ | ------------ | ------------ |
| 歆楥(萌数次元音游社社团看板娘)  |  ✅ | ✅  | 允许但需特殊登记  | ❌  | ❌  |
|  萌数姬(萌数次元看板娘)  | ✅  |允许但需特殊登记  | 允许但需特殊登记  | ❌  | ❌  |

