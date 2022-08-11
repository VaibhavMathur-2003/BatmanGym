import "../Stripe/Stripe.css"
const ProductDisplay = (props) => (
    <div className="body">
  <section className="section">
    <div className="product">
      <img className="img"
        src={props.img}
        alt="The cover of Stubborn Attachments"
      />
      <div className="description">
      <h3 className="head">{props.name}</h3>
      <h5 className="head2">{props.price}</h5>
      
      </div>
     
    </div>
    <form action="/create-checkout-session" method="POST">
      <button  className="button">
        Checkout
      </button>
    </form>
  </section>
  </div>

);


export default ProductDisplay

