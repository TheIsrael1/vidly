(this["webpackJsonpreact-lap"]=this["webpackJsonpreact-lap"]||[]).push([[0],{58:function(e,t,a){e.exports=a(93)},63:function(e,t,a){},90:function(e,t,a){},93:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(28),s=a.n(o),c=a(104),l=(a(63),a(6)),i=a(7),u=a(9),m=a(8),p=a(105),d=a(56),h=a(103),v=a(25),f=a(26),b=a(5),g=a.n(b),E=a(14),y=a(53),k=a.n(y),O=a(21),S=a.n(O),j=a(102),w=a(13);var C={init:function(){j.a({dsn:"https://examplePublicKey@o0.ingest.sentry.io/0",maxBreadcrumbs:50,debug:!0})},log:function(e){w.a(e)}};S.a.defaults.baseURL=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,REACT_APP_API_URL:"https://serene-plateau-14406.herokuapp.com/api"}).REACT_APPP_API_URL,S.a.interceptors.response.use(null,(function(e){return e.response&&e.response.status>=400&&e.response.status<500||(console.log("loggin the error",e),C.log(e),Object(v.b)("an unexpected error occured")),Promise.reject(e)}));var N={get:S.a.get,post:S.a.post,put:S.a.put,delete:S.a.delete,setJwt:function(e){S.a.defaults.headers.common["x-auth-token"]=e}};function _(){return(_=Object(E.a)(g.a.mark((function e(t,a){var n,r;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.post("/auth",{email:t,password:a});case 2:n=e.sent,r=n.data,localStorage.setItem("token",r);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function P(){return localStorage.getItem("token")}N.setJwt(P());var x={login:function(e,t){return _.apply(this,arguments)},loginWithJwt:function(e){localStorage.setItem("token",e)},logout:function(){localStorage.removeItem("token")},getCurrentUser:function(){try{var e=localStorage.getItem("token");return k()(e)}catch(t){return null}},getJwt:P},I=function(e){e.path;var t=e.component,a=e.render,n=Object(f.a)(e,["path","component","render"]);return r.a.createElement(d.a,Object.assign({},n,{render:function(e){return x.getCurrentUser()?t?r.a.createElement(t,e):a(e):r.a.createElement(h.a,{to:{pathname:"/login",state:{from:e.location}}})}}))},R=a(16),A=a(42),T=a(19),D=a.n(T),L=function(e){var t=e.itemsCount,a=e.pageSize,n=e.currentPage,o=e.onPageChange,s=Math.ceil(t/a);if(1===s)return null;var c=D.a.range(1,s+1);return r.a.createElement("nav",null,r.a.createElement("ul",{className:"pagination"},c.map((function(e){return r.a.createElement("li",{key:e,className:e===n?"page-item active":"page-item"},r.a.createElement("a",{className:"page-link",onClick:function(){return o(e)}},e))}))))},M=function(e){var t="fa fa-heart";return e.liked||(t+="-o"),r.a.createElement("i",{onClick:e.onClick,style:{cursor:"pointer"},className:t,"aria-hidden":"true"})},U=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(e=t.call.apply(t,[this].concat(o))).raiseSort=function(t){var a=Object(R.a)({},e.props.sortColumn);a.path===t?a.order="asc"===a.order?"desc":"asc":(a.path=t,a.order="asc"),e.props.onSort(a)},e.renderSortIcon=function(t){var a=e.props.sortColumn;return t.path!==a.path?null:"asc"===a.order?r.a.createElement("i",{className:"fa fa-sort-asc"}):r.a.createElement("i",{className:"fa fa-sort-desc"})},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("thead",null,r.a.createElement("tr",null,this.props.columns.map((function(t){return r.a.createElement("th",{className:"clickable",key:t.path||t.key,onClick:function(){return e.raiseSort(t.path)}},t.label," ",e.renderSortIcon(t))}))))}}]),a}(n.Component),G=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).renderCell=function(e,t){return t.content?t.content(e):D.a.get(e,t.path)},e.createKey=function(e,t){return e._id+(t.path||t.key)},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this,t=this.props,a=t.data,n=t.columns;return r.a.createElement("tbody",null,a.map((function(t){return r.a.createElement("tr",{key:t._id},n.map((function(a){return r.a.createElement("td",{key:e.createKey(t,a)},e.renderCell(t,a))})))})))}}]),a}(n.Component),B=function(e){var t=e.columns,a=e.sortColumn,n=e.onSort,o=e.data;return r.a.createElement("table",{className:"table"},r.a.createElement(U,{columns:t,sortColumn:a,onSort:n}),r.a.createElement(G,{data:o,columns:t}))},W=a(41),q=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a),(e=t.call(this)).columns=[{path:"title",label:"Title",content:function(e){return r.a.createElement(W.a,{to:"/movies/".concat(e._id)},e.title)}},{path:"genre.name",label:"Genre"},{path:"numberInStock",label:"Stock"},{path:"dailyRentalRate",label:"Rate"},{key:"like",content:function(t){return r.a.createElement(M,{liked:t.liked,onClick:function(){return e.props.onLike(t)}})}}],e.deleteColumn={key:"delete",content:function(t){return r.a.createElement("button",{onClick:function(){return e.props.onDelete(t)},className:"btn btn-danger btn-sm"},"Delete")}};var n=x.getCurrentUser();return n&&n.isAdmin&&e.columns.push(e.deleteColumn),e}return Object(i.a)(a,[{key:"render",value:function(){var e=this.props,t=e.movies,a=e.onSort,n=e.sortColumn;return r.a.createElement(B,{columns:this.columns,data:t,onSort:a,sortColumn:n})}}]),a}(n.Component);function K(e){return"".concat("/movies","/").concat(e)}function F(e){return N.get(K(e))}function J(e){if(e._id){var t=Object(R.a)({},e);return delete t._id,N.put(K(e._id),t)}return N.post("/movies",e)}function z(e){return N.delete(K(e))}function Q(){return N.get("/genres")}function V(e,t,a){var n=(t-1)*a;return D()(e).slice(n).take(a).value()}var H=function(e){var t=e.items,a=e.textProperty,n=e.valueProperty,o=e.onItemSelect,s=e.selectedItem;return r.a.createElement("ul",{className:"list-group"},t.map((function(e){return r.a.createElement("li",{key:e[n],onClick:function(){return o(e)},className:e===s?"list-group-item active":"list-group-item",style:{cursor:"pointer"}},e[a])})))};H.defaultProps={textProperty:"name",valueProperty:"_id"};var $=H,X=function(e){var t=e.value,a=e.onChange;return r.a.createElement("input",{type:"text",name:"query",className:"form-control my-3",placeholder:"Search...",value:t,onChange:function(e){return a(e.currentTarget.value)}})},Y=(a(89),function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={movies:[],genres:[],searchQuery:"",selectedGenre:null,pageSize:4,currentPage:1,sortColumn:{path:"title",order:"asc"}},e.handleGenreSelect=function(t){e.setState({selectedGenre:t,searchQuery:"",currentPage:1})},e.handleSearch=function(t){e.setState({searchQuery:t,selectedGenre:null,currentPage:1})},e.handleDelete=function(){var t=Object(E.a)(g.a.mark((function t(a){var n,r;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.state.movies,r=n.filter((function(e){return e._id!==a._id})),e.setState({movies:r}),t.prev=3,t.next=6,z(a._id);case 6:t.next=12;break;case 8:t.prev=8,t.t0=t.catch(3),t.t0.response&&400===t.t0.response.status&&Object(v.b)("This movie has already been deleted"),e.setState({movies:n});case 12:case"end":return t.stop()}}),t,null,[[3,8]])})));return function(e){return t.apply(this,arguments)}}(),e.handlePageChange=function(t){e.setState({currentPage:t})},e.handleLike=function(t){var a=Object(A.a)(e.state.movies),n=a.indexOf(t);a[n]=Object(R.a)({},a[n]),a[n].liked=!a[n].liked,e.setState({movies:a})},e.handleSort=function(t){e.setState({sortColumn:t})},e.getPageData=function(){var t=e.state,a=t.movies,n=t.currentPage,r=t.pageSize,o=t.selectedGenre,s=t.sortColumn,c=t.searchQuery,l=a;c?l=a.filter((function(e){return e.title.toLowerCase().startsWith(c.toLowerCase())})):o&&o._id&&(l=a.filter((function(e){return e.genre._id===o._id})));var i=V(D.a.orderBy(l,[s.path],[s.order]),n,r);return{totalCount:l.length,data:i}},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=Object(E.a)(g.a.mark((function e(){var t,a,n,r,o;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Q();case 2:return t=e.sent,a=t.data,n=[{_id:"",name:"All"}].concat(Object(A.a)(a)),e.next=7,N.get("/movies");case 7:r=e.sent,o=r.data,this.setState({movies:o,genres:n});case 10:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){this.state.movies.length;var e=this.state,t=e.currentPage,a=e.pageSize,n=e.sortColumn,o=e.searchQuery,s=this.props.user,c=this.getPageData(),l=c.totalCount,i=c.data;return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-3"},r.a.createElement($,{items:this.state.genres,selectedItem:this.state.selectedGenre,onItemSelect:this.handleGenreSelect})),r.a.createElement("div",{className:"col "},s&&r.a.createElement(W.a,{to:"/movies/new",className:"btn btn-primary",style:{marginBottom:20,marginTop:10}},"New Movie"),r.a.createElement("p",null," There are ",l," movies in the database "),r.a.createElement(X,{value:o,onChange:this.handleSearch}),r.a.createElement(q,{movies:i,sortColumn:n,onLike:this.handleLike,onDelete:this.handleDelete,onSort:this.handleSort}),r.a.createElement(L,{itemsCount:l,currentPage:t,pageSize:a,onPageChange:this.handlePageChange})))}}]),a}(n.Component)),Z=function(){return r.a.createElement("h1",null,"customers")},ee=function(){return r.a.createElement("h1",null,"rentals")},te=function(){return r.a.createElement("h1",null,"Not Found")},ae=a(101),ne=function(e){var t=e.user;return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},r.a.createElement(W.a,{className:"navbar-brand",to:"/"},"Vidly"),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNavAltMarkup"},r.a.createElement("div",{className:"navbar-nav"},r.a.createElement(ae.a,{to:"/movies",className:"nav-item nav-link"},"Movies "),r.a.createElement(ae.a,{to:"/customers",className:"nav-item nav-link"},"Customers"),r.a.createElement(ae.a,{to:"/rentals",className:"nav-item nav-link"},"Rentals"),!t&&r.a.createElement(r.a.Fragment,null,r.a.createElement(ae.a,{to:"/login",className:"nav-item nav-link"},"Login"),r.a.createElement(ae.a,{to:"/register",className:"nav-item nav-link"},"Register")),t&&r.a.createElement(r.a.Fragment,null,r.a.createElement(ae.a,{to:"/profile",className:"nav-item nav-link"},t.name),r.a.createElement(ae.a,{to:"/logout",className:"nav-item nav-link"},"Logout")))))},re=a(11),oe=a.n(re),se=a(31),ce=a(55),le=function(e){var t=e.name,a=e.label,n=e.error,o=Object(f.a)(e,["name","label","error"]);return r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:t},a),r.a.createElement("input",Object.assign({},o,{name:t,id:t,className:"form-control"})),n&&r.a.createElement("div",{className:"alert alert-danger"},n))},ie=function(e){var t=e.name,a=e.label,n=e.options,o=(e.error,Object(f.a)(e,["name","label","options","error"]));return r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:t},a),r.a.createElement("select",Object.assign({name:t,id:t},o,{className:"form-control"}),r.a.createElement("option",{value:""}),n.map((function(e){return r.a.createElement("option",{value:e._id,key:e._id}," ",e.name)}))))},ue=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(e=t.call.apply(t,[this].concat(o))).state={data:{},errors:{}},e.validate=function(){var t=oe.a.validate(e.state.data,e.schema,{abortEarly:!1}).error;if(!t)return null;var a,n={},r=Object(ce.a)(t.details);try{for(r.s();!(a=r.n()).done;){var o=a.value;n[o.path[0]]=o.message}}catch(s){r.e(s)}finally{r.f()}return n},e.validateProperty=function(t){var a=t.name,n=t.value,r=Object(se.a)({},a,n),o=Object(se.a)({},a,e.schema[a]),s=oe.a.validate(r,o).error;return s?s.details[0].message:null},e.handleSubmit=function(t){t.preventDefault();var a=e.validate();e.setState({errors:a||{}}),a||e.doSubmit()},e.handleChange=function(t){var a=t.currentTarget,n=Object(R.a)({},e.state.errors),r=e.validateProperty(a);r?n[a.name]=r:delete n[a.name];var o=Object(R.a)({},e.state.data);o[a.name]=a.value,e.setState({data:o,errors:n})},e.renderButton=function(t){return r.a.createElement("button",{disabled:e.validate(),className:"btn btn-primary"},t)},e}return Object(i.a)(a,[{key:"renderSelect",value:function(e,t,a){var n=this.state,o=n.data,s=n.errors;return r.a.createElement(ie,{name:e,value:o[e],label:t,options:a,onChange:this.handleChange,error:s[e]})}},{key:"renderInput",value:function(e,t){var a=this.state,n=a.data,o=a.errors,s=a.type,c=void 0===s?"text":s;return r.a.createElement(le,{type:c,name:e,value:n[e],label:t,onChange:this.handleChange,error:o[e]})}}]),a}(n.Component),me=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={data:{title:"",genreId:"",numberInStock:"",dailyRentalRate:""},genres:[],errors:{}},e.schema={_id:oe.a.string(),title:oe.a.string().required().label("Title"),genreId:oe.a.string().required().label("Genre"),numberInStock:oe.a.string().required().min(0).max(100).label("Number In Stock"),dailyRentalRate:oe.a.string().required().min(0).max(5).label("Title")},e.doSubmit=Object(E.a)(g.a.mark((function t(){return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,J(e.state.data);case 2:e.props.history.push("/movies");case 3:case"end":return t.stop()}}),t)}))),e}return Object(i.a)(a,[{key:"populateGenres",value:function(){var e=Object(E.a)(g.a.mark((function e(){var t,a;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Q();case 2:t=e.sent,a=t.data,this.setState({genres:a});case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"populateMovies",value:function(){var e=Object(E.a)(g.a.mark((function e(){var t,a,n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,"new"!==(t=this.props.match.params.id)){e.next=4;break}return e.abrupt("return");case 4:return e.next=6,F(t);case 6:a=e.sent,n=a.data,this.setState({data:this.mapToViewModel(n)}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),e.t0.response&&404===e.t0.response.status&&this.props.history.replace("/not-found");case 14:case"end":return e.stop()}}),e,this,[[0,11]])})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){var e=Object(E.a)(g.a.mark((function e(){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.populateGenres();case 2:return e.next=4,this.populateMovies();case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"mapToViewModel",value:function(e){return{_id:e._id,title:e.title,genreId:e.genre._id,numberInStock:e.numberInStock,dailyRentalRate:e.dailyRentalRate}}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Movie Form"),r.a.createElement("form",{onSubmit:this.handleSubmit},this.renderInput("title","Title"),this.renderSelect("genreId","Genre",this.state.genres),this.renderInput("numberInStock","Number In Stock","number"),this.renderInput("dailyRentalRate","Rate"),this.renderButton("Save")))}}]),a}(ue),pe=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={data:{username:"",password:""},errors:{}},e.schema={username:oe.a.string().required().label("Username"),password:oe.a.string().required().label("Password")},e.doSubmit=Object(E.a)(g.a.mark((function t(){var a,n,r;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a=e.state.data,t.next=4,x.login(a.username,a.password);case 4:n=e.props.location.state,window.location=n?n.from.pathname:"/",t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),t.t0.response&&400===t.t0.response.status&&((r=Object(R.a)({},e.state.errors)).username=t.t0.response.data,e.setState({errors:r}));case 11:case"end":return t.stop()}}),t,null,[[0,8]])}))),e}return Object(i.a)(a,[{key:"render",value:function(){return x.getCurrentUser()?r.a.createElement(h.a,{to:"/"}):r.a.createElement("div",null,r.a.createElement("h1",null,"Login"),r.a.createElement("form",{onSubmit:this.handleSubmit},this.renderInput("username","Username"),this.renderInput("password","Password","password"),this.renderButton("Login")))}}]),a}(ue),de=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"componentDidMount",value:function(){x.logout(),window.location="/"}},{key:"render",value:function(){return null}}]),a}(n.Component);function he(e){return N.post("/users",{email:e.username,password:e.password,name:e.name})}var ve=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={data:{username:"",password:"",name:""},errors:{}},e.schema={username:oe.a.string().email().required().label("Username"),password:oe.a.string().min(5).required().label("Password"),name:oe.a.string().required().label("Name")},e.doSubmit=Object(E.a)(g.a.mark((function t(){var a,n;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,he(e.state.data);case 3:a=t.sent,x.loginWithJwt(a.headers["x-auth-token"]),window.location="/",t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),t.t0.response&&400===t.t0.response.status&&((n=Object(R.a)({},e.state.errors)).username=t.t0.response.data,e.setState({errors:n}));case 11:case"end":return t.stop()}}),t,null,[[0,8]])}))),e}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Register"),r.a.createElement("form",{onSubmit:this.handleSubmit},this.renderInput("username","Username"),this.renderInput("password","Password","password"),this.renderInput("name","Name"),this.renderButton("Register")))}}]),a}(ue),fe=(a(90),function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=x.getCurrentUser();this.setState({user:e})}},{key:"render",value:function(){var e=this,t=this.state.user;return r.a.createElement("main",{className:"container"},r.a.createElement(r.a.Fragment,null,r.a.createElement(v.a,null),r.a.createElement(ne,{user:t}),r.a.createElement(p.a,null,r.a.createElement(d.a,{path:"/register",component:ve}),r.a.createElement(d.a,{path:"/login",component:pe}),r.a.createElement(d.a,{path:"/logout",component:de}),r.a.createElement(I,{path:"/movies/:id",component:me}),r.a.createElement(d.a,{path:"/movies",render:function(t){return r.a.createElement(Y,Object.assign({},t,{user:e.state.user}))}}),r.a.createElement(d.a,{path:"/customers",component:Z}),r.a.createElement(d.a,{path:"/rentals",component:ee}),r.a.createElement(d.a,{path:"/not-found",component:te}),r.a.createElement(h.a,{from:"/",exact:!0,to:"/movies"}),r.a.createElement(h.a,{to:"not-found"}))))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(91),a(92);console.log("SUPERMAN",Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,REACT_APP_API_URL:"https://serene-plateau-14406.herokuapp.com/api"}).REACT_APP_NAME),C.init(),s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(c.a,null,r.a.createElement(fe,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[58,1,2]]]);
//# sourceMappingURL=main.139ddb4e.chunk.js.map