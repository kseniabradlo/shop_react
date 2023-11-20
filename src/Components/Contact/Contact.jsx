import './Contact.css';
function Contact(){
    return(
        <div className="contact">
            <form action="ksenia.bradlo@gmail.com" method="post" target="_blank">
                <div className="formdiv">
                    <p>Contact us</p>
                    <input type="text" name="username" required placeholder="Name"/>
                    <input type="text" name="email" required placeholder="E-mail"/>
                    <textarea name="message" placeholder="enter your text..."></textarea>
                    <input type="submit" value="Send"/>
                    <input type="reset" value="Reset"/>
                </div>

            </form>
        </div>
    )
}

export default Contact;