"use strict";(self.webpackChunksamurai_way=self.webpackChunksamurai_way||[]).push([[552],{4552:function(n,e,t){t.r(e),t.d(e,{UserComponent:function(){return A}});var o=t(5671),r=t(3144),i=t(136),s=t(5716),u=t(2791),l=t(2177),a=t(131),c="users_userPhoto__F2nMI",g=t(8478),p=t(2426),h=t(184),f=function(n){var e=n.follow,t=n.unFollow,o=n.isFollowing,r=n.user;return(0,h.jsx)("div",{children:(0,h.jsxs)("div",{style:{display:"flex"},children:[(0,h.jsx)(p.OL,{to:"/profile/"+r.id,children:(0,h.jsx)("img",{alt:"ava",className:c,src:null!==r.photos.small?r.photos.small:g})}),(0,h.jsx)("div",{children:r.followed?(0,h.jsx)("button",{disabled:o.some((function(n){return n===r.id})),onClick:function(){return t(r.id)},children:" UnFollow"}):(0,h.jsx)("button",{disabled:o.some((function(n){return n===r.id})),onClick:function(){return e(r.id)},children:" Follow"})}),r.name]},r.id)})},d=t(7246),w=function(n){var e=n.items,t=(n.pageSize,n.totalCount),o=n.follow,r=n.unFollow,i=n.currentPage,s=n.onClickHandlerChangePage,u=n.isFollowing;return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(d.Z,{page:i,count:Math.ceil(t/10),onChange:function(n,e){s(e)},color:"secondary",boundaryCount:2,style:{display:"flex",justifyContent:"center"}}),e.map((function(n){return(0,h.jsx)(f,{follow:o,isFollowing:u,unFollow:r,user:n},n.id)}))]})},C=t(2088),F=t(4566),m=t(7781),j=(0,t(6916).P1)((function(n){return n.usersPage.items}),(function(n){return n})),P=function(n){return n.usersPage.pageSize},x=function(n){return n.usersPage.totalCount},v=function(n){return n.usersPage.currentPage},y=function(n){return n.usersPage.isFetching},k=function(n){return n.usersPage.isFollowing},Z=function(n){return n.auth.isAuth},b=function(n){(0,i.Z)(t,n);var e=(0,s.Z)(t);function t(){var n;(0,o.Z)(this,t);for(var r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];return(n=e.call.apply(e,[this].concat(i))).onClickHandlerChangePage=function(e){var t=n.props.currentPage;n.props.getUsers(e,t)},n}return(0,r.Z)(t,[{key:"componentDidMount",value:function(){var n=this.props,e=n.currentPage,t=n.pageSize;this.props.getUsers(e,t)}},{key:"render",value:function(){return(0,h.jsxs)(h.Fragment,{children:[this.props.isFetching&&(0,h.jsx)(C.p,{}),(0,h.jsx)(w,{items:this.props.items,pageSize:this.props.pageSize,totalCount:this.props.totalCount,follow:this.props.follow,unFollow:this.props.unFollow,currentPage:this.props.currentPage,onClickHandlerChangePage:this.onClickHandlerChangePage,isFollowing:this.props.isFollowing})]})}}]),t}(u.Component),A=(0,m.qC)((0,l.$j)((function(n){return{items:j(n),pageSize:P(n),totalCount:x(n),currentPage:v(n),isFetching:y(n),isFollowing:k(n),isAuth:Z(n)}}),{follow:a.ZN,unFollow:a.IJ,toggleIsFollowing:a.zF,getUsers:a.Rf}),F.Z)(b)},4566:function(n,e,t){var o=t(1413),r=t(5987),i=(t(2791),t(9723)),s=t(2177),u=t(184),l=["isAuth"],a=function(n){return{isAuth:n.auth.isAuth}};e.Z=function(n){return(0,s.$j)(a)((function(e){e.isAuth;var t=(0,r.Z)(e,l);return e.isAuth?(0,u.jsx)(n,(0,o.Z)({},t)):(0,u.jsx)(i.l_,{to:"/login"})}))}},8478:function(n,e,t){n.exports=t.p+"static/media/user.2a6da5390aa6079b3000.jpg"}}]);
//# sourceMappingURL=552.77b57d32.chunk.js.map