import "./ContactForm.css";

function ContactForm() {
  return (
    <div className="form-container">
      <h1>Envoyez-nous un message !</h1>
      <form>
        <input type="text" placeholder="Nom" />
        <input type="text" placeholder="Email" />
        <input type="text" placeholder="Objet" />
        <textarea placeholder="" rows="4"></textarea>
        <button>Envoyer</button>
      </form>
    </div>
  );
}

export default ContactForm;
