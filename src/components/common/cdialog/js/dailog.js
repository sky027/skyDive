import "./jquery-2.1.4.js";
var dailogData = {};
var dialog = {
  init: function(url, data){
    /* width: 0,
    height: 0,
    title: 0 */
    dailogData = data;
    dialog.initdailog(data);
    dialog.setstyle(data);
  },
  setstyle: function(data){
    let time = new Date().getTime();
    var html = '<div class="dailog'+time+'">'
        +'<div class="dailogover" style="width: '+data.width+'px;height: '+data.height+'px"></div></div>';
    $("body").append(html);
    var dom = $('dailog'+ time);
    //var w = $(document.body)[0].scrollWidth;
    /* var w = $(document.body).width();
    var h = $(document.body).height(); */

    dom.width(window.innerWidth);
    dom.width(window.innerHeight);

    dom.find('.dailogover')


  },
  initdailog: function (data){

    //debugger;
  }


};


export default dialog;
