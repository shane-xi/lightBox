var lightBox = (function (){
    var lightBox = function (){
    };
    var groupName = null,groupData = [];
    lightBox.prototype  = {
        rendUI : function () {
            var content = '<div class="container">'+
                            '<div class="lightBox-mask"></div>'+
                                '<div class="lightBox-content">'+
                                    '<div class="lightBox-view">'+
                                        '<span class="lightBox-btn lightBox-prev lightBox-prev-btn"></span>'+
                                        '<img src="images/2-2.jpg" alt="" class="lightBox-image">'+
                                        '<span class="lightBox-btn lightBox-next lightBox-next-btn"></span>'+
                                    '</div>'+
                                '<div class="lightBox-caption">'+
                                    '<div class="lightBox-title">图片标题</div>'+
                                    '<div class="lightBox-desc">图片信息介绍</div>'+
                                    '<div class="lightBox-close"></div>'+
                                '</div>'+
                                '<div></div>'+
                            '</div>'+
                          '</div>';
            document.body.innerHTML += content;
        },
        bindUI : function () {
            var that = this;
            this.a = 1;
            var group = document.getElementById('img-group');
            var images = document.getElementsByTagName('img');
            group.addEventListener('click', function (event){
                var e = event.target;
                if(e.getAttribute('data-role') == 'lightbox'){
                    var currentGroup = e.getAttribute('data-group');
                    if(currentGroup != groupName){
                        groupName = currentGroup;
                        groupData&&(groupData=[]);
                        that.getData();
                        that.rendUI();
                    }
                }

            })
        },
        getData : function () {
            var groupList = document.querySelectorAll('[data-group = "'+groupName+'"]');
            groupList.forEach(function (item, i) {
                groupData.push({
                    src: item.getAttribute('src'),
                    id: item.getAttribute('data-id'),
                    caption: item.getAttribute('data-caption')
                });
            });
            console.log(this.a)
        }
    };

    return lightBox;
})()