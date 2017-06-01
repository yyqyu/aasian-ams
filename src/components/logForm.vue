<template>
  <div class="login-form">
     <div class="g-form">
      <div class="g-form-line">
         <span class="g-form-label">username：</span>
         <div class="g-form-input">
           <input type="text" v-model="usernameModel" placeholder="enter your email">
         </div>
      </div>
      <div class="g-form-line">
         <span class="g-form-label">password：</span>
         <div class="g-form-input">
           <input type="password" v-model="passwordModel" placeholder="enter your password">
         </div>
      </div>
      <div class="g-form-line">
        <div class="g-form-btn">
          <a class="g-form-a-button" @click="onLogin">sign in</a>
          <a href="http://www.w3school.com.cn" target="_blank">forgest password?</a>
        </div>
      </div>
      <p>{{errorText}}</p>
     </div>
  </div>  
</template>

<script>
export default {
  data () {
    return {  
      usernameModel:'',
      passwordModel:'',
      errorText:''
    }
  },
  methods: {
    onLogin () {
       this.$http.post('http://localhost:3000/login',{
            id:this.usernameModel,
            password:this.passwordModel
       })
       .then((res)=>{
            this.$emit('has-log',res.data)
       },(err)=>{
            this.errorText = error
       })
    }
  }
}
</script>