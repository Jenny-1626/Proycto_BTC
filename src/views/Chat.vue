<template>
  <div
    class="view login"
    v-if="state.username === '' || state.username === null"
  >
    <form class="login-form" @submit.prevent="Login">
      <div class="form-inner">
        <h1>Login Coin-Chat</h1>
        <label for="username">Nombre de usuario</label>
        <input
          type="text"
          v-model="inputUsername"
          placeholder="Ingrese su nombre..."
        />
        <input type="submit" value="Login" />
      </div>
    </form>

  </div>
  

  <div class="view chat" v-else>
    <header>
      <button class="logout" @click="Logout">Logout</button>
      <h1>
        <img src="@/assets/bit1.jpg" height="80" width="80" />Bienvenido,
        {{ state.username }}!
      </h1>
    </header>

    <section class="chat-box">
      <div
        v-for="message in state.messages"
        :key="message.key"
        :class="
          message.username == state.username
            ? 'message current-user'
            : 'message'
        "
      >
        <div class="message-inner">
          <div class="username">{{ message.username }}</div>
          <div class="content">{{ message.content }}</div>
        </div>
      </div>
    </section>

    <footer class="foot">
      <form @submit.prevent="SendMessage">
        <input
          type="text"
          v-model="inputMessage"
          placeholder="Escriba su mensaje..."
        />
        <input type="submit" value="Enviar" />
      </form>
    </footer>
    <br>
    <br>
    <br>

    <router-link
      to="/"
      class="mt-5 text-xl text-green-600 hover:underline"
    >Volver a la pagina de Inicio</router-link>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>

    <footer class="text-blue-700 text-2xl text-left">Desarrollado por @JennyBarrientos</footer>
  </div>
</template>

<script>
// import { reactive } from 'vue';
import db from '@/db';
export default {
name:'Login',
  data (){
      return{
        inputUsername: '',
        inputMessage: '',
        state :  {
        username: "",
        messages: []
    },
      }
  },
  methods: {
      
     Login(){
      if (this.inputUsername != "" || this.inputUsername != null) {
        this.state.username = this.inputUsername;
        this.inputUsername = "";
      }
    },
     Logout(){
      this.state.username = "";
    },
     SendMessage(){
      var messagesRef = db.database().ref("messages");
      if (this.inputMessage === "" || this.inputMessage === null) {
        return;
      }
      const message = {
        username: this.state.username,
        content: this.inputMessage
      }
      messagesRef.push(message)
      this.inputMessage = "";
    }
  },
  mounted() {
      const messagesRef = db.database().ref("messages");
      messagesRef.on('value', snapshot => {
        const data = snapshot.val();
        let messages = [];
      
        Object.keys(data).forEach(key => {
          messages.push({
            id: key,
            username: data[key].username,
            content: data[key].content
          });
           
        })
        this.state.messages = messages;
        })
  
  
  },
}
      
</script>

<style lang="scss">
* {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.view {
  display: flex;
  justify-content: center;
  min-height: 50vh;
  background-color: rgb(244, 252, 175);
  &.login {
    align-items: center;
    .login-form {
      display: block;
      width: 50%;
      padding: 15px;
      .form-inner {
        display: block;
        background-color: rgb(205, 221, 183);
        padding: 50px 15px;
        border-radius: 40px;
        box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.2);
        background-image: url("../assets/bit4.jpg");
        background-size:100px;
        background-repeat:repeat-x;
        background-position:initial;
        h1 {
          color: rgb(32, 29, 29);
          font-size: 40px;
          margin-bottom: 30px;
          margin-top: 50px;
          
        }
        label {
          display: block;
          margin-bottom: 5px;
          color: rgb(27, 1, 1);
          font-size: 20px;
          transition: 0.4s;
        }
        input[type="text"] {
          appearance: none;
          border: none;
          outline: none;
          background: none;
          display: block;
          width: 100%;
          padding: 10px 15px;
          border-radius: 8px;
          margin-bottom: 15px;
          color: #333;
          font-size: 18px;
          box-shadow: 0px 0px 0px rgba(0, 0, 0, 0);
          background-color: #f3f3f3;
          transition: 0.4s;
          &::placeholder {
            color: rgb(24, 1, 1);
            transition: 0.4s;
          }
        }
        input[type="submit"] {
          appearance: none;
          border: none;
          outline: none;
          background: none;
          display: block;
          width: 100%;
          padding: 10px 15px;
          background-color: goldenrod;
          border-radius: 8px;
          color: #fff;
          font-size: 18px;
          font-weight: 700;
        }
        &:focus-within {
          label {
            color: rgb(240, 143, 16);
          }
          input[type="text"] {
            background-color: #fff;
            box-shadow: 0 0 6px rgba(0, 0, 0, 0.2);
            &::placeholder {
              color: #666;
            }
          }
        }
      }
    }
  }
  &.chat {
    flex-direction: column;
    header {
      position: relative;
      display: block;
      width: 100%;
      padding: 50px 30px 10px;
      .logout {
        position: absolute;
        top: 15px;
        right: 15px;
        appearance: none;
        border: none;
        outline: none;
        background-color:rgb(219, 245, 165);
        border-radius: 0px 8px 8px 0px;
        padding: 10px 15px;
        color: rgb(87, 7, 7);
        font-size: 30px;
        margin-bottom: 10px;
        text-align: left;
      }
      h1 {
        color: rgb(10, 1, 1);
        font-size: 20px;
      }
    }
    .chat-box {
      border-radius: 24px 24px 0px 0px;
      background-color: rgb(238, 208, 143);
      box-shadow: 0px 0px 12px rgba(26, 126, 51, 0.2);
      flex: 1 1 100%;
      padding: 30px;
      .message {
        display: flex;
        margin-bottom: 15px;
        .message-inner {
          .username {
            color: rgb(3, 1, 1);
            font-size: 16px;
            margin-bottom: 5px;
            padding-left: 15px;
            padding-right: 15px;
          }
          .content {
            display: inline-block;
            padding: 10px 20px;
            background-color: #f3f3f3;
            border-radius: 999px;
            color: #333;
            font-size: 18px;
            line-height: 1.2em;
            text-align: left;
          }
        }
        &.current-user {
          margin-top: 30px;
          justify-content: flex-end;
          text-align: right;
          .message-inner {
            max-width: 75%;
            .content {
              color: rgb(53, 1, 1);
              font-weight: 600;
              background-color: rgb(157, 243, 161);
            }
          }
        }
      }
    }
    .foot {
      position: sticky;
      bottom: 0px;
      background-color: #fff;
      padding: 30px;
      box-shadow: 0px 0px 12px rgba(100, 100, 100, 0.2);
      form {
        display: flex;
        input[type="text"] {
          flex: 1 1 100%;
          appearance: none;
          border: none;
          outline: none;
          background: none;
          display: block;
          width: 100%;
          padding: 10px 15px;
          border-radius: 8px 0px 0px 8px;
          color: #333;
          font-size: 18px;
          box-shadow: 0px 0px 0px rgba(0, 0, 0, 0);
          background-color: #f3f3f3;
          transition: 0.4s;
          &::placeholder {
            color: #888;
            transition: 0.4s;
          }
        }
        input[type="submit"] {
          appearance: none;
          border: none;
          outline: none;
          background: none;
          display: block;
          padding: 10px 15px;
          border-radius: 0px 8px 8px 0px;
          background-color: rgb(223, 53, 10);
          color: #fff;
          font-size: 18px;
          font-weight: 700;
        }
      }
    }
  }
}
</style>