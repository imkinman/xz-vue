<template>
    <div id="user-list" class="right_col" role="main">
      <div class="row">
        <div class="col-xs-12 x_title">
          <h3>用户列表</h3>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-3">
          <form class="form-inline">
            <div class="form-group">
              <label for="page-size">每页显示记录数：</label>
              <select class="form-control" id="page-size">
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="40">40</option>
                <option value="60">60</option>
                <option value="80">80</option>
                <option value="100">100</option>
              </select>
            </div>
          </form>
        </div>
        <div class="col-xs-4 col-xs-offset-5">
          <div class="form-group has-feedback">
            <label for="product-kw" class="sr-only">搜索关键字：</label>
            <input class="form-control" type="text" id="product-kw" placeholder="请输入搜索关键字">
            <span class="glyphicon glyphicon-search form-control-feedback"></span>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12">
          <div class="table-responsive">
            <table class="table table-hover table-striped" id="table-laptop">
              <thead>
                <tr>
                  <th>
                    <div class="checkbox" style="margin: 0;">
                      <label>
                        <input type="checkbox">全选
                      </label>
                    </div>
                  </th>
                  <th>编号</th>
                  <th>头像</th>
                  <th>登录名</th>
                  <th>用户名</th>
                  <th>性别</th>
                  <th>邮箱</th>
                  <th>电话</th>
                  <th>操作</th>
                </tr>
              </thead>
              <tbody>
                <tr v-if="!isLoaded">
                  <td colspan="8">
                    <div class="loading">
                      <img src="../assets/img/loading.gif" alt="">
                    </div>
                  </td>
                </tr>
                <tr v-else v-for="data in list">
                  <td><input type="checkbox"></td>
                  <td>{{data.uid}}</td>
                  <td><img class="pic" :src="'static/'+data.avatar"></td>
                  <td><p class="fname" :title="data.uname">{{data.uname}}</p></td>
                  <td><p class="title" :title="data.user_name">{{data.user_name}}</p></td>
                  <td><p class="spec" :title="data.gener">{{data.gender}}</p></td>
                  <td><p class="spec" :title="data.email">{{data.email}}</p></td>
                  <td><p class="spec" :title="data.phone">{{data.phone}}</p></td>
                  <td>
                    <a href="user_details.html">详情</a>
                    <a href="user_update.html">修改</a>
                    <a href="user_delete.html">删除</a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="row">
            <div class="col-xs-12">
              <ul class="pagination pull-right" id="pagination">
                <li><a href="#">上一页</a></li>
                <li v-for="page in pageCount" class="active"><a href="#">{{page}}</a></li>
                <li><a href="#">下一页</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <br>
    </div>
</template>
<script>
    export default{
      data(){
        return {
            isLoaded:false,
            list:[],
            pno:1,
            pageSize:10,
            pageCount:0
        }
      },
      methods:{
          loadData(){
              this.$ajax({
                  method:"get",
                  url:"http://127.0.0.1/vue/project/admin/data/user_list.php",
                  params:{
                      pno:this.pno,
                      pageSize:this.pageSize
                  }
              }).then(result=>{
                  this.isLoaded=true;
                  //保存数据
                  this.list = result.data.data;
                  this.pno = result.data.pno;
                  this.pageSize = result.data.pageSize;
                  this.pageCount = result.data.pageCount;
              })
          },
          lastPage(){
              if(this.pno>1){
                  this.pno--;
                  this.loadData();
              }
          },
          nextPage(){
              if(this.pno<this.pageCount){
                  this.pno++;
                  this.loadData();
              }
          },
          pnoPage(pno){
              this.pno=pno;
              this.loadData();
          }
      },
      mounted(){
          //第一次加载数据
          this.loadData()
      },
      watch:{
          pageSize(newVal){
              this.loadData()
          }
      }
    }
</script>