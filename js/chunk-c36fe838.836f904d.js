(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c36fe838"],{"3fce":function(t,e,o){},9965:function(t,e,o){"use strict";o.r(e);var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"cases"},[e("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.openDialog()}}},[t._v("新增用户")]),e("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticStyle:{width:"100%"},attrs:{border:"",data:t.tableData}},[e("el-table-column",{attrs:{prop:"Id",label:"序号",width:"180"}}),e("el-table-column",{attrs:{prop:"Img",label:"荣誉图片"},scopedSlots:t._u([{key:"default",fn:function(o){return[e("img",{staticStyle:{width:"100%"},attrs:{src:t.imgserver+o.row.Img,alt:""}})]}}])}),e("el-table-column",{attrs:{prop:"Remark",label:"荣誉标题",width:"180"}}),e("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(o){return[e("el-button",{attrs:{type:"primary",icon:"el-icon-edit"},on:{click:function(e){return t.handleEdit(o.$index,o.row)}}}),e("el-button",{attrs:{type:"danger",icon:"el-icon-delete"},on:{click:function(e){return t.handleDelete(o.$index,o.row)}}})]}}])})],1),e("el-dialog",{attrs:{title:"合作企业管理",visible:t.dialogFormVisible},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[e("el-form",{attrs:{model:t.formData}},[e("el-form-item",{attrs:{label:"荣誉图片","label-width":t.formLabelWidth}},[e("el-upload",{staticClass:"avatar-uploader",attrs:{action:"http://shkjgw.shkjem.com/api/UpLoad/UploadImage",headers:t.headers,"show-file-list":!1,"on-success":t.handleSuccess}},[t.formData.Img?e("img",{staticClass:"avatar",attrs:{src:t.imgserver+t.formData.Img}}):e("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1),e("el-form-item",{attrs:{label:"荣誉标题","label-width":t.formLabelWidth}},[e("el-input",{attrs:{autocomplete:"off"},model:{value:t.formData.Remark,callback:function(e){t.$set(t.formData,"Remark",e)},expression:"formData.Remark"}})],1)],1),e("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[e("el-button",{on:{click:function(e){t.dialogFormVisible=!1}}},[t._v("取 消")]),e("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.handleCreateOrModify()}}},[t._v("确 定")])],1)],1)],1)},i=[],n={data:function(){return{loading:!0,dialogFormVisible:!1,formLabelWidth:"120px",tableData:[],formData:{Id:0,Img:"",Remark:"",CreateTime:new Date},options:{},headers:{}}},mounted:function(){var t="Browser "+sessionStorage.getItem("token");this.options={headers:{Authorization:t}},this.headers={Authorization:t},this.loadData()},methods:{handleSuccess:function(t,e,o){window.console.log(t,e,o),this.formData.Img=t},loadData:function(){var t=this;this.loading=!0,this.$http.get("Honor/GetHonorAll").then((function(e){window.console.log(e),t.tableData=e.data,t.loading=!1})).catch((function(e){t.$message({message:"网络或程序异常！"+e,type:"error"})}))},openDialog:function(){this.formData.Id=0,this.formData.Img="",this.formData.Remark="",this.formData.CreateTime=new Date,this.dialogFormVisible=!0},handleCreateOrModify:function(){var t=this;window.console.log(this.formData),this.formData.Id?(this.loading=!0,this.$http.post("Honor/ModifiedHonor",this.formData,this.options).then((function(e){t.loading=!1,window.console.log(e),t.$message({message:"修改成功！",type:"success"}),t.dialogFormVisible=!1,t.loadData()})).catch((function(e){t.$message({message:"网络或程序异常！"+e,type:"error"})}))):(this.loading=!0,this.$http.post("Honor/CreateHonor",this.formData,this.options).then((function(e){t.loading=!1,window.console.log(e),t.$message({message:"创建成功！",type:"success"}),t.dialogFormVisible=!1,t.loadData()})).catch((function(e){t.$message({message:"网络或程序异常！"+e,type:"error"})})))},handleEdit:function(t,e){window.console.log(t,e),this.formData=e,this.dialogFormVisible=!0},handleDelete:function(t,e){var o=this;window.console.log(t,e),this.$confirm("此操作将永久此条数据, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){o.loading=!0,o.$http.post("Honor/DeleteHonor?id=".concat(e.Id),null,o.options).then((function(t){o.loading=!1,window.console.log(t),o.$message({message:"删除成功！",type:"success"}),o.loadData()})).catch((function(t){o.$message({message:"网络或程序异常！"+t,type:"error"})}))})).catch((function(){o.$message({type:"info",message:"已取消删除"})}))},dateFormat:function(t){var e=new Date(t.CreateTime);return e.getFullYear()+"-"+(e.getMonth()+1)+"-"+e.getDate()}}},s=n,l=(o("d2c0"),o("2877")),r=Object(l["a"])(s,a,i,!1,null,"56bcdb10",null);e["default"]=r.exports},d2c0:function(t,e,o){"use strict";o("3fce")}}]);
//# sourceMappingURL=chunk-c36fe838.836f904d.js.map