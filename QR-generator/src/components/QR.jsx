import { useState } from "react";
import QRCode from "react-qr-code";


const QR = () => {

   const [qrCode, setQrCode] = useState("");
   const [input, setInput] = useState("");

   function generate() {
      setQrCode(input);
      setInput('');
   }

   return (
      <>
         <div>
            <h1>QR Code Generator</h1>
            <div style={{padding:"10px"}}>
               <input
                  onChange={(e) => setInput(e.target.value)}
                  type="text"
                  name="qr-code"
                  id="qr"
                  placeholder="Enter you value"
                  value={input}
               />
               <button
                  disabled={input && input.trim() !== "" ? false : true}
                  onClick={generate}
               >
                  Generate
               </button>
            </div>
            <div>
               <QRCode
                  id="qr-code-value"
                  value={qrCode}
                  
               ></QRCode>
            </div>
         </div>
      </>
   )
}


export default QR;