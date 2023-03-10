"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[6063],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var i=n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,s=function(e,t){if(null==e)return{};var n,i,s={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,s=e.mdxType,r=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(n),d=s,m=u["".concat(l,".").concat(d)]||u[d]||h[d]||r;return n?i.createElement(m,a(a({ref:t},p),{},{components:n})):i.createElement(m,a({ref:t},p))}));function m(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=n.length,a=new Array(r);a[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[u]="string"==typeof e?e:s,a[1]=o;for(var c=2;c<r;c++)a[c]=n[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8799:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var i=n(7462),s=(n(7294),n(3905));const r={sidebar_position:1,title:"Python Lists",description:"One of the most fundamental data structures in Python is the list. Lists are ordered collections of items, which can be of different data types, such as integers, strings, or even other lists. In this blog post, we will explore the basics of Python lists, including how to access, change, add, and remove list items.",keywords:["python lists","list add","list remove","list access"]},a="Python Lists",o={unversionedId:"python-collections/python-lists",id:"python-collections/python-lists",title:"Python Lists",description:"One of the most fundamental data structures in Python is the list. Lists are ordered collections of items, which can be of different data types, such as integers, strings, or even other lists. In this blog post, we will explore the basics of Python lists, including how to access, change, add, and remove list items.",source:"@site/python/python-collections/python-lists.md",sourceDirName:"python-collections",slug:"/python-collections/python-lists",permalink:"/blog/python/python-collections/python-lists",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Python Lists",description:"One of the most fundamental data structures in Python is the list. Lists are ordered collections of items, which can be of different data types, such as integers, strings, or even other lists. In this blog post, we will explore the basics of Python lists, including how to access, change, add, and remove list items.",keywords:["python lists","list add","list remove","list access"]},sidebar:"tutorialSidebar",previous:{title:"Python Collections",permalink:"/blog/python/category/python-collections"}},l={},c=[{value:"Accessing List Items",id:"accessing-list-items",level:2},{value:"Changing List Items",id:"changing-list-items",level:2},{value:"Adding List Items",id:"adding-list-items",level:2},{value:"Removing List Items",id:"removing-list-items",level:2},{value:"Conclusion",id:"conclusion",level:2}],p={toc:c},u="wrapper";function h(e){let{components:t,...n}=e;return(0,s.kt)(u,(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"python-lists"},"Python Lists"),(0,s.kt)("p",null,"One of the most fundamental data structures in Python is the list. Lists are ordered collections of items, which can be of different data types, such as integers, strings, or even other lists. In this blog post, we will explore the basics of Python lists, including how to access, change, add, and remove list items."),(0,s.kt)("h2",{id:"accessing-list-items"},"Accessing List Items"),(0,s.kt)("p",null,"Accessing individual items in a list is a fundamental operation that you'll need to perform frequently. In Python, you can access a list item by referring to its index, which is an integer value that represents the item's position in the list. The first item in the list has an index of 0, the second item has an index of 1, and so on."),(0,s.kt)("p",null,"Here's an example:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"fruits = ['apple', 'banana', 'cherry', 'orange', 'kiwi']\nprint(fruits[0]) # Output: 'apple'\nprint(fruits[2]) # Output: 'cherry'\n")),(0,s.kt)("p",null,"You can also access list items using negative indexing, which starts from the end of the list. The last item in the list has an index of -1, the second-to-last item has an index of -2, and so on."),(0,s.kt)("p",null,"Here's an example:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"fruits = ['apple', 'banana', 'cherry', 'orange', 'kiwi']\nprint(fruits[-1]) # Output: 'kiwi'\nprint(fruits[-3]) # Output: 'cherry'\n")),(0,s.kt)("h2",{id:"changing-list-items"},"Changing List Items"),(0,s.kt)("p",null,"Lists are mutable, which means that you can change their contents after they have been created. To modify an item in a list, you can simply assign a new value to its index."),(0,s.kt)("p",null,"Here's an example:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"fruits = ['apple', 'banana', 'cherry', 'orange', 'kiwi']\nfruits[1] = 'pear'\nprint(fruits) # Output: ['apple', 'pear', 'cherry', 'orange', 'kiwi']\n")),(0,s.kt)("h2",{id:"adding-list-items"},"Adding List Items"),(0,s.kt)("p",null,"You can add new items to a list using several methods. One way is to use the ",(0,s.kt)("inlineCode",{parentName:"p"},"append()")," method, which adds an item to the end of the list."),(0,s.kt)("p",null,"Here's an example:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"fruits = ['apple', 'banana', 'cherry', 'orange', 'kiwi']\nfruits.append('pear')\nprint(fruits) # Output: ['apple', 'banana', 'cherry', 'orange', 'kiwi', 'pear']\n")),(0,s.kt)("p",null,"Another way to add items to a list is to use the ",(0,s.kt)("inlineCode",{parentName:"p"},"insert()")," method, which allows you to specify the index where the new item should be inserted."),(0,s.kt)("p",null,"Here's an example:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"fruits = ['apple', 'banana', 'cherry', 'orange', 'kiwi']\nfruits.insert(1, 'pear')\nprint(fruits) # Output: ['apple', 'pear', 'banana', 'cherry', 'orange', 'kiwi']\n")),(0,s.kt)("h2",{id:"removing-list-items"},"Removing List Items"),(0,s.kt)("p",null,"You can remove items from a list using the ",(0,s.kt)("inlineCode",{parentName:"p"},"remove()")," method, which removes the first occurrence of the specified item."),(0,s.kt)("p",null,"Here's an example:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"fruits = ['apple', 'banana', 'cherry', 'orange', 'kiwi']\nfruits.remove('banana')\nprint(fruits) # Output: ['apple', 'cherry', 'orange', 'kiwi']\n")),(0,s.kt)("p",null,"Another way to remove items from a list is to use the ",(0,s.kt)("inlineCode",{parentName:"p"},"del")," statement, which can remove an item at a specific index or remove the entire list."),(0,s.kt)("p",null,"Here's an example:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"fruits = ['apple', 'banana', 'cherry', 'orange', 'kiwi']\ndel fruits[1]\nprint(fruits) # Output: ['apple', 'cherry', 'orange', 'kiwi']\n\ndel fruits # remove the entire list\n")),(0,s.kt)("h2",{id:"conclusion"},"Conclusion"),(0,s.kt)("p",null,"Python lists are versatile and powerful data structures that you will use frequently in your coding journey. Understanding how to access, change, add, and remove list items is essential for manipulating lists effectively. By mastering these fundamental skills, you'll be well on your way to becoming a proficient Python programmer."))}h.isMDXComponent=!0}}]);