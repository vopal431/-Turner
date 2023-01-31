"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[8947],{47358:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var l=a(87462),n=(a(67294),a(3905));a(30828);const i={},r="zk plonk",o={unversionedId:"applications/zk-plonk",id:"applications/zk-plonk",title:"zk plonk",description:"Team Name:* Plasm Network (Shinsaku Ashizawa, Sota Watanabe)",source:"@site/docs/applications/zk-plonk.md",sourceDirName:"applications",slug:"/applications/zk-plonk",permalink:"/Grants-Program/applications/zk-plonk",draft:!1,tags:[],version:"current",frontMatter:{}},s={},p=[{value:"Project Overview \ud83d\udcc4",id:"project-overview-",level:2},{value:"Overview",id:"overview",level:3},{value:"Project Details",id:"project-details",level:3},{value:"Ecosystem Fit",id:"ecosystem-fit",level:3},{value:"Team \ud83d\udc65",id:"team-",level:2},{value:"Team members",id:"team-members",level:3},{value:"Contact",id:"contact",level:3},{value:"Legal Structure",id:"legal-structure",level:3},{value:"Team&#39;s experience",id:"teams-experience",level:3},{value:"Team Code Repos",id:"team-code-repos",level:3},{value:"Team LinkedIn Profiles",id:"team-linkedin-profiles",level:3},{value:"Development Roadmap \ud83d\udd29",id:"development-roadmap-",level:2},{value:"Summary",id:"summary",level:3},{value:"Overview",id:"overview-1",level:3},{value:"Milestone 1 Example \u2014 Implement Substrate Modules",id:"milestone-1-example--implement-substrate-modules",level:3},{value:"Future Plans",id:"future-plans",level:2},{value:"Additional Information \u2795",id:"additional-information-",level:2}],m={toc:p};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,l.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"zk-plonk"},"zk plonk"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Team Name:")," Plasm Network (Shinsaku Ashizawa, Sota Watanabe)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Payment Address:")," 0xb82EdE43D03fD23dcdb2d066720b3E77F3bedf6d")),(0,n.kt)("h2",{id:"project-overview-"},"Project Overview \ud83d\udcc4"),(0,n.kt)("p",null,"We have been working on Zk projects and scalability solutions and now we would like to implement Zk plonk pallet."),(0,n.kt)("p",null,"The plonk is called ",(0,n.kt)("inlineCode",{parentName:"p"},"universal zkSNARK")," because of two reasons. The verification times are constant and original reference string can be used to build proofs with any type of circuit. These features bring significant benefits to both users and developers. For example, the verification time is the same so users don't have to wait so long even when they prove complicated proof, and original reference string can reuse so developers don't have to do trusted setup for each circuit. The plonk will be a core technology in terms of scaling and privacy so we should support."),(0,n.kt)("h3",{id:"overview"},"Overview"),(0,n.kt)("p",null,"Through this grant, we are going to make a plonk pallet in order for the developer to implement plonk on substrate easily. We are working on scalability solutions but currently, the substrate doesn't support zkSNARK pallet so we think it's a issue to fix. As aforementioned, zkSNARK will be a core technology in blockchain area and especially plonk is cutting edge technology so we are excited to implement this as pallet."),(0,n.kt)("h3",{id:"project-details"},"Project Details"),(0,n.kt)("p",null,"We'd like to implement the plonk library as a pallet in order for developers to customize circuits and use the plonk protocol."),(0,n.kt)("p",null,"The following diagram is the libraries we are going to implement."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Polynomial commitment"),(0,n.kt)("li",{parentName:"ul"},"Circuit builder"),(0,n.kt)("li",{parentName:"ul"},"Generate proof and verify keys"),(0,n.kt)("li",{parentName:"ul"},"Verify proof")),(0,n.kt)("h3",{id:"ecosystem-fit"},"Ecosystem Fit"),(0,n.kt)("p",null,"According to Web3 Foundation, there are at least 2 different teams that work on ZK technologies."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/zeropoolnetwork"},"Zeropool")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/gbctech"},"Glacier"))),(0,n.kt)("p",null,"Glacier is building a Distaff VM for zk-STARK proof generation and verification that are used to make  private smart contracts and private credential verifications. The difference between us is that we are making a zkSNARK pallet and they are making a VM which supports STARKs. In terms of Zeropool, they are making private transactions contract pallet using bellman groth16 protocal and we are making zkSNARK libray using plonk."),(0,n.kt)("p",null,"We believe zkSNARK with plonk will be core technology of next blockchain area. That allows Substrate to protect the privacy and scale on the huge number of transactions without decreasing the security level."),(0,n.kt)("h2",{id:"team-"},"Team \ud83d\udc65"),(0,n.kt)("h3",{id:"team-members"},"Team members"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Shinsaku Ashizawa"),(0,n.kt)("li",{parentName:"ul"},"Alexsandr Krrupenkin"),(0,n.kt)("li",{parentName:"ul"},"Sota Watanabe")),(0,n.kt)("h3",{id:"contact"},"Contact"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Contact Name:")," Shinsaku Ashizawa"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Contact Email:")," ",(0,n.kt)("a",{parentName:"li",href:"mailto:shinsaku.ashizawa@artree.co.jp"},"shinsaku.ashizawa@artree.co.jp")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Website:")," ",(0,n.kt)("a",{parentName:"li",href:"https://artree.co.jp/"},"Artree"))),(0,n.kt)("h3",{id:"legal-structure"},"Legal Structure"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Incorporated in Singapore"),(0,n.kt)("li",{parentName:"ul"},"Address: 63 Chulia Street Singapore")),(0,n.kt)("h3",{id:"teams-experience"},"Team's experience"),(0,n.kt)("p",null,"We have been making Plasm Network, a scalable multi-virtual machines smart contract platform on Polkadot supporting cutting edge layer2 solutions. Curretly, another team at Stake techologies is working on the Optimistic Virtual Machine, an unification for all layer2 solutions and a subset of Optimistic Rollup. We have already delivered 4 milestones out of 6. In addition to that, we have already delivered several grants such as Plasma, ECDSA, and ink! playground."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/stakedtechnologies/Plasm"},"Plasma")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/polkadot-js/common/tree/master/packages/util-crypto/src/secp256k1"},"ECDSA")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/staketechnologies/ink-playground"},"ink! playground"))),(0,n.kt)("p",null,"We are also participating in Substrate Builders Program and Substrate Delivery Partners and we have done some PoCs with clients."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://stake.co.jp/news/20201020english/"},"\u201cPlasm Network\u201d is Adopted as a Blockchain Platform for Payment System by Satsudra HD and DataGateway")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://stake.co.jp/news/bitpoint_en/"},"Bitpoint and Stake Technologies Collaboration Announcement."),"\niously, please list the name of the project and legal entity here.")),(0,n.kt)("h3",{id:"team-code-repos"},"Team Code Repos"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/PlasmNetwork"},"https://github.com/PlasmNetwork"))),(0,n.kt)("h3",{id:"team-linkedin-profiles"},"Team LinkedIn Profiles"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/sota-watanabe-b962b3110/"},"https://www.linkedin.com/in/sota-watanabe-b962b3110/"))),(0,n.kt)("h2",{id:"development-roadmap-"},"Development Roadmap \ud83d\udd29"),(0,n.kt)("h3",{id:"summary"},"Summary"),(0,n.kt)("p",null,"We plan to provide a ",(0,n.kt)("inlineCode",{parentName:"p"},"plonk")," pallet that allows Substrate-based blockchain to execute plonk-based zkSNARK."),(0,n.kt)("h3",{id:"overview-1"},"Overview"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Total Estimated Duration:")," 3 months"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Full-Time Equivalent (FTE):"),"  1 FTE"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Total Costs:")," 30000 DAI")),(0,n.kt)("h3",{id:"milestone-1-example--implement-substrate-modules"},"Milestone 1 Example \u2014 Implement Substrate Modules"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Estimated Duration:")," 3 months"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"FTE:"),"  1"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Costs:")," 30000 DAI")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"right"},"Number"),(0,n.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,n.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"0a."),(0,n.kt)("td",{parentName:"tr",align:null},"License"),(0,n.kt)("td",{parentName:"tr",align:null},"Apache 2.0 / MIT / Unlicense")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"0b."),(0,n.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,n.kt)("td",{parentName:"tr",align:null},"We will provide both inline documentation of the code and a basic tutorial that explains how a developer builds a circuit and a user prove their computation through the circuit.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"0c."),(0,n.kt)("td",{parentName:"tr",align:null},"Testing Guide"),(0,n.kt)("td",{parentName:"tr",align:null},"Core functions will be fully covered by unit tests and audit to ensure functionality and robustness. In the guide, we will describe how to run these tests.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"0d."),(0,n.kt)("td",{parentName:"tr",align:null},"Article/Tutorial"),(0,n.kt)("td",{parentName:"tr",align:null},"We will publish an article/tutorial/workshop that explains")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"1."),(0,n.kt)("td",{parentName:"tr",align:null},"make plonk compatible"),(0,n.kt)("td",{parentName:"tr",align:null},"The dusk-network plonk is compatible with ",(0,n.kt)("inlineCode",{parentName:"td"},"no-std")," so we are going to modify attributes according to ",(0,n.kt)("a",{parentName:"td",href:"https://github.com/paritytech/parity-scale-codec"},"parity-codec")," and ",(0,n.kt)("inlineCode",{parentName:"td"},"Rng")," to be compatible with\u3000Substrate environment. This step allows this pallet to work on resource-constrained execution environments like Substrate runtime, attributes should be modified in accordance with SCALE codec and some versions of Rng can\u2019t be compiled to wasm so we need to research and make it stable as necessary.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"2."),(0,n.kt)("td",{parentName:"tr",align:null},"implement zkSNARK plonk pallet"),(0,n.kt)("td",{parentName:"tr",align:null},"We will create a set of plonk-based zkSNARK libraries that allow a developer to build their own circuit and a user to prove their computation validity. Verifying proofs are done by on-chain. Creating the proofs are done by off-chain.")))),(0,n.kt)("p",null,"This zkSNARK plonk is based on ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/dusk-network/plonk"},"dusk-network plonk")," library.\nThis zkSNARK plonk pallet provides us following function."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Building circuits"),(0,n.kt)("li",{parentName:"ul"},"Creating proofs"),(0,n.kt)("li",{parentName:"ul"},"Verifying proofs")),(0,n.kt)("h2",{id:"future-plans"},"Future Plans"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Zk Rollup implementation"),(0,n.kt)("li",{parentName:"ul"},"private transfer protocol")),(0,n.kt)("h2",{id:"additional-information-"},"Additional Information \u2795"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.plasmnet.io/"},"web site"))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.plasmnet.io/"},"document")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://twitter.com/Plasm_Network"},"Twitter")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://medium.com/stake-technologies"},"Medium")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/PlasmNetwork"},"GitHub"))))}u.isMDXComponent=!0}}]);