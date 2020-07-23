(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{145:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return r})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var o=n(2),i=n(11),a=(n(0),n(161)),l={id:"hello-world",title:"Hello, World!"},r={id:"getting-started/hello-world",isDocsHomePage:!1,title:"Hello, World!",description:"Now that you have installe Whistle on to writing your first program! The program",source:"@site/docs\\getting-started\\hello-world.md",permalink:"/docs/getting-started/hello-world",editUrl:"https://github.com/whistle-lang/website/edit/master/website/docs/getting-started/hello-world.md",sidebar:"someSidebar",previous:{title:"Installation",permalink:"/docs/getting-started/installation"},next:{title:"Syntax",permalink:"/docs/specification/syntax"}},c=[{value:"Writing and Running your first Whistle Program",id:"writing-and-running-your-first-whistle-program",children:[]},{value:"Explanation",id:"explanation",children:[]}],s={rightToc:c};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Now that you have installe ",Object(a.b)("em",{parentName:"p"},"Whistle")," on to writing your first program! The program\nwill print ",Object(a.b)("inlineCode",{parentName:"p"},"Hello, World!")," to the console as per tradition when writing your first\nprogram in a new programming language."),Object(a.b)("h2",{id:"writing-and-running-your-first-whistle-program"},"Writing and Running your first Whistle Program"),Object(a.b)("p",null,"The first step in creating a ",Object(a.b)("em",{parentName:"p"},"Whistle")," program is creating a new file with the\nextension ",Object(a.b)("inlineCode",{parentName:"p"},".whi")," to signify that it is a ",Object(a.b)("em",{parentName:"p"},"Whistle")," source file. This file will\nbe tokenized, parsed and finally compiled by the ",Object(a.b)("em",{parentName:"p"},"Whistle")," compiler."),Object(a.b)("p",null,"In this case a new file called ",Object(a.b)("inlineCode",{parentName:"p"},"HelloWorld.whi")," will be created with the following\ncontent:"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{}),'function Log(text: string): none {\n  #(js) console.log(text);\n}\n\n{\n  Log("Hello, World!")\n}\n')),Object(a.b)("p",null,"All we need to do now to run the program is to run the following in your terminal:"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"}),"$ whistle run HelloWorld.whi\n")),Object(a.b)("p",null,"And the following output should appear in your terminal:"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{}),"Hello, World!\n")),Object(a.b)("p",null,"If ",Object(a.b)("inlineCode",{parentName:"p"},"Hello, World!")," did print, congratulations! You\u2019ve officially written a\n",Object(a.b)("em",{parentName:"p"},"Whistle")," program. If it however did not print your installation most likely\ndid not succeed or your ",Object(a.b)("inlineCode",{parentName:"p"},"PATH")," does not include the ",Object(a.b)("inlineCode",{parentName:"p"},"~\\.deno\\bin")," directory."),Object(a.b)("h2",{id:"explanation"},"Explanation"),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"Hello, World!")," program shows quite a few of ",Object(a.b)("em",{parentName:"p"},"Whistle"),"s design choices and\nhow to use some of the basic features of ",Object(a.b)("em",{parentName:"p"},"Whistle"),"."),Object(a.b)("p",null,"The first important piece of the program is the function declaration declared\nusing the ",Object(a.b)("inlineCode",{parentName:"p"},"function")," keyword. This tells the ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"internals/parser.md"}),"parser")," to\nexpect the name or so called ",Object(a.b)("inlineCode",{parentName:"p"},"identifier")," of the function. After this an optional\nparenthesis enclosed part comes which specifies all of the parameter names and\ntheir respective types. Before the last part which is the actual function body\nstatement the return type of the function is specified."),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{}),"function Log(text: string): none {\n\n}\n")),Object(a.b)("p",null,"When the function declared is supposed to be accessable from other files than\nthe one it is specified in the ",Object(a.b)("inlineCode",{parentName:"p"},"export")," keyword can be used to prefix the function\ndeclaration like this: ",Object(a.b)("inlineCode",{parentName:"p"},"export function example: none { ... }"),"."),Object(a.b)("p",null,'"Tips" in ',Object(a.b)("em",{parentName:"p"},"Whistle")," are specified by using the ",Object(a.b)("inlineCode",{parentName:"p"},"#( ) ...")," syntax (or ",Object(a.b)("inlineCode",{parentName:"p"},"#( ) { ... }#"),'\nfor inline or multiline "tips"). They are a way of telling the compiler things\nabout your code such as telling it to insert the raw javascript code directly into\na program compiled to javascript.'),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{}),"#(js) console.log(text);\n")),Object(a.b)("p",null,"In our case this tells the compiler to call the javascript method ",Object(a.b)("inlineCode",{parentName:"p"},"console.log"),"\ndirectly to print our text parameter to console."),Object(a.b)("p",null,"Finally we come to the last part of the ",Object(a.b)("inlineCode",{parentName:"p"},"Hello, World!")," example, the anonomyous\ncode block containing code that we want to run as soon as the program loads.\nThis is specified by enclosing multiple statements in braces (",Object(a.b)("inlineCode",{parentName:"p"},"{")," and ",Object(a.b)("inlineCode",{parentName:"p"},"}"),").\nOnly anonomyous code blocks are automatically executed at run time while codeblocks\nfollowing for example function declarations are not executed."),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{}),'{\n  Log("Hello, World!")\n}\n')),Object(a.b)("p",null,"In our anonomyous code block we have a function call statement which calls the\nfunction previously declared. It does this by first specifying the identifier of\nthe function to call (in this case ",Object(a.b)("inlineCode",{parentName:"p"},"Log"),") and then enclosing all of the parameters\nto pass to the function in parethesis separated by commas. "))}p.isMDXComponent=!0}}]);