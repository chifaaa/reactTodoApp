(this.webpackJsonpreactodo=this.webpackJsonpreactodo||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),o=a(7),s=a.n(o),l=(a(14),a(8)),r=a(1),d=a(2),i=a(4),m=a(3),h=a(5),u=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).toggleDone=function(e){var t=a.props.todos.findIndex((function(t){return t.id===Number(e)}));a.props.todos[t].checked=!a.props.todos[t].checked,console.log(a.props.todos),a.setState({etat:""})},a.todoList=function(){return console.log(a.props.todos)},a.state={etat:""},a}return Object(h.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this;return console.log("render",this.props.todos),n.a.createElement("div",{className:"todos collection"},this.props.todos.length?this.props.todos.map((function(t,a){return n.a.createElement("li",{className:"todo-item",key:a},n.a.createElement("label",{htmlFor:a,className:t.checked?"tick js-tick checked":"tick js-tick unchecked",onClick:function(){e.toggleDone(t.id)}}),n.a.createElement("span",{className:t.checked?"checkedspan":"none"},t.content),n.a.createElement("button",{className:"delete-todo js-delete-todo",onClick:function(){e.props.deleteTodo(t.id)}},n.a.createElement("svg",null,n.a.createElement("use",{href:"#delete-icon"}))))})):n.a.createElement("p",{className:"center"},"You have no todo's left, yay!"))}}]),t}(c.Component),p=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).handleChange=function(e){a.setState({content:e.target.value})},a.handleSubmit=function(e){e.preventDefault(),""!==a.state.content&&(a.props.addTodo(a.state),a.setState({content:""}))},a.state={content:""},a}return Object(h.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("main",null,n.a.createElement("div",{className:"container"},n.a.createElement("h1",{className:"app-title"},"todos"),n.a.createElement("form",{onSubmit:this.handleSubmit,className:"js-form"},n.a.createElement("input",{type:"text","aria-label":"Enter a new todo item",placeholder:"Add a todo",className:"js-todo-input",onChange:this.handleChange,value:this.state.content})),n.a.createElement("ul",{className:"todo-list js-todo-list"}))),n.a.createElement("svg",null,n.a.createElement("defs",null,n.a.createElement("symbol",{id:"checklist-icon",viewBox:"-52 0 512 512"},n.a.createElement("path",{d:"m217.140625 47.226562c0 7.1875-5.832031 13.015626-13.019531 13.015626-7.191406 0-13.019532-5.828126-13.019532-13.015626 0-7.191406 5.828126-13.019531 13.019532-13.019531 7.1875 0 13.019531 5.828125 13.019531 13.019531zm0 0"}),n.a.createElement("path",{d:"m140.917969 98.820312c4.144531 0 7.5-3.355468 7.5-7.5v-11.4375c0-4.140624-3.355469-7.5-7.5-7.5-4.140625 0-7.5 3.359376-7.5 7.5v11.4375c0 4.144532 3.359375 7.5 7.5 7.5zm0 0"}),n.a.createElement("path",{d:"m267.320312 98.820312c4.144532 0 7.5-3.355468 7.5-7.5v-11.4375c0-4.140624-3.355468-7.5-7.5-7.5-4.140624 0-7.5 3.359376-7.5 7.5v11.4375c0 4.144532 3.359376 7.5 7.5 7.5zm0 0"}),n.a.createElement("path",{d:"m204.121094 104.925781c8.242187 0 15.984375-3.449219 21.246094-9.464843 2.726562-3.117188 2.40625-7.855469-.710938-10.582032-3.121094-2.726562-7.855469-2.410156-10.582031.710938-2.410157 2.753906-6.039063 4.335937-9.953125 4.335937-3.917969 0-7.542969-1.582031-9.953125-4.335937-2.726563-3.121094-7.464844-3.4375-10.582031-.710938-3.121094 2.726563-3.4375 7.464844-.710938 10.582032 5.257812 6.015624 13 9.464843 21.246094 9.464843zm0 0"}),n.a.createElement("path",{d:"m162.492188 184.390625c-1.308594-3.929687-5.558594-6.054687-9.484376-4.742187-21.402343 7.132812-37.015624 17.507812-46.878906 25.582031v-9.789063c0-4.140625-3.359375-7.5-7.5-7.5s-7.5 3.359375-7.5 7.5v12.710938c0 11.421875 13.816406 17.8125 22.5 10.359375 8.640625-7.410157 23.304688-17.695313 44.121094-24.636719 3.929688-1.308594 6.054688-5.554688 4.742188-9.484375zm0 0"}),n.a.createElement("path",{d:"m211.460938 208.035156h98.148437c4.144531 0 7.5-3.359375 7.5-7.5s-3.355469-7.5-7.5-7.5h-98.148437c-4.140626 0-7.5 3.359375-7.5 7.5s3.359374 7.5 7.5 7.5zm0 0"}),n.a.createElement("path",{d:"m162.492188 245.972656c-1.308594-3.929687-5.558594-6.054687-9.484376-4.746094-21.402343 7.136719-37.015624 17.511719-46.878906 25.585938v-9.789062c0-4.144532-3.359375-7.5-7.5-7.5s-7.5 3.355468-7.5 7.5v12.710937c0 11.40625 13.8125 17.808594 22.5 10.359375 8.640625-7.410156 23.304688-17.699219 44.121094-24.636719 3.929688-1.308593 6.054688-5.554687 4.742188-9.484375zm0 0"}),n.a.createElement("path",{d:"m211.460938 269.617188h98.148437c4.144531 0 7.5-3.359376 7.5-7.5 0-4.144532-3.355469-7.5-7.5-7.5h-98.148437c-4.140626 0-7.5 3.355468-7.5 7.5 0 4.140624 3.359374 7.5 7.5 7.5zm0 0"}),n.a.createElement("path",{d:"m162.492188 307.554688c-1.308594-3.929688-5.558594-6.054688-9.484376-4.746094-21.402343 7.136718-37.015624 17.511718-46.878906 25.585937v-9.789062c0-4.144531-3.359375-7.5-7.5-7.5s-7.5 3.355469-7.5 7.5v12.710937c0 11.402344 13.8125 17.808594 22.5 10.359375 8.640625-7.410156 23.308594-17.699219 44.121094-24.636719 3.929688-1.308593 6.054688-5.554687 4.742188-9.484374zm0 0"}),n.a.createElement("path",{d:"m211.460938 331.199219h98.148437c4.144531 0 7.5-3.359375 7.5-7.5 0-4.144531-3.355469-7.5-7.5-7.5h-98.148437c-4.140626 0-7.5 3.355469-7.5 7.5 0 4.140625 3.359374 7.5 7.5 7.5zm0 0"}),n.a.createElement("path",{d:"m98.628906 372.6875c-4.140625 0-7.5 3.359375-7.5 7.5v12.710938c0 11.402343 13.808594 17.820312 22.5 10.359374 8.640625-7.410156 23.308594-17.699218 44.121094-24.636718 3.929688-1.308594 6.054688-5.558594 4.746094-9.484375-1.3125-3.933594-5.558594-6.054688-9.488282-4.746094-21.398437 7.132813-37.015624 17.511719-46.878906 25.582031v-9.789062c0-4.140625-3.359375-7.496094-7.5-7.496094zm0 0"}),n.a.createElement("path",{d:"m211.460938 392.777344h98.148437c4.144531 0 7.5-3.355469 7.5-7.5 0-4.140625-3.355469-7.5-7.5-7.5h-98.148437c-4.140626 0-7.5 3.359375-7.5 7.5 0 4.144531 3.359374 7.5 7.5 7.5zm0 0"}),n.a.createElement("path",{d:"m369.109375 67.765625h-51.667969v-1.007813c0-13.617187-11.078125-24.695312-24.695312-24.695312h-41.683594c-2.578125-23.621094-22.648438-42.0625-46.941406-42.0625-24.296875 0-44.363282 18.441406-46.945313 42.0625h-41.679687c-13.617188 0-24.695313 11.078125-24.695313 24.695312v1.007813h-51.671875c-21.574218 0-39.128906 17.554687-39.128906 39.128906v48.898438c0 4.140625 3.359375 7.5 7.5 7.5s7.5-3.359375 7.5-7.5v-48.898438c0-13.304687 10.824219-24.128906 24.128906-24.128906h51.671875v18.847656h-43.507812c-4.144531 0-7.5 3.359375-7.5 7.5v345.066407c0 4.140624 3.355469 7.5 7.5 7.5h234.792969c4.144531 0 7.5-3.359376 7.5-7.5 0-4.144532-3.355469-7.5-7.5-7.5h-227.292969v-330.066407h36.472656c.003906.019531.011719.039063.015625.058594.007812.039063.011719.078125.019531.113281 2.320313 11.316406 12.648438 19.726563 24.195313 19.726563h177.25c11.441406 0 21.882812-8.457031 24.191406-19.726563.007812-.035156.015625-.074218.023438-.113281.003906-.019531.007812-.035156.011718-.058594h36.476563v330.066407h-41.359375c-4.144532 0-7.5 3.355468-7.5 7.5 0 4.140624 3.355468 7.5 7.5 7.5h48.859375c4.140625 0 7.5-3.359376 7.5-7.5v-345.066407c0-4.140625-3.359375-7.5-7.5-7.5h-43.507813v-18.847656h51.671875c13.304688 0 24.128907 10.824219 24.128907 24.128906v365.976563c0 13.304687-10.824219 24.128906-24.128907 24.128906h-329.984375c-13.304687 0-24.128906-10.824219-24.128906-24.128906v-287.082032c0-4.140624-3.359375-7.5-7.5-7.5s-7.5 3.359376-7.5 7.5v287.082032c0 21.574218 17.554688 39.128906 39.128906 39.128906h329.980469c21.578125 0 39.128906-17.554688 39.128906-39.128906v-365.976563c.003907-21.574219-17.550781-39.128906-39.128906-39.128906zm-263.308594-1.007813c0-5.347656 4.347657-9.695312 9.695313-9.695312h48.972656c5.792969 0 7.425781-5.015625 7.425781-9.839844 0-17.765625 14.457031-32.222656 32.226563-32.222656 17.765625 0 32.222656 14.453125 32.222656 32.222656 0 4.8125 1.691406 9.839844 7.425781 9.839844h48.976563c5.347656 0 9.695312 4.347656 9.695312 9.695312v42.355469c0 1.875.128906 3.769531-.4375 5.582031-1.226562 3.945313-4.914062 6.816407-9.257812 6.816407h-177.25c-4.34375 0-8.03125-2.871094-9.261719-6.816407-.558594-1.796874-.433594-3.71875-.433594-5.582031zm0 0"})),n.a.createElement("symbol",{id:"delete-icon",viewBox:"0 0 448 448"},n.a.createElement("path",{d:"m224 0c-123.710938 0-224 100.289062-224 224s100.289062 224 224 224 224-100.289062 224-224c-.132812-123.65625-100.34375-223.867188-224-224zm124.449219 325.824219c4.15625 4.015625 5.828125 9.964843 4.363281 15.558593s-5.835938 9.964844-11.429688 11.429688-11.542968-.207031-15.558593-4.363281l-101.824219-101.824219-101.824219 101.824219c-6.277343 6.0625-16.257812 5.976562-22.429687-.195313s-6.257813-16.152344-.195313-22.429687l101.824219-101.824219-101.824219-101.824219c-4.15625-4.015625-5.828125-9.964843-4.363281-15.558593s5.835938-9.964844 11.429688-11.429688 11.542968.207031 15.558593 4.363281l101.824219 101.824219 101.824219-101.824219c6.277343-6.0625 16.257812-5.976562 22.429687.195313s6.257813 16.152344.195313 22.429687l-101.824219 101.824219zm0 0",fill:"rgba(55, 55, 55, 0.2)"})))))}}]),t}(c.Component),v=(a(15),function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).deleteTodo=function(e){var t=a.state.todos.filter((function(t){return t.id!==e}));a.setState({todos:t})},a.addTodo=function(e){e.id=Math.random(),e.checked=!1;var t=[].concat(Object(l.a)(a.state.todos),[e]);a.setState({todos:t})},a.state={todos:[]},a}return Object(h.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"todo-app container"},n.a.createElement(u,{todos:this.state.todos,deleteTodo:this.deleteTodo,toggleDone:this.toggleDone}),n.a.createElement(p,{addTodo:this.addTodo}))}}]),t}(c.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(n.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},9:function(e,t,a){e.exports=a(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.1aa97e1c.chunk.js.map