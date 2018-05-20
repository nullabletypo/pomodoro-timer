(window.webpackJsonp=window.webpackJsonp||[]).push([[1,5],{22:function(t,e,O){"use strict";O.d(e,"a",function(){return c});var n=O(4);const o=(t,e)=>Object.assign({},t,e);class c{constructor(t){this.state=t()}latest(){return o(this.state)}get(t){return this.state[t]}pick(t){return Object(n.i)(this.state,t)}set(t){return this.state=o(this.state,t),this.state}update(t){return this.state=o(this.state,t(this.state)),this.state}validate(t){return t(this.state)}}},25:function(t,e,O){"use strict";var n={};O.d(n,"bootEpic",function(){return W}),O.d(n,"startEpic",function(){return B}),O.d(n,"endEpic",function(){return k}),O.d(n,"tickEpic",function(){return V}),O.d(n,"pauseEpic",function(){return x}),O.d(n,"resumeEpic",function(){return J}),O.d(n,"timeupEpic",function(){return $}),O.d(n,"restEpic",function(){return q}),O.d(n,"notificationEpic",function(){return z});var o=O(109),c=O(89),i=O(65),a=O(23),r=O(4),T=O(54),s=O(1);const d=Object(s.b)("POMODORO_TIMER/INPUT/"),E=Object(s.b)("POMODORO_TIMER/OUTPUT/"),p={START:d("START"),PAUSE:d("PAUSE"),RESUME:d("RESUME"),SKIP:d("SKIP"),RESET:d("RESET")},u={BOOT:E("BOOT"),START:E("START"),END:E("END"),TICK:E("TICK"),TIMEUP:E("TIMEUP"),PAUSE:E("PAUSE"),RESUME:E("RESUME"),RESET:E("RESET"),NOTIFICATION_SEND:E("NOTIFICATION_SEND"),NOTIFICATION_CLOSE:E("NOTIFICATION_CLOSE"),CHANGE:E("CHANGE")},b={INPUT:p,OUTPUT:u};var j,N=O(15),I=O(113),P=O(170),_=O(2),R=O(112),D=O(8),l=O(45),U=O(46),A=O(64),S=O(108);!function(t){t.WORK_INTERVAL="WORK_INTERVAL",t.SHORT_BREAK_INTERVAL="SHORT_BREAK_INTERVAL",t.LONG_BREAK_INTERVAL="LONG_BREAK_INTERVAL"}(j||(j={}));const g=t=>!t.isWorking&&!t.isPausing,M=t=>t.isWorking&&!t.isPausing,f=t=>Boolean(t.isPausing),C=t=>t.isWorking&&t.left<=1e3,h=t=>{const{currentInterval:e,achieveCount:O}=t;return e!==j.WORK_INTERVAL?j.WORK_INTERVAL:0!==O&&O%t.config.LONG_BREAK_AFTER==0?j.LONG_BREAK_INTERVAL:j.SHORT_BREAK_INTERVAL},m=t=>{const e=t.toLowerCase().replace(/_|interval/g," ");return e.includes("break")?`Time to take a ${e}`:`Time to ${e}`},v=t=>Object.assign({left:0,end:0,isWorking:!1,isPausing:!1,currentInterval:null,achieveCount:0,config:{WORK_INTERVAL:15e5,SHORT_BREAK_INTERVAL:3e5,LONG_BREAK_INTERVAL:9e5,LONG_BREAK_AFTER:4}},t),L=t=>e=>{const O=null===e.currentInterval?h(e):e.currentInterval,n=e.config[O],o=t.timestamp+n,c=n;return Object.assign({},e,{currentInterval:O,end:o,left:c,isWorking:!0,isPausing:!1})},y=t=>e=>{const O=h(e),n=e.config[O],o=t.timestamp+n,c=n;return Object.assign({},e,{currentInterval:O,end:o,left:c,isWorking:!1,isPausing:!1})},H=t=>e=>{const O=Math.max(0,e.end-t.timestamp);return Object.assign({},e,{left:O})},G=t=>{return Object.assign({},t,{isWorking:!1,isPausing:!0})},F=t=>e=>{const O=t.timestamp+e.left,n=Math.max(0,O-t.timestamp);return Object.assign({},e,{end:O,left:n,isWorking:!0,isPausing:!1})},w=t=>{const e=t.currentInterval===j.WORK_INTERVAL?t.achieveCount+1:t.achieveCount;return Object.assign({},t,{achieveCount:e,isWorking:!1,isPausing:!1})},K=t=>{const e=t.achieveCount;return v({achieveCount:e})},W=(t,e)=>Object(a.a)(u.BOOT(e.repo.latest())),B=(t,{repo:e})=>Object(s.d)(t,p.START).pipe(Object(D.a)(()=>e.validate(g)),Object(_.a)(()=>e.update(L({timestamp:Date.now()}))),Object(_.a)(u.START)),k=(t,{repo:e})=>{const O=Object(s.d)(t,p.SKIP),n=Object(s.d)(t,u.TIMEUP);return Object(N.a)(O,n).pipe(Object(_.a)(()=>e.update(y({timestamp:Date.now()}))),Object(_.a)(u.END))},V=(t,{repo:e})=>{const O=Object(s.d)(t,u.START),n=Object(s.d)(t,u.RESUME),o=Object(s.d)(t,u.PAUSE),c=Object(s.d)(t,p.SKIP),i=Object(s.d)(t,u.TIMEUP),a=Object(s.d)(t,u.RESET),r=Object(N.a)(o,c,i,a);return Object(N.a)(O,n).pipe(Object(l.a)(()=>Object(P.a)(100,1e3).pipe(Object(R.a)(r))),Object(_.a)(()=>e.update(H({timestamp:Date.now()}))),Object(_.a)(u.TICK))},x=(t,{repo:e})=>Object(s.d)(t,p.PAUSE).pipe(Object(D.a)(()=>e.validate(M)),Object(_.a)(()=>e.update(G)),Object(_.a)(u.PAUSE)),J=(t,{repo:e})=>Object(s.d)(t,p.RESUME).pipe(Object(D.a)(()=>e.validate(f)),Object(_.a)(()=>e.update(F({timestamp:Date.now()}))),Object(_.a)(u.RESUME)),$=(t,{repo:e})=>Object(s.d)(t,u.TICK).pipe(Object(D.a)(()=>e.validate(C)),Object(_.a)(()=>e.update(w)),Object(_.a)(u.TIMEUP)),q=(t,{repo:e})=>Object(s.d)(t,p.RESET).pipe(Object(_.a)(()=>e.update(K)),Object(_.a)(u.RESET)),z=(t,e)=>{const O=Object(s.d)(t,u.TIMEUP).pipe(Object(l.a)(()=>Object(s.d)(t,u.END).pipe(Object(S.a)(1))),Object(_.a)(t=>t.payload.currentInterval),Object(D.a)(r.b),Object(_.a)(m),Object(_.a)(t=>e.sendNotification("PomodoroTimer",{body:t})),Object(A.a)());return Object(N.a)(O.pipe(Object(_.a)(()=>u.NOTIFICATION_SEND(e.repo.latest()))),O.pipe(Object(l.a)(O=>Object(I.a)(O,"click").pipe(Object(R.a)(Object(s.d)(t,[u.START,u.RESUME])),Object(U.a)(()=>O.close()),Object(_.a)(()=>u.NOTIFICATION_CLOSE(e.repo.latest()))))))};const Q=t=>(X=Math.max(0,t),Y="0",Z=2,(Y+X).slice(-Z));var X,Y,Z;const tt=t=>{const e=Math.floor(t/1e3/60/60)%60,O=Math.floor(t/1e3/60)%60,n=Math.floor(t/1e3)%60;return Object(r.g)({hour:e,min:O,sec:n},Q)};var et=O(22);const Ot=()=>new et.a(v);O.d(e,"c",function(){return nt}),O.d(e,!1,function(){return j}),O.d(e,!1,function(){return g}),O.d(e,!1,function(){return M}),O.d(e,!1,function(){return f}),O.d(e,!1,function(){return C}),O.d(e,!1,function(){return h}),O.d(e,!1,function(){return m}),O.d(e,!1,function(){return v}),O.d(e,!1,function(){return L}),O.d(e,!1,function(){return y}),O.d(e,!1,function(){return H}),O.d(e,!1,function(){return G}),O.d(e,!1,function(){return F}),O.d(e,!1,function(){return w}),O.d(e,!1,function(){return K}),O.d(e,"d",function(){return tt}),O.d(e,"b",function(){return Ot}),O.d(e,"a",function(){return b});const nt=Object(T.a)(Object(r.j)(n),(t,e)=>t.pipe(Object(c.a)(t=>Object(a.a)(t,u.CHANGE(e.repo.latest()))),Object(o.a)(i.a)))},5:function(t,e,O){"use strict";O.r(e);var n={};O.d(n,"bootEpic",function(){return m}),O.d(n,"addTodoEpic",function(){return v}),O.d(n,"deleteTodoEpic",function(){return L}),O.d(n,"updateEpic",function(){return y});var o=O(15),c=O(1),i=O(2),a=O(22);const r=Object(c.b)("APP_SESSION/INPUT/"),T=Object(c.b)("APP_SESSION/OUTPUT/"),s={INPUT:{PATCH:r("PATCH")},OUTPUT:{CHANGE:T("CHANGE")}};var d=O(25),E=O(109),p=O(89),u=O(65),b=O(28),j=O(4),N=O(54),I=O(23),P=O(8),_=O(46),R=O(47),D=O(66);const l=t=>t.content.trim().length>0,U=t=>Object.assign({},t,{updatedAt:Date.now()}),A=()=>({}),S=t=>e=>Object.assign({},e,{[t.id]:t}),g=Object(c.b)("TODO/INPUT/"),M=Object(c.b)("TODO/OUTPUT/"),f={ADD:g("ADD"),DELETE:g("DELETE"),UPDATE:g("UPDATE"),INCREMENT_MILESTONE:g("INCREMENT_MILESTONE"),TOGGLE_COMPLETION:g("TOGGLE_COMPLETION")},C={BOOT:M("BOOT"),ADD:M("ADD"),UPDATE:M("UPDATE"),DELETE:M("DELETE"),CHANGE:M("CHANGE"),ERROR:M("ERROR")},h={INPUT:f,OUTPUT:C},m=(t,e)=>Object(b.a)(e.getAllUnCompletedTodos()).pipe(Object(i.a)(t=>e.repo.update((t=>e=>Object.assign({},e,Object(j.f)(t,"id")))(t))),Object(i.a)(C.BOOT),Object(D.a)(()=>Object(I.a)(C.ERROR({message:"Failed to initial fetch..."})))),v=(t,e)=>Object(c.d)(t,f.ADD).pipe(Object(i.a)(t=>t.payload),Object(P.a)(l),Object(i.a)(t=>(t=>({id:-1,content:t,completed:!1,milestone:0,createdAt:Date.now(),updatedAt:Date.now()}))(t.content)),Object(R.a)(t=>Object(b.a)(e.addTodo(t)).pipe(Object(_.a)(t=>e.repo.update(S(t))),Object(i.a)(C.ADD),Object(D.a)(()=>Object(I.a)(C.ERROR({message:"Failed to add todo..."})))))),L=(t,e)=>Object(c.d)(t,f.DELETE).pipe(Object(i.a)(t=>e.repo.get(t.payload.id+"")),Object(P.a)(j.b),Object(R.a)(t=>Object(b.a)(e.deleteTodo(t)).pipe(Object(_.a)(t=>e.repo.update((t=>e=>Object(j.h)(e,t.id+""))(t))),Object(i.a)(C.DELETE),Object(D.a)(()=>Object(I.a)(C.ERROR({message:"Failed to delete todo..."})))))),y=(t,e)=>{return Object(o.a)(Object(c.d)(t,f.UPDATE).pipe(Object(i.a)(t=>t.payload),Object(P.a)(l),Object(p.a)(t=>Object(I.a)(e.repo.get(t.id+"")).pipe(Object(P.a)(j.b),Object(i.a)(e=>U(Object.assign({},e,{content:t.content})))))),Object(c.d)(t,f.INCREMENT_MILESTONE).pipe(Object(i.a)(t=>e.repo.get(t.payload.id+"")),Object(P.a)(j.b),Object(i.a)(t=>U(Object.assign({},t,{milestone:t.milestone+1})))),Object(c.d)(t,f.TOGGLE_COMPLETION).pipe(Object(i.a)(t=>e.repo.get(t.payload.id+"")),Object(P.a)(j.b),Object(i.a)(t=>U(Object.assign({},t,{completed:!t.completed}))))).pipe(Object(R.a)(t=>Object(b.a)(e.updateTodo(t)).pipe(Object(_.a)(t=>e.repo.update(S(t))),Object(i.a)(C.UPDATE),Object(D.a)(()=>Object(I.a)(C.ERROR({message:"Failed to update todo..."}))))))};var H=O(172);const G=Object(c.b)("TODO_FORM/INPUT/"),F=Object(c.b)("TODO_FORM/OUTPUT/"),w={INPUT:{PATCH:G("PATCH")},OUTPUT:{CHANGE:F("CHANGE")}},K=()=>({appSession:(()=>new a.a(()=>({})))(),pomodoroTimer:Object(d.b)(),todo:(()=>new a.a(A))(),todoForm:(()=>new a.a(Object(j.a)({})))()}),W=Object(c.b)("INTENT/"),B={POMODORO_TIMER_START:W("POMODORO_TIMER_START"),POMODORO_TIMER_PAUSE:W("POMODORO_TIMER_PAUSE"),POMODORO_TIMER_RESUME:W("POMODORO_TIMER_RESUME"),POMODORO_TIMER_SKIP:W("POMODORO_TIMER_SKIP"),POMODORO_TIMER_RESET:W("RESET"),INPUT_NEW_TODO_CONTENT:W("INPUT_NEW_TODO_CONTENT"),INPUT_ENDIT_TODO_CONTENT:W("INPUT_ENDIT_TODO_CONTENT"),SHOW_TODO_EDIT_FORM:W("SHOW_TODO_EDIT_FORM"),CLOSE_TODO_EDIT_FORM:W("CLOSE_TODO_EDIT_FORM"),ADD_NEW_TODO:W("ADD_TODO"),DELETE_TODO:W("DELETE_TODO"),UPDATE_TODO_CONTENT:W("UPDATE_TODO"),TOGGLE_TODO_COMPLETION:W("COMPLETE_TODO"),CLEAN_COMPLETED_TODOS:W("CLEAN_COMPLETED_TODOS")};var k=O(103);var V=function(t,e,O,n){return new(O||(O=Promise))(function(o,c){function i(t){try{r(n.next(t))}catch(t){c(t)}}function a(t){try{r(n.throw(t))}catch(t){c(t)}}function r(t){t.done?o(t.value):new O(function(e){e(t.value)}).then(i,a)}r((n=n.apply(t,e||[])).next())})};const x=t=>({getAllUnCompletedTodos(){return t.transaction("r",t.todos,()=>V(this,void 0,void 0,function*(){return t.todos.toCollection().filter(t=>!Boolean(t.completed)).sortBy("updatedAt")}))},addTodo(e){return t.transaction("rw",t.todos,()=>V(this,void 0,void 0,function*(){const O=yield t.todos.put(Object(j.h)(e,"id"));return t.todos.get(O)}))},updateTodo(e){return t.transaction("rw",t.todos,()=>V(this,void 0,void 0,function*(){return yield t.todos.put(e),e}))},deleteTodo(e){return t.transaction("rw",t.todos,()=>V(this,void 0,void 0,function*(){return yield t.todos.delete(e.id),e}))}}),J={};const $=()=>new class extends k.a{constructor(t={}){super("PomodoroTimerDB",t),this.version(1).stores({todos:"++id,createdAt,updatedAt"})}}(J),q=(t,e)=>((t,e)=>Object(c.d)(t,s.INPUT.PATCH).pipe(Object(i.a)(t=>t.payload),Object(i.a)(t=>e.repo.update(t)),Object(i.a)(s.OUTPUT.CHANGE)))(((t,e)=>Object(o.a)(Object(c.d)(t,B.POMODORO_TIMER_START).pipe(Object(i.a)(t=>String(t.payload.todoId)),Object(i.a)(t=>e.todo.get(t)),Object(P.a)(j.b),Object(i.a)(t=>s.INPUT.PATCH(e=>Object.assign({},e,{currentTimerTarget:t})))),Object(c.d)(t,B.POMODORO_TIMER_RESET).pipe(Object(i.a)(()=>s.INPUT.PATCH(t=>Object.assign({},t,{currentTimerTarget:void 0})))),Object(c.d)(t,h.OUTPUT.CHANGE).pipe(Object(i.a)(()=>e.appSession.get("currentTimerTarget")),Object(i.a)(t=>t?String(t.id):""),Object(i.a)(t=>e.todo.get(t)),Object(i.a)(t=>s.INPUT.PATCH(e=>Object.assign({},e,{currentTimerTarget:t}))))))(t,e),{repo:e.appSession});var z=O(37);var Q=O(108),X=O(45);const Y=(t,e,O)=>{const a=Object.assign({repo:e.todo},O),r=Object(o.a)(Object(c.d)(t,B.ADD_NEW_TODO).pipe(Object(i.a)(t=>h.INPUT.ADD(t.payload))),Object(c.d)(t,B.UPDATE_TODO_CONTENT).pipe(Object(i.a)(t=>h.INPUT.UPDATE(t.payload))),Object(c.d)(t,B.DELETE_TODO).pipe(Object(i.a)(t=>h.INPUT.DELETE(t.payload))),Object(c.d)(t,B.TOGGLE_TODO_COMPLETION).pipe(Object(i.a)(t=>h.INPUT.TOGGLE_COMPLETION(t.payload))),Object(c.d)(t,d.a.OUTPUT.TIMEUP).pipe(Object(X.a)(()=>Object(c.d)(t,d.a.OUTPUT.END).pipe(Object(Q.a)(1),Object(i.a)(()=>e.appSession.get("currentTimerTarget")),Object(P.a)(j.b),Object(i.a)(t=>h.INPUT.INCREMENT_MILESTONE({id:t.id}))))));return t=r,O=a,Object(N.a)(Object(j.j)(n))(t,O).pipe(Object(p.a)(t=>Object(b.a)([t,C.CHANGE(O.repo.latest())])),Object(E.a)(u.a))};var Z,tt;const et=(t,e)=>{return((t,e)=>Object(c.d)(t,w.INPUT.PATCH).pipe(Object(i.a)(t=>t.payload),Object(H.a)(10),Object(i.a)(t=>e.repo.update(t)),Object(i.a)(w.OUTPUT.CHANGE)))(Object(o.a)(Object(c.d)(t,B.INPUT_NEW_TODO_CONTENT).pipe(Object(i.a)(t=>t.payload),Object(i.a)(t=>w.INPUT.PATCH(e=>Object.assign({},e,{newEntryTodoContent:t})))),Object(c.d)(t,h.OUTPUT.ADD).pipe(Object(i.a)(()=>w.INPUT.PATCH(t=>Object.assign({},t,{newEntryTodoContent:void 0})))),Object(c.d)(t,[B.INPUT_ENDIT_TODO_CONTENT,B.SHOW_TODO_EDIT_FORM]).pipe(Object(i.a)(t=>t.payload),Object(i.a)(t=>w.INPUT.PATCH(e=>Object.assign({},e,{editingTodoId:t.id,editingTodoContent:t.content})))),Object(c.d)(t,[B.CLOSE_TODO_EDIT_FORM,h.OUTPUT.UPDATE]).pipe(Object(i.a)(t=>t.payload),Object(i.a)(()=>w.INPUT.PATCH(t=>Object.assign({},t,{editingTodoId:void 0,editingTodoContent:void 0})))),Object(c.d)(t,[h.OUTPUT.DELETE]).pipe(Object(i.a)(t=>t.payload),Object(P.a)(t=>e.todoForm.validate(e=>e.editingTodoId===t.id)),Object(i.a)(()=>w.INPUT.PATCH(t=>Object.assign({},t,{editingTodoId:void 0,editingTodoContent:void 0}))))),{repo:e.todoForm})};O.d(e,"service",function(){return Ot}),O.d(e,"createRepsitoryGroup",function(){return K}),O.d(e,"INTENTS",function(){return B}),O.d(e,"APP_SESSION",function(){return s}),O.d(e,"POMODORO_TIMER",function(){return d.a}),O.d(e,"TODO",function(){return h}),O.d(e,"TODO_FORM",function(){return w});const Ot=t=>{const e=(t=>Object.assign({},x(t)))($()),O=K();return Object(o.a)(q(t,O),((t,e,O={Notification:Notification})=>{const n={repo:e.pomodoroTimer,sendNotification:(t,e)=>new O.Notification(t,e)},a=Object(o.a)(Object(c.d)(t,B.POMODORO_TIMER_START).pipe(Object(P.a)(()=>e.appSession.validate(t=>void 0!=t.currentTimerTarget)),Object(z.a)(d.a.INPUT.START())),Object(c.d)(t,B.POMODORO_TIMER_PAUSE).pipe(Object(z.a)(d.a.INPUT.PAUSE())),Object(c.d)(t,B.POMODORO_TIMER_RESUME).pipe(Object(z.a)(d.a.INPUT.RESUME())),Object(c.d)(t,B.POMODORO_TIMER_SKIP).pipe(Object(P.a)(()=>e.appSession.validate(t=>!!t.currentTimerTarget)),Object(z.a)(d.a.INPUT.SKIP())),Object(c.d)(t,B.POMODORO_TIMER_RESET).pipe(Object(z.a)(d.a.INPUT.RESET())),Object(c.d)(t,B.CLEAN_COMPLETED_TODOS).pipe(Object(i.a)(()=>e.appSession.get("currentTimerTarget")),Object(P.a)(j.b),Object(i.a)(t=>e.todo.get(t.id+"")),Object(P.a)(j.b),Object(P.a)(t=>t.completed),Object(z.a)(d.a.INPUT.RESET())),Object(c.d)(t,Object(j.j)(d.a.OUTPUT)));return Object(d.c)(a,n)})(t,O),Y(t,O,e),et(t,O))}},54:function(t,e,O){"use strict";O.d(e,"a",function(){return o});var n=O(15);function o(t,e){return(O,o)=>{const c=t.map(t=>t(O,o)),i=Object(n.a)(...c);return e?i.pipe(t=>e(t,o)):i}}},55:function(t,e,O){"use strict";var n=O(0),o=O(17),c=O(9),i=O(4),a=O(5);O.d(e,"b",function(){return r});const r=Object(c.b)(()=>({todos:[],isPomodoroTimerStartable:!0,currentEditingTodoId:null,currentTimerTargetId:null}))(Object(c.a)(a.POMODORO_TIMER.OUTPUT.CHANGE,(t,e)=>{const{isWorking:O,isPausing:n}=e.payload,o=!O&&!n;return Object.assign({},t,{isPomodoroTimerStartable:o})}),Object(c.a)(a.APP_SESSION.OUTPUT.CHANGE,(t,e)=>{const{currentTimerTarget:O}=e.payload,n=O?O.id:null;return Object.assign({},t,{currentTimerTargetId:n})}),Object(c.a)(a.TODO_FORM.OUTPUT.CHANGE,(t,e)=>{const{editingTodoId:O}=e.payload,n=O||null;return Object.assign({},t,{currentEditingTodoId:n})}),Object(c.a)(a.TODO.OUTPUT.BOOT,(t,e)=>{const O=Object(i.j)(e.payload).sort((t,e)=>e.id-t.id);return Object.assign({},t,{todos:O})}),Object(c.a)(a.TODO.OUTPUT.ADD,(t,e)=>{const O=[e.payload,...t.todos];return Object.assign({},t,{todos:O})}),Object(c.a)(a.TODO.OUTPUT.UPDATE,(t,e)=>{const O=t.todos.findIndex(t=>t.id===e.payload.id),n=[...t.todos.slice(0,O),e.payload,...t.todos.slice(O+1)];return Object.assign({},t,{todos:n,currentEditingTodoId:null})}),Object(c.a)(a.TODO.OUTPUT.DELETE,(t,e)=>{const O=t.todos.filter(t=>t.id!==e.payload.id);return Object.assign({},t,{todos:O})}),Object(c.a)(a.INTENTS.CLEAN_COMPLETED_TODOS,t=>{const e=t.todos.filter(t=>!t.completed);return Object.assign({},t,{todos:e})}));function T(t){const e=Number(function(t,e){return t.currentTarget.dataset[e]}(t,"todoId"));if(isNaN(e))throw new Error("todoId is not a number.");return e}e.a=Object(o.b)(t=>t.todoList)(class extends n.Component{constructor(){super(...arguments),this.actions={startPomodoroTimer:t=>{const e=T(t),O=a.INTENTS.POMODORO_TIMER_START({todoId:e});return this.props.dispatch(O)},toggleTodoCompletion:t=>{const e=T(t),O=a.INTENTS.TOGGLE_TODO_COMPLETION({id:e});return this.props.dispatch(O)},deleteTodo:t=>{const e=T(t),O=a.INTENTS.DELETE_TODO({id:e});return this.props.dispatch(O)},openTodoEditForm:t=>{const e=T(t),O=this.props.todos.find(t=>t.id===e);if(void 0!=O){const t=a.INTENTS.SHOW_TODO_EDIT_FORM({id:O.id,content:O.content});return this.props.dispatch(t)}}}}render(){return this.props.children(this.props,this.actions)}})},56:function(t,e,O){"use strict";O.d(e,"b",function(){return a});var n=O(0),o=O(17),c=O(9),i=O(5);const a=Object(c.b)(()=>({value:""}))(Object(c.a)(i.TODO_FORM.OUTPUT.CHANGE,(t,e)=>{const O=e.payload.newEntryTodoContent||"";return Object.assign({},t,{value:O})}));e.a=Object(o.b)(t=>t.todoEntryForm)(class extends n.PureComponent{constructor(){super(...arguments),this.inputRef=n.createRef(),this.actions={input:t=>{const e=t.currentTarget.value;this.props.dispatch(i.INTENTS.INPUT_NEW_TODO_CONTENT(e))},submit:t=>{t.preventDefault();const e={content:this.props.value};return this.props.dispatch(i.INTENTS.ADD_NEW_TODO(e))}}}componentDidMount(){void 0!=this.inputRef.current&&this.inputRef.current.focus()}render(){return this.props.children(Object.assign({},this.props,{ref:this.inputRef}),this.actions)}})},57:function(t,e,O){"use strict";O.d(e,"b",function(){return a});var n=O(0),o=O(17),c=O(9),i=O(5);const a=Object(c.b)(()=>({value:""}))(Object(c.a)(i.TODO_FORM.OUTPUT.CHANGE,(t,e)=>{const{editingTodoId:O,editingTodoContent:n}=e.payload;return Object.assign({},t,{todoId:O,value:n||""})}));e.a=Object(o.b)(t=>t.todoEditForm)(class extends n.PureComponent{constructor(){super(...arguments),this.inputRef=n.createRef(),this.actions={input:t=>{const e=t.currentTarget.value,O={id:this.props.todoId,content:e};this.props.dispatch(i.INTENTS.INPUT_ENDIT_TODO_CONTENT(O))},submit:t=>{t.preventDefault();const e={id:this.props.todoId,content:this.props.value};return this.props.dispatch(i.INTENTS.UPDATE_TODO_CONTENT(e))},close:t=>{setTimeout(()=>this.props.dispatch(i.INTENTS.CLOSE_TODO_EDIT_FORM()),50)}}}componentDidMount(){this.inputRef.current&&this.inputRef.current.focus()}render(){const t=Object.assign({},this.props,{ref:this.inputRef});return this.props.children(t,this.actions)}})},59:function(t,e,O){"use strict";O.d(e,"b",function(){return T});var n=O(0),o=O(17),c=O(9),i=O(5),a=O(25);const r=()=>({title:"",time:{min:"25",sec:"00"},isTimerPauseable:!1,isTimerResumeable:!1}),T=Object(c.b)(r)(Object(c.a)(i.POMODORO_TIMER.OUTPUT.CHANGE,(t,e)=>{const{isWorking:O,isPausing:n,left:o}=e.payload,c=O&&!n,i=!O&&n,r=Object(a.d)(o);return Object.assign({},t,{isTimerResumeable:i,isTimerPauseable:c,time:r})}),Object(c.a)(i.APP_SESSION.OUTPUT.CHANGE,(t,e)=>{const O=e.payload.currentTimerTarget,n=O?O.content:"";return Object.assign({},t,{title:n})}));e.a=Object(o.b)(t=>t.pomodoroTimer)(class extends n.Component{constructor(){super(...arguments),this.actions={pause:()=>this.props.dispatch(i.INTENTS.POMODORO_TIMER_PAUSE()),resume:()=>this.props.dispatch(i.INTENTS.POMODORO_TIMER_RESUME()),skip:()=>this.props.dispatch(i.INTENTS.POMODORO_TIMER_SKIP()),reset:()=>this.props.dispatch(i.INTENTS.POMODORO_TIMER_RESET())}}render(){return this.props.children(this.props,this.actions)}})}}]);