import React from 'react';
const UserContact=()=>{
    function openForm() {
        document.getElementById("myForm").style.display = "block";
      }
      
      function closeForm() {
        document.getElementById("myForm").style.display = "none";
      }
return(
    <>
    <div>
    <h2>Any Query???????</h2>
    <h2> 😻Please Press The 👉Button 👈 for Contact Us or Chat With Us. 😎 </h2>
<button className="open-button" onClick={openForm}>Chat</button>
</div>
<div class="chat-popup" id="myForm">
  <form className="form-container">
    <h1>Chat</h1>

    <label for="msg"><b>Message</b></label>
    <textarea placeholder="Type message.." name="msg" required></textarea>

    <button type="submit" className="btn">Send</button>
    <button type="button" className="btn cancel" onClick={closeForm}>Close</button>
  </form>
  </div>
  
    </>
)
}
export default UserContact;