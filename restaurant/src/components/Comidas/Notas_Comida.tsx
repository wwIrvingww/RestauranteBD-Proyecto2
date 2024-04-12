import React from 'react';
import './Notas_Comida.css'; // Asegúrate de tener un archivo CSS para estilos

function Notas_Comida() {
  return ( 
    <div className="main">
      <ul className="cards">
        <li className="cards_item">
          <div className="card">
            <div className="card_image"><img src="https://assets.codepen.io/652/photo-1468777675496-5782faaea55b.jpeg" alt="mixed vegetable salad in a mason jar. "/></div>
            <div className="card_content">
              <h2 className="card_title">Orden#48</h2>
              <div className="card_text">
                <p>Ensalada</p>
              </div>
            </div>
          </div>
        </li>
  
        <li className="cards_item">
          <div className="card">
            <div className="card_image"><img src="https://assets.codepen.io/652/photo-1520174691701-bc555a3404ca.jpeg" alt="a Reuben sandwich on wax paper. "/></div>
            <div className="card_content">
              <h2 className="card_title">Ultimate Reuben • $18</h2>
              <div className="card_text">
                <p>All great meals take time, but this one takes it to the next level! More than 650 hours of fermenting, brining, aging, and curing goes into each and every one of our legendary Reuben sandwiches.
                </p>
                <p>Every element of this extraordinary sandwich is handcrafted in our kitchens, from the rye bread baked from our secret recipe to the cave-aged Swiss cheese, right down to the pickle. The only thing we didn't make on the premises is the toothpick ( but we're looking into how to do that). </p>
                <p>This unforgettable sandwich has all of the classic Reuben elements: corned beef, rye bread, creamy Russian dressing, sauerkraut, plus a sweet gherkin pickle. No substitions please! </p>
                  <p>Add a side of french fries or sweet potato fries for $2 more, or our housemade pub chips for $1.</p>
              </div>
            </div>
          </div>
        </li>
        <li className="cards_item">
          <div className="card">
            <div className="card_image"><img src="https://assets.codepen.io/652/photo-1544510808-91bcbee1df55.jpeg" alt="A side view of a plate of figs and berries. "/></div>
            <div className="card_content">
              <h2 className="card_title">Fig & Berry Plate • $16</h2>
              <div className="card_text">
                <p><span className="note">Seasonal.</span></p>
                <p>A succulent sextet of fresh figs join with a selection of bodacious seasonal berries in this refreshing, shareable dessert.</p>
                <p>Choose your drizzle: cherry-balsamic vinegar, local honey, or housemade chocolate sauce. </p>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Notas_Comida;
