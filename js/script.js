
console.log("script mounted");

Vue.component('navigation',{
    template :'<div class="container-fluid banner-bg lock-height curved"><nav class="navigationbar"><div class="" style = "background:transparent"><div class="nav-container"><ul class = "nav-bar"><span class = "indicator"></span><li class = "nav-list"><router-link to="/home" class="nav-item nav-link"><i class="fas fa-home"></i><span class="title">Home</span></router-link></li><li class = "nav-list"><router-link to="/project_list" class="nav-item nav-link"><i class="fas fa-project-diagram"></i><span class="title">Project list</span></router-link></li><li class = "nav-list"><router-link to="/aboutme" class="nav-item nav-link"><i class="fas fa-info-circle"></i><span class="title">Bio</span></router-link></li><li class = "nav-list"><router-link to="/contact" class="nav-item nav-link"><span class="title">Contact me</span><i class="far fa-address-card"></i></router-link></li></ul></div></div></nav></div>'
})