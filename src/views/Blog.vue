<template>
    <div class="profile-page">
        <section class="section section-shaped section-lg my-0">
            <div class="shape shape-style-1 bg-gradient-default">
            </div>
        </section>
        <div class="container">
          <div class="card" style="background-color: rgba(0,0,0,0.1);">
            <div class="card-body">
              <div class="editor">
                <editor-menu-bar :editor="editor">
                  <div class="menubar" slot-scope="{ commands, isActive }">

                    <button
                      class="menubar__button btn btn-sm btn-outline-primary"
                      :class="{ 'is-active': isActive.bold() }"
                      @click="commands.bold"
                    >
                      <!-- <icon name="bold" /> -->
                      <i class="fa fa-bold"></i>
                    </button>

                    <button
                      class="menubar__button btn btn-sm btn-outline-primary"
                      :class="{ 'is-active': isActive.italic() }"
                      @click="commands.italic"
                    >
                      <!-- <icon name="italic" /> -->
                      <i class="fa fa-italic"></i>
                    </button>

                    <button
                      class="menubar__button btn btn-sm btn-outline-primary"
                      :class="{ 'is-active': isActive.strike() }"
                      @click="commands.strike"
                    >
                      <!-- <icon name="strike" /> -->
                      <i class="fa fa-strikethrough"></i>
                    </button>

                    <button
                      class="menubar__button btn btn-sm btn-outline-primary"
                      :class="{ 'is-active': isActive.underline() }"
                      @click="commands.underline"
                    >
                      <!-- <icon name="underline" /> -->
                      <i class="fa fa-underline"></i>
                    </button>

                    <button
                      class="menubar__button btn btn-sm btn-outline-primary"
                      :class="{ 'is-active': isActive.code() }"
                      @click="commands.code"
                    >
                      <!-- <icon name="code" /> -->
                      <i class="fa fa-code"></i>
                    </button>

                    <button
                      class="menubar__button btn btn-sm btn-outline-primary"
                      :class="{ 'is-active': isActive.paragraph() }"
                      @click="commands.paragraph"
                    >
                      <!-- <icon name="paragraph" /> -->
                      <i class="fa fa-paragraph"></i>
                    </button>

                    <button
                      class="menubar__button btn btn-sm btn-outline-primary"
                      :class="{ 'is-active': isActive.heading({ level: 1 }) }"
                      @click="commands.heading({ level: 1 })"
                    >
                      H1
                    </button>

                    <button
                      class="menubar__button btn btn-sm btn-outline-primary"
                      :class="{ 'is-active': isActive.heading({ level: 2 }) }"
                      @click="commands.heading({ level: 2 })"
                    >
                      H2
                    </button>

                    <button
                      class="menubar__button btn btn-sm btn-outline-primary"
                      :class="{ 'is-active': isActive.heading({ level: 3 }) }"
                      @click="commands.heading({ level: 3 })"
                    >
                      H3
                    </button>

                    <button
                      class="menubar__button btn btn-sm btn-outline-primary"
                      :class="{ 'is-active': isActive.bullet_list() }"
                      @click="commands.bullet_list"
                    >
                      <!-- <icon name="ul" /> -->
                      <i class="fa fa-list-ul"></i>
                    </button>

                    <button
                      class="menubar__button btn btn-sm btn-outline-primary"
                      :class="{ 'is-active': isActive.ordered_list() }"
                      @click="commands.ordered_list"
                    >
                      <!-- <icon name="ol" /> -->
                      <i class="fa fa-list-ol"></i>
                    </button>

                    <button
                      class="menubar__button btn btn-sm btn-outline-primary"
                      :class="{ 'is-active': isActive.blockquote() }"
                      @click="commands.blockquote"
                    >
                      <!-- <icon name="quote" /> -->
                      <i class="fa fa-quote-left"></i>
                    </button>

                    <button
                      class="menubar__button btn btn-sm btn-outline-primary"
                      :class="{ 'is-active': isActive.code_block() }"
                      @click="commands.code_block"
                    >
                      <!-- <icon name="code" /> -->
                      <i class="fa fa-code"></i>
                    </button>

                    <button
                      class="menubar__button btn btn-sm btn-outline-primary"
                      @click="commands.horizontal_rule"
                    >
                      <!-- <icon name="hr" /> -->
                      <i class="fa fa-terminal"></i>
                    </button>

                    <button
                      class="menubar__button btn btn-sm btn-outline-primary"
                      @click="commands.undo"
                    >
                      <!-- <icon name="undo" /> -->
                      <i class="fa fa-undo"></i>
                    </button>

                    <button
                      class="menubar__button btn btn-sm btn-outline-primary"
                      @click="commands.redo"
                    >
                      <!-- <icon name="redo" /> -->
                      <i class="fa fa-repeat"></i>
                    </button>

                  </div>
                </editor-menu-bar>

                <editor-content class="editor__content" :editor="editor" />
                <button class="btn btn-sm btn-outline-primary" @click="setContent">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
        <section class="section section-skew">
            <div class="container">
                <div class="card" style="background-color: rgba(0,0,0,0.1); margin-top:10px;" v-for="(item, index) in blogs">
                  <div class="card-body">
                    <p class="card-text"><span v-html="item.blog_title"></span></p>
                    <p class="card-text"><span v-html="item.blog_post"></span></p>
                  </div>
                </div>
                <!-- </card> -->
            </div>
        </section>
    </div>
