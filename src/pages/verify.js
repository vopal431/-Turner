import React from "react";
import Layout from '@theme/Layout';
import Synaps from "@synaps-io/react-verify";
import BrowserOnly from '@docusaurus/BrowserOnly';
// import "./styles.css";

export default function verify() {
  return (
    <BrowserOnly>
      {() => {
        const query = new URLSearchParams(window.location.pathname);
        const session = query.get('s');
        const type = query.get('t');
        console.log(session);
        console.log(type);
      
        const Synaps = new SynapsClient(session, type);
        Synaps.init({
            type: "embed",
        });
        
        <Layout title="Hello" description="Hello React Page">
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '50vh',
              fontSize: '20px',
            }}>
            <p>
              Edit <code>pages/helloReact.js</code> and save to reload.
            </p>
          </div>
          <div className="App">
            <Synaps
              sessionId={ session }
              service={ type }
              lang={"en"}
              onReady={() => console.log("component ready")}
              onFinish={() => console.log("user finish process")}
              color={{
                primary: "212b39",
                secondary: "ffffff"
              }}
              withFinishButton={true}
            />
          </div>
        </Layout>

      }}
    </BrowserOnly>

    
  );
}
