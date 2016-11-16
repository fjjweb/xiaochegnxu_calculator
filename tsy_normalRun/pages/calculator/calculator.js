
var app = getApp()

Page({
    data:{
        result:0,
        num1:0,
        num2:0,
    },

calculatorAction() {
  console.log(this.data.num1);//
   console.log(this.data.num2);//
    this.setData({
      result:parseInt(this.data.num1)+parseInt(this.data.num2)
    })
  }, 
  bindKeyInput:function(e){
    console.log(e.detail.value);
    this.setData({
      num1:e.detail.value//是输入框的值2
    })

  },
   bindKeyInput2:function(e){
    console.log(e.detail.value);
    this.setData({
      num2:e.detail.value//3
    })
    
  },
  
    onLoad () {
    // TODO: onLoad
    }
})