</template>
<script>
import { Editor, EditorContent, EditorMenuBar } from 'tiptap'
import {
  Blockquote,
  CodeBlock,
  HardBreak,
  Heading,
  OrderedList,
  BulletList,
  ListItem,
  TodoItem,
  TodoList,
  Bold,
  Code,
  Italic,
  Link,
  Strike,
  Underline,
  History,
} from 'tiptap-extensions'

export default {
  components: {
    EditorContent,
    EditorMenuBar
  },
  data() {
    return {
      editor: new Editor({
        extensions: [
          new Blockquote(),
          new CodeBlock(),
          new HardBreak(),
          new Heading({ levels: [1, 2, 3] }),
          new BulletList(),
          new OrderedList(),
          new ListItem(),
          new TodoItem(),
          new TodoList(),
          new Bold(),
          new Code(),
          new Italic(),
          new Link(),
          new Strike(),
          new Underline(),
          new History(),
        ],
        content: `
          <h1>Yay Headlines!</h1>
          <p>|</p>
          <p>All these <strong>cool tags</strong> are working now.</p>
        `,
      }),
      blogs : [],
      post : "",
      modals: {
        modal1: false
      },
      user: "",
    };
  },
  methods : {
    setContent() {
      // console.log(this.editor.getHTML());
      this.post = this.editor.getHTML();
      this.blogs.unshift({
        'blog_post' : this.post.split("<p>|</p>")[1],
        'blog_title' : this.post.split("<p>|</p>")[0],
      })
      console.log(this.blogs[0])
      this.$http.post("http://127.0.0.1:8000/api/blogs",{
        'blog_post': this.blogs[0].blog_post,
        'blog_title': this.blogs[0].blog_title,
        'user_id' : this.user.id,
      })
      .then(response => {
        console.log(response)
      })
      .catch(error => {
        console.log(error.response)
      })
    },
  },
  mounted() {
    let token = localStorage.getItem('jwt')
    this.user = JSON.parse(localStorage.getItem('user'))

    this.$http.defaults.headers.common['Content-Type'] = 'application/json'
    this.$http.defaults.headers.common['Authorization'] = 'Bearer ' + token
    this.$http.defaults.headers.common['Access-Control-Allow-Origin'] = '*'

    this.$http.get("http://127.0.0.1:8000/api/blogs",{
      params : {
        user_id: this.user.id,
      }
      // headers: {
      //   'Access-Control-Allow-Origin': '*',
      //   'Content-Type': 'application/json',
      //   'Authorization': 'bearer ' + localStorage.getItem('jwt'),
      // },
    })
    .then(response => {
      // console.log(response)
      this.blogs = response.data
      // localStorage.setItem('user',response.data.success.name)
      // localStorage.setItem('jwt',response.data.success.token)

      // if (localStorage.getItem('jwt') != null){
      //   this.$router.go('/')
      // }
    })
    .catch(error => {
      console.log(error.response)
    })
  },
  beforeDestroy() {
    this.editor.destroy()
  },
  beforeRouteEnter (to, from, next) { 
    if ( ! localStorage.getItem('jwt')) {
        return next('login')
    }
    next()
  },
};
</script>
<style>
body
{
  background: #ffffff url("/assets/images/milky-way.jpg") no-repeat right top;
}
</style>
