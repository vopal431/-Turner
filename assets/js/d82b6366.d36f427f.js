"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[6395],{76519:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var n=a(87462),r=(a(67294),a(3905));a(83989);const i={},l="Substrate Core Polywrapper",o={unversionedId:"Applications/substrate_core_polywrapper",id:"Applications/substrate_core_polywrapper",title:"Substrate Core Polywrapper",description:"- Team Name: ChainSafe",source:"@site/docs/Applications/substrate_core_polywrapper.md",sourceDirName:"Applications",slug:"/Applications/substrate_core_polywrapper",permalink:"/Grants-Program/Applications/substrate_core_polywrapper",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Substrate Client for Java",permalink:"/Grants-Program/Applications/substrate_client_java"},next:{title:"Substrate startkit GUI",permalink:"/Grants-Program/Applications/substrate_startkit_GUI"}},p={},s=[{value:"Project Overview \ud83d\udcc4",id:"project-overview-",level:2},{value:"Overview",id:"overview",level:3},{value:"Project Details",id:"project-details",level:3},{value:"Ecosystem Fit",id:"ecosystem-fit",level:3},{value:"Team \ud83d\udc65",id:"team-",level:2},{value:"Team members",id:"team-members",level:3},{value:"Contact",id:"contact",level:3},{value:"Legal Structure",id:"legal-structure",level:3},{value:"Team&#39;s experience",id:"teams-experience",level:3},{value:"Team Code Repos",id:"team-code-repos",level:3},{value:"Team LinkedIn Profiles (if available)",id:"team-linkedin-profiles-if-available",level:3},{value:"Development Status \ud83d\udcd6",id:"development-status-",level:2},{value:"Development Roadmap \ud83d\udd29",id:"development-roadmap-",level:2},{value:"Overview",id:"overview-1",level:3},{value:"Milestone 1 - Substrate RPC Polywrapper",id:"milestone-1---substrate-rpc-polywrapper",level:3},{value:"1. Schema Definitions",id:"1-schema-definitions",level:3},{value:"2. <code>signer-provider</code> JavaScript Plugin",id:"2-signer-provider-javascript-plugin",level:3},{value:"3. <code>rpc-wrapper</code> Wrapper",id:"3-rpc-wrapper-wrapper",level:3},{value:"Future Plans",id:"future-plans",level:2},{value:"Additional Information \u2795",id:"additional-information-",level:2}],h={toc:s};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"substrate-core-polywrapper"},"Substrate Core Polywrapper"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Team Name:")," ChainSafe"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Co-Sponsor:")," Polywrap DAO (",(0,r.kt)("a",{parentName:"li",href:"https://snapshot.org/#/polywrap.eth/proposal/0x1c4b651c654c9409353e70e4675b3311f06a06ab40d8818e4370faa064c5645d"},"Approved Grant Proposal"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Payment Address:")," 0x85D81Ab61Fe16CDcaeF2Ca556ED4577A51b9b07C (USDC preffered)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"https://github.com/w3f/Grants-Program/tree/master#level_slider-levels"},"Level"),":")," 2")),(0,r.kt)("h2",{id:"project-overview-"},"Project Overview \ud83d\udcc4"),(0,r.kt)("h3",{id:"overview"},"Overview"),(0,r.kt)("p",null,"For this proposal, we'll be developing:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Substrate Core RPC Polywrapper:")," Polywrapper in Rust that enables users to interact with substrate-based chains using any language on any platform."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Substrate Signer Provider Plugin (js):")," Polywrap Plugin for Javascript host that allows signing of messages and transactions to be done using the polkadot-js browser plugin."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Developer Documentation:")," Documentation showing developers how they can use the substrate core wrapper within their dapps and wrappers.")),(0,r.kt)("p",null,"In the future, we'd like to continue this work by developing:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Token Balance Interface:"),' Polywrap standard interface that defines common functionality for all pallets supporting "balances".'),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Balances Implementation Wrapper:"),' An implementation of the "Token Balance" interface that interacts with the ',(0,r.kt)("a",{parentName:"li",href:"https://github.com/paritytech/substrate/tree/master/frame/balances"},"Balances pallet"),"'s ABI."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"[Pallet ABI -> Polywrapper]"," Codegenerator:")," A code generator that generates Polywrap code based on a Pallet's ABI (leveraging the ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/paritytech/substrate/pull/8615"},"chain's metadata"),")."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Developer Documentation:")," Documentation showing developers how they can use the Balance wrapper, implement their own Balances implementation, and generate Polywrappers from pallet ABIs.")),(0,r.kt)("p",null,"Future proposals will be made for the above. Below we'll explain the work in its entirety."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"About Polywrap:"),"\nPolywrap is a dev toolchain that enables easy integration of Web3 protocols into any application. It makes it possible for software on any device, written in any language, to read and write data to Web3 protocols."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://polywrap.io/#/"},"https://polywrap.io/#/")),(0,r.kt)("h3",{id:"project-details"},"Project Details"),(0,r.kt)("p",null,"Polywrapper will be written in Rust and compiled to WASM so that it can be used by developers to call substrate methods by simply invoking graphql calls. We will deploy the Substrate wrapper to IPFS."),(0,r.kt)("p",null,"Project heavily relies on the Polywrap toolchain and Polywrap team support."),(0,r.kt)("h3",{id:"ecosystem-fit"},"Ecosystem Fit"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Where and how does your project fit into the ecosystem?")),(0,r.kt)("p",{parentName:"li"},"Polywrap will allow polkadot dapp developers to integrate protocol logic into dapps in a simple, familiar way, regardless of their implementation language."),(0,r.kt)("p",{parentName:"li"},'Additionally it will enable a new "standardization layer" for dapps developers to use, enabling the aggregation of multiple similar-but-different chains. The first standard interface we\'ll be developing in the future will be the "token balance" interface. We will create an implementation of this interface for the ',(0,r.kt)("a",{parentName:"p",href:"https://github.com/paritytech/substrate/tree/master/frame/balances"},"Substrate Balance Pallet"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Who is your target audience (parachain/dapp/wallet/UI developers, designers, your own user base, some dapp's userbase, yourself)?")),(0,r.kt)("p",{parentName:"li"},"Our initial target audiences are dapp/wallet developers, as well as the broader web3 developer ecosystem since Polywrap is architected in a chain-agnostic way. We'll be working with the ",(0,r.kt)("a",{parentName:"p",href:"https://talisman.xyz/"},"Talisman")," team to ensure the work we're doing aligns with their wallet's needs. We've already had preliminary conversations with them, and they're excited to work with the software we build for this grant."),(0,r.kt)("p",{parentName:"li"},"Additionally the Talisman team has confirmed that, if this Polywrap integration suites their needs like they/we think it will, they are willing to help contribute to the codebase(s) going forward along with ChainSafe and the Polywrap DAO.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"What need(s) does your project meet?")),(0,r.kt)("p",{parentName:"li"},"Polywrap meets the needs of dapp developers who want a simple way to integrate protocol logic into their dapps.  The Polywrap integration experience should be extremely familiar to any develop who has integrated a Web 2.0 API.  The dapp dev simply needs to add the Polywrap client into their dapp, and then they will be able to send GraphQL queries to an endpoint to execute protocol functions."),(0,r.kt)("p",{parentName:"li"},"Additionally, as previously stated, we've noticed that in the multi-para-chain future there is a need for another layer of standardization. This is because pallet ABIs may be different amongst multiple chains, but be effectively serving the same purpose (Tokens, AMMs, Profiles, Governance, etc). With Polywrap developers can create standard interfaces that can be implemented in many different ways, depending on the pallet being used. The dapp developer simply uses the standard interface methods/types, and doesn't have to care about the implementation details of the chain/pallet. We feel that this goes hand-in-hand with the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/paritytech/substrate/pull/8615"},'"enriched metadata & typeinfo"')," feature that was recently merged."),(0,r.kt)("p",{parentName:"li"},'Lastly, it\'s worth noting that polywrappers can be downloaded and executed at run-time due to the security and portability of WebAssembly. This means that dapps using the "Token Balance" interface can potentially update themselves without having to be rebuilt, dynamically supporting new chains as they come online.')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Are there any other projects similar to yours in the Substrate / Polkadot / Kusama ecosystem?")),(0,r.kt)("p",{parentName:"li"},"There are not other projects solving the integration issue today at the SDK layer. As previously mentioned, the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/paritytech/substrate/pull/8615"},'"enriched metadata & typeinfo"')," PR solves the introspection problem at the chain-level, but there is more to do farther down the integration pipeline at the dapp level. This is where Polywrap will help."))),(0,r.kt)("h2",{id:"team-"},"Team \ud83d\udc65"),(0,r.kt)("h3",{id:"team-members"},"Team members"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Matthias Seitz - Team Lead"),(0,r.kt)("li",{parentName:"ul"},"Tianyi Zhang"),(0,r.kt)("li",{parentName:"ul"},"Willes Lau"),(0,r.kt)("li",{parentName:"ul"},"Willem Olding")),(0,r.kt)("h3",{id:"contact"},"Contact"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Contact Name:")," Marin Petruni\u0107"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Contact Email:")," ",(0,r.kt)("a",{parentName:"li",href:"mailto:marin@chainsafe.io"},"marin@chainsafe.io")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Website:")," ",(0,r.kt)("a",{parentName:"li",href:"https://chainsafe.io/"},"https://chainsafe.io/"))),(0,r.kt)("h3",{id:"legal-structure"},"Legal Structure"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Registered Address:")," 251 Spadina Ave, Unit 204, Toronto, Ontario, Canada"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Registered Legal Entity:")," ChainSafe Systems Inc.")),(0,r.kt)("h3",{id:"teams-experience"},"Team's experience"),(0,r.kt)("p",null,"ChainSafe is a global leader in blockchain protocol and infrastructure solutions for Web 3.0. The firm encompasses top engineering talent from around the world. The company is architecting official client implementations on Ethereum 2.0 (\u201c",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ChainSafe/lodestar"},"Lodestar"),"\u201d), Polkadot (\u201c",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ChainSafe/gossamer"},"Gossamer"),"\u201d), Filecoin (\u201c",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ChainSafe/forest"},"Forest\u2019\u2019"),"), a ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ChainSafe/mina-rs"},"Rust implementation of the Mina Protocol"),", and many more."),(0,r.kt)("p",null,"ChainSafe rounds out their deep Web 3.0 portfolio with undertakings into product development via their privacy-first file storage solution ",(0,r.kt)("a",{parentName:"p",href:"https://app.files.chainsafe.io/"},"ChainSafe Files"),", the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ChainSafe/web3.unity"},"ChainSafe Gaming SDK"),", as well as their flagship product ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ChainSafe/ChainBridge"},"ChainBridge"),"."),(0,r.kt)("h3",{id:"team-code-repos"},"Team Code Repos"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/ChainSafe"},"https://github.com/ChainSafe")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/ChainSafe/gossamer"},"https://github.com/ChainSafe/gossamer")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/ChainSafe/PINT"},"https://github.com/ChainSafe/PINT")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/ChainSafe/chainlink-polkadot"},"https://github.com/ChainSafe/chainlink-polkadot")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/polywrap"},"https://github.com/polywrap"))),(0,r.kt)("p",null,"Please also provide the GitHub accounts of all team members. If they contain no activity, references to projects hosted elsewhere or live are also fine."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/mattsse"},"https://github.com/mattsse")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"http://github.com/clearloop"},"http://github.com/clearloop")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/willeslau"},"https://github.com/willeslau")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/willemolding/"},"https://github.com/willemolding/"))),(0,r.kt)("h3",{id:"team-linkedin-profiles-if-available"},"Team LinkedIn Profiles (if available)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/matthias-seitz-a49378211/"},"https://www.linkedin.com/in/matthias-seitz-a49378211/")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/tianyi-zhang-2277191a3/"},"https://www.linkedin.com/in/tianyi-zhang-2277191a3/")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/willem-olding/"},"https://www.linkedin.com/in/willem-olding/"))),(0,r.kt)("h2",{id:"development-status-"},"Development Status \ud83d\udcd6"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Academic publications relevant to the problem",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Documentation: ",(0,r.kt)("a",{parentName:"li",href:"https://docs.polywrap.io/"},"https://docs.polywrap.io/")))),(0,r.kt)("li",{parentName:"ul"},"Links to your research diary, blog posts, articles, forum discussions or open GitHub issues,",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Blog Post - Polywrap: Improving how dApps Integrate with Uniswap v2",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://blog.polywrap.io/p/uniswap-v2"},"https://blog.polywrap.io/p/uniswap-v2")))))),(0,r.kt)("li",{parentName:"ul"},"References to conversations you might have had related to this project with anyone from the Web3 Foundation",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"In July, Rohan Joseph, a member of the Parity ecosystem growth team reached out to Jordan, one of the original developers, to learn more about the Polywrap technology"),(0,r.kt)("li",{parentName:"ul"},"In August, the Polywrap team met with Rohan and also his coworker, Surag Sheth, to go over the Polywrap tech.  The Polywrap team also learned more about the W3F Grants Program and the benefits of applying"),(0,r.kt)("li",{parentName:"ul"},"After this meeting, Rohan connected the Polywrap team to Marcin from the W3F."),(0,r.kt)("li",{parentName:"ul"},"In an email to Marcin, Kevin from the Polywrap team asked ChainSafe can work on the Polkadot ","<",">"," Polywrap integration, and whether the Level 3 application would work.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Marcin let us know to just submit the application which will be reviewed"))))),(0,r.kt)("li",{parentName:"ul"},"Progress on the project:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"13 slide deck showing progress: ",(0,r.kt)("a",{parentName:"li",href:"https://www.canva.com/design/DAEp9ePJUQ0/HaHaeo5uC3ERY0iyuLPHMw/view?utm_content=DAEp9ePJUQ0&utm_campaign=designshare&utm_medium=link&utm_source=publishpresent"},"https://www.canva.com/design/DAEp9ePJUQ0/HaHaeo5uC3ERY0iyuLPHMw/view?utm_content=DAEp9ePJUQ0&utm_campaign=designshare&utm_medium=link&utm_source=publishpresent")),(0,r.kt)("li",{parentName:"ul"},"Core toolchain with CLI support: ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/polywrap/monorepo"},"https://github.com/polywrap/monorepo")),(0,r.kt)("li",{parentName:"ul"},"Rust support (pending review): ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/polywrap/monorepo/pull/523"},"https://github.com/polywrap/monorepo/pull/523")),(0,r.kt)("li",{parentName:"ul"},"Polywrap Hub - the web3 aggregator (in progress): ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/polywrap/hub"},"https://github.com/polywrap/hub"))))),(0,r.kt)("h2",{id:"development-roadmap-"},"Development Roadmap \ud83d\udd29"),(0,r.kt)("h3",{id:"overview-1"},"Overview"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Total Estimated Duration:")," 1 month"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Full-Time Equivalent (FTE):"),"  2 Software Engineer, 0.5 Project Manager"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Total W3F Costs:")," 50 000$"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Total Polywrap DAO Costs:")," 27 000$ & 60 WRAP (",(0,r.kt)("a",{parentName:"li",href:"https://snapshot.org/#/polywrap.eth/proposal/0x1c4b651c654c9409353e70e4675b3311f06a06ab40d8818e4370faa064c5645d"},"Approved Grant Proposal"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Start Date:")," 11. April 2022")),(0,r.kt)("h3",{id:"milestone-1---substrate-rpc-polywrapper"},"Milestone 1 - Substrate RPC Polywrapper"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Estimated duration:")," 1 month"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"FTE:"),"  2 Software Engineer, 0.5 Project Manager"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Costs:")," 50 000$")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"right"},"Number"),(0,r.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,r.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"0a."),(0,r.kt)("td",{parentName:"tr",align:null},"License"),(0,r.kt)("td",{parentName:"tr",align:null},"Apache 2.0 / GPLv3 / MIT / Unlicense")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"0b."),(0,r.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,r.kt)("td",{parentName:"tr",align:null},"We will provide both ",(0,r.kt)("strong",{parentName:"td"},"inline documentation")," of the code and a basic ",(0,r.kt)("strong",{parentName:"td"},"tutorial")," that explains how a user can interact with polywrapper")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"0c."),(0,r.kt)("td",{parentName:"tr",align:null},"Testing Guide"),(0,r.kt)("td",{parentName:"tr",align:null},"Core functions will be fully covered by unit tests and e2e tests using polywrap recipes json tests")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"0d."),(0,r.kt)("td",{parentName:"tr",align:null},"Article"),(0,r.kt)("td",{parentName:"tr",align:null},"We will publish an article that explains the what/why/how of integrating Substrate based chains using Polywrap. Some examples from the BlockWatch team's Tezos integration: ",(0,r.kt)("a",{parentName:"td",href:"https://blockwatch.cc/blog/announcing-tezos-polywrapper/"},"launch article"),", ",(0,r.kt)("a",{parentName:"td",href:"https://blockwatch.gitbook.io/polywrap-tezos/"},"dev docs"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"1."),(0,r.kt)("td",{parentName:"tr",align:null},"Schema Definitions"),(0,r.kt)("td",{parentName:"tr",align:null},"Described below")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"2."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"signer-provider")," Polywrap Client JavaScript Plugin"),(0,r.kt)("td",{parentName:"tr",align:null},"Described below")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"3."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"rpc-wrapper")," Wrapper"),(0,r.kt)("td",{parentName:"tr",align:null},"Described below")))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"NOTE: 2 & 3 can be developed in parallel once schemas are defined.")),(0,r.kt)("h3",{id:"1-schema-definitions"},"1. Schema Definitions"),(0,r.kt)("p",null,"There will be 2 Polywrap schemas:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"signer-provider")," - Low-level interface for accessing the application's configureable signer / provider."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"rpc-wrapper")," - Higher-level interface for interacting with a substrate based chain. This depends upon on an implementation of the substrate-signer-provider interface above.")),(0,r.kt)("p",null,'To get a better idea of what this "separation of concerns" looks like in practice, please refer to ',(0,r.kt)("a",{parentName:"p",href:"https://github.com/polywrap/integrations/blob/main/near/Near%20Polywrapper%20Specification.md#near-polywrapper-specification"},"this example specification")," for the Polywrap ","<",">"," Near integration that's actively being developed."),(0,r.kt)("h3",{id:"2-signer-provider-javascript-plugin"},"2. ",(0,r.kt)("inlineCode",{parentName:"h3"},"signer-provider")," JavaScript Plugin"),(0,r.kt)("p",null,"Plugins, in the context of Polywrap, are a special type of wrapper. Instead of being run as WebAssembly, they run as native modules in the application's language (ex: JavaScript). This allows the wrappers to access the application's native capabilities (ex: filesystem access), unlike WebAssembly wrappers which are run within their own nano-process sandboxed."),(0,r.kt)("p",null,"The Substrate ",(0,r.kt)("inlineCode",{parentName:"p"},"signer-provider")," plugin will enable the ",(0,r.kt)("inlineCode",{parentName:"p"},"rpc-wrapper")," to:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Get all available accounts within the application's wallet (",(0,r.kt)("inlineCode",{parentName:"li"},"Keyring"),")."),(0,r.kt)("li",{parentName:"ul"},"Sign arbitrary messages."),(0,r.kt)("li",{parentName:"ul"},"Sign transaction payloads.")),(0,r.kt)("p",null,"Polkadot.js will be used as the backing ",(0,r.kt)("inlineCode",{parentName:"p"},"Keyring"),", enabling developers to use the browser-based wallet provided by the Polkadot.js extension, or additionally use a ",(0,r.kt)("inlineCode",{parentName:"p"},"FileStore")," which can be used to load a wallet from the filesystem."),(0,r.kt)("p",null,"The plugin would typically be instantiated and configured when instantiating the Polywrap Client, like so:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'import { substrateSignerProviderPlugin } from "substrate-signer-provider-plugin-js";\nimport { PolywrapClient } from "@polywrap/client-js";\n\nconst plugin = substrateSignerProviderPlugin();\n\nconst client = new PolywrapClient({\n  plugins: [{\n    uri: "ens/substrate-signer-provider.chainsafe.eth",\n    plugin\n  }]\n})\n\n// Now we can use the above client to invoke the RPC wrapper,\n// which requires "ens/substrate-signer-provider..." as a dependency\nconst accounts = await client.invoke({\n  uri: "ens/substrate-rpc-wrapper.chainsafe.eth",\n  method: "getSignerProviderAccounts"\n});\n')),(0,r.kt)("p",null,"Additionally, users can configure the plugin with their own ",(0,r.kt)("inlineCode",{parentName:"p"},"SignerProvider")," instance, like so:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'import {\n  substrateSignerProviderPlugin,\n  KeyringSignerProvider\n} from "substrate-signer-provider-plugin-js";\nimport { Keyring } from "@polkadot/ui-keyring";\nimport { FileStore } from "@polkadot/ui-keyring/stores";\n\n// Load keystore from a directory\nconst filestore = new FileStore("/path/to/keystore/dir");\n\n// Create your own keyring\nconst keyring = new Keyring();\n\n// Load the keystore into the keyring\nkeyring.loadAll({ store: filestore });\n\nconst plugin = substrateSignerProviderPlugin({\n  provider: new KeyringSignerProvider(keyring)\n})\n')),(0,r.kt)("p",null,"To get an idea of what the ",(0,r.kt)("inlineCode",{parentName:"p"},"substrate-signer-provider")," schema might look like, please see the Near plugin's schema ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/polywrap/integrations/blob/main/near/Near%20Polywrapper%20Specification.md#near-javascript-plugin"},"here"),"."),(0,r.kt)("h3",{id:"3-rpc-wrapper-wrapper"},"3. ",(0,r.kt)("inlineCode",{parentName:"h3"},"rpc-wrapper")," Wrapper"),(0,r.kt)("p",null,"The Polywrapper is a set of WASM modules that contain the bulk of the logic needed to interact with substrate based chains. The Polywrapper calls the aforementioned JavaScript Plugin only when necessary to perform signing tasks."),(0,r.kt)("p",null,"A call to the Polywrapper might look something like this (TS/JS application):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'const result = await client.invoke({\n  uri: "ens/substrate-rpc-wrapper.chainsafe.eth",\n  method: "chainGetBlock",\n  args: {\n    url,\n    number: 0\n  }\n});\n\nif (!result.ok) {\n  handleError(result.error);\n  return;\n}\n\nconst blockOutput = result.value;\n')),(0,r.kt)("p",null,"Or by using the Polywrap toolchain's application codegen, you can have this be fully typed like so:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'import { Substrate_Module, Substrate_BlockOutput } from "./wrap";\n\nconst result = await Substrate_Module.chainGetBlock({\n  url,\n  number: 0\n}, client);\n\nif (!result.ok) throw Error("...");\n\nconst output: Substrate_BlockOutput = result.value;\n')),(0,r.kt)("p",null,"The rpc-wrapper exposes the following interface that maps closely to the default Substrate node RPC:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"getSignerProviderAccounts"),(0,r.kt)("li",{parentName:"ul"},"chainGetMetadata"),(0,r.kt)("li",{parentName:"ul"},"blockHash"),(0,r.kt)("li",{parentName:"ul"},"genesisHash"),(0,r.kt)("li",{parentName:"ul"},"chainGetBlock"),(0,r.kt)("li",{parentName:"ul"},"constant"),(0,r.kt)("li",{parentName:"ul"},"getRuntimeVersion"),(0,r.kt)("li",{parentName:"ul"},"getStorageValue"),(0,r.kt)("li",{parentName:"ul"},"getStorageMap"),(0,r.kt)("li",{parentName:"ul"},"getStorageMapPaged"),(0,r.kt)("li",{parentName:"ul"},"rpcMethods"),(0,r.kt)("li",{parentName:"ul"},"accountInfo"),(0,r.kt)("li",{parentName:"ul"},"getNonceForAccount"),(0,r.kt)("li",{parentName:"ul"},"palletCallIndex"),(0,r.kt)("li",{parentName:"ul"},"sign"),(0,r.kt)("li",{parentName:"ul"},"send"),(0,r.kt)("li",{parentName:"ul"},"signAndSend")),(0,r.kt)("p",null,"We will be heavily leverage existing Rust crates in the substrate developer ecosystem to implement the wrapper detailed above."),(0,r.kt)("h2",{id:"future-plans"},"Future Plans"),(0,r.kt)("p",null,"As stated above, we'd like to continue to build upon the work done within this proposal, by enabling multi-chain token balance aggregation (through the use of Polywrap interfaces)."),(0,r.kt)("p",null,"We hope that with this work complete, a team like Talisman will be able to continuing using the tooling we've developed to fully realize their vision of having a fully featured multi-para-chain wallet."),(0,r.kt)("p",null,"The work created by this grant will be stewarded by the ChainSafe & Polywrap DAO teams, as well as the Talisman team if they decide to build upon what we've created."),(0,r.kt)("h2",{id:"additional-information-"},"Additional Information \u2795"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"How did you hear about the Grants Program?")," personal recommendation"))}m.isMDXComponent=!0}}]);