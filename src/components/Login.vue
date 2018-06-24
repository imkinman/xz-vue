<template>
    <div id="login">
        <div>
            <div class="login_wrapper">
                <div class="animate form login_form">
                    <section class="login_content">
                    <form>
                        <h1>管理员登录</h1>
                        <div>
                        <input type="text" v-model="uname" class="form-control" placeholder="管理员登录名" required />
                        </div>
                        <div>
                        <input type="password" v-model="upwd" class="form-control" placeholder="管理员登录密码" required />
                        </div>
                        <div>
                        <a class="btn btn-default submit" @click.prevent="login">&nbsp;登&nbsp;录&nbsp;</a>
                        </div>

                        <div class="clearfix"></div>

                        <div class="separator">
                        <div class="clearfix"></div>
                        <br />

                        <div>
                            <h1><img src="../assets/img/icon.png">&nbsp;&nbsp;学子后台管理系统</h1>
                            <p>©2017 版权所有，CODEBOY.COM</p>
                        </div>
                        </div>
                    </form>
                    </section>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return {
                uname:"",
                upwd:""
            }
        },
        methods:{
            login(){
                this.$ajax({
                    method:"get",
                    url:"http://127.0.0.1/vue/project/admin/data/user/login.php",
                    params:{
                        uname:this.uname,
                        upwd:this.upwd
                    }
                })
                .then(result=>{
                    if(result.data.code===200){
                        this.$router.push('./index');
                    }
                })
                .catch()
            }
        }
    }
</script>
<style lang="">
    
</style>