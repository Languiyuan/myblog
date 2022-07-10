---
title: v-model-自定义
date: 2021-7-28
tags:
  - 'Vue'
categories:
  - 'Vue'
autoSort: 100
---

## v-model 绑定自定义组件及自定义 v-model 属性

### v-model 绑定自定义组件

作用：在同一个组件中的 input，通过 v-model 来绑定这个组件中的 data 数据，就可以实现双向绑定，但是如果这个 v-model 绑定在自定义组件上就不会起作用，这时候就要又一套方法解决这个问题

- v-model 本质上是语法糖

  ```html
  <!-- v-model -->
  <input type="text" v-model="msg" />
  <!-- 等价于一下 -->
  <input type="text" :value="msg" @input="msg = $event.target.value" />
  ```

- 绑定自定义组件

  - 父传子 ：自定义组件上绑定 msg， 子组件通过 props 进行接受，msg 更新子组件就会响应
  - 子传父：子组件更新了数值，通过\$emit('fn',params)的方法，调用父组件的@fn 绑定的方法

  ```html
  <!-- 父组件 -->
  <template>
    <div>
      <input type="text" :value="msg" @input="msg = $event.target.value" />
      <h2>{{ msg }}</h2>
      <!-- $event就是代表子组件传的参数，也可以用其他例如val表示 -->
      <Model :msg1="msg" @input="msg = $event"></Model>
    </div>
  </template>
  <script>
    import Model from './model.vue'

    export defalut {
      components: [Model],
        data() {
            return {
                msg: 'helloword'
            }
        }
    }
  </script>

  <!-- 子组件 -->
  <template>
    <div>
      <input
        type="text"
        :value="msg1"
        @input="$emit('input', $event.target.value)"
      />
    </div>
  </template>

  <script>
    export default {
      props: {
       	 msg1: {
       	   type: String,
       	   defalut() {
       	     return {}
       	   },
       	 },
        },
      },
      data() {
        return {}
      },
    }
  </script>
  ```

  ### 自定义 v-model 属性

  作用：v-model 在自定义组件上的时候，不一定是绑定在 input 上的

  通过在组件中指定属性 `model` 的 `prop` 和 `event` 来修改：

  ```javascript
  <!-- 父组件 -->
  <template>
    <div>
      <!-- 两种方式 -->
      <Model :v="count" @add="ADD"></Model>
      <Model :v="count" @add="count = val"></Model>
      <h3>{{ count }}</h3>
    </div>
  </template>
  <script>
  import Model from './model.vue'

  export defalut {
      components: [Model],
      data() {
          return {
              count: 0
          }
      },
      methods: {
          // val是代表从子组件传递来的参数
          ADD(val) {
            this.count = val
          }
      }
  }
  </script>
  <!-- 子组件 -->
  <template>
    <div>
      <!-- 可以通过调用add() -->
      <button @click="$emit('add', add())">Add</button>
      <!-- 直接写 -->
      <button @click="$emit('add', ++count)">Add</button>
    </div>
  </template>

  <script>
  export default {
    model: {
      prop: 'v', // 默认是value
      event: 'add', // 默认是input
    },
    props: {
      v: {
        type: Number,
        defalut() {
          return {}
        },
      },
    },
    data() {
      return {
        count: this.v,
      }
    },
    methods: {
      add() {
        return ++this.count
      },
    },
  }
  </script>

  ```
