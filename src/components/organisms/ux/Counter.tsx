import React from 'react'


const CounterData = {
  Counter: [
    {
      image: "https://propozycje.owocni.pl/ux/Projekt-UX-korzysci.98e41101.png",
      description: "Intuicyjny, przemyślany, projekt UX usprawnia konwersję nawet 400%."
    },
    {
      image: "https://propozycje.owocni.pl/ux/Wyglad-strony-internetowej.c02f8711.png",
      description: "Intuicyjny, przemyślany, projekt UX usprawnia konwersję nawet 400%."
    },
    {
      image: "https://propozycje.owocni.pl/ux/Zwrot-z-inwestycji.189224ae.png",
      description: "Intuicyjny, przemyślany, projekt UX usprawnia konwersję nawet 400%."
    },
    {
      image: "https://propozycje.owocni.pl/ux/Opuszanie-strony-www.54cfdaa4.png",
      description: "Intuicyjny, przemyślany, projekt UX usprawnia konwersję nawet 400%."
    },
  ]
}

const Counter = () => {
  return (
    <>
    <section>
    <div id="numbers">
        {CounterData.Counter.map((item, index) => (
          <div key={index}>
            <img src={item.image} alt="" />
            <p>{item.description}</p>
          </div>
        ))}
      </div>
          
      </section>
    </>
  )
}

export default Counter