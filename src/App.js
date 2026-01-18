  
  import React from 'react'
   import Card from './components/Card'
  function App() {
    return (
    <div className="parent">
      
        <Card
        logo="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
        company="Amazon"
        role="Senior UX UI Designer"
        price="120"
      />

      <Card
        logo="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg"
        company="Microsoft"
        role="Frontend Developer"
        price="100"
      />

      <Card
        logo="data:image/jpeg;base64,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"
        company="Google"
        role="React Developer"
        price="150"
      />

      <Card
        logo="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
        company="Apple"
        role="UI Designer"
        price="180"
      />
       <Card
        logo="https://thumbs.dreamstime.com/b/flipcart-logo-219165303.jpg"
        company="Flipcart"
        role="Senior UX UI Designer"
        price="320"
      />

      <Card
        logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp28KNbT_76szjMx8V-F90zVouUYg3BblgtA&s"
        company="Samsung"
        role="Frontend Developer"
        price="140"
      />

      <Card
        logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRud5eYe53S6Ob-1e_KUFZGs6e1UA_ULfFRnQ&s"
        company="Snapdeal"
        role="React Developer"
        price="170"
      />

      <Card
        logo= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc7W0Q9VBl3M1sy3m1JyNAskLGHmsLb9iyRA&s"
        company="Misho"
        role="UI Designer"
        price="280"
      />
 
    </div>
    )
  }
  
  export default App
  