function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./index-eyBWWKHX.js","./index-BAKmkOnN.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as p}from"./iframe-UwWVt-t8.js";import{R as o,r as a}from"./index-BAKmkOnN.js";import{c as l}from"./client-oB22EX3o.js";import{C as h,A as d,H as E,D as R}from"./index-McKQiI6u.js";import"../sb-preview/runtime.js";import"./index-ohgCZvhn.js";import"./index-B_J8iUie.js";import"./index-D5LNVTra.js";import"./index-DrFu-skq.js";var n=new Map,f=({callback:e,children:t})=>{let r=a.useRef();return a.useLayoutEffect(()=>{r.current!==e&&(r.current=e,e())},[e]),t},x=async(e,t)=>{let r=await w(t);return new Promise(s=>{r.render(o.createElement(f,{callback:()=>s(null)},e))})},_=(e,t)=>{let r=n.get(e);r&&(r.unmount(),n.delete(e))},w=async e=>{let t=n.get(e);return t||(t=l.createRoot(e),n.set(e,t)),t},D={code:h,a:d,...E},g=class extends a.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(e){let{showException:t}=this.props;t(e)}render(){let{hasError:e}=this.state,{children:t}=this.props;return e?null:o.createElement(o.Fragment,null,t)}},S=class{constructor(){this.render=async(e,t,r)=>{let s={...D,...t==null?void 0:t.components},m=R;return new Promise((i,c)=>{p(()=>import("./index-eyBWWKHX.js"),__vite__mapDeps([0,1]),import.meta.url).then(({MDXProvider:u})=>x(o.createElement(g,{showException:c,key:Math.random()},o.createElement(u,{components:s},o.createElement(m,{context:e,docsParameter:t}))),r)).then(()=>i())})},this.unmount=e=>{_(e)}}};export{S as DocsRenderer,D as defaultComponents};
