/**
 * Data file for main sections content. To add another section
 * pass another object into the array.
 */

export const mainSectionData = [
  {
    id: "products",
    key: "products",
    title: "New Brews",
    subtitle: "SMOOTH HOPERATOR",
    details: "AMBER ALE / ABV 5.2%",
    text: (
      <>
        A combination of specialty malts and rye create the rich and sweet
        flavours of rye whiskey with a vibrant reddish hue. Added spices and
        maraschino cherries complete the cocktail experience.
        <br />
        <br />
        Aged on oak soaked in Rye Whisky from our friends at A Whiskey Place to
        add beautiful notes of oak and vanilla.
      </>
    ),
    img: require("../../images/placeholder.svg").default,
    imgAlt: "New Amber Ale",
    imgFirst: false,
    darkSection: false,
    buttonText: "View our brews",
    buttonTarget: "/products",
  },
  {
    id: "about",
    key: "about",
    title: "About Us",
    subtitle: "GENTLEMEN",
    details: "A SHORT VIEW BACK TO THE PAST",
    text: (
      <>
        Thirty years ago, Niki Lauda told us 'take a monkey, place him into the
        cockpit and he is able to drive the car.' Thirty years later, Sebastian
        told us 'I had to start my car like a computer, it's very complicated.'
        And Nico Rosberg said that during the race - I don't remember what race
        - he pressed the wrong button on the wheel.
        <br />
        <br /> Question for you both: is Formula One driving today too
        complicated with twenty and more buttons on the wheel, are you too much
        under effort, under pressure? What are your wishes for the future
        concerning the technical programme during the race? Less buttons, more?
        Or less and more communication with your engineers?
      </>
    ),
    img: require("../../images/placeholder.svg").default,
    imgAlt: "About Us",
    imgFirst: true,
    darkSection: true,
    buttonText: "Find out more",
    buttonTarget: "/",
  },
];
